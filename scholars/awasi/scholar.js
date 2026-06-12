// روابط السور من موقع MP3Quran.net
const surahLinks = {
    'سورة الفاتحة': 'https://server6.mp3quran.net/download/aloosi/001.mp3',
    'سورة البقرة': 'https://server6.mp3quran.net/download/aloosi/002.mp3',
    'سورة آل عمران': 'https://server6.mp3quran.net/download/aloosi/003.mp3',
    'سورة النساء': 'https://server6.mp3quran.net/download/aloosi/004.mp3',
    'سورة المائدة': 'https://server6.mp3quran.net/download/aloosi/005.mp3',
    'سورة الأنعام': 'https://server6.mp3quran.net/download/aloosi/006.mp3',
    'سورة الأعراف': 'https://server6.mp3quran.net/download/aloosi/007.mp3',
    'سورة الأنفال': 'https://server6.mp3quran.net/download/aloosi/008.mp3',
    'سورة التوبة': 'https://server6.mp3quran.net/download/aloosi/009.mp3',
    'سورة يونس': 'https://server6.mp3quran.net/download/aloosi/010.mp3',
    'سورة هود': 'https://server6.mp3quran.net/download/aloosi/011.mp3',
    'سورة يوسف': 'https://server6.mp3quran.net/download/aloosi/012.mp3',
    'سورة الرعد': 'https://server6.mp3quran.net/download/aloosi/013.mp3',
    'سورة إبراهيم': 'https://server6.mp3quran.net/download/aloosi/014.mp3',
    'سورة الحجر': 'https://server6.mp3quran.net/download/aloosi/015.mp3',
    'سورة النحل': 'https://server6.mp3quran.net/download/aloosi/016.mp3',
    'سورة الإسراء': 'https://server6.mp3quran.net/download/aloosi/017.mp3',
    'سورة الكهف': 'https://server6.mp3quran.net/download/aloosi/018.mp3',
    'سورة مريم': 'https://server6.mp3quran.net/download/aloosi/019.mp3',
    'سورة طه': 'https://server6.mp3quran.net/download/aloosi/020.mp3',
    'سورة الأنبياء': 'https://server6.mp3quran.net/download/aloosi/021.mp3',
    'سورة الحج': 'https://server6.mp3quran.net/download/aloosi/022.mp3',
    'سورة المؤمنون': 'https://server6.mp3quran.net/download/aloosi/023.mp3',
    'سورة النور': 'https://server6.mp3quran.net/download/aloosi/024.mp3',
    'سورة الفرقان': 'https://server6.mp3quran.net/download/aloosi/025.mp3',
    'سورة الشعراء': 'https://server6.mp3quran.net/download/aloosi/026.mp3',
    'سورة النمل': 'https://server6.mp3quran.net/download/aloosi/027.mp3',
    'سورة القصص': 'https://server6.mp3quran.net/download/aloosi/028.mp3',
    'سورة العنكبوت': 'https://server6.mp3quran.net/download/aloosi/029.mp3',
    'سورة الروم': 'https://server6.mp3quran.net/download/aloosi/030.mp3',
    'سورة لقمان': 'https://server6.mp3quran.net/download/aloosi/031.mp3',
    'سورة السجدة': 'https://server6.mp3quran.net/download/aloosi/032.mp3',
    'سورة الأحزاب': 'https://server6.mp3quran.net/download/aloosi/033.mp3',
    'سورة سبأ': 'https://server6.mp3quran.net/download/aloosi/034.mp3',
    'سورة فاطر': 'https://server6.mp3quran.net/download/aloosi/035.mp3',
    'سورة يس': 'https://server6.mp3quran.net/download/aloosi/036.mp3',
    'سورة الصافات': 'https://server6.mp3quran.net/download/aloosi/037.mp3',
    'سورة ص': 'https://server6.mp3quran.net/download/aloosi/038.mp3',
    'سورة الزمر': 'https://server6.mp3quran.net/download/aloosi/039.mp3',
    'سورة غافر': 'https://server6.mp3quran.net/download/aloosi/040.mp3',
    'سورة فصلت': 'https://server6.mp3quran.net/download/aloosi/041.mp3',
    'سورة الشورى': 'https://server6.mp3quran.net/download/aloosi/042.mp3',
    'سورة الزخرف': 'https://server6.mp3quran.net/download/aloosi/043.mp3',
    'سورة الدخان': 'https://server6.mp3quran.net/download/aloosi/044.mp3',
    'سورة الجاثية': 'https://server6.mp3quran.net/download/aloosi/045.mp3',
    'سورة الأحقاف': 'https://server6.mp3quran.net/download/aloosi/046.mp3',
    'سورة محمد': 'https://server6.mp3quran.net/download/aloosi/047.mp3',
    'سورة الفتح': 'https://server6.mp3quran.net/download/aloosi/048.mp3',
    'سورة الحجرات': 'https://server6.mp3quran.net/download/aloosi/049.mp3',
    'سورة ق': 'https://server6.mp3quran.net/download/aloosi/050.mp3',
    'سورة الذاريات': 'https://server6.mp3quran.net/download/aloosi/051.mp3',
    'سورة الطور': 'https://server6.mp3quran.net/download/aloosi/052.mp3',
    'سورة النجم': 'https://server6.mp3quran.net/download/aloosi/053.mp3',
    'سورة القمر': 'https://server6.mp3quran.net/download/aloosi/054.mp3',
    'سورة الرحمن': 'https://server6.mp3quran.net/download/aloosi/055.mp3',
    'سورة الواقعة': 'https://server6.mp3quran.net/download/aloosi/056.mp3',
    'سورة الحديد': 'https://server6.mp3quran.net/download/aloosi/057.mp3',
    'سورة المجادلة': 'https://server6.mp3quran.net/download/aloosi/058.mp3',
    'سورة الحشر': 'https://server6.mp3quran.net/download/aloosi/059.mp3',
    'سورة الممتحنة': 'https://server6.mp3quran.net/download/aloosi/060.mp3',
    'سورة الصف': 'https://server6.mp3quran.net/download/aloosi/061.mp3',
    'سورة الجمعة': 'https://server6.mp3quran.net/download/aloosi/062.mp3',
    'سورة المنافقون': 'https://server6.mp3quran.net/download/aloosi/063.mp3',
    'سورة التغابن': 'https://server6.mp3quran.net/download/aloosi/064.mp3',
    'سورة الطلاق': 'https://server6.mp3quran.net/download/aloosi/065.mp3',
    'سورة التحريم': 'https://server6.mp3quran.net/download/aloosi/066.mp3',
    'سورة الملك': 'https://server6.mp3quran.net/download/aloosi/067.mp3',
    'سورة القلم': 'https://server6.mp3quran.net/download/aloosi/068.mp3',
    'سورة الحاقة': 'https://server6.mp3quran.net/download/aloosi/069.mp3',
    'سورة المعارج': 'https://server6.mp3quran.net/download/aloosi/070.mp3',
    'سورة نوح': 'https://server6.mp3quran.net/download/aloosi/071.mp3',
    'سورة الجن': 'https://server6.mp3quran.net/download/aloosi/072.mp3',
    'سورة المزمل': 'https://server6.mp3quran.net/download/aloosi/073.mp3',
    'سورة المدثر': 'https://server6.mp3quran.net/download/aloosi/074.mp3',
    'سورة القيامة': 'https://server6.mp3quran.net/download/aloosi/075.mp3',
    'سورة الإنسان': 'https://server6.mp3quran.net/download/aloosi/076.mp3',
    'سورة المرسلات': 'https://server6.mp3quran.net/download/aloosi/077.mp3',
    'سورة النبأ': 'https://server6.mp3quran.net/download/aloosi/078.mp3',
    'سورة النازعات': 'https://server6.mp3quran.net/download/aloosi/079.mp3',
    'سورة عبس': 'https://server6.mp3quran.net/download/aloosi/080.mp3',
    'سورة التكوير': 'https://server6.mp3quran.net/download/aloosi/081.mp3',
    'سورة الانفطار': 'https://server6.mp3quran.net/download/aloosi/082.mp3',
    'سورة المطففين': 'https://server6.mp3quran.net/download/aloosi/083.mp3',
    'سورة الانشقاق': 'https://server6.mp3quran.net/download/aloosi/084.mp3',
    'سورة البروج': 'https://server6.mp3quran.net/download/aloosi/085.mp3',
    'سورة الطارق': 'https://server6.mp3quran.net/download/aloosi/086.mp3',
    'سورة الأعلى': 'https://server6.mp3quran.net/download/aloosi/087.mp3',
    'سورة الغاشية': 'https://server6.mp3quran.net/download/aloosi/088.mp3',
    'سورة الفجر': 'https://server6.mp3quran.net/download/aloosi/089.mp3',
    'سورة البلد': 'https://server6.mp3quran.net/download/aloosi/090.mp3',
    'سورة الشمس': 'https://server6.mp3quran.net/download/aloosi/091.mp3',
    'سورة الليل': 'https://server6.mp3quran.net/download/aloosi/092.mp3',
    'سورة الضحى': 'https://server6.mp3quran.net/download/aloosi/093.mp3',
    'سورة الشرح': 'https://server6.mp3quran.net/download/aloosi/094.mp3',
    'سورة التين': 'https://server6.mp3quran.net/download/aloosi/095.mp3',
    'سورة العلق': 'https://server6.mp3quran.net/download/aloosi/096.mp3',
    'سورة القدر': 'https://server6.mp3quran.net/download/aloosi/097.mp3',
    'سورة البينة': 'https://server6.mp3quran.net/download/aloosi/098.mp3',
    'سورة الزلزلة': 'https://server6.mp3quran.net/download/aloosi/099.mp3',
    'سورة العاديات': 'https://server6.mp3quran.net/download/aloosi/100.mp3',
    'سورة القارعة': 'https://server6.mp3quran.net/download/aloosi/101.mp3',
    'سورة التكاثر': 'https://server6.mp3quran.net/download/aloosi/102.mp3',
    'سورة العصر': 'https://server6.mp3quran.net/download/aloosi/103.mp3',
    'سورة الهمزة': 'https://server6.mp3quran.net/download/aloosi/104.mp3',
    'سورة الفيل': 'https://server6.mp3quran.net/download/aloosi/105.mp3',
    'سورة قريش': 'https://server6.mp3quran.net/download/aloosi/106.mp3',
    'سورة الماعون': 'https://server6.mp3quran.net/download/aloosi/107.mp3',
    'سورة الكوثر': 'https://server6.mp3quran.net/download/aloosi/108.mp3',
    'سورة الكافرون': 'https://server6.mp3quran.net/download/aloosi/109.mp3',
    'سورة النصر': 'https://server6.mp3quran.net/download/aloosi/110.mp3',
    'سورة المسد': 'https://server6.mp3quran.net/download/aloosi/111.mp3',
    'سورة الإخلاص': 'https://server6.mp3quran.net/download/aloosi/112.mp3',
    'سورة الفلق': 'https://server6.mp3quran.net/download/aloosi/113.mp3',
    'سورة الناس': 'https://server6.mp3quran.net/download/aloosi/114.mp3'
};

