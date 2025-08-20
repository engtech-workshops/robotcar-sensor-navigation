<template>
  <svg width="100%" viewBox="0 60 900 620">
    <rect width="100%" height="100%" fill="white"/>
    <!-- <text x="450" y="40" font-family="Arial, Helvetica, sans-serif" font-size="20" text-anchor="middle">Sensor-Based Turning Flow</text> -->
    <defs>
      <marker id="arrow3" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L6,3 z" fill="#333"/>
      </marker>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0.5" dy="0.5" stdDeviation="1" flood-color="#aaa"/>
      </filter>
    </defs>
    <!-- Start -->
    <rect x="370" y="70" width="160" height="40" rx="8" fill="#eef7ff" stroke="#333" filter="url(#shadow)"/>
    <text x="450" y="95" font-family="Arial" font-size="14" text-anchor="middle">Start</text>
    <!-- Read distance -->
    <rect x="300" y="140" width="300" height="60" rx="12" fill="#fff6e8" stroke="#333" filter="url(#shadow)"/>
    <text x="450" y="175" font-family="Arial" font-size="14" text-anchor="middle">Read distance d from sensor</text>
    <!-- Decision -->
    <polygon points="450,230 530,290 450,350 370,290" fill="#f0fff0" stroke="#333" filter="url(#shadow)"/>
    <text x="450" y="292" font-family="Arial" font-size="14" text-anchor="middle">d &gt;= threshold?</text>
    <!-- Forward block -->
    <rect x="330" y="400" width="240" height="60" rx="12" fill="#e8f7ff" stroke="#333" filter="url(#shadow)"/>
    <text x="450" y="435" font-family="Arial" font-size="14" text-anchor="middle">Move forward at speed v</text>
    <!-- Turn block -->
    <rect x="600" y="255" width="240" height="60" rx="12" fill="#f7e8ff" stroke="#333" filter="url(#shadow)"/>
    <text x="720" y="290" font-family="Arial" font-size="14" text-anchor="middle">Stop, turn for t seconds</text>
    <!-- Decision: Yes -->
    <text x="455" y="375" font-family="Arial" font-size="14" text-anchor="start">Yes</text>
    <!-- Decision: No -->
    <text x="565" y="285" font-family="Arial" font-size="14" text-anchor="middle">No</text>
    <!-- Loops -->
    <line x1="450" y1="110" x2="450" y2="140" stroke="#333" stroke-width="2" marker-end="url(#arrow3)"/>
    
    <line x1="450" y1="200" x2="450" y2="230" stroke="#333" stroke-width="2" marker-end="url(#arrow3)"/>
    
    <line x1="450" y1="350" x2="450" y2="400" stroke="#333" stroke-width="2" marker-end="url(#arrow3)"/>
    <line x1="330" y1="430" x2="250" y2="430" stroke="#333" stroke-width="2"/>
    <line x1="250" y1="430" x2="250" y2="170" stroke="#333" stroke-width="2"/>
    <line x1="250" y1="170" x2="300" y2="170" stroke="#333" stroke-width="2" marker-end="url(#arrow3)"/>
    
    <line x1="530" y1="290" x2="600" y2="290" stroke="#333" stroke-width="2" marker-end="url(#arrow3)"/>
    <line x1="720" y1="255" x2="720" y2="170" stroke="#333" stroke-width="2"/>
    <line x1="720" y1="170" x2="600" y2="170" stroke="#333" stroke-width="2" marker-end="url(#arrow3)"/>
    <!-- <line x1="680" y1="350" x2="530" y2="290" stroke="#333" stroke-width="2" marker-end="url(#arrow3)"/> -->
  </svg>
</template>