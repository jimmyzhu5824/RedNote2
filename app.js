const intentLabels = {
  high: "高意向",
  medium: "中意向",
  low: "低意向",
};

const platforms = {
  rednote: "小红书",
  wechat: "微信",
};

let currentDraftFilter = "all";
let currentMessageFilter = "all";

const state = {
  drafts: [
    {
      id: 1,
      platform: "rednote",
      status: "review",
      favorite: false,
      title: "孩子写字慢，不一定是态度问题",
      hook: "很多家长以为孩子写字慢是拖拉，其实常见原因是控笔、坐姿和笔画顺序没有打好。",
      body: "今天给小学低年级家长一个简单观察法：看孩子是否握笔太紧、字距忽大忽小、写到后半页明显变形。写字课不只是把字写漂亮，更是帮孩子建立稳定书写习惯。可以先从每天 10 分钟控笔练习开始，别一上来就要求整页重写。",
      media: "配图建议：孩子握笔姿势对比、3 个控笔练习小图、课堂前后作品对比。",
      courses: ["写字"],
      ages: ["幼儿", "小学"],
      styles: ["家长痛点", "知识科普"],
    },
    {
      id: 2,
      platform: "rednote",
      status: "review",
      favorite: true,
      title: "三年级英语开始吃力，先看这 3 件事",
      hook: "三年级不是突然变难，而是听说读写开始一起要结果。",
      body: "如果孩子单词背了又忘、句子会读不会用，家长先别急着加量。可以检查：自然拼读是否断层、课内句型是否能开口表达、每天是否有固定 8-12 分钟听读。课程安排上建议先补方法，再做练习量。",
      media: "短视频脚本：老师讲 3 个信号，穿插课堂听读片段和家长常见提问。",
      courses: ["英语"],
      ages: ["小学"],
      styles: ["家长痛点", "活动引流"],
    },
    {
      id: 3,
      platform: "wechat",
      status: "approved",
      favorite: false,
      title: "本周幼儿画画主题：把春天画进瓶子里",
      hook: "适合 4-6 岁孩子的色彩感知主题课。",
      body: "本周画画课会带孩子观察花朵、叶片和透明瓶子的形状，用水彩和拼贴完成一幅春天主题作品。我们更看重孩子敢表达、能观察，而不是画得像不像。",
      media: "朋友圈配图：课堂材料、孩子过程照、成品墙。",
      courses: ["画画"],
      ages: ["幼儿"],
      styles: ["成果展示", "案例故事"],
    },
    {
      id: 4,
      platform: "rednote",
      status: "review",
      favorite: false,
      title: "初中数学不是刷题越多越好",
      hook: "题做了很多，分数不稳定，通常是错题没有被真正归类。",
      body: "初中数学提升效率的关键，是把错题分成概念不清、步骤遗漏、计算失误、审题偏差四类。每类对应的训练方式不同。家长陪学时，不建议只盯正确率，更要看孩子能不能说出错因。",
      media: "配图建议：错题分类表、课堂板书、学生复盘卡。",
      courses: ["数学"],
      ages: ["初中"],
      styles: ["知识科普", "家长痛点"],
    },
  ],
  materials: [],
  messages: [
    {
      id: 1,
      customer: "小满妈妈",
      platform: "rednote",
      content: "孩子三年级，英语单词总是背了就忘，你们能试听吗？",
      intent: "high",
      reason: "包含孩子年级、明确课程痛点，并主动询问试听。",
      suggestion: "可以的，我们有三年级英语试听安排。我先了解一下孩子目前是单词记忆困难多，还是句子开口表达也吃力？",
      risk: "low",
      createdAt: "今天 09:18",
      leadId: 1,
    },
    {
      id: 2,
      customer: "周周爸",
      platform: "wechat",
      content: "写字课在哪里上？适合一年级吗？",
      intent: "medium",
      reason: "询问地址和适合年级，有课程兴趣但尚未表达报名或试听。",
      suggestion: "适合一年级孩子。我们会先看握笔、坐姿和笔画基础，再安排对应班型。您方便说下孩子目前写字主要慢，还是字形不稳定？",
      risk: "low",
      createdAt: "今天 10:42",
    },
    {
      id: 3,
      customer: "橙子",
      platform: "rednote",
      content: "收藏了，感觉挺实用",
      intent: "low",
      reason: "表达认可但没有明确课程需求或咨询动作。",
      suggestion: "谢谢收藏，后面也会继续分享适合家长在家观察的小方法。",
      risk: "low",
      createdAt: "今天 11:06",
    },
    {
      id: 4,
      customer: "林女士",
      platform: "wechat",
      content: "初一数学怎么收费？这周末能不能约老师看一下孩子情况？",
      intent: "high",
      reason: "明确询价、预约时间和孩子情况评估，转化意向强。",
      suggestion: "可以约。本周末还有两个测评时段，我先帮您登记。孩子目前主要是计算失误多，还是几何和应用题更吃力？",
      risk: "low",
      createdAt: "今天 12:20",
      leadId: 2,
    },
    {
      id: 5,
      customer: "贝贝妈妈",
      platform: "rednote",
      content: "画画课多大的孩子可以上？",
      intent: "medium",
      reason: "询问年龄适配，属于有效兴趣但未到预约阶段。",
      suggestion: "我们幼儿画画课主要适合 4-6 岁，重点是观察、色彩和表达。孩子现在几岁了？",
      risk: "low",
      createdAt: "今天 14:03",
    },
  ],
  leads: [
    {
      id: 1,
      customer: "小满妈妈",
      contact: "小红书私信中",
      platform: "rednote",
      course: "英语",
      grade: "小学三年级",
      intent: "high",
      summary: "单词背了就忘，询问试听。",
      recent: "孩子三年级，英语单词总是背了就忘，你们能试听吗？",
      status: "新线索",
      nextFollow: "今天 16:00",
      owner: "运营A",
      lastContact: "今天 09:18",
    },
    {
      id: 2,
      customer: "林女士",
      contact: "微信好友",
      platform: "wechat",
      course: "数学",
      grade: "初一",
      intent: "high",
      summary: "询问收费，想周末约老师评估。",
      recent: "初一数学怎么收费？这周末能不能约老师看一下孩子情况？",
      status: "新线索",
      nextFollow: "今天 15:30",
      owner: "运营A",
      lastContact: "今天 12:20",
    },
    {
      id: 3,
      customer: "周周爸",
      contact: "微信待确认",
      platform: "wechat",
      course: "写字",
      grade: "小学一年级",
      intent: "medium",
      summary: "询问写字课地址和一年级适配。",
      recent: "写字课在哪里上？适合一年级吗？",
      status: "已回复",
      nextFollow: "明天 10:00",
      owner: "运营A",
      lastContact: "今天 10:42",
    },
    {
      id: 4,
      customer: "贝贝妈妈",
      contact: "小红书私信中",
      platform: "rednote",
      course: "画画",
      grade: "幼儿",
      intent: "medium",
      summary: "询问画画课年龄适配。",
      recent: "画画课多大的孩子可以上？",
      status: "已回复",
      nextFollow: "明天 14:00",
      owner: "运营A",
      lastContact: "今天 14:03",
    },
    {
      id: 5,
      customer: "安安妈妈",
      contact: "微信好友",
      platform: "wechat",
      course: "语文",
      grade: "小学四年级",
      intent: "high",
      summary: "作文害怕动笔，想了解班型。",
      recent: "孩子四年级作文总写不出来，最近想系统看看。",
      status: "已邀约",
      nextFollow: "今天 18:30",
      owner: "运营A",
      lastContact: "昨天 20:15",
    },
  ],
};

