class LLMService {
  constructor(apiUrl, apiKey, maxRetries = 3, timeout = 10000) {
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
    this.maxRetries = maxRetries;
    this.timeout = timeout; // in milliseconds
    this.conversationHistory = []; // Store conversation history
  }

  async generateRecommendations(prompt) {
    const portfolioInfo = this._getPortfolioInfo();

    // Build the prompt for the user query
    const fullPrompt = `User's Query: ${prompt}`;

    // Construct the payload with the updated conversation history
    const payload = this._constructPayload(fullPrompt, portfolioInfo);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.apiKey}`,
    };

    for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);

        const response = await fetch(this.apiUrl, {
          method: "POST",
          headers,
          body: JSON.stringify(payload),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          // Update conversation history
          this._updateConversationHistory(prompt, data);
          return data;
        } else {
          console.error(
            `LLM API failed with status code ${response.status}: ${response.statusText}`
          );
          return { error: `LLM API call failed: ${response.statusText}` };
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.warn(
            `Request timed out (Attempt ${attempt}/${this.maxRetries}). Retrying...`
          );
        } else {
          console.error(`Request failed: ${error.message}`);
          return { error: `Request failed: ${error.message}` };
        }
      }
    }

    return { error: "Max retries reached. Could not get a response from the LLM API." };
  }

  _constructPayload(prompt, portfolioInfo) {
    // Include a system role message to ensure consistent response as Portfolio Assistant
    const systemRoleMessage = {
      role: "system",
      content: `You are Chamith's Portfolio Assistant. Your role is to provide detailed information about Chamith's professional background, skills, projects, and achievements to anyone who visits Chamith's portfolio. Always respond as Chamith's Portfolio Assistant. Use emojis where appropriate to make responses engaging but ensure they match the context and tone (not always). Additionally, tailor the message size based on the complexity of the user's question. Use the following information as context: ${portfolioInfo}`
      ,
    };

    const history = this.conversationHistory.map(({ role, content }) => ({
      role,
      content,
    }));

    return {
      model: "llama-3.3-70b-versatile",
      messages: [
        systemRoleMessage, // Ensure the role is always set at the start
        ...history, // Include the conversation history
        {
          role: "user",
          content: String(prompt), // Add the current user message
        },
      ],
    };
  }

  _getPortfolioInfo() {
    return `
      I am an undergraduate student in the Faculty of Computing at the Sri Lanka Institute of Information Technology (SLIIT). I am interested in Web Development and Mobile App Development areas. I prefer to meet new teams and collaborate to develop new projects. I am seeking exciting opportunities to apply and enhance my skills within these fields.
  
      Work Experience:
      - Trainee Software Engineer (CodeGen International Pvt Ltd, June 2024 - Dec 2024)
        - Technologies Used: Java, Spring Boot, Node, Angular, Maven, JFrog
        - Worked on the Lia P2P project, contributing to backend and frontend development.
        - Followed company standards in an Agile environment and participated in CI/CD with Git Pipelines.
  
      Technical Skills:
      - Programming Languages: Java, JavaScript, Node.js, ReactJs, MERN Stack, C++, C, SQL, Python, Kotlin
      - Frameworks/Technologies: Spring Boot, Angular, Docker, Oracle SQL
  
      Projects:
      - TravellPlus (Enterprise-level Hotel Management Project)
        - This project is a Hotel Management System developed using Angular and Spring Boot. It offers functionalities to manage hotels, bookings, supplements, discounts, and more. The system also includes features such as current location tracking, email services, PDF generation, and efficient data handling using pagination.
        - Technologies: Angular, Spring Boot
        - GitHub: [TravellPlus Repo](https://github.com/chamithZ/TravellPlus--Hotel-Management-System.git)
  
      - BuildFlow (Construction and Procurement Management System)
        - Technologies: React, React Native, Spring Boot, Chakra UI, MySQL
        - GitHub: [BuildFlow Repo](https://github.com/chamithZ/BuildFlow.git)
  
      - SkillSpan (Bridge between Academic Learning and Industry Demands in Software Engineering)
        - A revolutionary solution connecting academia and industry in Software Engineering. Empowers students with industry-standard coding practices, real-world courses, and internship opportunities. Features real-time code execution, AI-powered code generation, and skill-enhancing quizzes. A transformative bridge fostering collaboration and innovation.
        - Technologies: MERN Stack, Monaco API, OpenAI API, Tailwind CSS, VS Code
        - GitHub: [SkillSpan Repo](https://github.com/chamithZ/SkillSpan_V3.git)
        - Research Paper: [SkillSpan Paper](http://propulsiontechjournal.com)
  
      - Travely (Hotel & Tourism Management System)
        - An innovative travel and tourism management system simplifying travel planning with a one-stop platform. Users can book hotels, rental cars, restaurants, events, tour packages, and customized tours with ease.
        - Technologies: MERN Stack, Tailwind CSS, VS Code
        - GitHub: [Travely Repo](https://github.com/chamithZ/Travely)
  
      Certificates:
      - Front-End Web Development - University of Moratuwa
      - Software Design and Architecture Specialization - University of Alberta
      - Concurrent Programming in Java - Rice University
      - Frontend Development using Angular - Board Infinity
      - Web Design for Beginners - University of Moratuwa

      Contact Details:
    - Email: chamith227@gmail.com
    - Mobile: +94702784567
    `;
  }
  

  _updateConversationHistory(userMessage, assistantResponse) {
    this.conversationHistory.push(
      { role: "user", content: userMessage },
      { role: "assistant", content: assistantResponse?.content || "Error in response" }
    );

    // Optional: Limit history size to avoid excessive payload
    if (this.conversationHistory.length > 20) {
      this.conversationHistory.splice(0, this.conversationHistory.length - 20);
    }
  }
}

export default LLMService;
