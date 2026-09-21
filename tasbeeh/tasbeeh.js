/* ==========================================================
   السبحة الإلكترونية
   - كل ذكر ليه target (رقم) أو null = بدون حد
   - العدّ بيتحفظ لكل ذكر في localStorage
========================================================== */
(function () {
  'use strict';

  /* ---------- البيانات ---------- */
  var CATEGORIES = [
    { id: 'mutlaq', name: 'التسابيح المطلقة', desc: 'تُقال في أي وقت من اليوم ولها أجور عظيمة' },
    { id: 'salah',  name: 'بعد الصلاة',       desc: 'تُقال فور الانتهاء من الصلوات الخمس', sequence: true },
    { id: 'karb',   name: 'تفريج الكروب',     desc: 'تسابيح تفريج الهم والكروب' },
    { id: 'sabah',  name: 'الصباح والمساء',   desc: 'تسابيح أذكار الصباح والمساء' },
    { id: 'nabi',   name: 'الصلاة على النبي', desc: '' }
  ];

  // target: عدد المرات المكتوب للذكر. null = مفيش عدد مكتوب → العدّ مفتوح
  var DHIKR = [
    // 1) التسابيح المطلقة
    { id: 'tasbeeh-hamd', cat: 'mutlaq', title: 'التسبيح والتحميد',
      text: 'سُبْحَانَ اللهِ وَبِحَمْدِهِ', target: 100,
      note: 'من قالها مائة مرة حُطَّت خطاياه وإن كانت مثل زَبَد البحر' },
    { id: 'baqiyat', cat: 'mutlaq', title: 'الباقيات الصالحات',
      text: 'سُبْحَانَ اللهِ، وَالْحَمْدُ لِلَّهِ، وَلا إِلَهَ إِلا اللهُ، وَاللهُ أَكْبَرُ', target: null, note: '' },
    { id: 'thaqilatan', cat: 'mutlaq', title: 'الكلمتان الثقيلتان في الميزان',
      text: 'سُبْحَانَ اللهِ وَبِحَمْدِهِ، سُبْحَانَ اللهِ الْعَظِيمِ', target: null, note: '' },
    { id: 'hawqala', cat: 'mutlaq', title: 'الحوقلة',
      text: 'لا حَوْلَ وَلا قُوَّةَ إِلا بِاللهِ', target: null, note: 'كنز من كنوز الجنة' },

    // 2) بعد الصلاة (بالترتيب)
    { id: 'salah-tasbeeh', cat: 'salah', title: 'التسبيح',
      text: 'سُبْحَانَ اللهِ', target: 33, note: '' },
    { id: 'salah-tahmeed', cat: 'salah', title: 'التحميد',
      text: 'الْحَمْدُ لِلَّهِ', target: 33, note: '' },
    { id: 'salah-takbeer', cat: 'salah', title: 'التكبير',
      text: 'اللهُ أَكْبَرُ', target: 33, note: '' },
    { id: 'salah-tamam', cat: 'salah', title: 'تمام المائة',
      text: 'لا إِلَهَ إِلا اللهُ وَحْدَهُ لا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
      target: null, note: '' },

    // 3) تفريج الهم والكروب
    { id: 'dhun-nun', cat: 'karb', title: 'دعوة ذي النون',
      text: 'لا إِلَهَ إِلا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ', target: null, note: 'دعوة يونس عليه السلام' },
    { id: 'istighfar', cat: 'karb', title: 'الاستغفار',
      text: 'أَسْتَغْفِرُ اللهَ الْعَظِيمَ الَّذِي لا إِلَهَ إِلا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ', target: null, note: '' },

    // 4) الصباح والمساء
    { id: 'sabah-3', cat: 'sabah', title: 'سبحان الله وبحمده عدد خلقه',
      text: 'سُبْحَانَ اللهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ',
      target: 3, note: 'تُقال ثلاث مرات صباحاً' },

    // 5) الصلاة على النبي
    { id: 'salat-nabi', cat: 'nabi', title: 'الصلاة على النبي',
      text: 'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ', target: null,
      note: 'من أفضل الأذكار لتفريج الهموم وقضاء الحوائج' }
  ];

  var BEADS_MAX = 33; // عدد الخرز في الحلقة (زي المسبحة العادية)

  /* ---------- أدوات ---------- */
  var $ = function (id) { return document.getElementById(id); };
  var fmt = function (n) { return Number(n).toLocaleString('ar-EG'); };
  var byId = function (id) { for (var i = 0; i < DHIKR.length; i++) if (DHIKR[i].id === id) return DHIKR[i]; return null; };
  var catById = function (id) { for (var i = 0; i < CATEGORIES.length; i++) if (CATEGORIES[i].id === id) return CATEGORIES[i]; return CATEGORIES[0]; };
  var times = function (n) { return fmt(n) + (n >= 3 && n <= 10 ? ' مرات' : ' مرة'); };

  var el = {
    stage: $('tsbStage'), tag: $('tsbTag'), text: $('tsbText'), note: $('tsbNote'),
    dial: $('tsbDial'), beads: $('tsbBeads'), tap: $('tsbTap'), count: $('tsbCount'), goal: $('tsbGoal'),
    reset: $('tsbReset'), next: $('tsbNext'), haptic: $('tsbHaptic'), status: $('tsbStatus'),
    cats: $('tsbCats'), catDesc: $('tsbCatDesc'), list: $('tsbList')
  };

  /* ---------- الحالة (محفوظة في المتصفح) ---------- */
  var KEY = 'noor:tasbeeh:v1';

  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY));
      if (s && typeof s === 'object') return s;
    } catch (e) {}
    return {};
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify({ selected: state.selected, counts: state.counts, haptics: state.haptics })); }
    catch (e) {}
  }

  var saved = load();
  var state = {
    selected: byId(saved.selected) ? saved.selected : DHIKR[0].id,
    counts: {},
    haptics: saved.haptics !== false,
    cat: null
  };
  if (saved.counts && typeof saved.counts === 'object') {
    Object.keys(saved.counts).forEach(function (k) {
      var v = Number(saved.counts[k]);
      if (byId(k) && isFinite(v) && v > 0) state.counts[k] = Math.floor(v);
    });
  }
  state.cat = byId(state.selected).cat;

  var current = function () { return byId(state.selected); };
  var countOf = function (id) { return state.counts[id] || 0; };

  function vibrate(p) {
    if (state.haptics && navigator.vibrate) navigator.vibrate(p);
  }

  /* ---------- حلقة الخرز ---------- */
  var SVGNS = 'http://www.w3.org/2000/svg';
  var beadEls = [];

  function buildBeads(n) {
    if (beadEls.length === n) return;
    el.beads.textContent = '';
    beadEls = [];
    var R = 136, r = Math.min(10, (2 * Math.PI * R / n) * 0.3);
    for (var i = 0; i < n; i++) {
      var a = (-90 + i * 360 / n) * Math.PI / 180;
      var c = document.createElementNS(SVGNS, 'circle');
      c.setAttribute('cx', (150 + R * Math.cos(a)).toFixed(2));
      c.setAttribute('cy', (150 + R * Math.sin(a)).toFixed(2));
      c.setAttribute('r', r.toFixed(2));
      c.setAttribute('class', 'tsb-bead');
      el.beads.appendChild(c);
      beadEls.push(c);
    }
  }

  function paintBeads(lit, pop) {
    beadEls.forEach(function (b, i) {
      b.classList.toggle('is-lit', i < lit);
      b.classList.remove('pop');
    });
    if (pop && lit > 0) {
      var b = beadEls[lit - 1];
      void b.getBoundingClientRect();
      b.classList.add('pop');
    }
  }

  /* ---------- العدّاد ---------- */
  function nextInSequence(d) {
    if (!catById(d.cat).sequence) return null;
    var items = DHIKR.filter(function (x) { return x.cat === d.cat; });
    var i = items.indexOf(d);
    return items[i + 1] || null;
  }

  function renderStage(pop) {
    var d = current(), c = countOf(d.id), t = d.target;

    el.tag.textContent = catById(d.cat).name;
    el.text.textContent = d.text;
    el.note.textContent = d.note;
    el.note.hidden = !d.note;

    // العدد اللي بيظهر: لو فيه target بنعرض العدّ جوه الدورة الحالية، ولو مفتوح بنعرض الإجمالي
    var shown = t ? (c === 0 ? 0 : ((c - 1) % t) + 1) : c;
    el.count.textContent = fmt(shown);

    var n = (t && t <= BEADS_MAX) ? t : BEADS_MAX;
    buildBeads(n);
    paintBeads(c === 0 ? 0 : ((c - 1) % n) + 1, pop);

    var done = !!t && c > 0 && c % t === 0;
    var lap = (t && c > t) ? ' · دورة ' + fmt(Math.floor((c - 1) / t) + 1) : '';
    el.goal.textContent = t ? (done ? 'اكتمل ✓' : 'من ' + fmt(t)) + lap : 'بدون حد';

    var nx = nextInSequence(d);
    el.next.hidden = !(done && nx);
    el.tap.setAttribute('aria-label', 'سبّح، العدد الحالي ' + fmt(shown));
  }

  el.tap.addEventListener('click', function () {
    var d = current(), c = countOf(d.id) + 1;
    state.counts[d.id] = c;
    save();
    disarmReset();

    var done = !!d.target && c % d.target === 0;
    vibrate(done ? [40, 60, 40] : 8);
    renderStage(true);
    updateListMeta();

    if (done) {
      el.dial.classList.remove('is-pulse');
      void el.dial.offsetWidth;
      el.dial.classList.add('is-pulse');
      el.status.textContent = 'اكتمل ' + d.title;
    }
  });

  el.dial.addEventListener('animationend', function (e) {
    if (e.target === el.tap) el.dial.classList.remove('is-pulse');
  });

  /* إعادة العدّ: ضغطتين (الأولى تطلب التأكيد) */
  var armTimer = null;
  var RESET_LABEL = el.reset.querySelector('span');

  function disarmReset() {
    clearTimeout(armTimer);
    el.reset.classList.remove('is-armed');
    RESET_LABEL.textContent = 'إعادة العدّ';
  }

  el.reset.addEventListener('click', function () {
    var d = current();
    if (countOf(d.id) === 0) return;
    if (!el.reset.classList.contains('is-armed')) {
      el.reset.classList.add('is-armed');
      RESET_LABEL.textContent = 'اضغط للتأكيد';
      armTimer = setTimeout(disarmReset, 3000);
      return;
    }
    disarmReset();
    state.counts[d.id] = 0;
    save();
    renderStage(false);
    updateListMeta();
  });

  el.next.addEventListener('click', function () {
    var nx = nextInSequence(current());
    if (nx) select(nx.id, false);
  });

  /* الاهتزاز (مش موجود على iPhone فبنخفي الزرار) */
  if (!navigator.vibrate) {
    el.haptic.hidden = true;
  } else {
    el.haptic.setAttribute('aria-pressed', String(state.haptics));
    el.haptic.addEventListener('click', function () {
      state.haptics = !state.haptics;
      el.haptic.setAttribute('aria-pressed', String(state.haptics));
      save();
      vibrate(20);
    });
  }

  /* ---------- اختيار الذكر ---------- */
  function renderCats() {
    el.cats.textContent = '';
    CATEGORIES.forEach(function (c) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'tsb-cat';
      b.dataset.cat = c.id;
      b.textContent = c.name;
      b.setAttribute('aria-pressed', String(c.id === state.cat));
      el.cats.appendChild(b);
    });
    var cat = catById(state.cat);
    el.catDesc.textContent = cat.desc;
    el.catDesc.hidden = !cat.desc;
  }

  function span(cls, txt) {
    var s = document.createElement('span');
    s.className = cls;
    if (txt) s.textContent = txt;
    return s;
  }

  function renderList() {
    el.list.textContent = '';
    DHIKR.filter(function (d) { return d.cat === state.cat; }).forEach(function (d) {
      var li = document.createElement('li');
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'tsb-item';
      b.dataset.id = d.id;
      b.appendChild(span('tsb-item-title', d.title));
      b.appendChild(span('tsb-item-goal', d.target ? times(d.target) : 'بدون حد'));
      b.appendChild(span('tsb-item-text', d.text));
      b.appendChild(span('tsb-item-count'));
      li.appendChild(b);
      el.list.appendChild(li);
    });
    updateListMeta();
  }

  function updateListMeta() {
    Array.prototype.forEach.call(el.list.querySelectorAll('.tsb-item'), function (b) {
      var c = countOf(b.dataset.id), tag = b.querySelector('.tsb-item-count');
      b.setAttribute('aria-pressed', String(b.dataset.id === state.selected));
      tag.hidden = c === 0;
      tag.textContent = c ? 'العدد: ' + fmt(c) : '';
    });
  }

  function select(id, scroll) {
    state.selected = id;
    state.cat = byId(id).cat;
    save();
    disarmReset();
    el.status.textContent = '';
    renderCats();
    renderList();
    renderStage(false);
    if (scroll) el.stage.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  el.list.addEventListener('click', function (e) {
    var b = e.target.closest('.tsb-item');
    if (b) select(b.dataset.id, true);
  });

  el.cats.addEventListener('click', function (e) {
    var b = e.target.closest('.tsb-cat');
    if (!b) return;
    state.cat = b.dataset.cat;
    renderCats();
    renderList();
  });

  /* ---------- تشغيل ---------- */
  renderCats();
  renderList();
  renderStage(false);
})();