// تحديث عنوان السورة في واجهة المستخدم
function updateSurahTitle(title) {
    const surahTitle = document.getElementById('current-surah');
    surahTitle.textContent = title;
}

// تحديث مصدر الصوت
function updateAudioSource(source) {
    const audioPlayer = document.getElementById('quran-audio');
    const downloadBtn = document.getElementById('download-btn');
    const playBtn = document.getElementById('play-pause');
    const disc = document.querySelector('.disc');
    const discImage = document.querySelector('.disc-image');

    if (!audioPlayer) return;
    audioPlayer.src = source;
    if (downloadBtn) downloadBtn.href = source;
    audioPlayer.load();
    audioPlayer.play().catch(()=>{});
    if (playBtn) playBtn.querySelector('i').classList.replace('fa-play','fa-pause');
    if (disc) disc.classList.add('playing');
    if (discImage) discImage.classList.add('playing');
}

// إضافة مستمعي الأحداث للسور
document.addEventListener('DOMContentLoaded', function() {
    const surahList = document.querySelectorAll('.surah-list li');
    
    surahList.forEach(surah => {
        surah.addEventListener('click', function() {
            const surahName = this.textContent;
            const audioSource = surahLinks[surahName];
            
            if (audioSource) {
                updateSurahTitle(surahName);
                updateAudioSource(audioSource);
                
                // إزالة التحديد من جميع السور
                surahList.forEach(item => item.classList.remove('active'));
                // إضافة التحديد للسورة المختارة
                this.classList.add('active');
            }
        });
    });
    
    // Player UI listeners
    (function() {
        const audioPlayer = document.getElementById('quran-audio');
        const playBtn = document.getElementById('play-pause');
        const downloadBtn = document.getElementById('download-btn');
        const repeatBtn = document.getElementById('repeat-btn');
        const progress = document.getElementById('progress');
        const currentTimeEl = document.getElementById('current-time');
        const durationEl = document.getElementById('duration');
        const disc = document.querySelector('.disc');
        const discImage = document.querySelector('.disc-image');

        function formatTime(s) { const m = Math.floor(s/60).toString().padStart(2,'0'); const sec = Math.floor(s%60).toString().padStart(2,'0'); return `${m}:${sec}`; }

        if (playBtn && audioPlayer) playBtn.addEventListener('click', () => audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause());
        if (repeatBtn && audioPlayer) repeatBtn.addEventListener('click', function(){ audioPlayer.loop = !audioPlayer.loop; this.classList.toggle('active', audioPlayer.loop); });

        if (audioPlayer) {
            audioPlayer.addEventListener('loadedmetadata', () => { if (durationEl) durationEl.textContent = formatTime(audioPlayer.duration || 0); });
            audioPlayer.addEventListener('timeupdate', () => { if (!progress) return; const pct = (audioPlayer.currentTime / (audioPlayer.duration || 1)) * 100; progress.value = pct || 0; if (currentTimeEl) currentTimeEl.textContent = formatTime(audioPlayer.currentTime || 0); });
            progress && progress.addEventListener('input', () => { if (!audioPlayer.duration) return; audioPlayer.currentTime = (progress.value/100) * audioPlayer.duration; });
            audioPlayer.addEventListener('play', () => { if (playBtn) playBtn.querySelector('i').classList.replace('fa-play','fa-pause'); if (disc) disc.classList.add('playing'); if (discImage) discImage.classList.add('playing'); });
            audioPlayer.addEventListener('pause', () => { if (playBtn) playBtn.querySelector('i').classList.replace('fa-pause','fa-play'); if (disc) disc.classList.remove('playing'); if (discImage) discImage.classList.remove('playing'); });
            audioPlayer.addEventListener('ended', () => { if (!audioPlayer.loop) { if (playBtn) playBtn.querySelector('i').classList.replace('fa-pause','fa-play'); if (disc) disc.classList.remove('playing'); if (discImage) discImage.classList.remove('playing'); } });
        }
    })();
}); 