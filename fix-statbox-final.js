const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// Fix stat box label (top text) - font-weight: 600, font-size: 14px, line-height: 24px
code = code.replace(
  /className="font-mono font-semibold leading-\[24px\] relative shrink-0 text-\[14px\] text-\[rgba\(31,31,31,0\.5\)\]"/g,
  'className="font-semibold leading-[24px] relative shrink-0 text-[14px] text-[rgba(31,31,31,0.5)] uppercase" style={{fontFamily: "Geist Mono", fontWeight: 600}}'
);

// Fix stat box number (bottom text) - font-weight: 500, font-size: 20px, line-height: 64px
code = code.replace(
  /className="font-mono font-medium leading-normal relative shrink-0 text-\[20px\] text-black w-\[72px\] whitespace-pre-wrap"/g,
  'className="font-medium leading-[64px] relative shrink-0 text-[20px] text-black uppercase" style={{fontFamily: "Geist Mono", fontWeight: 500}}'
);

// Also fix the other stat boxes that might have different class patterns
code = code.replace(
  /className="font-mono font-medium leading-normal relative shrink-0 text-\[20px\] text-black w-\[72px\]"/g,
  'className="font-medium leading-[64px] relative shrink-0 text-[20px] text-black uppercase" style={{fontFamily: "Geist Mono", fontWeight: 500}}'
);

// Fix stat box with w-[110px] for QUIZZES DONE label
code = code.replace(
  /className="font-mono font-semibold leading-\[24px\] relative shrink-0 text-\[14px\] text-\[rgba\(31,31,31,0\.5\)\] w-\[110px\]"/g,
  'className="font-semibold leading-[24px] relative shrink-0 text-[14px] text-[rgba(31,31,31,0.5)] uppercase" style={{fontFamily: "Geist Mono", fontWeight: 600}}'
);

fs.writeFileSync('app/page.tsx', code);
console.log('Stat boxes fixed with exact styling!');
