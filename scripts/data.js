// ====== 共享数据 mock ======

export const greetings = (() => {
  const h = new Date().getHours();
  if (h < 6)  return { tag: '夜深了', text: '夜深了，注意休息 🌙' };
  if (h < 11) return { tag: '早安', text: '早安，今天会是元气满满的一天 ☀️' };
  if (h < 14) return { tag: '中午好', text: '午后时光，要不要小憩一会儿？' };
  if (h < 18) return { tag: '下午好', text: '下午好，喝杯水放松一下吧 🌤️' };
  if (h < 22) return { tag: '晚上好', text: '晚上好，回家路上注意安全 🌆' };
  return { tag: '晚安', text: '晚安，已为你关闭明天的早餐提醒' };
})();

export const weather = {
  temp: 26,
  desc: '小雨转多云',
  icon: 'ri-drizzle-fill',
  tip: '记得带伞，地铁口风大注意保暖',
  aqi: 38,
};

export const todaySchedule = [
  { id: 1, time: '07:30', period: '晨间', title: '智能闹钟 + 早餐推荐', desc: '今日早餐：燕麦 + 水煮蛋（低脂）', status: 'done',    icon: 'ri-sun-line', tag: '已完成' },
  { id: 2, time: '12:15', period: '午餐', title: '午餐已为你下单', desc: '附近 1.2km · 沙拉碗 · 已避开过敏原', status: 'doing',   icon: 'ri-restaurant-2-line', tag: '配送中' },
  { id: 3, time: '18:30', period: '下班', title: '下班路线已规划', desc: '雨天为你预约滴滴专车，预计 17 分钟', status: 'pending', icon: 'ri-car-line', tag: '需确认' },
  { id: 4, time: '21:00', period: '晚间', title: '晚间健康打卡', desc: '步数 8,432 · 建议拉伸 10 分钟', status: 'pending', icon: 'ri-heart-pulse-line', tag: '待执行' },
  { id: 5, time: '23:00', period: '夜间', title: '智能助眠模式', desc: '将自动调暗灯光、关闭推送', status: 'pending', icon: 'ri-moon-clear-line', tag: '自动' },
];

export const proactiveCards = [
  { id: 'rain',   icon: 'ri-cloud-windy-line', color: 'from-sky-400 to-cyan2-500',
    title: '下雨啦！我已为你处理好',
    actions: ['已把外卖改到 12:30 送达', '帮你预约下午 3 点出行的车'],
    cta: '查看详情' },
  { id: 'work',   icon: 'ri-briefcase-4-line', color: 'from-violet-400 to-indigo-500',
    title: '检测到你今晚要加班',
    actions: ['推荐高蛋白能量餐', '已通知家人晚回 1.5 小时'],
    cta: '一键确认' },
  { id: 'family', icon: 'ri-parent-line', color: 'from-rose-400 to-pink-500',
    title: '妈妈血压记录已更新',
    actions: ['本周平均 128/82，正常', '建议周末陪散步 30 分钟'],
    cta: '查看健康报告' },
];

export const sceneEntries = [
  { name: '点餐吃饭', icon: 'ri-restaurant-line', bg: 'bg-orange-100 text-orange-500', dark: 'dark:bg-orange-500/20' },
  { name: '出行打车', icon: 'ri-taxi-line',       bg: 'bg-sky-100 text-sky-500',       dark: 'dark:bg-sky-500/20' },
  { name: '健康作息', icon: 'ri-heart-pulse-line',bg: 'bg-rose-100 text-rose-500',     dark: 'dark:bg-rose-500/20' },
  { name: '家政服务', icon: 'ri-home-smile-line', bg: 'bg-amber-100 text-amber-500',   dark: 'dark:bg-amber-500/20' },
  { name: '日程规划', icon: 'ri-calendar-line',   bg: 'bg-violet-100 text-violet-500', dark: 'dark:bg-violet-500/20' },
  { name: '应急提醒', icon: 'ri-alarm-warning-line', bg: 'bg-red-100 text-red-500',    dark: 'dark:bg-red-500/20' },
];

export const quickPrompts = [
  '帮我安排今晚吃饭',
  '我要加班',
  '周末带娃去哪玩',
  '安排一次体检',
  '订一杯咖啡',
];

