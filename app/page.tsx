"use client";

import { useState } from "react";

const imgImage12 = "/assets/840d2ea90b63b9ab55d6f6b8c31fd7894c766183.png";
const imgFrame111 = "/assets/32d67c6502cfc6650b580cbb28f2396a769f581a.png";
const imgImage13 = "/assets/e17cf5d39527202a111a06fc7ff9fbd251a7d78d.png";
const imgFrame112 = "/assets/962381a1bb2291d92e156e7a4314d0b693745bbc.png";
const imgImage14 = "/assets/a26a38c6a5d94ca47503bbcfcae2f5978f478add.png";
const imgFrame113 = "/assets/256dbaaebb25053f2b9fa012d569f57c1a7a0cf7.png";
const imgUnion = "/assets/1f32b76b6bece63a94428a160da3ea3b0d5dde65.svg";
const imgEllipse1 = "/assets/f93030a5891b740433445090d4945397e55089c0.svg";
const imgFrame117 = "/assets/1b6d3d52c963652bfa4c99aa748fb12fc3d196ef.svg";
const imgVector = "/assets/e33ba549c6c0e7f56f31fb364ebb9e5540dd3537.svg";
const imgVector1 = "/assets/0882e93c6f41ce5cda8032ccb301959e6bfd63cd.svg";
const imgVector2 = "/assets/e734b80c70aea4852124c329ba4af2c99fc8e66e.svg";
const imgVector3 = "/assets/c0990ebbb2fef958e70c53680828dc7e5ccaf184.svg";
const imgVector4 = "/assets/ca8d47c74e361455a3f5c92c951c6d00374c3286.svg";
const imgVector5 = "/assets/d14f5cd908f9ce93f12a45d42f0bfa8a81daf1b5.svg";
const imgVector6 = "/assets/04d9ed0710f005ef3cd040dc255289b377d8d97b.svg";
const imgVector7 = "/assets/c9f553b1a7f1881ff116d53eaef822dd2bcc7f87.svg";
const imgVector8 = "/assets/08a22f41f43f2d285e72ff4cbb191c23250ceab3.svg";
const imgVector9 = "/assets/b8f3f74df8185c7b85481b34aeea848373442a3d.svg";
const imgVector10 = "/assets/cebea6dd8a9dd70cee9ce26986e1eb59a439238e.svg";
const imgVector11 = "/assets/b717de405b531c9d14a9ac13587a75c75ff4ccc9.svg";
const imgVector12 = "/assets/494639040cd4a62692dcb3e73770620d5055a248.svg";
const imgVector13 = "/assets/a043cfd7688eb7e54a78f4821a2a07502cd15773.svg";
const imgVector14 = "/assets/73d9312f6893e3591d3a7a678f8b2a49cc66cd12.svg";
const imgVector15 = "/assets/b7f187d1c52ed0869b6fcd59298d175fedfe2370.svg";
const imgVector16 = "/assets/024cb2335e8cec58724fbfd300c1e54dbc07e519.svg";
const imgVector17 = "/assets/f14ff154606050086f545783c42c3f4d814a3549.svg";
const imgVector18 = "/assets/b5b1476f6b2f4d182883081829e9c3e62cc75dae.svg";
const imgVector19 = "/assets/8ece43d7c2b864bc0384bdd0590c78cdbf47fda8.svg";
const imgVector20 = "/assets/4bdd91d839b7870e11099e56757a3005ea912539.svg";
const imgGroup1 = "/assets/82b58f7bb113081f185c88c550a3a83b670338be.svg";
const img = "/assets/4d251fe970bc020f84965aed00de43f5541982a1.svg";
const imgFrame = "/assets/a09f24cbdf55f3a9c8eaf0e26189fd22bccde074.svg";
const imgFrame1 = "/assets/6e434f38c0887716d9cac78b84b1616e80c9c204.svg";
const imgFrame2 = "/assets/956b66b86ff31641df9af5b849b84ce572e74969.svg";
const imgFrame3 = "/assets/a6fb31cd196850352d25f27b1c11e9cf8202cb09.svg";

