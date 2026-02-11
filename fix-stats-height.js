const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// Remove fixed h-[72px] from stat cards - let it hug content
code = code.replace(/h-\[72px\] items-start justify-between min-h-px min-w-px/g, 'items-start justify-between');

// Fix the inner flex container - remove h-full so it doesn't stretch
code = code.replace(
  /flex flex-col h-full items-start justify-between relative shrink-0 uppercase/g,
  'flex flex-col items-start gap-[8px] relative shrink-0 uppercase'
);

// Also fix the one with whitespace-pre-wrap
code = code.replace(
  /flex flex-col h-full items-start justify-between relative shrink-0 uppercase whitespace-pre-wrap/g,
  'flex flex-col items-start gap-[8px] relative shrink-0 uppercase'
);

fs.writeFileSync('app/page.tsx', code);
console.log('Stats height fixed!');