const viewTitles = {
  dashboard: "今日工作台",
  drafts: "内容草稿中心",
  materials: "素材搜索与参考",
  messages: "评论与私信分级",
  leads: "线索表",
};

function $(selector) {
  return document.querySelector(selector);
}

function $all(selector) {
  return Array.from(document.querySelectorAll(selector));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function platformClass(platform) {
  return platform === "rednote" ? "platform-red" : "platform-wechat";
}

function intentClass(intent) {
  return `intent-${intent}`;
}

function renderMetrics() {
  const pendingDrafts = state.drafts.filter((draft) => draft.status === "review").length;
  const pendingMessages = state.messages.length;
  const highLeads = state.leads.filter((lead) => lead.intent === "high").length;
  const publishReady = state.drafts.filter((draft) => draft.status === "approved").length;

  $("#metrics").innerHTML = [
    ["待审核草稿", pendingDrafts],
    ["待处理评论/私信", pendingMessages],
    ["高意向线索", highLeads],
    ["待人工发布", publishReady],
  ]
    .map(([label, value]) => `<article class="metric-card"><span>${label}</span><strong>${value}</strong></article>`)
    .join("");
}

function leadPriority(lead) {
  const intentScore = lead.intent === "high" ? 100 : lead.intent === "medium" ? 50 : 10;
  const todayScore = lead.nextFollow.includes("今天") ? 30 : 0;
  const statusScore = lead.status === "新线索" ? 25 : lead.status === "已邀约" ? 15 : 5;
  return intentScore + todayScore + statusScore;
}

function renderFollowList() {
  const leads = [...state.leads].sort((a, b) => leadPriority(b) - leadPriority(a)).slice(0, 5);
  $("#followList").innerHTML = leads
    .map(
      (lead) => `
        <article class="follow-card">
          <div>
            <div class="tag-row">
              <span class="tag ${platformClass(lead.platform)}">${platforms[lead.platform]}</span>
              <span class="tag ${intentClass(lead.intent)}">${intentLabels[lead.intent]}</span>
              <span class="tag">${lead.course}</span>
            </div>
            <h3>${escapeHtml(lead.customer)}</h3>
            <p>${escapeHtml(lead.recent)}</p>
            <div class="meta-row">
              <span class="tag">上次互动 ${escapeHtml(lead.lastContact)}</span>
              <span class="tag">下次 ${escapeHtml(lead.nextFollow)}</span>
            </div>
          </div>
          <button class="small-button" data-follow="${lead.id}">记录跟进</button>
        </article>
      `,
    )
    .join("");
}

function statusText(status) {
  return {
    review: "待审核",
    approved: "待发布",
    rejected: "已驳回",
  }[status];
}

function renderDrafts() {
  const drafts = state.drafts.filter((draft) => currentDraftFilter === "all" || draft.status === currentDraftFilter);
  $("#draftList").innerHTML = drafts.length
    ? drafts
        .map(
          (draft) => `
          <article class="draft-card">
            <div class="tag-row">
              <span class="tag ${platformClass(draft.platform)}">${platforms[draft.platform]}</span>
              <span class="tag">${statusText(draft.status)}</span>
              ${draft.favorite ? '<span class="tag intent-medium">已收藏</span>' : ""}
            </div>
            <h3>${escapeHtml(draft.title)}</h3>
            <p>${escapeHtml(draft.hook)}</p>
            <textarea data-draft-body="${draft.id}" aria-label="${escapeHtml(draft.title)}正文">${escapeHtml(draft.body)}</textarea>
            <p>${escapeHtml(draft.media)}</p>
            <div class="tag-row">
              ${draft.courses.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
              ${draft.ages.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
              ${draft.styles.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
            </div>
            <div class="card-actions">
              <button class="small-button" data-approve-draft="${draft.id}">标记待发布</button>
              <button class="small-button" data-reject-draft="${draft.id}">驳回</button>
              <button class="small-button" data-favorite-draft="${draft.id}">${draft.favorite ? "取消收藏" : "收藏"}</button>
              <button class="small-button" data-copy-draft="${draft.id}">复制发布内容</button>
            </div>
          </article>
        `,
        )
        .join("")
    : '<div class="empty-state">当前筛选下暂无草稿。</div>';
}

function materialTemplate(query) {
  return [
    {
      title: "标题方向：孩子写字慢，先别急着催",
      structure: "痛点开场 → 常见原因拆解 → 一个家庭观察法 → 引导试听评估",
      insight: "家长容易被“拖拉”触发，内容应先降低焦虑，再给可执行检查点。",
      wording: "可以借鉴“不是态度问题，可能是基础动作没稳定”的表达。",
      risks: ["避免承诺短期变漂亮", "不复制他人作品前后对比图", "不暗示治疗效果"],
      query,
    },
    {
      title: "标题方向：一年级写字课到底练什么",
      structure: "家长疑问 → 课堂训练模块 → 家庭配合方式 → 适合孩子类型",
      insight: "转化点在“课程不是机械描红”，而是坐姿、控笔、笔顺和耐心。",
      wording: "可用“先稳，再快，再美观”的三段式。",
      risks: ["不要使用同城机构原图", "避免贬低学校教学", "避免夸大老师资历"],
      query,
    },
    {
      title: "标题方向：写字好看的孩子，都有这些小习惯",
      structure: "结果展示 → 习惯清单 → 课堂训练画面 → 私信领取测评",
      insight: "适合配课堂细节图，突出过程和习惯，不只晒成品。",
      wording: "可借鉴“每天 10 分钟，比一次写两页更有效”的节奏感。",
      risks: ["前后对比需获得授权", "不使用绝对化结果", "不诱导虚假互动"],
      query,
    },
  ];
}

function renderMaterials() {
  $("#materialResults").innerHTML = state.materials.length
    ? state.materials
        .map(
          (item) => `
        <article class="material-card">
          <span class="tag platform-red">小红书公开参考</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p><strong>内容结构：</strong>${escapeHtml(item.structure)}</p>
          <p><strong>家长痛点：</strong>${escapeHtml(item.insight)}</p>
          <p><strong>可借鉴表达：</strong>${escapeHtml(item.wording)}</p>
          <div class="risk-list"><strong>风险提示：</strong>${item.risks.map(escapeHtml).join("；")}</div>
          <div class="card-actions">
            <button class="small-button" data-material-draft="${escapeHtml(item.title)}">生成新草稿</button>
            <button class="small-button" data-save-material="${escapeHtml(item.title)}">加入素材库</button>
          </div>
        </article>
      `,
        )
        .join("")
    : '<div class="empty-state">输入素材需求后，会返回标题方向、内容结构、痛点和风险提示。</div>';
}

function renderMessages() {
  const messages = state.messages.filter((message) => currentMessageFilter === "all" || message.intent === currentMessageFilter);
  $("#messageList").innerHTML = messages
    .map(
      (message) => `
      <article class="message-card">
        <div>
          <div class="tag-row">
            <span class="tag ${platformClass(message.platform)}">${platforms[message.platform]}</span>
            <span class="tag ${intentClass(message.intent)}">${intentLabels[message.intent]}</span>
            <span class="tag">${escapeHtml(message.createdAt)}</span>
          </div>
          <h3>${escapeHtml(message.customer)}</h3>
          <p>${escapeHtml(message.content)}</p>
          <p><strong>AI 理由：</strong>${escapeHtml(message.reason)}</p>
          <textarea data-suggestion="${message.id}" aria-label="${escapeHtml(message.customer)}回复建议">${escapeHtml(message.suggestion)}</textarea>
        </div>
        <div>
          <label>
            意向等级
            <select data-message-intent="${message.id}">
              <option value="low" ${message.intent === "low" ? "selected" : ""}>低意向</option>
              <option value="medium" ${message.intent === "medium" ? "selected" : ""}>中意向</option>
              <option value="high" ${message.intent === "high" ? "selected" : ""}>高意向</option>
            </select>
          </label>
          <div class="card-actions">
            <button class="small-button" data-confirm-reply="${message.id}">确认回复</button>
            <button class="small-button" data-create-lead="${message.id}">转为线索</button>
          </div>
        </div>
      </article>
    `,
    )
    .join("");
}

function renderLeads() {
  $("#leadRows").innerHTML = state.leads
    .map(
      (lead) => `
      <tr>
        <td>
          <strong>${escapeHtml(lead.customer)}</strong>
          <span class="lead-note">${escapeHtml(lead.contact)}</span>
        </td>
        <td><span class="tag ${platformClass(lead.platform)}">${platforms[lead.platform]}</span></td>
        <td>${escapeHtml(lead.course)}</td>
        <td>${escapeHtml(lead.grade)}</td>
        <td><span class="tag ${intentClass(lead.intent)}">${intentLabels[lead.intent]}</span></td>
        <td>
          <select data-lead-status="${lead.id}">
            ${["新线索", "已回复", "已邀约", "已试听", "已报名", "暂不跟进"]
              .map((status) => `<option ${lead.status === status ? "selected" : ""}>${status}</option>`)
              .join("")}
          </select>
        </td>
        <td><input data-lead-follow="${lead.id}" value="${escapeHtml(lead.nextFollow)}" /></td>
        <td>${escapeHtml(lead.owner)}</td>
      </tr>
    `,
    )
    .join("");
}

function renderAll() {
  renderMetrics();
  renderFollowList();
  renderDrafts();
  renderMaterials();
  renderMessages();
  renderLeads();
}

function switchView(view) {
  $all(".view").forEach((item) => item.classList.toggle("active", item.id === view));
  $all(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === view));
  $("#viewTitle").textContent = viewTitles[view];
}