export default function Home() {
  const [focusInput, setFocusInput] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, title: "Complete today's quiz", desc: "Lock in what you learned with a quick daily review.", done: true },
    { id: 2, title: "Save 5 tweets", desc: "Collect 5 useful tweets to fuel your next work session.", done: false },
    { id: 3, title: "Complete at least 1 task", desc: "Ship one concrete task today—small progress counts.", done: false },
    { id: 4, title: "Make sure you touch the grass", desc: "Take a short break outside to reset your brain.", done: false },
  ]);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoDesc, setNewTodoDesc] = useState("");

  const toggleTodo = (id: number) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const addTodo = () => {
    if (newTodoTitle.trim()) {
      setTodos([...todos, { id: Date.now(), title: newTodoTitle, desc: newTodoDesc || "No description", done: false }]);
      setNewTodoTitle("");
      setNewTodoDesc("");
    }
  };

  return (
    <div className="bg-white flex flex-col items-start overflow-clip relative rounded-[10px] min-h-screen w-full">
      <div className="flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full">
        {/* Header */}
        <div className="bg-[#1f1f1f] flex items-center justify-between py-[8px] relative shrink-0 w-full">
          <div className="flex gap-[16px] items-center px-[16px] relative shrink-0">
            <div className="flex gap-[8px] items-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="h-[25.412px] relative shrink-0 w-[28.734px]">
                <img alt="" className="block max-w-none size-full" src={imgUnion} />
              </div>
              <p className="font-mono font-bold leading-[32px] relative shrink-0 text-[20px] text-white tracking-[-0.2px]">
                SavedMind™
              </p>
            </div>
            <div className="bg-[#2c2c2c] border-[#3c3c3c] border-solid border-t flex gap-[4px] items-center justify-center pl-[8px] pr-[4px] py-[8px] relative rounded-[8px] shrink-0 hidden sm:flex cursor-pointer hover:bg-[#3c3c3c] transition-colors">
              <div className="flex items-center gap-[4px] relative shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c5c5c5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <p className="font-mono font-semibold leading-[24px] overflow-hidden relative shrink-0 text-[#c5c5c5] text-[16px] text-center text-ellipsis uppercase">
                  Personal
                </p>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c5c5c5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end pl-[4px] pr-[16px] relative">
            <div className="flex gap-[8px] items-center relative shrink-0">
              <div className="bg-[#2c2c2c] border-[#3c3c3c] border-solid border-t flex gap-[4px] items-center pl-[8px] pr-[12px] py-[8px] relative rounded-[8px] shrink-0 hidden md:flex cursor-pointer hover:bg-[#3c3c3c] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c5c5c5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <p className="font-mono font-semibold leading-[24px] relative shrink-0 text-[#c5c5c5] text-[14px] uppercase">
                  Search
                </p>
              </div>
              <div className="bg-[#2c2c2c] border-[#3f3f3f] border-solid border-t flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#3c3c3c] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c5c5c5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
                <div className="absolute flex flex-col items-center justify-center right-[-4px] rounded-[12px] top-[-4px] min-w-[20px] h-[20px] px-[4px]" style={{ background: "rgb(51, 102, 255)" }}>
                  <p className="font-mono font-medium text-[12px] text-center text-white">
                    8
                  </p>
                </div>
              </div>
              <div className="relative shrink-0 size-[40px] rounded-full bg-[#2c2c2c] cursor-pointer hover:bg-[#3c3c3c] transition-colors flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex flex-[1_0_0] flex-col lg:flex-row items-stretch min-h-px min-w-px relative w-full">
          {/* Sidebar */}
          <div className="bg-[#373737] hidden lg:flex flex-col h-full items-start justify-between overflow-clip p-[8px] relative shrink-0 w-[288px]">
            <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
              <div className="flex flex-col items-start relative shrink-0 w-full">
                {/* Nav items */}
                {[
                  { name: "Home", active: true, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
                  { name: "Xplorer", active: false, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
                  { name: "Focus Mode", active: false, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> },
                  { name: "Daily Quiz", active: false, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
                  { name: "My Resources", active: false, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg> },
                ].map((item) => (
                  <div key={item.name} className={`${item.active ? 'bg-[rgba(255,255,255,0.1)] border-[rgba(240,240,240,0.09)] border-solid border-t' : 'hover:bg-[rgba(255,255,255,0.05)]'} flex flex-col items-start px-[8px] py-[4px] relative rounded-[8px] shrink-0 w-full cursor-pointer transition-colors`}>
                    <div className={`flex gap-[8px] items-center ${item.active ? '' : 'opacity-50 hover:opacity-80'} p-[8px] relative rounded-[4px] shrink-0 w-full transition-opacity`}>
                      <div className="text-white shrink-0">{item.icon}</div>
                      <p className="font-mono font-semibold leading-[24px] relative shrink-0 text-[16px] text-white">
                        {item.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start relative shrink-0 w-full">
                <div className="flex items-center px-[16px] py-[8px] relative shrink-0 w-full">
                  <p className="font-mono font-semibold leading-[24px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] uppercase">
                    collections
                  </p>
                </div>
                {["Startup", "Personal"].map((collection) => (
                  <div key={collection} className="flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[4px] shrink-0 w-full cursor-pointer hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                    <div className="relative shrink-0 size-[8px]">
                      <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
                    </div>
                    <p className="font-mono font-medium leading-[24px] relative shrink-0 text-[16px] text-white">
                      {collection}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start relative shrink-0 w-full">
              {[
                { name: "Settings", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg> },
                { name: "Help & Support", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> },
              ].map((item) => (
                <div key={item.name} className="flex gap-[8px] items-center opacity-50 hover:opacity-80 p-[8px] relative rounded-[4px] shrink-0 w-full cursor-pointer transition-opacity">
                  <div className="text-white shrink-0">{item.icon}</div>
                  <p className="font-mono font-semibold leading-[24px] relative shrink-0 text-[16px] text-white">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-0 relative">
            {/* Orange banner */}
            <div className="bg-[#f30] flex flex-col md:flex-row md:h-[104px] items-center justify-between overflow-clip px-[16px] md:pl-[80px] md:pr-[16px] py-[16px] relative shrink-0 w-full gap-4">
              <div className="flex items-end relative shrink-0">
                <div className="flex flex-col gap-[10px] items-start relative shrink-0">
                  <p className="font-mono font-bold leading-[32px] relative shrink-0 text-[18px] md:text-[20px] text-white tracking-[-0.4px]">
                    Try Work Mode
                  </p>
                  <p className="font-sans font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] md:text-[16px] text-[rgba(255,255,255,0.6)]">
                    Use your saves while work.
                  </p>
                </div>
              </div>
              <div className="bg-white flex h-[50px] items-center justify-between pl-[12px] pr-[4px] py-[4px] relative rounded-[8px] shrink-0 w-full md:w-auto md:flex-1 md:max-w-[583px]">
                <input
                  type="text"
                  value={focusInput}
                  onChange={(e) => setFocusInput(e.target.value)}
                  placeholder="Describe what you're working on..."
                  className="font-mono font-medium leading-[24px] text-[14px] md:text-[16px] text-black tracking-[-0.16px] bg-transparent outline-none flex-1 placeholder:text-[rgba(0,0,0,0.5)]"
                />
                <button className="bg-[#1f1f1f] flex flex-col h-[42px] items-center justify-center px-[10px] relative rounded-[5px] shrink-0 cursor-pointer hover:bg-[#333] transition-colors active:scale-95">
                  <p className="font-mono font-bold leading-[24px] relative shrink-0 text-[14px] text-white whitespace-nowrap">
                    START FOCUS
                  </p>
                </button>
              </div>
              <div className="absolute h-[104px] left-0 top-0 w-[70px] hidden md:block">
                <div className="absolute inset-[-8.65%_-0.22%_-4.07%_-71.43%] animate-slow-spin">
                  <img alt="" className="block max-w-none size-full" src={imgFrame117} />
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-0 p-[10px] relative w-full overflow-auto">
              {/* Stat boxes */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[10px] w-full">
                {[
                  { label: "TOTAL SAVES", value: "1.201", emoji: "📚" },
                  { label: "QUIZZES DONE", value: "156", emoji: "🍎" },
                  { label: "FOCUS HOURS", value: "89", emoji: "🎯" },
                  { label: "XP EARNED", value: "8,470", emoji: "🔮" },
                  { label: "EVOLUTIONS", value: "4", emoji: "🌈" },
                  { label: "DISCOVERIES", value: "47", emoji: "💎" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#ececec] border-[#f0f0f0] border-solid border-t flex items-start justify-between overflow-clip p-[16px] relative rounded-[8px] cursor-pointer hover:bg-[#e0e0e0] transition-colors">
                    <div className="flex flex-col items-start gap-[8px] relative shrink-0 uppercase">
                      <p className="leading-none relative shrink-0 text-[12px] sm:text-[14px] text-[rgba(31,31,31,0.5)] uppercase" style={{fontFamily: "Geist Mono", fontWeight: 600}}>
                        {stat.label}
                      </p>
                      <p className="leading-none relative shrink-0 text-[18px] sm:text-[20px] text-black uppercase" style={{fontFamily: "Geist Mono", fontWeight: 500}}>
                        {stat.value}
                      </p>
                    </div>
                    <div className="text-[20px]">{stat.emoji}</div>
                  </div>
                ))}
              </div>

              {/* Feature cards row - Streak, Quiz, DNA */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] w-full">
                {/* Current Streak */}
                <div className="bg-[#f30] border-[#f0f0f0] border-solid border-t flex flex-col h-[175px] items-start justify-between overflow-hidden p-[16px] relative rounded-[8px]">
                  <div className="flex flex-col gap-[16px] items-start relative shrink-0">
                    <p className="font-mono font-bold leading-[0] relative shrink-0 text-[38px] text-white tracking-[-2.28px]">
                      <span className="leading-[36px]">20</span>
                      <span className="leading-[36px] text-[#b62b08]">-</span>
                      <span className="leading-[36px] text-[#b62b08]">Days<br/>Streak!</span>
                    </p>
                  </div>
                  <img
                    alt=""
                    src="/assets/dog-burn-sticker.png"
                    className="absolute right-[-20px] top-[-30px] w-[255px] h-[254px] object-contain pointer-events-none rotate-[-8deg]"
                  />
                  <p className="font-mono font-bold leading-[16px] relative shrink-0 text-[#b62b08] text-[17px] tracking-[-1px] z-10">
                    1/7 days of this week
                  </p>
                </div>

                {/* Daily Quiz */}
                <div className="bg-[#084641] border-[#f0f0f0] border-solid border-t flex flex-col h-[175px] items-start justify-between overflow-clip p-[16px] relative rounded-[8px] cursor-pointer hover:brightness-110 transition-all">
                  <div className="flex flex-col items-start relative shrink-0 z-10">
                    <p className="font-mono font-bold leading-[0] relative shrink-0 text-[38px] text-white tracking-[-2.28px] whitespace-pre-wrap">
                      <span className="leading-[36px] text-[rgba(255,255,255,0.5)]">{`Daily `}</span>
                      <span className="leading-[36px]">Quiz</span>
                    </p>
                  </div>
                  <div className="absolute bottom-0 right-0 top-0 w-[119px] pointer-events-none">
                    <img
                      alt=""
                      src="/assets/thinking-sticker.png"
                      className="absolute inset-[-6%_-41%_-45%_-81%] max-w-none object-cover"
                    />
                  </div>
                  <button className="backdrop-blur-[11px] bg-[rgba(255,255,255,0.2)] flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 z-10 hover:bg-[rgba(255,255,255,0.3)] transition-colors active:scale-[0.98]">
                    <p className="font-mono font-bold leading-[24px] relative shrink-0 text-[14px] text-white uppercase">
                      Start Quiz
                    </p>
                  </button>
                </div>

                {/* Your DNA */}
                <div className="bg-[#1f1f1f] border-[#f0f0f0] border-solid border-t flex flex-col h-[175px] items-start justify-between overflow-clip p-[16px] relative rounded-[8px] cursor-pointer hover:brightness-110 transition-all">
                  <div className="font-mono font-bold leading-[0] relative shrink-0 text-[#ececec] text-[38px] tracking-[-2.28px] whitespace-pre-wrap z-10">
                    <p className="mb-0">
                      <span className="leading-[36px] text-[rgba(255,255,255,0.5)]">Your</span>
                      <span className="leading-[36px]">{` `}</span>
                    </p>
                    <p className="leading-[36px]">DNA</p>
                  </div>
                  <button className="backdrop-blur-[11px] bg-[rgba(255,255,255,0.1)] flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 z-10 hover:bg-[rgba(255,255,255,0.2)] transition-colors active:scale-[0.98]">
                    <p className="font-mono font-bold leading-[24px] relative shrink-0 text-[14px] text-white uppercase">
                      View Details
                    </p>
                  </button>
                  <img
                    alt=""
                    src="/assets/dance-sticker.png"
                    className="absolute right-[-22px] top-1/2 -translate-y-1/2 w-[215px] h-[215px] object-contain pointer-events-none"
                  />
                </div>
              </div>

              {/* Main grid - 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] flex-1 w-full">
                {/* Today's To Do */}
                <div className="bg-[#ececec] border-[#f0f0f0] border-solid border-t flex flex-col gap-[24px] items-start overflow-clip p-[16px] relative rounded-[8px]">
                  <div className="flex items-center justify-between relative shrink-0 w-full">
                    <p className="leading-none relative shrink-0 text-[14px] text-[rgba(31,31,31,0.5)] uppercase" style={{fontFamily: "Geist Mono", fontWeight: 600}}>{`TODAY'S TO DO`}</p>
                    <button className="relative shrink-0 size-[14px] cursor-pointer hover:rotate-[360deg] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                      <img alt="" className="block max-w-none size-full" src={imgFrame} />
                    </button>
                  </div>
                  <div className="flex flex-col gap-[24px] items-start relative w-full">
                    {todos.map((todo) => (
                      <div key={todo.id} className="flex gap-[16px] items-start relative w-full cursor-pointer group" onClick={() => toggleTodo(todo.id)}>
                        <div className={`${todo.done ? 'bg-[#f30]' : 'border border-[#afafaf] border-solid group-hover:border-[#f30]'} overflow-clip relative rounded-[8px] shrink-0 size-[24px] transition-colors`}>
                          {todo.done && (
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[17px] top-[calc(50%-0.5px)]">
                              <img alt="" className="block max-w-none size-full" src={imgFrame1} />
                            </div>
                          )}
                        </div>
                        <div className="flex flex-1 min-w-0">
                          <div className="flex flex-col gap-[4px] items-start w-full">
                            <p className={`font-mono font-bold leading-tight text-[#1f1f1f] text-[16px] tracking-[-0.32px] ${todo.done ? 'line-through opacity-50' : ''}`}>{todo.title}</p>
                            <p className={`font-sans font-medium leading-[20px] not-italic text-[14px] text-[rgba(31,31,31,0.6)] ${todo.done ? 'line-through opacity-50' : ''}`}>
                              {todo.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Add new todo */}
                    <div className="flex gap-[16px] items-start relative w-full">
                      <div className="border border-[#afafaf] border-solid rounded-[8px] shrink-0 size-[24px] opacity-40" />
                      <div className="flex flex-1 min-w-0">
                        <div className="flex flex-col gap-[4px] items-start w-full text-[rgba(31,31,31,0.4)]">
                          <input
                            type="text"
                            value={newTodoTitle}
                            onChange={(e) => setNewTodoTitle(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                            placeholder="Enter a title..."
                            className="font-mono font-bold leading-tight text-[16px] tracking-[-0.32px] bg-transparent outline-none w-full placeholder:text-[rgba(31,31,31,0.4)] text-[#1f1f1f]"
                          />
                          <input
                            type="text"
                            value={newTodoDesc}
                            onChange={(e) => setNewTodoDesc(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                            placeholder="Enter a description..."
                            className="font-sans font-medium leading-[20px] not-italic text-[14px] bg-transparent outline-none w-full placeholder:text-[rgba(31,31,31,0.4)] text-[rgba(31,31,31,0.6)]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* My Tasks */}
                <div className="bg-[#ececec] border-[#f0f0f0] border-solid border-t flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[8px]">
                  <div className="flex items-center justify-between relative shrink-0 w-full">
                    <p className="leading-none relative shrink-0 text-[14px] text-[rgba(31,31,31,0.5)] uppercase" style={{fontFamily: "Geist Mono", fontWeight: 600}}>
                      MY TASKS
                    </p>
                    <button className="relative shrink-0 size-[14px] cursor-pointer hover:rotate-[360deg] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                      <img alt="" className="block max-w-none size-full" src={imgFrame} />
                    </button>
                  </div>
                  <div className="flex flex-col gap-[12px] items-start relative w-full">
                    {[
                      { emoji: "⬇️", title: "Download MoltBot and try the automation features", desc: "Uses your saved tweets to support what you're working on." },
                      { emoji: "🔍", title: "Research how Stripe Atlas works for startups", desc: "Uses your saved tweets to support what you're working on." },
                      { emoji: "🧪", title: "Try the Pomodoro technique for deep work", desc: "Uses your saved tweets to support what you're working on." },
                      { emoji: "▶️", title: "Watch Y Combinator startup school videos", desc: "Uses your saved tweets to support what you're working on." },
                    ].map((task, i) => (
                      <div key={i} className="bg-white flex flex-col items-start overflow-clip p-[16px] relative rounded-[8px] w-full cursor-pointer hover:bg-[#f5f5f5] transition-colors">
                        <div className="flex items-start relative w-full">
                          <div className="flex flex-1 gap-[10px] items-start min-w-0 relative">
                            <div className="relative shrink-0 size-[15px]">
                              <p className="absolute font-mono font-bold leading-[20px] left-0 text-[#1f1f1f] text-[15px] top-[3px] tracking-[-0.3px]">
                                {task.emoji}
                              </p>
                            </div>
                            <div className="flex flex-1 flex-col gap-[10px] items-start leading-[20px] min-w-0 relative">
                              <p className="font-mono font-bold text-[#1f1f1f] text-[15px] tracking-[-0.3px] w-full">{task.title}</p>
                              <p className="font-sans font-medium not-italic text-[14px] text-[rgba(31,31,31,0.6)] w-full">
                                {task.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Latest Saves */}
                <div className="bg-[#ececec] border-[#f0f0f0] border-solid border-t flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[8px]">
                  <div className="flex items-center justify-between relative shrink-0 w-full">
                    <p className="leading-none relative shrink-0 text-[14px] text-[rgba(31,31,31,0.5)] uppercase" style={{fontFamily: "Geist Mono", fontWeight: 600}}>
                      LATEST SAVES
                    </p>
                    <button className="relative shrink-0 size-[14px] cursor-pointer hover:rotate-[360deg] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                      <img alt="" className="block max-w-none size-full" src={imgFrame2} />
                    </button>
                  </div>
                  {[
                    { img: imgImage12, title: "How to build a Claude Skill to consisten...", time: "1m ago", user: "@andrea", avatar: imgFrame111 },
                    { img: imgImage13, title: "post your app/startup on these subreddit:...", time: "2m ago", user: "@henryfromsn", avatar: imgFrame112 },
                    { img: imgImage14, title: "How to build a Claude Skill to consisten...", time: "10m ago", user: "@learnwithme", avatar: imgFrame113 },
                  ].map((save, i) => (
                    <div key={i} className="flex gap-[16px] items-center relative w-full cursor-pointer hover:bg-[rgba(0,0,0,0.03)] rounded-[8px] p-[4px] -m-[4px] transition-colors">
                      <div className="relative rounded-[7px] shrink-0 size-[68px] overflow-hidden">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full hover:scale-110 transition-transform" src={save.img} />
                      </div>
                      <div className="flex flex-1 flex-col gap-[8px] items-start min-w-0 relative">
                        <p className="font-mono font-bold leading-[20px] text-[#1f1f1f] text-[15px] tracking-[-0.3px] w-full truncate">
                          {save.title}
                        </p>
                        <div className="flex gap-[16px] items-center relative flex-wrap">
                          <div className="flex gap-[4px] items-center relative shrink-0">
                            <div className="relative shrink-0 size-[14px]">
                              <img alt="" className="block max-w-none size-full" src={imgFrame3} />
                            </div>
                            <p className="font-sans font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[rgba(31,31,31,0.6)]">
                              {save.time}
                            </p>
                          </div>
                          <div className="flex gap-[4px] items-center relative shrink-0">
                            <div className="relative rounded-[1000px] shrink-0 size-[14px]">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1000px] size-full" src={save.avatar} />
                            </div>
                            <p className="font-sans font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[rgba(31,31,31,0.6)]">
                              {save.user}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
