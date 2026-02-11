const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// Fix duplicate font classes
code = code.replace(/font-semibold font-semibold/g, 'font-semibold');
code = code.replace(/font-medium font-medium/g, 'font-medium');
code = code.replace(/font-bold font-bold/g, 'font-bold');

// Fix the number line-height - 64px is too tall, should be normal
code = code.replace(/leading-\[64px\]/g, 'leading-normal');

// Fix emoji containers to display properly
code = code.replace(
  /<div className="h-\[23px\] relative shrink-0 w-\[21\.563px\]" data-node-id="157:193"><span className="text-\[20px\]">📚<\/span><\/div>/g,
  '<div className="text-[20px]" data-node-id="157:193">📚</div>'
);
code = code.replace(
  /<div className="h-\[23px\] relative shrink-0 w-\[21\.563px\]" data-node-id="157:199"><span className="text-\[20px\]">🔥<\/span><\/div>/g,
  '<div className="text-[20px]" data-node-id="157:199">🔥</div>'
);
code = code.replace(
  /<div className="h-\[23px\] relative shrink-0 w-\[21\.563px\]" data-node-id="157:205"><span className="text-\[20px\]">🎯<\/span><\/div>/g,
  '<div className="text-[20px]" data-node-id="157:205">🎯</div>'
);
code = code.replace(
  /<div className="h-\[23px\] relative shrink-0 w-\[21\.563px\]" data-node-id="157:211"><span className="text-\[20px\]">🏆<\/span><\/div>/g,
  '<div className="text-[20px]" data-node-id="157:211">🏆</div>'
);
code = code.replace(
  /<div className="h-\[23px\] relative shrink-0 w-\[21\.563px\]" data-node-id="157:217"><span className="text-\[20px\]">🌈<\/span><\/div>/g,
  '<div className="text-[20px]" data-node-id="157:217">🌈</div>'
);
code = code.replace(
  /<div className="h-\[23px\] relative shrink-0 w-\[21\.563px\]" data-node-id="157:223"><span className="text-\[20px\]">💎<\/span><\/div>/g,
  '<div className="text-[20px]" data-node-id="157:223">💎</div>'
);

// Also fix any remaining empty emoji divs
code = code.replace(/<div className="h-\[23px\] relative shrink-0 w-\[21\.563px\]"([^>]*)>\s*<\/div>/g, '');

fs.writeFileSync('app/page.tsx', code);
console.log('Stats fixed!');
