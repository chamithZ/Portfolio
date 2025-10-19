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
          // Format the response to add line breaks for ordered lists
          if (data.content) {
            data.content = this._formatResponse(data.content);
          }
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
      I am a Software Engineering professional with a BSc (Hons) in Information Technology from SLIIT. Currently working as an Associate Software Engineer at Tecsota LLC, I specialize in full-stack web development and mobile app development. I have experience with modern technologies including Next.js, React Native, Spring Boot, and Angular. I enjoy collaborating with teams to build innovative solutions and am always open to new opportunities and exciting projects.
  
      Work Experience:
      - Associate Software Engineer (Tecsota LLC, February 2025 - Present)
        - Develop full-stack web solutions using Next.js, Node.js, and GraphQL
        - Build cross-platform mobile applications with React Native
        - Configure CI/CD pipelines using GitHub Actions to streamline deployments
        - Collaborate with cross-functional teams in Agile sprints to deliver scalable projects
        - Technologies: Next.js, Node.js, GraphQL, React Native, GitHub Actions, Agile

      - Trainee Software Engineer (CodeGen International Pvt Ltd, June 2024 - Dec 2024)
        - Contributed to the Lia P2P project using Spring Boot, Angular, Node.js, and SQL
        - Built backend and frontend features following company coding standards
        - Participated in CI/CD pipelines with Git and JFrog, improving deployment efficiency
        - Technologies: Spring Boot, Angular, Node.js, SQL, Git, JFrog

      - Industrial Pre-Training (CodeGen-SLIIT QBits, February 2024 - April 2024)
        - Completed intensive training program covering enterprise development practices
        - Gained hands-on experience with industry-standard tools and methodologies
        - Prepared for professional software engineering roles
  
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
      - Spring Boot - Professional Certification
      - Angular - Professional Certification
      - Concurrent Programming in Java - Rice University
      - Frontend Development using Angular - Board Infinity
      - Spring Framework– Ecosystem & Core, Spring Data Repositories - LearnQuest
      - Web Design for Beginners - University of Moratuwa

      Contact Details:
    - Email: chamith227@gmail.com
    - Mobile: +94786714662
    `;
  }
  

  _formatResponse(content) {
    let formatted = content;
    
    // Handle italic formatting first (*text* -> *text*)
    formatted = formatted.replace(/\*([^*]+)\*/g, '*$1*');
    
    // Add line breaks before numbered list items
    // This regex looks for a number followed by a period and optional space, then text
    formatted = formatted.replace(/(\d+\.\s*[A-Za-z])/g, '\n\n$1');
    
    // Also handle cases where there's text before the number (not already on a new line)
    formatted = formatted.replace(/([^\\n])(\d+\.\s*[A-Za-z])/g, '$1\n\n$2');
    
    // Clean up any triple or more line breaks
    formatted = formatted.replace(/\n\n\n+/g, '\n\n');
    
    // Clean up any double spaces that might have been created
    formatted = formatted.replace(/\s{3,}/g, ' ');
    
    return formatted;
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
