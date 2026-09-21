// روابط السور من موقع archive.org - الشيخ سلمان العتيبي
const surahLinks = {
    'سورة الفاتحة': 'https://archive.org/download/salman-obaid-al-mutairi/001.mp3',
    'سورة البقرة': 'https://archive.org/download/salman-obaid-al-mutairi/002.mp3',
    'سورة آل عمران': 'https://archive.org/download/salman-obaid-al-mutairi/003.mp3',
    'سورة النساء': 'https://archive.org/download/salman-obaid-al-mutairi/004.mp3',
    'سورة المائدة': 'https://archive.org/download/salman-obaid-al-mutairi/005.mp3',
    'سورة الأنعام': 'https://archive.org/download/salman-obaid-al-mutairi/006.mp3',
    'سورة الأعراف': 'https://archive.org/download/salman-obaid-al-mutairi/007.mp3',
    'سورة الأنفال': 'https://archive.org/download/salman-obaid-al-mutairi/008.mp3',
    'سورة التوبة': 'https://archive.org/download/salman-obaid-al-mutairi/009.mp3',
    'سورة يونس': 'https://archive.org/download/salman-obaid-al-mutairi/010.mp3',
    'سورة هود': 'https://archive.org/download/salman-obaid-al-mutairi/011.mp3',
    'سورة يوسف': 'https://archive.org/download/salman-obaid-al-mutairi/012.mp3',
    'سورة الرعد': 'https://archive.org/download/salman-obaid-al-mutairi/013.mp3',
    'سورة إبراهيم': 'https://archive.org/download/salman-obaid-al-mutairi/014.mp3',
    'سورة الحجر': 'https://archive.org/download/salman-obaid-al-mutairi/015.mp3',
    'سورة النحل': 'https://archive.org/download/salman-obaid-al-mutairi/016.mp3',
    'سورة الإسراء': 'https://archive.org/download/salman-obaid-al-mutairi/017.mp3',
    'سورة الكهف': 'https://archive.org/download/salman-obaid-al-mutairi/018.mp3',
    'سورة مريم': 'https://archive.org/download/salman-obaid-al-mutairi/019.mp3',
    'سورة طه': 'https://archive.org/download/salman-obaid-al-mutairi/020.mp3',
    'سورة الأنبياء': 'https://archive.org/download/salman-obaid-al-mutairi/021.mp3',
    'سورة الحج': 'https://archive.org/download/salman-obaid-al-mutairi/022.mp3',
    'سورة المؤمنون': 'https://archive.org/download/salman-obaid-al-mutairi/023.mp3',
    'سورة النور': 'https://archive.org/download/salman-obaid-al-mutairi/024.mp3',
    'سورة الفرقان': 'https://archive.org/download/salman-obaid-al-mutairi/025.mp3',
    'سورة الشعراء': 'https://archive.org/download/salman-obaid-al-mutairi/026.mp3',
    'سورة النمل': 'https://archive.org/download/salman-obaid-al-mutairi/027.mp3',
    'سورة القصص': 'https://archive.org/download/salman-obaid-al-mutairi/028.mp3',
    'سورة العنكبوت': 'https://archive.org/download/salman-obaid-al-mutairi/029.mp3',
    'سورة الروم': 'https://archive.org/download/salman-obaid-al-mutairi/030.mp3',
    'سورة لقمان': 'https://archive.org/download/salman-obaid-al-mutairi/031.mp3',
    'سورة السجدة': 'https://archive.org/download/salman-obaid-al-mutairi/032.mp3',
    'سورة الأحزاب': 'https://archive.org/download/salman-obaid-al-mutairi/033.mp3',
    'سورة سبأ': 'https://archive.org/download/salman-obaid-al-mutairi/034.mp3',
    'سورة فاطر': 'https://archive.org/download/salman-obaid-al-mutairi/035.mp3',
    'سورة يس': 'https://archive.org/download/salman-obaid-al-mutairi/036.mp3',
    'سورة الصافات': 'https://archive.org/download/salman-obaid-al-mutairi/037.mp3',
    'سورة ص': 'https://archive.org/download/salman-obaid-al-mutairi/038.mp3',
    'سورة الزمر': 'https://archive.org/download/salman-obaid-al-mutairi/039.mp3',
    'سورة غافر': 'https://archive.org/download/salman-obaid-al-mutairi/040.mp3',
    'سورة فصلت': 'https://archive.org/download/salman-obaid-al-mutairi/041.mp3',
    'سورة الشورى': 'https://archive.org/download/salman-obaid-al-mutairi/042.mp3',
    'سورة الزخرف': 'https://archive.org/download/salman-obaid-al-mutairi/043.mp3',
    'سورة الدخان': 'https://archive.org/download/salman-obaid-al-mutairi/044.mp3',
    'سورة الجاثية': 'https://archive.org/download/salman-obaid-al-mutairi/045.mp3',
    'سورة الأحقاف': 'https://archive.org/download/salman-obaid-al-mutairi/046.mp3',
    'سورة محمد': 'https://archive.org/download/salman-obaid-al-mutairi/047.mp3',
    'سورة الفتح': 'https://archive.org/download/salman-obaid-al-mutairi/048.mp3',
    'سورة الحجرات': 'https://archive.org/download/salman-obaid-al-mutairi/049.mp3',
    'سورة ق': 'https://archive.org/download/salman-obaid-al-mutairi/050.mp3',
    'سورة الذاريات': 'https://archive.org/download/salman-obaid-al-mutairi/051.mp3',
    'سورة الطور': 'https://archive.org/download/salman-obaid-al-mutairi/052.mp3',
    'سورة النجم': 'https://archive.org/download/salman-obaid-al-mutairi/053.mp3',
    'سورة القمر': 'https://archive.org/download/salman-obaid-al-mutairi/054.mp3',
    'سورة الرحمن': 'https://archive.org/download/salman-obaid-al-mutairi/055.mp3',
    'سورة الواقعة': 'https://archive.org/download/salman-obaid-al-mutairi/056.mp3',
    'سورة الحديد': 'https://archive.org/download/salman-obaid-al-mutairi/057.mp3',
    'سورة المجادلة': 'https://archive.org/download/salman-obaid-al-mutairi/058.mp3',
    'سورة الحشر': 'https://archive.org/download/salman-obaid-al-mutairi/059.mp3',
    'سورة الممتحنة': 'https://archive.org/download/salman-obaid-al-mutairi/060.mp3',
    'سورة الصف': 'https://archive.org/download/salman-obaid-al-mutairi/061.mp3',
    'سورة الجمعة': 'https://archive.org/download/salman-obaid-al-mutairi/062.mp3',
    'سورة المنافقون': 'https://archive.org/download/salman-obaid-al-mutairi/063.mp3',
    'سورة التغابن': 'https://archive.org/download/salman-obaid-al-mutairi/064.mp3',
    'سورة الطلاق': 'https://archive.org/download/salman-obaid-al-mutairi/065.mp3',
    'سورة التحريم': 'https://archive.org/download/salman-obaid-al-mutairi/066.mp3',
    'سورة الملك': 'https://archive.org/download/salman-obaid-al-mutairi/067.mp3',
    'سورة القلم': 'https://archive.org/download/salman-obaid-al-mutairi/068.mp3',
    'سورة الحاقة': 'https://archive.org/download/salman-obaid-al-mutairi/069.mp3',
    'سورة المعارج': 'https://archive.org/download/salman-obaid-al-mutairi/070.mp3',
    'سورة نوح': 'https://archive.org/download/salman-obaid-al-mutairi/071.mp3',
    'سورة الجن': 'https://archive.org/download/salman-obaid-al-mutairi/072.mp3',
    'سورة المزمل': 'https://archive.org/download/salman-obaid-al-mutairi/073.mp3',
    'سورة المدثر': 'https://archive.org/download/salman-obaid-al-mutairi/074.mp3',
    'سورة القيامة': 'https://archive.org/download/salman-obaid-al-mutairi/075.mp3',
    'سورة الإنسان': 'https://archive.org/download/salman-obaid-al-mutairi/076.mp3',
    'سورة المرسلات': 'https://archive.org/download/salman-obaid-al-mutairi/077.mp3',
    'سورة النبأ': 'https://archive.org/download/salman-obaid-al-mutairi/078.mp3',
    'سورة النازعات': 'https://archive.org/download/salman-obaid-al-mutairi/079.mp3',
    'سورة عبس': 'https://archive.org/download/salman-obaid-al-mutairi/080.mp3',
    'سورة التكوير': 'https://archive.org/download/salman-obaid-al-mutairi/081.mp3',
    'سورة الانفطار': 'https://archive.org/download/salman-obaid-al-mutairi/082.mp3',
    'سورة المطففين': 'https://archive.org/download/salman-obaid-al-mutairi/083.mp3',
    'سورة الانشقاق': 'https://archive.org/download/salman-obaid-al-mutairi/084.mp3',
    'سورة البروج': 'https://archive.org/download/salman-obaid-al-mutairi/085.mp3',
    'سورة الطارق': 'https://archive.org/download/salman-obaid-al-mutairi/086.mp3',
    'سورة الأعلى': 'https://archive.org/download/salman-obaid-al-mutairi/087.mp3',
    'سورة الغاشية': 'https://archive.org/download/salman-obaid-al-mutairi/088.mp3',
    'سورة الفجر': 'https://archive.org/download/salman-obaid-al-mutairi/089.mp3',
    'سورة البلد': 'https://archive.org/download/salman-obaid-al-mutairi/090.mp3',
    'سورة الشمس': 'https://archive.org/download/salman-obaid-al-mutairi/091.mp3',
    'سورة الليل': 'https://archive.org/download/salman-obaid-al-mutairi/092.mp3',
    'سورة الضحى': 'https://archive.org/download/salman-obaid-al-mutairi/093.mp3',
    'سورة الشرح': 'https://archive.org/download/salman-obaid-al-mutairi/094.mp3',
    'سورة التين': 'https://archive.org/download/salman-obaid-al-mutairi/095.mp3',
    'سورة العلق': 'https://archive.org/download/salman-obaid-al-mutairi/096.mp3',
    'سورة القدر': 'https://archive.org/download/salman-obaid-al-mutairi/097.mp3',
    'سورة البينة': 'https://archive.org/download/salman-obaid-al-mutairi/098.mp3',
    'سورة الزلزلة': 'https://archive.org/download/salman-obaid-al-mutairi/099.mp3',
    'سورة العاديات': 'https://archive.org/download/salman-obaid-al-mutairi/100.mp3',
    'سورة القارعة': 'https://archive.org/download/salman-obaid-al-mutairi/101.mp3',
    'سورة التكاثر': 'https://archive.org/download/salman-obaid-al-mutairi/102.mp3',
    'سورة العصر': 'https://archive.org/download/salman-obaid-al-mutairi/103.mp3',
    'سورة الهمزة': 'https://archive.org/download/salman-obaid-al-mutairi/104.mp3',
    'سورة الفيل': 'https://archive.org/download/salman-obaid-al-mutairi/105.mp3',
    'سورة قريش': 'https://archive.org/download/salman-obaid-al-mutairi/106.mp3',
    'سورة الماعون': 'https://archive.org/download/salman-obaid-al-mutairi/107.mp3',
    'سورة الكوثر': 'https://archive.org/download/salman-obaid-al-mutairi/108.mp3',
    'سورة الكافرون': 'https://archive.org/download/salman-obaid-al-mutairi/109.mp3',
    'سورة النصر': 'https://archive.org/download/salman-obaid-al-mutairi/110.mp3',
    'سورة المسد': 'https://archive.org/download/salman-obaid-al-mutairi/111.mp3',
    'سورة الإخلاص': 'https://archive.org/download/salman-obaid-al-mutairi/112.mp3',
    'سورة الفلق': 'https://archive.org/download/salman-obaid-al-mutairi/113.mp3',
    'سورة الناس': 'https://archive.org/download/salman-obaid-al-mutairi/114.mp3'
};

