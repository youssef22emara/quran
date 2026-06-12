// روابط السور من موقع MP3Quran.net
const surahLinks = {
    'سورة الفاتحة': 'https://server11.mp3quran.net/yasser/001.mp3',
    'سورة البقرة': 'https://server11.mp3quran.net/yasser/002.mp3',
    'سورة آل عمران': 'https://server11.mp3quran.net/yasser/003.mp3',
    'سورة النساء': 'https://server11.mp3quran.net/yasser/004.mp3',
    'سورة المائدة': 'https://server11.mp3quran.net/yasser/005.mp3',
    'سورة الأنعام': 'https://server11.mp3quran.net/yasser/006.mp3',
    'سورة الأعراف': 'https://server11.mp3quran.net/yasser/007.mp3',
    'سورة الأنفال': 'https://server11.mp3quran.net/yasser/008.mp3',
    'سورة التوبة': 'https://server11.mp3quran.net/yasser/009.mp3',
    'سورة يونس': 'https://server11.mp3quran.net/yasser/010.mp3',
    'سورة هود': 'https://server11.mp3quran.net/yasser/011.mp3',
    'سورة يوسف': 'https://server11.mp3quran.net/yasser/012.mp3',
    'سورة الرعد': 'https://server11.mp3quran.net/yasser/013.mp3',
    'سورة إبراهيم': 'https://server11.mp3quran.net/yasser/014.mp3',
    'سورة الحجر': 'https://server11.mp3quran.net/yasser/015.mp3',
    'سورة النحل': 'https://server11.mp3quran.net/yasser/016.mp3',
    'سورة الإسراء': 'https://server11.mp3quran.net/yasser/017.mp3',
    'سورة الكهف': 'https://server11.mp3quran.net/yasser/018.mp3',
    'سورة مريم': 'https://server11.mp3quran.net/yasser/019.mp3',
    'سورة طه': 'https://server11.mp3quran.net/yasser/020.mp3',
    'سورة الأنبياء': 'https://server11.mp3quran.net/yasser/021.mp3',
    'سورة الحج': 'https://server11.mp3quran.net/yasser/022.mp3',
    'سورة المؤمنون': 'https://server11.mp3quran.net/yasser/023.mp3',
    'سورة النور': 'https://server11.mp3quran.net/yasser/024.mp3',
    'سورة الفرقان': 'https://server11.mp3quran.net/yasser/025.mp3',
    'سورة الشعراء': 'https://server11.mp3quran.net/yasser/026.mp3',
    'سورة النمل': 'https://server11.mp3quran.net/yasser/027.mp3',
    'سورة القصص': 'https://server11.mp3quran.net/yasser/028.mp3',
    'سورة العنكبوت': 'https://server11.mp3quran.net/yasser/029.mp3',
    'سورة الروم': 'https://server11.mp3quran.net/yasser/030.mp3',
    'سورة لقمان': 'https://server11.mp3quran.net/yasser/031.mp3',
    'سورة السجدة': 'https://server11.mp3quran.net/yasser/032.mp3',
    'سورة الأحزاب': 'https://server11.mp3quran.net/yasser/033.mp3',
    'سورة سبأ': 'https://server11.mp3quran.net/yasser/034.mp3',
    'سورة فاطر': 'https://server11.mp3quran.net/yasser/035.mp3',
    'سورة يس': 'https://server11.mp3quran.net/yasser/036.mp3',
    'سورة الصافات': 'https://server11.mp3quran.net/yasser/037.mp3',
    'سورة ص': 'https://server11.mp3quran.net/yasser/038.mp3',
    'سورة الزمر': 'https://server11.mp3quran.net/yasser/039.mp3',
    'سورة غافر': 'https://server11.mp3quran.net/yasser/040.mp3',
    'سورة فصلت': 'https://server11.mp3quran.net/yasser/041.mp3',
    'سورة الشورى': 'https://server11.mp3quran.net/yasser/042.mp3',
    'سورة الزخرف': 'https://server11.mp3quran.net/yasser/043.mp3',
    'سورة الدخان': 'https://server11.mp3quran.net/yasser/044.mp3',
    'سورة الجاثية': 'https://server11.mp3quran.net/yasser/045.mp3',
    'سورة الأحقاف': 'https://server11.mp3quran.net/yasser/046.mp3',
    'سورة محمد': 'https://server11.mp3quran.net/yasser/047.mp3',
    'سورة الفتح': 'https://server11.mp3quran.net/yasser/048.mp3',
    'سورة الحجرات': 'https://server11.mp3quran.net/yasser/049.mp3',
    'سورة ق': 'https://server11.mp3quran.net/yasser/050.mp3',
    'سورة الذاريات': 'https://server11.mp3quran.net/yasser/051.mp3',
    'سورة الطور': 'https://server11.mp3quran.net/yasser/052.mp3',
    'سورة النجم': 'https://server11.mp3quran.net/yasser/053.mp3',
    'سورة القمر': 'https://server11.mp3quran.net/yasser/054.mp3',
    'سورة الرحمن': 'https://server11.mp3quran.net/yasser/055.mp3',
    'سورة الواقعة': 'https://server11.mp3quran.net/yasser/056.mp3',
    'سورة الحديد': 'https://server11.mp3quran.net/yasser/057.mp3',
    'سورة المجادلة': 'https://server11.mp3quran.net/yasser/058.mp3',
    'سورة الحشر': 'https://server11.mp3quran.net/yasser/059.mp3',
    'سورة الممتحنة': 'https://server11.mp3quran.net/yasser/060.mp3',
    'سورة الصف': 'https://server11.mp3quran.net/yasser/061.mp3',
    'سورة الجمعة': 'https://server11.mp3quran.net/yasser/062.mp3',
    'سورة المنافقون': 'https://server11.mp3quran.net/yasser/063.mp3',
    'سورة التغابن': 'https://server11.mp3quran.net/yasser/064.mp3',
    'سورة الطلاق': 'https://server11.mp3quran.net/yasser/065.mp3',
    'سورة التحريم': 'https://server11.mp3quran.net/yasser/066.mp3',
    'سورة الملك': 'https://server11.mp3quran.net/yasser/067.mp3',
    'سورة القلم': 'https://server11.mp3quran.net/yasser/068.mp3',
    'سورة الحاقة': 'https://server11.mp3quran.net/yasser/069.mp3',
    'سورة المعارج': 'https://server11.mp3quran.net/yasser/070.mp3',
    'سورة نوح': 'https://server11.mp3quran.net/yasser/071.mp3',
    'سورة الجن': 'https://server11.mp3quran.net/yasser/072.mp3',
    'سورة المزمل': 'https://server11.mp3quran.net/yasser/073.mp3',
    'سورة المدثر': 'https://server11.mp3quran.net/yasser/074.mp3',
    'سورة القيامة': 'https://server11.mp3quran.net/yasser/075.mp3',
    'سورة الإنسان': 'https://server11.mp3quran.net/yasser/076.mp3',
    'سورة المرسلات': 'https://server11.mp3quran.net/yasser/077.mp3',
    'سورة النبأ': 'https://server11.mp3quran.net/yasser/078.mp3',
    'سورة النازعات': 'https://server11.mp3quran.net/yasser/079.mp3',
    'سورة عبس': 'https://server11.mp3quran.net/yasser/080.mp3',
    'سورة التكوير': 'https://server11.mp3quran.net/yasser/081.mp3',
    'سورة الانفطار': 'https://server11.mp3quran.net/yasser/082.mp3',
    'سورة المطففين': 'https://server11.mp3quran.net/yasser/083.mp3',
    'سورة الانشقاق': 'https://server11.mp3quran.net/yasser/084.mp3',
    'سورة البروج': 'https://server11.mp3quran.net/yasser/085.mp3',
    'سورة الطارق': 'https://server11.mp3quran.net/yasser/086.mp3',
    'سورة الأعلى': 'https://server11.mp3quran.net/yasser/087.mp3',
    'سورة الغاشية': 'https://server11.mp3quran.net/yasser/088.mp3',
    'سورة الفجر': 'https://server11.mp3quran.net/yasser/089.mp3',
    'سورة البلد': 'https://server11.mp3quran.net/yasser/090.mp3',
    'سورة الشمس': 'https://server11.mp3quran.net/yasser/091.mp3',
    'سورة الليل': 'https://server11.mp3quran.net/yasser/092.mp3',
    'سورة الضحى': 'https://server11.mp3quran.net/yasser/093.mp3',
    'سورة الشرح': 'https://server11.mp3quran.net/yasser/094.mp3',
    'سورة التين': 'https://server11.mp3quran.net/yasser/095.mp3',
    'سورة العلق': 'https://server11.mp3quran.net/yasser/096.mp3',
    'سورة القدر': 'https://server11.mp3quran.net/yasser/097.mp3',
    'سورة البينة': 'https://server11.mp3quran.net/yasser/098.mp3',
    'سورة الزلزلة': 'https://server11.mp3quran.net/yasser/099.mp3',
    'سورة العاديات': 'https://server11.mp3quran.net/yasser/100.mp3',
    'سورة القارعة': 'https://server11.mp3quran.net/yasser/101.mp3',
    'سورة التكاثر': 'https://server11.mp3quran.net/yasser/102.mp3',
    'سورة العصر': 'https://server11.mp3quran.net/yasser/103.mp3',
    'سورة الهمزة': 'https://server11.mp3quran.net/yasser/104.mp3',
    'سورة الفيل': 'https://server11.mp3quran.net/yasser/105.mp3',
    'سورة قريش': 'https://server11.mp3quran.net/yasser/106.mp3',
    'سورة الماعون': 'https://server11.mp3quran.net/yasser/107.mp3',
    'سورة الكوثر': 'https://server11.mp3quran.net/yasser/108.mp3',
    'سورة الكافرون': 'https://server11.mp3quran.net/yasser/109.mp3',
    'سورة النصر': 'https://server11.mp3quran.net/yasser/110.mp3',
    'سورة المسد': 'https://server11.mp3quran.net/yasser/111.mp3',
    'سورة الإخلاص': 'https://server11.mp3quran.net/yasser/112.mp3',
    'سورة الفلق': 'https://server11.mp3quran.net/yasser/113.mp3',
    'سورة الناس': 'https://server11.mp3quran.net/yasser/114.mp3'
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