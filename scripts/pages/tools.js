// ====== 工具页（简约版） ======
import { toolCategories, skillCards, taskCenter } from '../data.js';

function renderHeader() {
  return `
  <section class="card-in pt-2">
    <div class="flex items-center justify-between mb-1">
      <h1 class="text-xl font-semibold text-slate-800 dark:text-white">智能技能</h1>
      <span class="text-xs text-slate-400">已开启 8 / ${skillCards.length}</span>
    </div>
    <p class="text-xs text-slate-500 dark:text-slate-400">OpenClaw 主动为你运行的能力</p>
  </section>`;
}

function renderTaskCenter() {
  return `
  <section class="mt-4 card-in" style="animation-delay:.05s">
    <div class="s-card p-4">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <i class="ri-pulse-line text-brand-500"></i>
          <p class="text-sm font-medium text-slate-800 dark:text-white">任务中心</p>
        </div>
        <span class="text-xs text-slate-400">查看全部</span>
      </div>
      <div class="space-y-3">
        ${taskCenter.map(t => `
          <div>
            <div class="mb-1.5 flex items-center justify-between text-xs">
              <span class="flex items-center gap-1.5 text-slate-700 dark:text-slate-200">
                ${t.progress < 100
                  ? `<span class="dot-flashing text-brand-500"><span></span><span></span><span></span></span>`
                  : `<i class="ri-check-line text-brand-500"></i>`}
                ${t.name}
              </span>
              <span class="text-slate-400">${t.eta}</span>
            </div>
            <div class="progress-bar">
              <div style="width:${t.progress}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>`;
}

function renderCategories() {
  return `
  <section class="mt-4 card-in" style="animation-delay:.1s">
    <div class="flex gap-2 overflow-x-auto no-scrollbar">
      ${toolCategories.map((c, i) => `
        <button class="shrink-0 rounded-full px-3 py-1.5 text-xs ${i===0
          ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
          : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}">${c.name}</button>
      `).join('')}
    </div>
  </section>`;
}

function renderSkillGrid() {
  return `
  <section class="mt-4 card-in" style="animation-delay:.15s">
    <div class="grid grid-cols-2 gap-2.5">
      ${skillCards.map(s => `
        <div class="tool-card relative s-card p-3.5 active:scale-95">
          <div class="flex items-center justify-between">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-700/50 text-brand-500">
              <i class="${s.icon} text-lg"></i>
            </div>
            <div class="switch ${s.running?'on':''}" data-skill="${s.id}"></div>
          </div>
          <p class="mt-3 text-sm font-medium text-slate-800 dark:text-white">${s.name}</p>
          <p class="mt-0.5 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2 h-8">${s.desc}</p>
          ${s.running ? `
            <div class="mt-2 inline-flex items-center gap-1 text-[10px] text-brand-500">
              <span class="h-1 w-1 rounded-full bg-brand-500"></span>主动运行中
            </div>` : `
            <div class="mt-2 inline-flex items-center gap-1 text-[10px] text-slate-400">
              <i class="ri-pause-circle-line"></i>已暂停
            </div>`
          }
        </div>
      `).join('')}
    </div>
  </section>`;
}

function renderTip() {
  return `
  <section class="mt-4 mb-2 card-in" style="animation-delay:.2s">
    <div class="s-card p-3.5 text-xs text-slate-500 dark:text-slate-400">
      <div class="flex items-start gap-2">
        <i class="ri-lightbulb-line text-amber-500 text-base mt-0.5"></i>
        <div>
          <p class="font-medium text-slate-700 dark:text-slate-200">小贴士</p>
          <p class="mt-1 leading-relaxed">关闭某个技能后，AI 不会再为你主动触发该场景，但仍可手动调用。</p>
        </div>
      </div>
    </div>
  </section>`;
}

export function renderToolsPage() {
  return `
    ${renderHeader()}
    ${renderTaskCenter()}
    ${renderCategories()}
    ${renderSkillGrid()}
    ${renderTip()}
  `;
}
