/* ============================================
   DATA
============================================ */
const DUA_DATA = [
  { text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ", source: "رواه ابن ماجه وصححه الألباني" },
  { text: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", source: "سورة البقرة" },
  { text: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ", source: "رواه أبو داود وصححه الألباني" },
  { text: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي", source: "سورة طه" },
  { text: "اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي", source: "رواه مسلم" },
  { text: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا", source: "سورة الفرقان" },
  { text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحُزْنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ", source: "رواه البخاري" },
  { text: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ", source: "رواه الترمذي وصححه الألباني" },
  { text: "اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي، وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي", source: "رواه مسلم" },
  { text: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ، نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيرُ", source: "سورة آل عمران" },
  { text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ حُسْنَ الْخَاتِمَةِ", source: "رواه الطبراني" },
  { text: "رَبِّ زِدْنِي عِلْمًا", source: "سورة طه" },
];

const PROPHETS = [
  { name: "سيدنا آدم", desc: "أبو البشر عليه السلام", emoji: "🌿", id: "adam" },
  { name: "سيدنا نوح", desc: "نبي الله ونجيّه", emoji: "⛵", id: "nuh" },
  { name: "سيدنا إبراهيم", desc: "خليل الرحمن", emoji: "🔥", id: "ibrahim" },
  { name: "سيدنا موسى", desc: "كليم الله", emoji: "✨", id: "musa" },
  { name: "سيدنا عيسى", desc: "روح الله", emoji: "🌟", id: "isa" },
  { name: "سيدنا محمد", desc: "خاتم الأنبياء ﷺ", emoji: "☪️", id: "muhammad" },
  { name: "سيدنا يوسف", desc: "أحسن القصص", emoji: "🏺", id: "yusuf" },
  { name: "سيدنا سليمان", desc: "ملك الأنبياء", emoji: "👑", id: "sulayman" },
];

const SCHOLARS = [
  { name: "محمد صديق المنشاوي", img: "imges/menshawy.jpg", url: "scholars/menshawy/menshawy.html" },
  { name: "ياسر الدوسري", img: "imges/ياسر_الدوسري.jpg", url: "scholars/yaser/yaser.html" },
  { name: "عبدالباسط عبدالصمد", img: "imges/عبدالباسط_عبدالصمد.jpg", url: "scholars/abd-albasit/abd-albasit.html" },
  { name: "ماهر المعيقلي", img: "imges/Maher.jpeg", url: "scholars/maher/maher.html" },
  { name: "مشاري العفاسي", img: "imges/Mashare.jpeg", url: "scholars/mashare/mashare.html" },
  { name: "ناصر القطامي", img: "imges/nasser.jpg", url: "scholars/nasser/nasser.html" },
  { name: "سعد الغامدي", img: "imges/ghamdi.jpg", url: "scholars/ghamdi/ghamdi.html" },
  { name: "عبدالرحمن السديس", img: "imges/sudais.jpg", url: "scholars/sudais/sudais.html" },
  { name: "خالد الجليل", img: "imges/jaleel.jpg", url: "scholars/jaleel/jaleel.html" },
  { name: "محمد جبريل", img: "imges/jibreel.jpg", url: "scholars/jibreel/jibreel.html" },
  { name: "محمد أيوب", img: "imges/ayyub.jpg", url: "scholars/ayyub/ayyub.html" },
  { name: "سعود الشريم", img: "imges/shuraim.jpeg", url: "scholars/shuraim/shuraim.html" },
];

const VIDEOS = [
  { id: "pB7uZzu2dLI", title: "فيديو 1", channel: "قصص الأنبياء" },
  { id: "8UTKSiLnL7o", title: "فيديو 2", channel: "قصص الأنبياء" },
  { id: "MLuVgXMFAJs", title: "فيديو 3", channel: "قصص الأنبياء" },
  { id: "8fAUzFl5eRI", title: "فيديو 4", channel: "قصص الأنبياء" },
  { id: "8HOQIKt3uUQ", title: "فيديو 5", channel: "قصص الأنبياء" },
  { id: "JifgWr2Xo0M", title: "فيديو 6", channel: "قصص الأنبياء" },
  { id: "RJpQo78JvT8", title: "فيديو 7", channel: "قصص الأنبياء" },
  { id: "DdPCewixmUk", title: "فيديو 8", channel: "قصص الأنبياء" },
  { id: "AS0SIybXFGg", title: "فيديو 9", channel: "قصص الأنبياء" },
  { id: "ZBYdoe5fNa4", title: "فيديو 10", channel: "قصص الأنبياء" },
  { id: "I1dUAtzk5gM", title: "فيديو 11", channel: "قصص الأنبياء" },
  { id: "FTPhkGxAA3g", title: "فيديو 12", channel: "قصص الأنبياء" },
  { id: "LZzTxnKPo5w", title: "فيديو 13", channel: "قصص الأنبياء" },
  { id: "6AuGZgzuUd0", title: "فيديو 14", channel: "قصص الأنبياء" },
  { id: "mbmCUY8iaJA", title: "فيديو 15", channel: "قصص الأنبياء" },
  { id: "N8CUpZr8SHk", title: "فيديو 16", channel: "قصص الأنبياء" },
  { id: "VQpvw49HG0Q", title: "فيديو 17", channel: "قصص الأنبياء" },
  { id: "K2KHCxpGJ1s", title: "فيديو 18", channel: "قصص الأنبياء" },
  { id: "wVd6CdWhwhM", title: "فيديو 19", channel: "قصص الأنبياء" },
  { id: "k4nk2i6PEQo", title: "فيديو 20", channel: "قصص الأنبياء" },
  { id: "SmyDB6MxvjM", title: "فيديو 21", channel: "قصص الأنبياء" },
  { id: "Yfxzxd25s_s", title: "فيديو 22", channel: "قصص الأنبياء" },
  { id: "iWLabR0VJqE", title: "فيديو 23", channel: "قصص الأنبياء" },
  { id: "bmIRaxIlGj4", title: "فيديو 24", channel: "قصص الأنبياء" },
  { id: "PK91XcehU8I", title: "فيديو 25", channel: "قصص الأنبياء" },
  { id: "-7Dvnyg8q3k", title: "فيديو 26", channel: "قصص الأنبياء" },
  { id: "QK2gqqETvDw", title: "فيديو 27", channel: "قصص الأنبياء" },
  { id: "6zifF1cJJkU", title: "فيديو 28", channel: "قصص الأنبياء" },
  { id: "pekXxazOgsg", title: "فيديو 29", channel: "قصص الأنبياء" },
  { id: "xrtXvmyHxEA", title: "فيديو 30", channel: "قصص الأنبياء" },
];

/* ============================================
   PRAYER TIMES
============================================ */
const PRAYER_NAMES = { Fajr:"الفجر", Sunrise:"الشروق", Dhuhr:"الظهر", Asr:"العصر", Maghrib:"المغرب", Isha:"العشاء" };
let prayerTimes = {};
let countdownInterval;

async function loadPrayerTimes() {
  try {
    let lat = 30.0444, lon = 31.2357; // Cairo default
    if (navigator.geolocation) {
      await new Promise(res => navigator.geolocation.getCurrentPosition(
        pos => { lat = pos.coords.latitude; lon = pos.coords.longitude; res(); },
        () => res(), { timeout: 4000 }
      ));
    }
    const today = new Date();
    const dateStr = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;
    const url = `https://api.aladhan.com/v1/timings/${dateStr}?latitude=${lat}&longitude=${lon}&method=5`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.data && data.data.timings) {
      const t = data.data.timings;
      prayerTimes = {
        Fajr: t.Fajr, Sunrise: t.Sunrise, Dhuhr: t.Dhuhr,
        Asr: t.Asr, Maghrib: t.Maghrib, Isha: t.Isha
      };
      updatePrayerUI();
      startCountdown();
    }
  } catch(e) { console.error("Prayer API:", e); }
}

function timeToMinutes(t) {
  const [h,m] = t.split(':').map(Number);
  return h*60+m;
}

function formatTime12(t) {
  const [h,m] = t.split(':').map(Number);
  const ampm = h >= 12 ? 'م' : 'ص';
  const h12 = h % 12 || 12;
  return `${h12}:${String(m).padStart(2,'0')} ${ampm}`;
}

function updatePrayerUI() {
  const now = new Date();
  const nowMins = now.getHours()*60 + now.getMinutes();

  // Update mini cards
  const ids = { Fajr:'fajr', Dhuhr:'dhuhr', Asr:'asr', Maghrib:'maghrib', Isha:'isha', Sunrise:'sunrise' };
  for (const [k,v] of Object.entries(ids)) {
    const el = document.getElementById(`pm-${v}`);
    if (el && prayerTimes[k]) {
      el.querySelector('.prayer-mini-time').textContent = formatTime12(prayerTimes[k]);
      el.classList.remove('active-prayer');
    }
  }

  // Find next prayer
  const order = ['Fajr','Sunrise','Dhuhr','Asr','Maghrib','Isha'];
  let nextName = null, nextTime = null;
  for (const p of order) {
    if (prayerTimes[p] && timeToMinutes(prayerTimes[p]) > nowMins) {
      nextName = p; nextTime = prayerTimes[p]; break;
    }
  }
  if (!nextName) { nextName = 'Fajr'; nextTime = prayerTimes['Fajr']; }

  document.getElementById('nextPrayerName').textContent = PRAYER_NAMES[nextName] || nextName;
  document.getElementById('nextPrayerTime').textContent = nextTime ? formatTime12(nextTime) : '--:--';

  // Mark active
  const activeId = ids[nextName];
  if (activeId) {
    const el = document.getElementById(`pm-${activeId}`);
    if (el) el.classList.add('active-prayer');
  }
}

function startCountdown() {
  if (countdownInterval) clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    updatePrayerUI();
    const now = new Date();
    const nowMins = now.getHours()*60 + now.getMinutes();
    const order = ['Fajr','Sunrise','Dhuhr','Asr','Maghrib','Isha'];
    let nextMins = null;
    for (const p of order) {
      if (prayerTimes[p] && timeToMinutes(prayerTimes[p]) > nowMins) {
        nextMins = timeToMinutes(prayerTimes[p]); break;
      }
    }
    if (nextMins === null) {
      // Tomorrow's fajr
      nextMins = timeToMinutes(prayerTimes['Fajr']) + 1440;
    }
    let diff = (nextMins - nowMins) * 60 - now.getSeconds();
    if (diff < 0) diff = 0;
    const h = Math.floor(diff/3600);
    const m = Math.floor((diff%3600)/60);
    const s = diff%60;
    document.getElementById('cH').textContent = String(h).padStart(2,'0');
    document.getElementById('cM').textContent = String(m).padStart(2,'0');
    document.getElementById('cS').textContent = String(s).padStart(2,'0');
  }, 1000);
}

/* ============================================
   DUA ROTATION
============================================ */
let duaIndex = 0;
const DUA_INTERVAL = 30 * 60 * 1000; // 30 min

function buildDuaDots() {
  const dots = document.getElementById('duaDots');
  dots.innerHTML = '';
  DUA_DATA.slice(0,8).forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'dua-dot' + (i===0?' active':'');
    d.id = `dot-${i}`;
    dots.appendChild(d);
  });
}

function showDua(index) {
  const dua = DUA_DATA[index % DUA_DATA.length];
  const textEl = document.getElementById('duaText');
  const srcEl = document.getElementById('duaSource');

  textEl.classList.add('fade-out');
  setTimeout(() => {
    textEl.textContent = dua.text;
    srcEl.textContent = dua.source;
    textEl.classList.remove('fade-out');
    textEl.classList.add('fade-in');
    setTimeout(() => textEl.classList.remove('fade-in'), 500);
  }, 400);

  document.querySelectorAll('.dua-dot').forEach((d,i) => {
    d.classList.toggle('active', i === index % Math.min(DUA_DATA.length,8));
  });
}

function initDua() {
  buildDuaDots();
  // Index based on time slot
  const slot = Math.floor(Date.now() / DUA_INTERVAL);
  duaIndex = slot % DUA_DATA.length;
  const dua = DUA_DATA[duaIndex];
  document.getElementById('duaText').textContent = dua.text;
  document.getElementById('duaSource').textContent = dua.source;
  document.querySelectorAll('.dua-dot').forEach((d,i) => {
    d.classList.toggle('active', i === duaIndex % Math.min(DUA_DATA.length,8));
  });

  setInterval(() => {
    duaIndex = (duaIndex + 1) % DUA_DATA.length;
    showDua(duaIndex);
  }, DUA_INTERVAL);
}

/* ============================================
   PROPHETS RENDER
============================================ */
function renderProphets() {
  const container = document.getElementById('prophetsScroll');
  PROPHETS.forEach(p => {
    const card = document.createElement('div');
    card.className = 'prophet-card';
    card.innerHTML = `
      <div class="prophet-img">
        <span style="position:relative;z-index:1;font-size:42px;">${p.emoji}</span>
      </div>
      <div class="prophet-info">
        <div class="prophet-name">${p.name}</div>
        <div class="prophet-desc">${p.desc}</div>
      </div>`;
    container.appendChild(card);
  });
}

/* ============================================
   SCHOLARS RENDER
============================================ */
function renderScholars() {
  const grid = document.getElementById('scholarsGrid');
  if (!grid) return; // use static scholar list in HTML when dynamic grid is absent
  SCHOLARS.forEach(s => {
    const card = document.createElement('a');
    card.href = s.url;
    card.className = 'scholar-card';
    card.innerHTML = `
      <img class="scholar-img" src="${s.img}" alt="${s.name}" loading="lazy">
      <div class="scholar-name">${s.name}</div>`;
    grid.appendChild(card);
  });
}

/* ============================================
   VIDEOS RENDER
============================================ */
function renderVideos() {
  const container = document.getElementById('videosScroll');
  VIDEOS.forEach(v => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.innerHTML = `
      <div class="video-thumb">
        <img src="https://img.youtube.com/vi/${v.id}/mqdefault.jpg" alt="${v.title}" loading="lazy">
        <div class="play-btn"><div class="play-circle">▶</div></div>
      </div>
      <div class="video-info">
        <div class="video-title">${v.title}</div>
        <div class="video-channel">${v.channel}</div>
      </div>`;
    card.addEventListener('click', () => openVideo(v.id));
    container.appendChild(card);
  });
}

/* ============================================
   VIDEO MODAL
============================================ */
function openVideo(id) {
  document.getElementById('videoIframe').src = `https://www.youtube.com/embed/${id}?autoplay=1`;
  document.getElementById('videoModal').classList.add('open');
}

function closeVideo() {
  document.getElementById('videoIframe').src = '';
  document.getElementById('videoModal').classList.remove('open');
}

const videoCloseButton = document.getElementById('videoClose');
const videoModal = document.getElementById('videoModal');

if (videoCloseButton) {
  videoCloseButton.addEventListener('click', closeVideo);
}

if (videoModal) {
  videoModal.addEventListener('click', e => {
    if (e.target === videoModal) closeVideo();
  });
}

/* ============================================
   THEME
============================================ */
function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) themeBtn.textContent = saved === 'dark' ? '☀️' : '🌙';
}

const themeBtn = document.getElementById('themeBtn');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const curr = document.documentElement.getAttribute('data-theme');
    const next = curr === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
  });
}

