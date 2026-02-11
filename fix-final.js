const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// Fix remaining garbled emoji characters
code = code.replace(/ğŸ§ª/g, '🧪');
code = code.replace(/§ª/g, '');
code = code.replace(/ğŸ/g, '🔥');
code = code.replace(/â¬‡/g, '⬇️');
code = code.replace(/â–¶/g, '▶️');
code = code.replace(/ï¸/g, '');

// Fix any remaining broken characters
code = code.replace(/[ğĞ][ŸŒ§"'][^a-zA-Z\s<>]*/g, '');

// Clean up empty paragraphs with just whitespace
code = code.replace(/<p[^>]*>\s*<\/p>/g, '');

fs.writeFileSync('app/page.tsx', code);
console.log('Final fixes applied!');