function showConfirm(title, text, onConfirm) {
  const dialog = $("#confirmDialog");
  $("#dialogTitle").textContent = title;
  $("#dialogText").textContent = text;
  dialog.showModal();
  dialog.onclose = () => {
    if (dialog.returnValue === "confirm") {
      onConfirm();
    }
  };
}

function inferCourse(text) {
  if (text.includes("英语")) return "英语";
  if (text.includes("数学")) return "数学";
  if (text.includes("语文") || text.includes("作文")) return "语文";
  if (text.includes("画")) return "画画";
  if (text.includes("写字")) return "写字";
  return "语数英";
}

function inferGrade(text) {
  if (text.includes("幼儿") || text.includes("4-6")) return "幼儿";
  const gradeMatch = text.match(/[一二三四五六七八九]年级|初[一二三]/);
  return gradeMatch ? gradeMatch[0] : "待补充";
}

function upsertLeadFromMessage(message) {
  const existing = state.leads.find((lead) => lead.customer === message.customer && lead.platform === message.platform);
  if (existing) {
    existing.intent = message.intent;
    existing.recent = message.content;
    existing.summary = message.reason;
    existing.lastContact = message.createdAt;
    existing.nextFollow = message.intent === "high" ? "今天 18:00" : existing.nextFollow;
    message.leadId = existing.id;
    return existing;
  }

  const lead = {
    id: Date.now(),
    customer: message.customer,
    contact: message.platform === "wechat" ? "微信待确认" : "小红书私信中",
    platform: message.platform,
    course: inferCourse(message.content),
    grade: inferGrade(message.content),
    intent: message.intent,
    summary: message.reason,
    recent: message.content,
    status: "新线索",
    nextFollow: message.intent === "high" ? "今天 18:00" : "明天 10:00",
    owner: "运营A",
    lastContact: message.createdAt,
  };
  state.leads.unshift(lead);
  message.leadId = lead.id;
  return lead;
}

