// ====== 我的（简约版） ======
import { userMemories, settingsSections, recentOrders } from '../data.js';

function renderUserHeader() {
  return `
  <section class="card-in pt-2">
    <div class="flex items-center gap-4">
      <div class="relative">
        <div class="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-200 to-orange-300 text-2xl">😊</div>
        <span class="absolute -bottom-0.5 -right-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 ring-2 ring-white dark:ring-slate-900 text-[10px]">
          <i class="ri-vip-crown-fill text-white"></i>
        </span>
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-base font-semibold text-slate-800 dark:text-white">张同学 <span class="ml-1 rounded-md bg-amber-50 dark:bg-amber-500/15 px-1.5 py-0.5 text-[10px] text-amber-600 dark:text-amber-300">SVIP</span></p>
        <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">ID: openclaw_8642 · 加入 286 天</p>
      </div>
      <button class="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 dark:text-slate-400">
        <i class="ri-qr-code-line text-lg"></i>
      </button>
    </div>
    <div class="mt-4 grid grid-cols-4 gap-2">
      ${[
        {n:'186',l:'AI 服务'},
        {n:'42',l:'订单'},
        {n:'¥1,286',l:'已节省'},
        {n:'5',l:'家人共享'},
      ].map(s => `
        <div class="text-center s-card py-2.5">
          <p class="text-base font-semibold text-slate-800 dark:text-white">${s.n}</p>
          <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">${s.l}</p>
        </div>
      `).join('')}
    </div>
  </section>`;
}

function renderMemories() {
  return `
  <section class="mt-6 card-in" style="animation-delay:.05s">
    <div class="mb-2 flex items-baseline justify-between px-1">
      <div class="flex items-center gap-2">
        <h3 class="text-[15px] font-semibold text-slate-800 dark:text-white">我的记忆</h3>
        <span class="rounded-md bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 text-[10px] text-slate-500 dark:text-slate-300">本地优先</span>
      </div>
      <span class="text-xs text-brand-500">编辑</span>
    </div>
    <p class="px-1 text-[11px] text-slate-400 dark:text-slate-500 mb-2.5">AI 已为你记住 ${userMemories.length} 条偏好，仅存储在你的设备上</p>
    <div class="s-card divide-y divide-slate-100 dark:divide-slate-700">
      ${userMemories.map(m => `
        <div class="flex items-center gap-3 p-3.5">
          <span class="flex h-9 w-9 items-center justify-center rounded-xl ${m.color}">
            <i class="${m.icon} text-base"></i>
          </span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-slate-800 dark:text-white">${m.title}</p>
            <p class="truncate text-xs text-slate-500 dark:text-slate-400">${m.desc}</p>
          </div>
          <i class="ri-arrow-right-s-line text-slate-300 dark:text-slate-600"></i>
        </div>
      `).join('')}
    </div>
  </section>`;
}

function renderOrders() {
  return `
  <section class="mt-6 card-in" style="animation-delay:.1s">
    <div class="mb-2 flex items-baseline justify-between px-1">
      <h3 class="text-[15px] font-semibold text-slate-800 dark:text-white">订单 / 服务记录</h3>
      <span class="text-xs text-brand-500">查看全部</span>
    </div>
    <div class="s-card divide-y divide-slate-100 dark:divide-slate-700">
      ${recentOrders.map(o => `
        <div class="flex items-center gap-3 p-3.5">
          <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-700/50 text-slate-500 dark:text-slate-300">
            <i class="${o.icon}"></i>
          </span>
          <div class="flex-1 min-w-0">
            <p class="truncate text-sm font-medium text-slate-800 dark:text-white">${o.title}</p>
            <p class="text-[11px] text-slate-500 dark:text-slate-400">${o.type} · ${o.time}</p>
          </div>
          <p class="text-sm font-medium text-slate-700 dark:text-slate-200">${o.amount}</p>
        </div>
      `).join('')}
    </div>
  </section>`;
}

function renderSettings() {
  return settingsSections.map((sec, idx) => `
    <section class="mt-6 card-in" style="animation-delay:.${15 + idx * 5}s">
      <h3 class="mb-2 px-1 text-[15px] font-semibold text-slate-800 dark:text-white">${sec.title}</h3>
      <div class="s-card divide-y divide-slate-100 dark:divide-slate-700">
        ${sec.items.map(it => `
          <div class="flex items-center gap-3 p-3.5">
            <span class="flex h-9 w-9 items-center justify-center rounded-xl ${it.danger
              ? 'bg-rose-50 dark:bg-rose-500/15 text-rose-500'
              : 'bg-slate-50 dark:bg-slate-700/50 text-slate-500 dark:text-slate-300'}">
              <i class="${it.icon}"></i>
            </span>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium ${it.danger ? 'text-rose-500' : 'text-slate-800 dark:text-white'}">${it.name}</p>
              <p class="truncate text-[11px] text-slate-500 dark:text-slate-400">${it.desc}</p>
            </div>
            ${it.themeBtn ? `<button id="theme-toggle" class="flex items-center gap-1 rounded-full border border-slate-200 dark:border-slate-700 px-3 py-1 text-xs text-slate-600 dark:text-slate-300">
              <i class="ri-contrast-2-line"></i><span>切换</span>
            </button>` : ''}
            ${it.sw !== undefined ? `<div class="switch ${it.sw?'on':''}"></div>` : ''}
            ${it.arrow ? `<i class="ri-arrow-right-s-line text-slate-300 dark:text-slate-600"></i>` : ''}
          </div>
        `).join('')}
      </div>
    </section>
  `).join('');
}

function renderLogout() {
  return `
  <section class="mt-6 mb-4 card-in" style="animation-delay:.3s">
    <button class="w-full s-card py-3 text-sm font-medium text-rose-500 active:scale-95">退出登录</button>
    <p class="mt-3 text-center text-[11px] text-slate-400">OpenClaw v1.0.0 · 由 With AI 驱动</p>
  </section>`;
}

export function renderMePage() {
  return `
    ${renderUserHeader()}
    ${renderMemories()}
    ${renderOrders()}
    ${renderSettings()}
    ${renderLogout()}
  `;
}