function initAudioPlayerControls() {
  const audioPlayer = document.getElementById('quran-audio');
  if (!audioPlayer) return;

  const playBtn = document.getElementById('play-pause');
  const repeatBtn = document.getElementById('repeat-btn');
  const downloadBtn = document.getElementById('download-btn');
  const progress = document.getElementById('progress');
  const currentTimeEl = document.getElementById('current-time');
  const durationEl = document.getElementById('duration');
  const disc = document.querySelector('.disc');
  const discImage = document.querySelector('.disc-image');

  const formatTime = s => {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  };

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (audioPlayer.paused) audioPlayer.play(); else audioPlayer.pause();
    });
  }

  if (repeatBtn) {
    repeatBtn.addEventListener('click', function () {
      audioPlayer.loop = !audioPlayer.loop;
      this.classList.toggle('active', audioPlayer.loop);
    });
  }

  audioPlayer.addEventListener('loadedmetadata', () => {
    if (durationEl) durationEl.textContent = formatTime(audioPlayer.duration || 0);
    if (downloadBtn) downloadBtn.href = audioPlayer.currentSrc || audioPlayer.src || '#';
  });

  audioPlayer.addEventListener('timeupdate', () => {
    if (progress) {
      const pct = (audioPlayer.currentTime / (audioPlayer.duration || 1)) * 100;
      progress.value = pct || 0;
    }
    if (currentTimeEl) currentTimeEl.textContent = formatTime(audioPlayer.currentTime || 0);
  });

  if (progress) {
    progress.addEventListener('input', () => {
      if (!audioPlayer.duration) return;
      audioPlayer.currentTime = (progress.value / 100) * audioPlayer.duration;
    });
  }

  audioPlayer.addEventListener('play', () => {
    if (playBtn) playBtn.querySelector('i')?.classList.replace('fa-play', 'fa-pause');
    if (disc) disc.classList.add('playing');
    if (discImage) discImage.classList.add('playing');
    if (downloadBtn) downloadBtn.href = audioPlayer.currentSrc || audioPlayer.src || '#';
  });

  audioPlayer.addEventListener('pause', () => {
    if (playBtn) playBtn.querySelector('i')?.classList.replace('fa-pause', 'fa-play');
    if (disc) disc.classList.remove('playing');
    if (discImage) discImage.classList.remove('playing');
  });

  audioPlayer.addEventListener('ended', () => {
    if (!audioPlayer.loop) {
      if (playBtn) playBtn.querySelector('i')?.classList.replace('fa-pause', 'fa-play');
      if (disc) disc.classList.remove('playing');
      if (discImage) discImage.classList.remove('playing');
    }
  });
}

