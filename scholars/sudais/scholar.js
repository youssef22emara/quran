// روابط السور من موقع MP3Quran.net
const surahLinks = {
    'سورة الفاتحة': 'https://server11.mp3quran.net/sds/001.mp3',
    'سورة البقرة': 'https://server11.mp3quran.net/sds/002.mp3',
    'سورة آل عمران': 'https://server11.mp3quran.net/sds/003.mp3',
    'سورة النساء': 'https://server11.mp3quran.net/sds/004.mp3',
    'سورة المائدة': 'https://server11.mp3quran.net/sds/005.mp3',
    'سورة الأنعام': 'https://server11.mp3quran.net/sds/006.mp3',
    'سورة الأعراف': 'https://server11.mp3quran.net/sds/007.mp3',
    'سورة الأنفال': 'https://server11.mp3quran.net/sds/008.mp3',
    'سورة التوبة': 'https://server11.mp3quran.net/sds/009.mp3',
    'سورة يونس': 'https://server11.mp3quran.net/sds/010.mp3',
    'سورة هود': 'https://server11.mp3quran.net/sds/011.mp3',
    'سورة يوسف': 'https://server11.mp3quran.net/sds/012.mp3',
    'سورة الرعد': 'https://server11.mp3quran.net/sds/013.mp3',
    'سورة إبراهيم': 'https://server11.mp3quran.net/sds/014.mp3',
    'سورة الحجر': 'https://server11.mp3quran.net/sds/015.mp3',
    'سورة النحل': 'https://server11.mp3quran.net/sds/016.mp3',
    'سورة الإسراء': 'https://server11.mp3quran.net/sds/017.mp3',
    'سورة الكهف': 'https://server11.mp3quran.net/sds/018.mp3',
    'سورة مريم': 'https://server11.mp3quran.net/sds/019.mp3',
    'سورة طه': 'https://server11.mp3quran.net/sds/020.mp3',
    'سورة الأنبياء': 'https://server11.mp3quran.net/sds/021.mp3',
    'سورة الحج': 'https://server11.mp3quran.net/sds/022.mp3',
    'سورة المؤمنون': 'https://server11.mp3quran.net/sds/023.mp3',
    'سورة النور': 'https://server11.mp3quran.net/sds/024.mp3',
    'سورة الفرقان': 'https://server11.mp3quran.net/sds/025.mp3',
    'سورة الشعراء': 'https://server11.mp3quran.net/sds/026.mp3',
    'سورة النمل': 'https://server11.mp3quran.net/sds/027.mp3',
    'سورة القصص': 'https://server11.mp3quran.net/sds/028.mp3',
    'سورة العنكبوت': 'https://server11.mp3quran.net/sds/029.mp3',
    'سورة الروم': 'https://server11.mp3quran.net/sds/030.mp3',
    'سورة لقمان': 'https://server11.mp3quran.net/sds/031.mp3',
    'سورة السجدة': 'https://server11.mp3quran.net/sds/032.mp3',
    'سورة الأحزاب': 'https://server11.mp3quran.net/sds/033.mp3',
    'سورة سبأ': 'https://server11.mp3quran.net/sds/034.mp3',
    'سورة فاطر': 'https://server11.mp3quran.net/sds/035.mp3',
    'سورة يس': 'https://server11.mp3quran.net/sds/036.mp3',
    'سورة الصافات': 'https://server11.mp3quran.net/sds/037.mp3',
    'سورة ص': 'https://server11.mp3quran.net/sds/038.mp3',
    'سورة الزمر': 'https://server11.mp3quran.net/sds/039.mp3',
    'سورة غافر': 'https://server11.mp3quran.net/sds/040.mp3',
    'سورة فصلت': 'https://server11.mp3quran.net/sds/041.mp3',
    'سورة الشورى': 'https://server11.mp3quran.net/sds/042.mp3',
    'سورة الزخرف': 'https://server11.mp3quran.net/sds/043.mp3',
    'سورة الدخان': 'https://server11.mp3quran.net/sds/044.mp3',
    'سورة الجاثية': 'https://server11.mp3quran.net/sds/045.mp3',
    'سورة الأحقاف': 'https://server11.mp3quran.net/sds/046.mp3',
    'سورة محمد': 'https://server11.mp3quran.net/sds/047.mp3',
    'سورة الفتح': 'https://server11.mp3quran.net/sds/048.mp3',
    'سورة الحجرات': 'https://server11.mp3quran.net/sds/049.mp3',
    'سورة ق': 'https://server11.mp3quran.net/sds/050.mp3',
    'سورة الذاريات': 'https://server11.mp3quran.net/sds/051.mp3',
    'سورة الطور': 'https://server11.mp3quran.net/sds/052.mp3',
    'سورة النجم': 'https://server11.mp3quran.net/sds/053.mp3',
    'سورة القمر': 'https://server11.mp3quran.net/sds/054.mp3',
    'سورة الرحمن': 'https://server11.mp3quran.net/sds/055.mp3',
    'سورة الواقعة': 'https://server11.mp3quran.net/sds/056.mp3',
    'سورة الحديد': 'https://server11.mp3quran.net/sds/057.mp3',
    'سورة المجادلة': 'https://server11.mp3quran.net/sds/058.mp3',
    'سورة الحشر': 'https://server11.mp3quran.net/sds/059.mp3',
    'سورة الممتحنة': 'https://server11.mp3quran.net/sds/060.mp3',
    'سورة الصف': 'https://server11.mp3quran.net/sds/061.mp3',
    'سورة الجمعة': 'https://server11.mp3quran.net/sds/062.mp3',
    'سورة المنافقون': 'https://server11.mp3quran.net/sds/063.mp3',
    'سورة التغابن': 'https://server11.mp3quran.net/sds/064.mp3',
    'سورة الطلاق': 'https://server11.mp3quran.net/sds/065.mp3',
    'سورة التحريم': 'https://server11.mp3quran.net/sds/066.mp3',
    'سورة الملك': 'https://server11.mp3quran.net/sds/067.mp3',
    'سورة القلم': 'https://server11.mp3quran.net/sds/068.mp3',
    'سورة الحاقة': 'https://server11.mp3quran.net/sds/069.mp3',
    'سورة المعارج': 'https://server11.mp3quran.net/sds/070.mp3',
    'سورة نوح': 'https://server11.mp3quran.net/sds/071.mp3',
    'سورة الجن': 'https://server11.mp3quran.net/sds/072.mp3',
    'سورة المزمل': 'https://server11.mp3quran.net/sds/073.mp3',
    'سورة المدثر': 'https://server11.mp3quran.net/sds/074.mp3',
    'سورة القيامة': 'https://server11.mp3quran.net/sds/075.mp3',
    'سورة الإنسان': 'https://server11.mp3quran.net/sds/076.mp3',
    'سورة المرسلات': 'https://server11.mp3quran.net/sds/077.mp3',
    'سورة النبأ': 'https://server11.mp3quran.net/sds/078.mp3',
    'سورة النازعات': 'https://server11.mp3quran.net/sds/079.mp3',
    'سورة عبس': 'https://server11.mp3quran.net/sds/080.mp3',
    'سورة التكوير': 'https://server11.mp3quran.net/sds/081.mp3',
    'سورة الانفطار': 'https://server11.mp3quran.net/sds/082.mp3',
    'سورة المطففين': 'https://server11.mp3quran.net/sds/083.mp3',
    'سورة الانشقاق': 'https://server11.mp3quran.net/sds/084.mp3',
    'سورة البروج': 'https://server11.mp3quran.net/sds/085.mp3',
    'سورة الطارق': 'https://server11.mp3quran.net/sds/086.mp3',
    'سورة الأعلى': 'https://server11.mp3quran.net/sds/087.mp3',
    'سورة الغاشية': 'https://server11.mp3quran.net/sds/088.mp3',
    'سورة الفجر': 'https://server11.mp3quran.net/sds/089.mp3',
    'سورة البلد': 'https://server11.mp3quran.net/sds/090.mp3',
    'سورة الشمس': 'https://server11.mp3quran.net/sds/091.mp3',
    'سورة الليل': 'https://server11.mp3quran.net/sds/092.mp3',
    'سورة الضحى': 'https://server11.mp3quran.net/sds/093.mp3',
    'سورة الشرح': 'https://server11.mp3quran.net/sds/094.mp3',
    'سورة التين': 'https://server11.mp3quran.net/sds/095.mp3',
    'سورة العلق': 'https://server11.mp3quran.net/sds/096.mp3',
    'سورة القدر': 'https://server11.mp3quran.net/sds/097.mp3',
    'سورة البينة': 'https://server11.mp3quran.net/sds/098.mp3',
    'سورة الزلزلة': 'https://server11.mp3quran.net/sds/099.mp3',
    'سورة العاديات': 'https://server11.mp3quran.net/sds/100.mp3',
    'سورة القارعة': 'https://server11.mp3quran.net/sds/101.mp3',
    'سورة التكاثر': 'https://server11.mp3quran.net/sds/102.mp3',
    'سورة العصر': 'https://server11.mp3quran.net/sds/103.mp3',
    'سورة الهمزة': 'https://server11.mp3quran.net/sds/104.mp3',
    'سورة الفيل': 'https://server11.mp3quran.net/sds/105.mp3',
    'سورة قريش': 'https://server11.mp3quran.net/sds/106.mp3',
    'سورة الماعون': 'https://server11.mp3quran.net/sds/107.mp3',
    'سورة الكوثر': 'https://server11.mp3quran.net/sds/108.mp3',
    'سورة الكافرون': 'https://server11.mp3quran.net/sds/109.mp3',
    'سورة النصر': 'https://server11.mp3quran.net/sds/110.mp3',
    'سورة المسد': 'https://server11.mp3quran.net/sds/111.mp3',
    'سورة الإخلاص': 'https://server11.mp3quran.net/sds/112.mp3',
    'سورة الفلق': 'https://server11.mp3quran.net/sds/113.mp3',
    'سورة الناس': 'https://server11.mp3quran.net/sds/114.mp3'
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