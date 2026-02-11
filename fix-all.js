const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// Fix font class names to use Tailwind font variables
code = code.replace(/font-\['Geist_Mono:Bold',sans-serif\]/g, 'font-mono font-bold');
code = code.replace(/font-\['Geist_Mono:SemiBold',sans-serif\]/g, 'font-mono font-semibold');
code = code.replace(/font-\['Geist_Mono:Medium',sans-serif\]/g, 'font-mono font-medium');
code = code.replace(/font-\['Geist_Mono:Bold','Noto_Sans:Bold',sans-serif\]/g, 'font-mono font-bold');
code = code.replace(/font-\['Inter:Semi_Bold',sans-serif\]/g, 'font-sans font-semibold');
code = code.replace(/font-\['Inter:Medium',sans-serif\]/g, 'font-sans font-medium');

// Fix remaining encoding
code = code.replace(/â„¢/g, '™');
code = code.replace(/â€™/g, "'");
code = code.replace(/â€"/g, '—');
code = code.replace(/Ä±/g, 'i');

// Remove SF Pro icon p tags entirely (they show garbage)
code = code.replace(/<p className="[^"]*font-\['SF_Pro:Bold'[^"]*"[^>]*>[\s\S]*?<\/p>/g, '');

// Remove empty icon divs
code = code.replace(/<div className="[^"]*size-\[24px\][^"]*"[^>]*>\s*<\/div>/g, '');

fs.writeFileSync('app/page.tsx', code);
console.log('All fixes applied!');
