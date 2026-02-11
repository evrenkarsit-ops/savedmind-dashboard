const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// Fix encoding issues
code = code.replace(/â„¢/g, '™');
code = code.replace(/â€™/g, "'");
code = code.replace(/â€"/g, '—');
code = code.replace(/â€œ/g, '"');
code = code.replace(/â€/g, '"');
code = code.replace(/Ä±/g, 'i');

// Fix emoji placeholders
code = code.replace(/ğŸ"š/g, '📚');
code = code.replace(/ğŸ/g, '🔥');
code = code.replace(/ğŸ¯/g, '🎯');
code = code.replace(/ğŸ"®/g, '🏆');
code = code.replace(/ğŸŒˆ/g, '🌈');
code = code.replace(/ğŸ'/g, '💎');
code = code.replace(/ğŸ§ª/g, '⚡');
code = code.replace(/ğŸ"/g, '🔍');
code = code.replace(/â¬‡ï¸/g, '⬇️');
code = code.replace(/â–¶ï¸/g, '▶️');

// Remove SF Pro icon characters (won't render)
code = code.replace(/ô€[^\s<"]*/g, '');

fs.writeFileSync('app/page.tsx', code);
console.log('Encoding fixed!');