/* ============================================
   HEADER SCROLL
============================================ */
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

/* ============================================
   SEARCH
============================================ */
const SEARCH_LINKS = [
  { text: 'المصحف الإلكتروني', url: 'المصحف/quran.html', icon: '📖' },
  { text: 'أذكار الصباح', url: 'zekr/اذكار_الصباح/azkar-1.html', icon: '🌅' },
  { text: 'أذكار المساء', url: 'zekr/اذكار_المساء/azkar-2.html', icon: '🌆' },
  { text: 'أذكار النوم', url: 'zekr/اذكار_النوم/azkar-3.html', icon: '🌙' },
  { text: 'مواقيت الصلاة', url: 'prayer-times.html', icon: '🕐' },
  { text: 'رمضان', url: 'ramadan.html', icon: '🌙' },
  { text: 'العيد', url: 'eid.html', icon: '🎊' },
];

const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

if (searchBtn && searchOverlay && searchInput && searchResults) {
  searchBtn.addEventListener('click', () => {
    searchOverlay.classList.add('open');
    searchInput.focus();
    searchResults.innerHTML = SEARCH_LINKS.map(l =>
      `<a href="${l.url}" class="search-result-item">${l.icon} ${l.text}</a>`
    ).join('');
  });

  searchOverlay.addEventListener('click', e => {
    if (e.target === searchOverlay)
      searchOverlay.classList.remove('open');
  });

  searchInput.addEventListener('input', e => {
    const q = e.target.value.trim().toLowerCase();
    const filtered = q ? SEARCH_LINKS.filter(l => l.text.toLowerCase().includes(q)) : SEARCH_LINKS;
    searchResults.innerHTML = filtered.map(l =>
      `<a href="${l.url}" class="search-result-item">${l.icon} ${l.text}</a>`
    ).join('');
  });
}