// تحديث عنوان السورة في واجهة المستخدم
function updateSurahTitle(title) {
    const surahTitle = document.getElementById('current-surah');
    if (surahTitle) surahTitle.textContent = title;
}

// تحديث مصدر الصوت
function updateAudioSource(source) {
    const audioPlayer = document.getElementById('quran-audio');
    const downloadBtn = document.getElementById('download-btn');
    if (!audioPlayer) return;
    if (downloadBtn) downloadBtn.href = source;
    audioPlayer.src = source;
    audioPlayer.load();
    audioPlayer.play().catch(() => {});
}

// إضافة مستمعي الأحداث للسور
document.addEventListener('DOMContentLoaded', function() {
    const surahList = document.querySelectorAll('.surah-list li');
    if (!surahList.length) return;
    
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

    const audioPlayer = document.getElementById('quran-audio');
    const playBtn = document.getElementById('play-pause');
    const repeatBtn = document.getElementById('repeat-btn');
    const progress = document.getElementById('progress');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const disc = document.querySelector('.disc');
    const discImage = document.querySelector('.disc-image');

    function formatTime(s) {
        const m = Math.floor(s / 60).toString().padStart(2, '0');
        const sec = Math.floor(s % 60).toString().padStart(2, '0');
        return `${m}:${sec}`;
    }

    if (playBtn && audioPlayer) {
        playBtn.addEventListener('click', function() {
            if (audioPlayer.paused) audioPlayer.play(); else audioPlayer.pause();
        });
    }

    if (repeatBtn && audioPlayer) {
        repeatBtn.addEventListener('click', function() {
            audioPlayer.loop = !audioPlayer.loop;
            this.classList.toggle('active', audioPlayer.loop);
        });
    }

    if (audioPlayer) {
        audioPlayer.addEventListener('loadedmetadata', function() {
            if (durationEl) durationEl.textContent = formatTime(audioPlayer.duration || 0);
        });

        audioPlayer.addEventListener('timeupdate', function() {
            if (!progress) return;
            const pct = (audioPlayer.currentTime / (audioPlayer.duration || 1)) * 100;
            progress.value = pct || 0;
            if (currentTimeEl) currentTimeEl.textContent = formatTime(audioPlayer.currentTime || 0);
        });

        progress && progress.addEventListener('input', function() {
            if (!audioPlayer.duration) return;
            const seekTime = (progress.value / 100) * audioPlayer.duration;
            audioPlayer.currentTime = seekTime;
        });

        audioPlayer.addEventListener('play', function() {
            if (playBtn) playBtn.querySelector('i')?.classList.replace('fa-play','fa-pause');
            if (disc) disc.classList.add('playing');
            if (discImage) discImage.classList.add('playing');
        });

        audioPlayer.addEventListener('pause', function() {
            if (playBtn) playBtn.querySelector('i')?.classList.replace('fa-pause','fa-play');
            if (disc) disc.classList.remove('playing');
            if (discImage) discImage.classList.remove('playing');
        });

        audioPlayer.addEventListener('ended', function() {
            if (!audioPlayer.loop) {
                if (playBtn) playBtn.querySelector('i')?.classList.replace('fa-pause','fa-play');
                if (disc) disc.classList.remove('playing');
                if (discImage) discImage.classList.remove('playing');
            }
        });
    }
}); 