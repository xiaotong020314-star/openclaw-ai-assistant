// ====== 主入口 ======
import { renderHomePage }  from './pages/home.js';
import { renderShopPage }  from './pages/shop.js';
import { renderToolsPage } from './pages/tools.js';
import { renderMePage }    from './pages/me.js';

// 当前 tab
let currentTab = 'home';

const pages = {
  home:  renderHomePage,
  shop:  renderShopPage,
  tools: renderToolsPage,
  me:    renderMePage,
};

const container = document.getElementById('page-container');
const navBtns = document.querySelectorAll('.tab-btn');

function renderPage(tab) {
  currentTab = tab;
  container.scrollTo?.({ top: 0 });
  container.innerHTML = pages[tab]();
  // 高亮 tab
  navBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  // 滚回顶部
  window.scrollTo({ top: 0, behavior: 'instant' });
  // 重新绑定页面级事件
  bindPageInteractions();
}

// 通用：绑定页面交互
function bindPageInteractions() {
  // switch 切换
  document.querySelectorAll('.switch').forEach(sw => {
    sw.addEventListener('click', () => sw.classList.toggle('on'));
  });
  // 快捷指令
  document.querySelectorAll('.quick-prompt').forEach(b => {
    b.addEventListener('click', () => {
      const input = document.getElementById('prompt-input');
      if (input) input.value = b.textContent;
      pushAIToast({
        title: 'Claw 已收到指令',
        body: `“${b.textContent}” 正在为你处理…`,
        icon: 'ri-magic-line',
      });
    });
  });
  // 语音
  const voiceBtn = document.getElementById('voice-btn');
  voiceBtn?.addEventListener('click', () => openVoice());

  // 电话
  const callBtn = document.getElementById('call-btn');
  callBtn?.addEventListener('click', () => openCall());

  // shop tab 切换样式
  document.querySelectorAll('.shop-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.shop-tab').forEach(t => {
        t.classList.remove('font-semibold','text-brand-600','dark:text-brand-300','border-b-2','border-brand-500');
        t.classList.add('text-slate-500','dark:text-slate-400');
      });
      tab.classList.add('font-semibold','text-brand-600','dark:text-brand-300','border-b-2','border-brand-500');
      tab.classList.remove('text-slate-500','dark:text-slate-400');
    });
  });

  // 主题切换按钮（在"我的"页）
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
}

// ====== 底部 Tab ======
navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    if (tab === currentTab) return;
    renderPage(tab);
  });
});

// ====== 状态栏时间 ======
function updateTime() {
  const t = new Date();
  const hh = String(t.getHours()).padStart(2, '0');
  const mm = String(t.getMinutes()).padStart(2, '0');
  const el = document.getElementById('status-time');
  if (el) el.textContent = `${hh}:${mm}`;
}
updateTime();
setInterval(updateTime, 30 * 1000);

// ====== AI 主动推送（toast） ======
const toastStack = document.getElementById('ai-toast-stack');

export function pushAIToast({ title, body, icon = 'ri-robot-2-line', cta = '查看' }) {
  const el = document.createElement('div');
  el.className = 'ai-toast mt-2 mx-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 shadow-lg flex items-start gap-3';
  el.innerHTML = `
    <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-500/15 text-brand-500 shrink-0">
      <i class="${icon}"></i>
    </div>
    <div class="flex-1 min-w-0">
      <p class="text-sm font-medium text-slate-800 dark:text-white">${title}</p>
      <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">${body}</p>
    </div>
    <button class="self-center rounded-full bg-slate-900 dark:bg-white px-3 py-1 text-xs text-white dark:text-slate-900">${cta}</button>
  `;
  toastStack.appendChild(el);
  setTimeout(() => {
    el.classList.add('toast-out');
    setTimeout(() => el.remove(), 400);
  }, 4500);
  el.addEventListener('click', () => {
    el.classList.add('toast-out');
    setTimeout(() => el.remove(), 300);
  });
}

// 模拟 AI 主动推送：进入 APP 之后定期触发一些气泡
const aiPushQueue = [
  { title:'Claw 检测到外面下雨啦 ☂️', body:'已为你把外卖改到 12:30，并预约了下午的车。', icon:'ri-cloud-windy-line' },
  { title:'你已连续工作 90 分钟', body:'要不要起身喝杯水，我帮你订一杯燕麦拿铁？', icon:'ri-cup-line' },
  { title:'妈妈刚刚记录了血压', body:'128/82 正常，已自动同步到家庭健康看板。', icon:'ri-heart-pulse-line' },
];
let pushIdx = 0;
setTimeout(function loopPush() {
  pushAIToast(aiPushQueue[pushIdx % aiPushQueue.length]);
  pushIdx++;
  setTimeout(loopPush, 12000);
}, 2500);

// ====== 语音浮层 ======
const voiceModal = document.getElementById('voice-modal');
const voiceClose = document.getElementById('voice-close');
function openVoice() {
  voiceModal.classList.remove('hidden');
  voiceModal.classList.add('flex');
}
function closeVoice() {
  voiceModal.classList.add('hidden');
  voiceModal.classList.remove('flex');
}
voiceClose.addEventListener('click', () => {
  closeVoice();
  pushAIToast({
    title: 'Claw 已记录你的需求',
    body: '正在为你生成今晚晚餐方案，预计 8 秒…',
    icon: 'ri-magic-line',
  });
});

// ====== 电话浮层 ======
const callModal  = document.getElementById('call-modal');
const callClose  = document.getElementById('call-close');
const callStatus = document.getElementById('call-status');
const callTimer  = document.getElementById('call-timer');
let callStart = 0;
let callTimerId = null;
let callConnectId = null;

function fmtSec(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${m}:${s}`;
}
function openCall() {
  callModal.classList.remove('hidden');
  callModal.classList.add('flex');
  callStatus.textContent = '正在呼叫…';
  callTimer.textContent  = '00:00';
  // 模拟 1.2s 后接通
  callConnectId = setTimeout(() => {
    callStatus.textContent = '通话中';
    callStart = Date.now();
    callTimerId = setInterval(() => {
      const sec = Math.floor((Date.now() - callStart) / 1000);
      callTimer.textContent = fmtSec(sec);
    }, 1000);
  }, 1200);
}
function closeCall() {
  callModal.classList.add('hidden');
  callModal.classList.remove('flex');
  clearTimeout(callConnectId);
  clearInterval(callTimerId);
  callConnectId = null;
  callTimerId   = null;
}
callClose.addEventListener('click', () => {
  const wasConnected = !!callTimerId;
  closeCall();
  pushAIToast({
    title: wasConnected ? '通话已结束' : '已取消呼叫',
    body: wasConnected
      ? 'Claw 已为你整理本次通话要点，可在「记录」中查看。'
      : '需要时随时点击电话按钮重新呼叫 Claw。',
    icon: 'ri-phone-fill',
  });
});

// ====== 深浅色模式 ======
function applyTheme(mode) {
  if (mode === 'dark') document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');
  localStorage.setItem('openclaw-theme', mode);
}
function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  applyTheme(isDark ? 'light' : 'dark');
}
// 初始：跟随系统/本地
(function initTheme() {
  const saved = localStorage.getItem('openclaw-theme');
  if (saved) applyTheme(saved);
  else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) applyTheme('dark');
  // 全天候自动：晚上 6 点 - 早上 7 点 自动深色（仅初次未设置时）
  if (!saved) {
    const h = new Date().getHours();
    if (h >= 18 || h < 7) applyTheme('dark');
  }
})();

// ====== 启动 ======
renderPage('home');