/* ============================================
   QIBLA (simple compass direction)
============================================ */
function showQibla() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude: lat, longitude: lon } = pos.coords;
      const kLat = 21.4225, kLon = 39.8262;
      const dLon = (kLon - lon) * Math.PI / 180;
      const lat1 = lat * Math.PI / 180;
      const lat2 = kLat * Math.PI / 180;
      const x = Math.sin(dLon) * Math.cos(lat2);
      const y = Math.cos(lat1)*Math.sin(lat2) - Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLon);
      const angle = Math.round(Math.atan2(x, y) * 180 / Math.PI + 360) % 360;
      alert(`اتجاه القبلة: ${angle}° من الشمال`);
    }, () => alert('تعذّر تحديد موقعك'));
  } else { alert('المتصفح لا يدعم تحديد الموقع'); }
}

function scrollToDua() {
  document.getElementById('duaSection').scrollIntoView({ behavior: 'smooth' });
}

function scrollScholars(distance) {
  const bar = document.getElementById('scholarsBar');
  if (!bar) return;
  bar.scrollBy({ left: distance, behavior: 'smooth' });
}

function scrollHorizontalBar(barId, distance) {
  const bar = document.getElementById(barId);
  if (!bar) return;
  bar.scrollBy({ left: distance, behavior: 'smooth' });
}

