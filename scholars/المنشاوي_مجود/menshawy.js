// روابط السور من موقع MP3Quran.net
const surahLinks = {
    'سورة الفاتحة': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/001.mp3',
    'سورة البقرة': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/002.mp3',
    'سورة آل عمران': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/003.mp3',
    'سورة النساء': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/004.mp3',
    'سورة المائدة': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/005.mp3',
    'سورة الأنعام': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/006.mp3',
    'سورة الأعراف': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/007.mp3',
    'سورة الأنفال': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/008.mp3',
    'سورة التوبة': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/009.mp3',
    'سورة يونس': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/010.mp3',
    'سورة هود': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/011.mp3',
    'سورة يوسف': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/012.mp3',
    'سورة الرعد': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/013.mp3',
    'سورة إبراهيم': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/014.mp3',
    'سورة الحجر': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/015.mp3',
    'سورة النحل': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/016.mp3',
    'سورة الإسراء': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/017.mp3',
    'سورة الكهف': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/018.mp3',
    'سورة مريم': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/019.mp3',
    'سورة طه': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/020.mp3',
    'سورة الأنبياء': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/021.mp3',
    'سورة الحج': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/022.mp3',
    'سورة المؤمنون': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/023.mp3',
    'سورة النور': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/024.mp3',
    'سورة الفرقان': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/025.mp3',
    'سورة الشعراء': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/026.mp3',
    'سورة النمل': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/027.mp3',
    'سورة القصص': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/028.mp3',
    'سورة العنكبوت': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/029.mp3',
    'سورة الروم': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/030.mp3',
    'سورة لقمان': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/031.mp3',
    'سورة السجدة': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/032.mp3',
    'سورة الأحزاب': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/033.mp3',
    'سورة سبأ': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/034.mp3',
    'سورة فاطر': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/035.mp3',
    'سورة يس': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/036.mp3',
    'سورة الصافات': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/037.mp3',
    'سورة ص': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/038.mp3',
    'سورة الزمر': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/039.mp3',
    'سورة غافر': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/040.mp3',
    'سورة فصلت': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/041.mp3',
    'سورة الشورى': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/042.mp3',
    'سورة الزخرف': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/043.mp3',
    'سورة الدخان': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/044.mp3',
    'سورة الجاثية': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/045.mp3',
    'سورة الأحقاف': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/046.mp3',
    'سورة محمد': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/047.mp3',
    'سورة الفتح': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/048.mp3',
    'سورة الحجرات': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/049.mp3',
    'سورة ق': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/050.mp3',
    'سورة الذاريات': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/051.mp3',
    'سورة الطور': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/052.mp3',
    'سورة النجم': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/053.mp3',
    'سورة القمر': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/054.mp3',
    'سورة الرحمن': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/055.mp3',
    'سورة الواقعة': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/056.mp3',
    'سورة الحديد': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/057.mp3',
    'سورة المجادلة': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/058.mp3',
    'سورة الحشر': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/059.mp3',
    'سورة الممتحنة': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/060.mp3',
    'سورة الصف': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/061.mp3',
    'سورة الجمعة': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/062.mp3',
    'سورة المنافقون': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/063.mp3',
    'سورة التغابن': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/064.mp3',
    'سورة الطلاق': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/065.mp3',
    'سورة التحريم': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/066.mp3',
    'سورة الملك': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/067.mp3',
    'سورة القلم': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/068.mp3',
    'سورة الحاقة': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/069.mp3',
    'سورة المعارج': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/070.mp3',
    'سورة نوح': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/071.mp3',
    'سورة الجن': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/072.mp3',
    'سورة المزمل': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/073.mp3',
    'سورة المدثر': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/074.mp3',
    'سورة القيامة': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/075.mp3',
    'سورة الإنسان': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/076.mp3',
    'سورة المرسلات': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/077.mp3',
    'سورة النبأ': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/078.mp3',
    'سورة النازعات': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/079.mp3',
    'سورة عبس': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/080.mp3',
    'سورة التكوير': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/081.mp3',
    'سورة الانفطار': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/082.mp3',
    'سورة المطففين': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/083.mp3',
    'سورة الانشقاق': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/084.mp3',
    'سورة البروج': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/085.mp3',
    'سورة الطارق': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/086.mp3',
    'سورة الأعلى': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/087.mp3',
    'سورة الغاشية': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/088.mp3',
    'سورة الفجر': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/089.mp3',
    'سورة البلد': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/090.mp3',
    'سورة الشمس': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/091.mp3',
    'سورة الليل': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/092.mp3',
    'سورة الضحى': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/093.mp3',
    'سورة الشرح': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/094.mp3',
    'سورة التين': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/095.mp3',
    'سورة العلق': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/096.mp3',
    'سورة القدر': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/097.mp3',
    'سورة البينة': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/098.mp3',
    'سورة الزلزلة': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/099.mp3',
    'سورة العاديات': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/100.mp3',
    'سورة القارعة': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/101.mp3',
    'سورة التكاثر': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/102.mp3',
    'سورة العصر': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/103.mp3',
    'سورة الهمزة': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/104.mp3',
    'سورة الفيل': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/105.mp3',
    'سورة قريش': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/106.mp3',
    'سورة الماعون': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/107.mp3',
    'سورة الكوثر': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/108.mp3',
    'سورة الكافرون': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/109.mp3',
    'سورة النصر': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/110.mp3',
    'سورة المسد': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/111.mp3',
    'سورة الإخلاص': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/112.mp3',
    'سورة الفلق': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/113.mp3',
    'سورة الناس': 'https://server10.mp3quran.net/download/minsh/Almusshaf-Al-Mojawwad/114.mp3'
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