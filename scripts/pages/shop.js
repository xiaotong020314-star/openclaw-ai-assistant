// ====== 商品页（简约版） ======
import { goldenIcons, recoCategories, shopTabs, shopCards } from '../data.js';

function renderHeader() {
  return `
  <section class="card-in pt-2">
    <div class="flex items-center justify-between mb-4">
      <h1 class="text-xl font-semibold text-slate-800 dark:text-white">本地生活</h1>
      <button class="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 dark:text-slate-400">
        <i class="ri-scan-2-line text-lg"></i>
      </button>
    </div>
    <div class="flex items-center gap-2 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2.5">
      <i class="ri-search-line text-slate-400"></i>
      <input class="flex-1 bg-transparent text-sm placeholder:text-slate-400 dark:text-white outline-none" placeholder="搜美食 / 外卖 / 生鲜 / 酒店" />
    </div>
  </section>`;
}

function renderRecoChips() {
  return `
  <section class="mt-4 card-in" style="animation-delay:.05s">
    <div class="flex gap-2 overflow-x-auto no-scrollbar pb-1">
      ${recoCategories.map((c, i) => `
        <button class="shrink-0 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs ${i===0
          ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
          : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}">
          <i class="${c.icon}"></i>${c.name}
        </button>
      `).join('')}
    </div>
  </section>`;
}

function renderGoldenIcons() {
  return `
  <section class="mt-4 card-in" style="animation-delay:.08s">
    <div class="s-card p-4">
      <div class="grid grid-cols-4 gap-y-4">
        ${goldenIcons.map(g => `
          <button class="flex flex-col items-center gap-1.5 active:scale-95 transition">
            <span class="flex h-11 w-11 items-center justify-center rounded-xl ${g.color}">
              <i class="${g.icon} text-xl"></i>
            </span>
            <span class="text-xs text-slate-700 dark:text-slate-200">${g.name}</span>
          </button>
        `).join('')}
      </div>
    </div>
  </section>`;
}

function renderShopTabs() {
  return `
  <section class="mt-5 card-in" style="animation-delay:.12s">
    <div class="flex items-center gap-1 overflow-x-auto no-scrollbar border-b border-slate-200 dark:border-slate-700">
      ${shopTabs.map((t, i) => `
        <button class="shop-tab shrink-0 px-3 py-2 text-sm ${i===0
          ? 'font-semibold text-slate-900 dark:text-white border-b-2 border-brand-500'
          : 'text-slate-500 dark:text-slate-400'}">${t}</button>
      `).join('')}
    </div>
  </section>`;
}

function renderAIBanner() {
  return `
  <section class="mt-3 card-in" style="animation-delay:.14s">
    <div class="s-card p-4">
      <div class="flex items-center gap-3">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-500/15 text-brand-500">
          <i class="ri-magic-line"></i>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-slate-800 dark:text-white">Claw 已为你筛选今日优选</p>
          <p class="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">已避开花生过敏 · 控制在 ¥80 预算 · 偏好日料</p>
        </div>
        <button class="rounded-full bg-brand-500 px-3 py-1 text-xs text-white">一键下单</button>
      </div>
    </div>
  </section>`;
}

function renderShopList() {
  return `
  <section class="mt-3 card-in" style="animation-delay:.18s">
    <div class="space-y-2.5 pb-3">
      ${shopCards.map((s, i) => `
        <div class="flex gap-3 s-card p-3 active:scale-[.99] transition">
          <div class="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-700/50 text-3xl">
            ${s.img}
            ${i < 2 ? `<span class="absolute -top-1 -right-1 rounded-md bg-brand-500 px-1.5 py-0.5 text-[10px] text-white">AI</span>` : ''}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between gap-2">
              <p class="truncate text-sm font-medium text-slate-800 dark:text-white">${s.name}</p>
              <p class="shrink-0 text-xs text-slate-700 dark:text-slate-200 font-medium">${s.price}</p>
            </div>
            <div class="mt-1 flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
              <span class="inline-flex items-center gap-0.5 text-amber-500"><i class="ri-star-fill"></i>${s.rating}</span>
              <span>· ${s.distance}</span>
              <span>· ${s.eta}</span>
            </div>
            <div class="mt-2 flex flex-wrap gap-1">
              ${s.tags.map(t => `<span class="rounded-md bg-slate-50 dark:bg-slate-700/50 px-1.5 py-0.5 text-[10px] text-slate-500 dark:text-slate-300">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </section>`;
}

function renderBottomBar() {
  return `
  <section class="mt-3 mb-2 card-in" style="animation-delay:.22s">
    <div class="s-card p-3 flex items-center gap-3">
      <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-500/15 text-brand-500">
        <i class="ri-shopping-cart-2-line"></i>
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-slate-800 dark:text-white">购物车 (3)</p>
        <p class="text-[11px] text-slate-500 dark:text-slate-400">AI 已帮你选好搭配，预估 ¥68</p>
      </div>
      <button class="rounded-full bg-slate-900 dark:bg-white px-4 py-1.5 text-xs font-medium text-white dark:text-slate-900">一键下单</button>
    </div>
  </section>`;
}

export function renderShopPage() {
  return `
    ${renderHeader()}
    ${renderRecoChips()}
    ${renderGoldenIcons()}
    ${renderShopTabs()}
    ${renderAIBanner()}
    ${renderShopList()}
    ${renderBottomBar()}
  `;
}
