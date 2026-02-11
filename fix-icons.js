const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// Replace SF Pro icon divs with emoji equivalents
// Home icon
code = code.replace(/<p className="[^"]*font-\['SF_Pro:Bold'[^"]*"[^>]*>\s*\n?\s*<\/p>/g, '');

// Replace remaining garbled characters
code = code.replace(/collectÄ±ons/gi, 'COLLECTIONS');
code = code.replace(/SavedMindâ„¢/g, 'SavedMind™');
code = code.replace(/youâ€™re/g, "you're");
code = code.replace(/todayâ€"/g, "today—");

// Clean up empty icon containers - just remove the garbled text
code = code.replace(/>(\s*)[ô€][^<]*</g, '><');

fs.writeFileSync('app/page.tsx', code);
console.log('Icons fixed!');
