const prophetSearch = document.getElementById('prophetSearch');
const suggestionsList = document.getElementById('suggestionsList');
const prophetStory = document.getElementById('prophetStory');
const relatedStories = document.getElementById('relatedStories');
const themeBtn = document.getElementById('themeBtn');

let prophetsData = [];
let activeProphet = null;

const loadProphets = async () => {
  try {
    const response = await fetch('prophets.json');
    prophetsData = await response.json();
    renderSuggestions('');
    const urlParams = new URLSearchParams(window.location.search);
    const requestedId = urlParams.get('id');
    const targetId = requestedId || prophetsData[0]?.id;
    if (targetId) setActiveProphet(targetId);
  } catch (error) {
    prophetStory.innerHTML = `<div class="story-empty"><h2>تعذر تحميل القصص</h2><p>حدث خطأ أثناء تحميل بيانات الأنبياء. تأكد من أن الملف prophets.json موجود ويمكن الوصول إليه.</p></div>`;
    console.error('Failed to load prophets.json', error);
  }
};

const normalizeSearch = (value) => value.trim().toLowerCase();

const renderSuggestions = (inputValue) => {
  const query = normalizeSearch(inputValue);
  const matches = query
    ? prophetsData.filter((prophet) => prophet.name.includes(query))
    : prophetsData.slice(0, 4);

  if (!matches.length) {
    suggestionsList.innerHTML = `<div class="suggestion-item">لا توجد نتائج</div>`;
    return;
  }

  suggestionsList.innerHTML = matches
    .map((prophet) => `
      <button type="button" class="suggestion-item" data-id="${prophet.id}">
        ${prophet.name}
      </button>
    `)
    .join('');
};

const renderStory = (prophet) => {
  const imageBlock = prophet.image
    ? `<img src="${prophet.image}" alt="صورة ${prophet.name}" loading="lazy">`
    : '';

  prophetStory.innerHTML = `
    <div class="story-headline">${prophet.headline}</div>
    <h1>${prophet.name}</h1>
    ${imageBlock}
    <div class="story-text">${prophet.story}</div>
    <div class="share-buttons">
      <button type="button" class="share-btn" data-action="copy">نسخ الرابط</button>
      <button type="button" class="share-btn" data-action="whatsapp">واتسآب</button>
      <button type="button" class="share-btn" data-action="twitter">تويتر</button>
    </div>
  `;

  prophetStory.querySelectorAll('.share-btn').forEach((button) => {
    button.addEventListener('click', () => handleShare(button.dataset.action, prophet));
  });
};

const renderRelated = (prophetId) => {
  const related = prophetsData
    .filter((prophet) => prophet.id !== prophetId)
    .slice(0, 4);

  if (!related.length) {
    relatedStories.innerHTML = `<div class="story-empty"><p>لا توجد قصص أخرى حالياً.</p></div>`;
    return;
  }

  relatedStories.innerHTML = related
    .map((prophet) => `
      <article class="related-card" data-id="${prophet.id}">
        <h3>${prophet.name}</h3>
        <p>${prophet.summary}</p>
      </article>
    `)
    .join('');

  relatedStories.querySelectorAll('.related-card').forEach((card) => {
    card.addEventListener('click', () => setActiveProphet(card.dataset.id));
  });
};

const updateUrl = (prophetId) => {
  const url = new URL(window.location.href);
  url.searchParams.set('id', prophetId);
  window.history.replaceState({}, '', url);
};

const setActiveProphet = (prophetId) => {
  const prophet = prophetsData.find((item) => item.id === prophetId);
  if (!prophet) return;
  activeProphet = prophet;
  prophetSearch.value = prophet.name;
  renderStory(prophet);
  renderRelated(prophetId);
  updateUrl(prophetId);
};

const handleShare = async (action, prophet) => {
  const shareUrl = window.location.href;
  const title = `قصة النبي ${prophet.name} | نور الحياة`;
  const text = `${prophet.headline}\n${shareUrl}`;

  if (action === 'copy') {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert('تم نسخ الرابط');
    } catch (error) {
      console.error(error);
      alert('فشل نسخ الرابط');
    }
    return;
  }

  if (action === 'whatsapp') {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
    return;
  }

  if (action === 'twitter') {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
  }
};

const bindEvents = () => {
  prophetSearch.addEventListener('input', (event) => {
    renderSuggestions(event.target.value);
  });

  suggestionsList.addEventListener('click', (event) => {
    const button = event.target.closest('.suggestion-item');
    if (!button) return;
    setActiveProphet(button.dataset.id);
  });

  themeBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', next);
  });
};

const initTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
};

window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  bindEvents();
  loadProphets();
});