function addGeneratedDraft() {
  state.drafts.unshift({
    id: Date.now(),
    platform: "rednote",
    status: "review",
    favorite: false,
    title: "小学语文阅读理解，先学会找证据",
    hook: "很多孩子不是不会读，而是不知道答案要回到原文里找。",
    body: "阅读理解练习时，可以先让孩子用铅笔划出题目关键词，再回到原文找对应句。低年级先练“找得到”，中高年级再练“说得清”。这样比单纯刷题更容易看见问题出在哪里。",
    media: "配图建议：阅读题步骤卡、课堂圈画示例、孩子复盘记录。",
    courses: ["语文"],
    ages: ["小学"],
    styles: ["知识科普", "家长痛点"],
  });
  renderAll();
  switchView("drafts");
}

function bindEvents() {
  $all(".nav-item").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  $("#generateDraftButton").addEventListener("click", () => {
    showConfirm("生成今日草稿", "AI 将新增 1 条待审核草稿，仍需运营人员编辑确认后才能进入待发布。", addGeneratedDraft);
  });

  $("#importMessagesButton").addEventListener("click", () => {
    showConfirm("导入消息摘要", "这里模拟半自动采集：只导入文本摘要，不自动登录平台，也不自动回复。", () => {
      state.messages.unshift({
        id: Date.now(),
        customer: "安安妈妈",
        platform: "wechat",
        content: "孩子四年级作文总写不出来，最近想系统看看。",
        intent: "high",
        reason: "包含年级、明确语文作文痛点，并表达近期咨询意愿。",
        suggestion: "可以的。四年级作文我们会先看素材积累、结构表达和审题习惯。您方便发一篇孩子最近的作文吗？",
        risk: "low",
        createdAt: "刚刚",
      });
      upsertLeadFromMessage(state.messages[0]);
      renderAll();
      switchView("messages");
    });
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    if (target.matches("[data-approve-draft]")) {
      const draft = state.drafts.find((item) => item.id === Number(target.dataset.approveDraft));
      draft.status = "approved";
      renderAll();
    }

    if (target.matches("[data-reject-draft]")) {
      const draft = state.drafts.find((item) => item.id === Number(target.dataset.rejectDraft));
      draft.status = "rejected";
      renderAll();
    }

    if (target.matches("[data-favorite-draft]")) {
      const draft = state.drafts.find((item) => item.id === Number(target.dataset.favoriteDraft));
      draft.favorite = !draft.favorite;
      renderAll();
    }

    if (target.matches("[data-copy-draft]")) {
      const draft = state.drafts.find((item) => item.id === Number(target.dataset.copyDraft));
      showConfirm("复制发布内容", `将复制《${draft.title}》。复制后仍需人工打开平台并确认发布。`, () => {
        const text = `${draft.title}\n\n${draft.hook}\n\n${draft.body}`;
        navigator.clipboard?.writeText(text);
      });
    }

    if (target.matches("[data-confirm-reply]")) {
      const message = state.messages.find((item) => item.id === Number(target.dataset.confirmReply));
      showConfirm("确认回复建议", `将把给 ${message.customer} 的回复建议复制到剪贴板，仍需人工发送。`, () => {
        navigator.clipboard?.writeText(message.suggestion);
      });
    }

    if (target.matches("[data-create-lead]")) {
      const message = state.messages.find((item) => item.id === Number(target.dataset.createLead));
      upsertLeadFromMessage(message);
      renderAll();
      switchView("leads");
    }

    if (target.matches("[data-follow]")) {
      const lead = state.leads.find((item) => item.id === Number(target.dataset.follow));
      lead.status = lead.status === "新线索" ? "已回复" : lead.status;
      lead.lastContact = "刚刚";
      renderAll();
    }

    if (target.matches("[data-material-draft]")) {
      state.drafts.unshift({
        id: Date.now(),
        platform: "rednote",
        status: "review",
        favorite: false,
        title: target.dataset.materialDraft.replace("标题方向：", ""),
        hook: "根据素材结构二次创作，保留家长痛点，不复制原文。",
        body: "先用家长真实困惑开场，再拆解一个可观察的小问题，最后引导家长私信说明孩子年龄和当前情况。内容需要结合本机构课堂案例重新编辑。",
        media: "配图建议：使用自有课堂照片或授权作品，不使用他人素材原图。",
        courses: ["写字"],
        ages: ["小学"],
        styles: ["家长痛点", "活动引流"],
      });
      renderAll();
      switchView("drafts");
    }
  });

  document.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    if (target.matches("[data-message-intent]")) {
      const message = state.messages.find((item) => item.id === Number(target.dataset.messageIntent));
      message.intent = target.value;
      if (message.intent === "high") upsertLeadFromMessage(message);
      renderAll();
    }

    if (target.matches("[data-lead-status]")) {
      const lead = state.leads.find((item) => item.id === Number(target.dataset.leadStatus));
      lead.status = target.value;
      renderAll();
    }
  });

  document.addEventListener("input", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    if (target.matches("[data-draft-body]")) {
      const draft = state.drafts.find((item) => item.id === Number(target.dataset.draftBody));
      draft.body = target.value;
    }

    if (target.matches("[data-suggestion]")) {
      const message = state.messages.find((item) => item.id === Number(target.dataset.suggestion));
      message.suggestion = target.value;
    }

    if (target.matches("[data-lead-follow]")) {
      const lead = state.leads.find((item) => item.id === Number(target.dataset.leadFollow));
      lead.nextFollow = target.value;
    }
  });

  $all("[data-draft-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      currentDraftFilter = button.dataset.draftFilter;
      $all("[data-draft-filter]").forEach((item) => item.classList.toggle("active", item === button));
      renderDrafts();
    });
  });

  $all("[data-message-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      currentMessageFilter = button.dataset.messageFilter;
      $all("[data-message-filter]").forEach((item) => item.classList.toggle("active", item === button));
      renderMessages();
    });
  });

  $("#materialForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const query = $("#materialQuery").value.trim() || "教育机构小红书内容参考";
    state.materials = materialTemplate(query);
    renderMaterials();
  });

  $("#addLeadButton").addEventListener("click", () => {
    state.leads.unshift({
      id: Date.now(),
      customer: "新客户",
      contact: "待补充",
      platform: "wechat",
      course: "待确认",
      grade: "待确认",
      intent: "medium",
      summary: "手动新增线索。",
      recent: "运营手动录入。",
      status: "新线索",
      nextFollow: "明天 10:00",
      owner: "运营A",
      lastContact: "刚刚",
    });
    renderAll();
  });
}

renderAll();
bindEvents();
