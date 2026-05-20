// ====== 私人管家 首页（简约版） ======
import {
  greetings, weather, todaySchedule, proactiveCards,
  sceneEntries, quickPrompts
} from '../data.js';

const statusMap = {
  done:    { text: '已完成', cls: 'bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-300' },
  doing:   { text: '进行中', cls: 'bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300' },
  pending: { text: '待执行', cls: 'bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300' },
};

/* === 首屏：问候 + 输入框（共占一屏高度） === */
function renderHeroScreen() {
  return `
  <section class="hero-screen card-in">
    <!-- 顶部问候区 -->
    <div class="pt-3">
      <div class="flex items-start gap-3">
        <div class="ai-avatar-pulse rounded-full">
          <div class="claw-avatar flex h-12 w-12 items-center justify-center rounded-full text-xl">🦞</div>
        </div>
        <div class="flex-1 min-w-0 pt-0.5">
          <p class="text-xs text-slate-400 dark:text-slate-500">${greetings.tag}，张同学</p>
          <h1 class="mt-0.5 text-base font-medium text-slate-800 dark:text-white">${greetings.text}</h1>
        </div>
      </div>
      <!-- 天气一行（极简） -->
      <div class="mt-4 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
        <span class="inline-flex items-center gap-1"><i class="${weather.icon} text-brand-500"></i>${weather.desc} ${weather.temp}°</span>
        <span class="text-slate-300 dark:text-slate-600">·</span>
        <span>AQI ${weather.aqi}</span>
        <span class="text-slate-300 dark:text-slate-600">·</span>
        <span class="truncate">${weather.tip}</span>
      </div>
    </div>

    <!-- 中央：视觉重点输入框 -->
    <div class="flex-1 flex flex-col justify-center -mt-12">
      <p class="text-center text-[11px] tracking-widest text-slate-400 dark:text-slate-500 uppercase">Ask Claw</p>
      <h2 class="mt-3 text-center text-2xl font-semibold leading-snug text-slate-800 dark:text-white">
        告诉 Claw<br/>你需要什么
      </h2>
      <p class="mt-2 text-center text-xs text-slate-400 dark:text-slate-500">点餐 · 出行 · 健康 · 家政 · 日程</p>

      <!-- 输入框（视觉重点） -->
      <div class="mt-7 input-hero rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <div class="flex items-center gap-2 px-4 py-3.5">
          <i class="ri-search-line text-slate-400"></i>
          <input id="prompt-input" placeholder="例如：帮我安排今晚吃饭"
            class="flex-1 bg-transparent text-sm placeholder:text-slate-400 dark:text-white outline-none" />
          <button id="call-btn" title="呼叫 Claw" class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white active:scale-95 transition">
            <i class="ri-phone-fill text-sm"></i>
          </button>
          <button id="voice-btn" class="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-white active:scale-95 transition">
            <i class="ri-mic-fill text-sm"></i>
          </button>
        </div>
      </div>

      <!-- 快捷指令（简约 chip） -->
      <div class="mt-4 flex flex-wrap justify-center gap-2">
        ${quickPrompts.map(p => `
          <button class="quick-prompt rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 px-3 py-1 text-xs text-slate-600 dark:text-slate-300 active:scale-95 transition">${p}</button>
        `).join('')}
      </div>
    </div>

    <!-- 底部下拉提示 -->
    <div class="pb-4 text-center text-[11px] text-slate-400 dark:text-slate-500 scroll-hint">
      <i class="ri-arrow-down-s-line block text-base"></i>
      下滑查看 AI 主动服务
    </div>
  </section>`;
}

/* === 主动服务（简约气泡卡片） === */
function renderProactiveCards() {
  return `
  <section class="mt-2 card-in">
    <div class="mb-3 flex items-baseline justify-between px-1">
      <h3 class="text-[15px] font-semibold text-slate-800 dark:text-white">AI 主动服务</h3>
      <span class="text-xs text-slate-400">查看全部</span>
    </div>
    <div class="space-y-2.5">
      ${proactiveCards.map(c => `
        <div class="s-card p-4">
          <div class="flex items-start gap-3">
            <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-500/15 text-brand-500 shrink-0">
              <i class="${c.icon} text-base"></i>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-slate-800 dark:text-white">${c.title}</p>
              <ul class="mt-1.5 space-y-1 text-xs text-slate-500 dark:text-slate-400">
                ${c.actions.map(a => `<li class="flex items-start gap-1.5"><i class="ri-check-line text-brand-500 mt-0.5"></i>${a}</li>`).join('')}
              </ul>
              <div class="mt-3 flex items-center gap-2">
                <button class="rounded-full bg-slate-900 dark:bg-white px-3.5 py-1 text-xs text-white dark:text-slate-900 active:scale-95">${c.cta}</button>
                <button class="text-xs text-slate-400">忽略</button>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </section>`;
}

/* === 今日智能日程（时间轴） === */
function renderTimeline() {
  return `
  <section class="mt-6 card-in">
    <div class="mb-3 flex items-baseline justify-between px-1">
      <h3 class="text-[15px] font-semibold text-slate-800 dark:text-white">今日智能日程</h3>
      <span class="text-xs text-slate-400">AI 自动生成</span>
    </div>
    <div class="s-card p-4">
      <div class="space-y-4">
        ${todaySchedule.map(item => `
          <div class="timeline-dot flex gap-3">
            <div class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 text-[11px]">
              <i class="${item.icon}"></i>
            </div>
            <div class="flex-1 min-w-0 -mt-0.5">
              <div class="flex items-center justify-between gap-2">
                <p class="text-[11px] text-slate-400">${item.time} · ${item.period}</p>
                <span class="rounded-full px-2 py-0.5 text-[10px] ${statusMap[item.status].cls}">${statusMap[item.status].text}</span>
              </div>
              <p class="mt-0.5 text-sm font-medium text-slate-800 dark:text-white">${item.title}</p>
              <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">${item.desc}</p>
              ${item.status === 'pending' ? `
                <div class="mt-2 flex gap-2">
                  <button class="rounded-full bg-brand-500 px-3 py-1 text-[11px] text-white active:scale-95">同意</button>
                  <button class="rounded-full border border-slate-200 dark:border-slate-700 px-3 py-1 text-[11px] text-slate-500 dark:text-slate-400">取消</button>
                </div>` : ''
              }
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>`;
}

/* === 场景快捷入口 === */
function renderScenes() {
  return `
  <section class="mt-6 card-in">
    <div class="mb-3 flex items-baseline justify-between px-1">
      <h3 class="text-[15px] font-semibold text-slate-800 dark:text-white">场景快捷入口</h3>
    </div>
    <div class="grid grid-cols-3 gap-2.5">
      ${sceneEntries.map(s => `
        <button class="tool-card flex flex-col items-center justify-center gap-2 s-card py-4 active:scale-95">
          <span class="flex h-9 w-9 items-center justify-center rounded-xl ${s.bg} ${s.dark}">
            <i class="${s.icon} text-lg"></i>
          </span>
          <span class="text-xs text-slate-700 dark:text-slate-200">${s.name}</span>
        </button>
      `).join('')}
    </div>
  </section>`;
}

export function renderHomePage() {
  return `
    ${renderHeroScreen()}
    ${renderProactiveCards()}
    ${renderTimeline()}
    ${renderScenes()}
  `;
}