function initScrollButtons() {
  document.querySelectorAll('.scroll-nav').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      const step = Number(btn.dataset.step) || 220;
      scrollHorizontalBar(target, step);
    });
  });
}

function initScholarsCarousel() {
  const bar = document.getElementById('scholarsBar');
  if (!bar) return;
  const leftBtn = document.querySelector('.scholar-nav-left');
  const rightBtn = document.querySelector('.scholar-nav-right');
  let autoScrollTimer = null;
  let scrollDirection = 1;
  const step = Math.max(bar.clientWidth * 0.6, 220);

  function startAutoScroll() {
    if (autoScrollTimer) return;
    autoScrollTimer = setInterval(() => {
      const maxScroll = bar.scrollWidth - bar.clientWidth;
      if (bar.scrollLeft >= maxScroll - 10) scrollDirection = -1;
      if (bar.scrollLeft <= 10) scrollDirection = 1;
      bar.scrollBy({ left: step * scrollDirection, behavior: 'smooth' });
    }, 2600);
  }

  function stopAutoScroll() {
    if (!autoScrollTimer) return;
    clearInterval(autoScrollTimer);
    autoScrollTimer = null;
  }

  leftBtn?.addEventListener('click', () => {
    stopAutoScroll();
    scrollScholars(-step);
  });

  rightBtn?.addEventListener('click', () => {
    stopAutoScroll();
    scrollScholars(step);
  });

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }
  }, { threshold: 0.5 });

  observer.observe(bar);
}

/* ============================================
   INIT
============================================ */
initTheme();
initAudioPlayerControls();
renderProphets();
renderScholars();
renderVideos();
initDua();
loadPrayerTimes();
initScholarsCarousel();
initScrollButtons();