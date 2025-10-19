// Standardized Color Palette for Portfolio
export const COLORS = {
  // Primary Colors
  primary: {
    blue: '#3b82f6',        // blue-500
    blueLight: '#60a5fa',   // blue-400
    blueDark: '#1d4ed8',    // blue-700
    blueAccent: '#93c5fd',  // blue-300
  },
  
  // Secondary Colors
  secondary: {
    purple: '#a855f7',      // purple-500
    purpleLight: '#c084fc', // purple-400
    purpleDark: '#7c3aed',  // purple-600
  },
  
  // Accent Colors
  accent: {
    teal: '#14b8a6',        // teal-500
    tealLight: '#5eead4',   // teal-300
    cyan: '#06b6d4',        // cyan-500
  },
  
  // Background Colors
  background: {
    dark: '#0a192f',        // Main dark background
    card: '#112240',        // Card background
    glass: 'rgba(255, 255, 255, 0.1)', // Glass effect
    glassHover: 'rgba(255, 255, 255, 0.15)', // Glass hover
  },
  
  // Text Colors
  text: {
    primary: '#ccd6f6',     // Main text
    secondary: '#8892b0',   // Secondary text
    muted: '#64748b',       // Muted text
    white: '#ffffff',       // White text
  },
  
  // Border Colors
  border: {
    primary: 'rgba(59, 130, 246, 0.3)',    // blue-500/30
    secondary: 'rgba(255, 255, 255, 0.2)', // white/20
    accent: 'rgba(168, 85, 247, 0.3)',     // purple-500/30
    muted: 'rgba(100, 116, 139, 0.3)',     // slate-500/30
  },
  
  // Status Colors
  status: {
    success: '#10b981',     // emerald-500
    warning: '#f59e0b',     // amber-500
    error: '#ef4444',       // red-500
    info: '#3b82f6',        // blue-500
  },
  
  // Shadow Colors
  shadow: {
    primary: 'rgba(59, 130, 246, 0.25)',   // blue-500/25
    secondary: 'rgba(168, 85, 247, 0.25)', // purple-500/25
    dark: 'rgba(0, 0, 0, 0.3)',            // black/30
  }
};

// Tailwind CSS Classes for consistent usage
export const COLOR_CLASSES = {
  // Backgrounds
  bgPrimary: 'bg-[#0a192f]',
  bgCard: 'bg-[#112240]',
  bgGlass: 'bg-white/10',
  bgGlassHover: 'bg-white/15',
  
  // Text
  textPrimary: 'text-[#ccd6f6]',
  textSecondary: 'text-[#8892b0]',
  textMuted: 'text-slate-500',
  textWhite: 'text-white',
  
  // Borders
  borderPrimary: 'border-blue-500/30',
  borderSecondary: 'border-white/20',
  borderAccent: 'border-purple-500/30',
  
  // Buttons
  btnPrimary: 'bg-gradient-to-r from-blue-500 to-purple-600',
  btnSecondary: 'bg-blue-500/20 border border-blue-500/30',
  btnAccent: 'bg-purple-500/20 border border-purple-500/30',
  
  // Headers
  headerBorder: 'border-b-4 border-blue-600',
  
  // Glass Effects
  glassCard: 'backdrop-blur-md bg-white/10 border border-white/20',
  glassButton: 'backdrop-blur-md bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30',
};
