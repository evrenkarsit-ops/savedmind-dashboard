const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// Replace all stat boxes with exact Figma structure
// The key is: h-[72px] on container, h-full + justify-between on inner div

// Fix stat box container - add back h-[72px]
code = code.replace(
  /className="bg-\[#ececec\] border-\[#f0f0f0\] border-solid border-t flex flex-\[1_0_0\] items-start justify-between overflow-clip p-\[16px\] relative rounded-\[8px\]"/g,
  'className="bg-[#ececec] border-[#f0f0f0] border-solid border-t flex flex-[1_0_0] h-[72px] items-start justify-between overflow-clip p-[16px] relative rounded-[8px]"'
);

// Fix inner container - use h-full and justify-between (no gap)
code = code.replace(
  /className="flex flex-col items-start gap-\[8px\] relative shrink-0 uppercase"/g,
  'className="flex flex-col h-full items-start justify-between relative shrink-0 uppercase"'
);

// Fix label text - exact Figma styling
code = code.replace(
  /className="font-semibold leading-\[24px\] relative shrink-0 text-\[14px\] text-\[rgba\(31,31,31,0\.5\)\] uppercase" style=\{\{fontFamily: "Geist Mono", fontWeight: 600\}\}/g,
  'className="leading-[24px] relative shrink-0 text-[14px] text-[rgba(31,31,31,0.5)] uppercase" style={{fontFamily: "Geist Mono", fontWeight: 600}}'
);

// Fix number text - remove leading-[64px] as it causes too much space, use leading-none
code = code.replace(
  /className="font-medium leading-\[64px\] relative shrink-0 text-\[20px\] text-black uppercase" style=\{\{fontFamily: "Geist Mono", fontWeight: 500\}\}/g,
  'className="leading-none relative shrink-0 text-[20px] text-black uppercase" style={{fontFamily: "Geist Mono", fontWeight: 500}}'
);

fs.writeFileSync('app/page.tsx', code);
console.log('Stat boxes fixed with exact Figma structure!');
