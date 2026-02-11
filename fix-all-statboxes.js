const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// Fix ALL inner containers that still have gap-[8px]
code = code.replace(
  /className="flex flex-col items-start gap-\[8px\] relative shrink-0 uppercase whitespace-pre-wrap"/g,
  'className="flex flex-col h-full items-start justify-between relative shrink-0 uppercase"'
);

code = code.replace(
  /className="flex flex-col items-start gap-\[8px\] relative shrink-0 uppercase"/g,
  'className="flex flex-col h-full items-start justify-between relative shrink-0 uppercase"'
);

// Fix any remaining label styles
code = code.replace(
  /className="font-mono font-semibold leading-\[24px\][^"]*text-\[14px\] text-\[rgba\(31,31,31,0\.5\)\][^"]*"/g,
  'className="leading-[24px] relative shrink-0 text-[14px] text-[rgba(31,31,31,0.5)] uppercase" style={{fontFamily: "Geist Mono", fontWeight: 600}}'
);

// Fix any remaining number styles
code = code.replace(
  /className="font-mono font-medium[^"]*text-\[20px\] text-black[^"]*"/g,
  'className="leading-none relative shrink-0 text-[20px] text-black uppercase" style={{fontFamily: "Geist Mono", fontWeight: 500}}'
);

fs.writeFileSync('app/page.tsx', code);
console.log('All stat boxes fixed!');