// ====== 商品页 ======
export const goldenIcons = [
  { name:'外卖',    icon:'ri-restaurant-2-fill', color:'bg-orange-100 text-orange-500' },
  { name:'生鲜',    icon:'ri-leaf-fill',         color:'bg-green-100 text-green-500' },
  { name:'便利店',  icon:'ri-store-2-fill',      color:'bg-pink-100 text-pink-500' },
  { name:'美食到店',icon:'ri-cup-fill',          color:'bg-amber-100 text-amber-500' },
  { name:'打车',    icon:'ri-taxi-fill',         color:'bg-sky-100 text-sky-500' },
  { name:'家政',    icon:'ri-broom-fill',        color:'bg-violet-100 text-violet-500' },
  { name:'健康',    icon:'ri-mental-health-fill',color:'bg-rose-100 text-rose-500' },
  { name:'更多',    icon:'ri-apps-2-fill',       color:'bg-slate-100 text-slate-500' },
];

export const recoCategories = [
  { key:'love',   name:'猜你喜欢',   icon:'ri-heart-3-fill' },
  { key:'often',  name:'常吃店铺',   icon:'ri-restaurant-fill' },
  { key:'health', name:'健康低脂',   icon:'ri-leaf-line' },
  { key:'cheap',  name:'高性价比',   icon:'ri-money-cny-circle-line' },
  { key:'near',   name:'附近 3km',   icon:'ri-map-pin-line' },
];

export const shopTabs = ['综合推荐','外卖','到店','生鲜','健康餐'];

export const shopCards = [
  { name:'青禾轻食 · 沙拉工坊', rating:4.9, distance:'0.8km', eta:'25分钟', price:'¥38起',
    tags:['AI 优选','低脂','预算内'], img:'🥗', cover:'from-emerald-200 to-teal-300' },
  { name:'巷口面馆 · 牛肉面',   rating:4.7, distance:'1.2km', eta:'30分钟', price:'¥28起',
    tags:['常吃','无花生'], img:'🍜', cover:'from-amber-200 to-orange-300' },
  { name:'喜茶 GO · 写字楼店',  rating:4.8, distance:'0.5km', eta:'15分钟', price:'¥18起',
    tags:['AI 优选','少糖'], img:'🧋', cover:'from-rose-200 to-pink-300' },
  { name:'盒马鲜生 · 生鲜次日达',rating:4.9, distance:'2.4km', eta:'次日达', price:'¥0起送',
    tags:['新鲜','健康'], img:'🥦', cover:'from-lime-200 to-emerald-300' },
  { name:'肯德基宅急送',         rating:4.6, distance:'1.5km', eta:'28分钟', price:'¥30起',
    tags:['过敏规避'], img:'🍔', cover:'from-orange-200 to-rose-300' },
  { name:'本草膳房 · 养生汤馆',  rating:4.8, distance:'1.8km', eta:'35分钟', price:'¥48起',
    tags:['健康','低脂'], img:'🍲', cover:'from-cyan-200 to-sky-300' },
];

// ====== 工具页 ======
export const toolCategories = [
  { key:'all',  name:'全部技能' },
  { key:'life', name:'生活' },
  { key:'health',name:'健康' },
  { key:'work', name:'工作' },
  { key:'home', name:'家居' },
];

export const skillCards = [
  { id:'order',   name:'智能点餐', desc:'AI 自动选餐 + 一键下单', icon:'ri-restaurant-line', color:'from-orange-400 to-rose-400', running:true,  cat:'life' },
  { id:'travel',  name:'智能出行', desc:'路线/打车/共享自动安排', icon:'ri-taxi-line',       color:'from-sky-400 to-cyan2-500',   running:true,  cat:'life' },
  { id:'health',  name:'健康记录', desc:'步数、心率、血压联动',   icon:'ri-heart-pulse-line',color:'from-rose-400 to-pink-500',   running:true,  cat:'health' },
  { id:'calendar',name:'日程同步', desc:'多平台日历智能同步',     icon:'ri-calendar-todo-line',color:'from-violet-400 to-indigo-500',running:true, cat:'work' },
  { id:'house',   name:'家政预约', desc:'打扫/洗衣/上门服务',     icon:'ri-broom-line',      color:'from-amber-400 to-orange-400',running:false, cat:'home' },
  { id:'budget',  name:'预算记账', desc:'AI 自动分类记账',        icon:'ri-wallet-3-line',   color:'from-green-400 to-emerald-500',running:true, cat:'work' },
  { id:'weather', name:'天气应急', desc:'极端天气主动提醒',       icon:'ri-thunderstorms-line',color:'from-blue-400 to-indigo-500',running:true, cat:'life' },
  { id:'smart',   name:'智能家居', desc:'灯光/空调/门锁联动',     icon:'ri-home-wifi-line',  color:'from-teal-400 to-cyan2-500',  running:true,  cat:'home' },
  { id:'meeting', name:'会议纪要', desc:'语音转写 + 摘要',        icon:'ri-mic-2-line',      color:'from-fuchsia-400 to-purple-500',running:false,cat:'work' },
  { id:'sleep',   name:'睡眠分析', desc:'呼吸/翻身/打鼾监测',     icon:'ri-moon-foggy-line', color:'from-indigo-400 to-violet-500',running:true, cat:'health' },
];

