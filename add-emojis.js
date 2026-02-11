const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// Add emojis back to stats cards - find the empty emoji containers and add text
// The pattern is: h-[23px] ... w-[21.563px] followed by empty or broken content

// TOTAL SAVES - 📚
code = code.replace(
  /(<div className="[^"]*h-\[23px\][^"]*w-\[21\.563px\]"[^>]*data-node-id="157:193"[^>]*>)[\s\S]*?(<\/div>)/,
  '$1<span className="text-[20px]">📚</span>$2'
);

// QUIZZES DONE - 🔥
code = code.replace(
  /(<div className="[^"]*h-\[23px\][^"]*w-\[21\.563px\]"[^>]*data-node-id="157:199"[^>]*>)[\s\S]*?(<\/div>)/,
  '$1<span className="text-[20px]">🔥</span>$2'
);

// FOCUS HOURS - 🎯
code = code.replace(
  /(<div className="[^"]*h-\[23px\][^"]*w-\[21\.563px\]"[^>]*data-node-id="157:205"[^>]*>)[\s\S]*?(<\/div>)/,
  '$1<span className="text-[20px]">🎯</span>$2'
);

// XP EARNED - 🏆
code = code.replace(
  /(<div className="[^"]*h-\[23px\][^"]*w-\[21\.563px\]"[^>]*data-node-id="157:211"[^>]*>)[\s\S]*?(<\/div>)/,
  '$1<span className="text-[20px]">🏆</span>$2'
);

// EVOLUTIONS - 🌈
code = code.replace(
  /(<div className="[^"]*h-\[23px\][^"]*w-\[21\.563px\]"[^>]*data-node-id="157:217"[^>]*>)[\s\S]*?(<\/div>)/,
  '$1<span className="text-[20px]">🌈</span>$2'
);

// DISCOVERIES - 💎
code = code.replace(
  /(<div className="[^"]*h-\[23px\][^"]*w-\[21\.563px\]"[^>]*data-node-id="157:223"[^>]*>)[\s\S]*?(<\/div>)/,
  '$1<span className="text-[20px]">💎</span>$2'
);

// Fix task emojis
code = code.replace(/data-node-id="157:342">\s*<\/p>/g, 'data-node-id="157:342">⬇️</p>');
code = code.replace(/data-node-id="157:350">\s*<\/p>/g, 'data-node-id="157:350">🔍</p>');
code = code.replace(/data-node-id="157:358">\s*<\/p>/g, 'data-node-id="157:358">🧪</p>');
code = code.replace(/data-node-id="157:366">\s*<\/p>/g, 'data-node-id="157:366">▶️</p>');

fs.writeFileSync('app/page.tsx', code);
console.log('Emojis added!');