export const taskCenter = [
  { id:1, name:'正在为你推荐晚餐', progress:65, eta:'预计 12s' },
  { id:2, name:'已预约清洁阿姨上门', progress:100, eta:'明日 10:00' },
  { id:3, name:'同步医院体检日程',   progress:30, eta:'分析中…' },
];

// ====== 我的 ======
export const userMemories = [
  { key:'diet',    title:'饮食偏好', desc:'清淡 / 不吃辣 / 喜爱日料',   icon:'ri-restaurant-line', color:'bg-orange-100 text-orange-500' },
  { key:'allergy', title:'忌口/过敏', desc:'花生过敏 / 不吃香菜',       icon:'ri-alarm-warning-line', color:'bg-red-100 text-red-500' },
  { key:'place',   title:'常去地点',  desc:'公司 · 家 · 妈妈家 · 健身房', icon:'ri-map-pin-line', color:'bg-sky-100 text-sky-500' },
  { key:'family',  title:'家庭信息',  desc:'女儿 6 岁 / 父母独居',       icon:'ri-parent-line', color:'bg-rose-100 text-rose-500' },
  { key:'budget',  title:'预算上限',  desc:'每日餐饮 ¥80 · 月度 ¥3000',   icon:'ri-wallet-line', color:'bg-emerald-100 text-emerald-500' },
];

export const settingsSections = [
  {
    title:'智能服务管理',
    items:[
      { name:'全天候管家', desc:'让 AI 全天为你主动服务', sw:true,  icon:'ri-robot-line' },
      { name:'主动提醒', desc:'重要事件自动推送', sw:true,  icon:'ri-notification-3-line' },
      { name:'自动下单确认', desc:'¥50 以内无需二次确认', sw:false, icon:'ri-shake-hands-line' },
    ]
  },
  {
    title:'安全与隐私',
    items:[
      { name:'本地优先存储', desc:'你的记忆只保存在本机', sw:true,  icon:'ri-shield-keyhole-line' },
      { name:'数据导出',     desc:'随时下载属于你的数据',   icon:'ri-download-cloud-line', arrow:true },
      { name:'清除记忆',     desc:'重置 AI 对你的认知',     icon:'ri-eraser-line', arrow:true, danger:true },
      { name:'账号安全',     desc:'登录设备、密保设置',     icon:'ri-lock-2-line', arrow:true },
    ]
  },
  {
    title:'通用设置',
    items:[
      { name:'主题模式', desc:'跟随系统 / 浅色 / 深色',  icon:'ri-contrast-2-line', arrow:true, themeBtn:true },
      { name:'消息推送', desc:'接收 AI 推送', sw:true,  icon:'ri-message-3-line' },
      { name:'关于我们', desc:'OpenClaw v1.0.0',         icon:'ri-information-line', arrow:true },
      { name:'客服帮助', desc:'24h 在线客服',            icon:'ri-customer-service-2-line', arrow:true },
    ]
  }
];

export const recentOrders = [
  { type:'外卖',   icon:'ri-restaurant-2-line', title:'青禾轻食 · 牛油果鸡胸沙拉', time:'今天 12:15', amount:'¥38' },
  { type:'出行',   icon:'ri-taxi-line',         title:'滴滴专车 · 公司→家',         time:'昨天 19:02', amount:'¥42' },
  { type:'家政',   icon:'ri-broom-line',        title:'家庭深度清洁 2 小时',        time:'5月18日',    amount:'¥168' },
  { type:'AI 服务',icon:'ri-robot-line',        title:'帮你预约了周日体检',          time:'5月17日',    amount:'免费' },
];
