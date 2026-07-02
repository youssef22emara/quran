const surahLinks = {
    'سورة الفاتحة': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/001.mp3',
    'سورة البقرة': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/002.mp3',
    'سورة آل عمران': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/003.mp3',
    'سورة النساء': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/004.mp3',
    'سورة المائدة': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/005.mp3',
    'سورة الأنعام': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/006.mp3',
    'سورة الأعراف': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/007.mp3',
    'سورة الأنفال': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/008.mp3',
    'سورة التوبة': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/009.mp3',
    'سورة يونس': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/010.mp3',
    'سورة هود': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/011.mp3',
    'سورة يوسف': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/012.mp3',
    'سورة الرعد': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/013.mp3',
    'سورة إبراهيم': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/014.mp3',
    'سورة الحجر': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/015.mp3',
    'سورة النحل': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/016.mp3',
    'سورة الإسراء': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/017.mp3',
    'سورة الكهف': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/018.mp3',
    'سورة مريم': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/019.mp3',
    'سورة طه': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/020.mp3',
    'سورة الأنبياء': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/021.mp3',
    'سورة الحج': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/022.mp3',
    'سورة المؤمنون': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/023.mp3',
    'سورة النور': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/024.mp3',
    'سورة الفرقان': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/025.mp3',
    'سورة الشعراء': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/026.mp3',
    'سورة النمل': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/027.mp3',
    'سورة القصص': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/028.mp3',
    'سورة العنكبوت': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/029.mp3',
    'سورة الروم': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/030.mp3',
    'سورة لقمان': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/031.mp3',
    'سورة السجدة': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/032.mp3',
    'سورة الأحزاب': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/033.mp3',
    'سورة سبأ': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/034.mp3',
    'سورة فاطر': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/035.mp3',
    'سورة يس': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/036.mp3',
    'سورة الصافات': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/037.mp3',
    'سورة ص': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/038.mp3',
    'سورة الزمر': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/039.mp3',
    'سورة غافر': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/040.mp3',
    'سورة فصلت': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/041.mp3',
    'سورة الشورى': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/042.mp3',
    'سورة الزخرف': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/043.mp3',
    'سورة الدخان': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/044.mp3',
    'سورة الجاثية': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/045.mp3',
    'سورة الأحقاف': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/046.mp3',
    'سورة محمد': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/047.mp3',
    'سورة الفتح': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/048.mp3',
    'سورة الحجرات': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/049.mp3',
    'سورة ق': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/050.mp3',
    'سورة الذاريات': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/051.mp3',
    'سورة الطور': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/052.mp3',
    'سورة النجم': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/053.mp3',
    'سورة القمر': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/054.mp3',
    'سورة الرحمن': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/055.mp3',
    'سورة الواقعة': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/056.mp3',
    'سورة الحديد': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/057.mp3',
    'سورة المجادلة': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/058.mp3',
    'سورة الحشر': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/059.mp3',
    'سورة الممتحنة': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/060.mp3',
    'سورة الصف': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/061.mp3',
    'سورة الجمعة': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/062.mp3',
    'سورة المنافقون': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/063.mp3',
    'سورة التغابن': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/064.mp3',
    'سورة الطلاق': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/065.mp3',
    'سورة التحريم': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/066.mp3',
    'سورة الملك': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/067.mp3',
    'سورة القلم': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/068.mp3',
    'سورة الحاقة': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/069.mp3',
    'سورة المعارج': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/070.mp3',
    'سورة نوح': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/071.mp3',
    'سورة الجن': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/072.mp3',
    'سورة المزمل': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/073.mp3',
    'سورة المدثر': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/074.mp3',
    'سورة القيامة': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/075.mp3',
    'سورة الإنسان': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/076.mp3',
    'سورة المرسلات': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/077.mp3',
    'سورة النبأ': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/078.mp3',
    'سورة النازعات': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/079.mp3',
    'سورة عبس': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/080.mp3',
    'سورة التكوير': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/081.mp3',
    'سورة الانفطار': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/082.mp3',
    'سورة المطففين': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/083.mp3',
    'سورة الانشقاق': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/084.mp3',
    'سورة البروج': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/085.mp3',
    'سورة الطارق': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/086.mp3',
    'سورة الأعلى': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/087.mp3',
    'سورة الغاشية': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/088.mp3',
    'سورة الفجر': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/089.mp3',
    'سورة البلد': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/090.mp3',
    'سورة الشمس': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/091.mp3',
    'سورة الليل': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/092.mp3',
    'سورة الضحى': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/093.mp3',
    'سورة الشرح': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/094.mp3',
    'سورة التين': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/095.mp3',
    'سورة العلق': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/096.mp3',
    'سورة القدر': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/097.mp3',
    'سورة البينة': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/098.mp3',
    'سورة الزلزلة': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/099.mp3',
    'سورة العاديات': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/100.mp3',
    'سورة القارعة': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/101.mp3',
    'سورة التكاثر': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/102.mp3',
    'سورة العصر': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/103.mp3',
    'سورة الهمزة': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/104.mp3',
    'سورة الفيل': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/105.mp3',
    'سورة قريش': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/106.mp3',
    'سورة الماعون': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/107.mp3',
    'سورة الكوثر': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/108.mp3',
    'سورة الكافرون': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/109.mp3',
    'سورة النصر': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/110.mp3',
    'سورة المسد': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/111.mp3',
    'سورة الإخلاص': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/112.mp3',
    'سورة الفلق': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/113.mp3',
    'سورة الناس': 'https://server14.mp3quran.net/download/islam/Rewayat-Hafs-A-n-Assem/114.mp3',
};

// تحديث عنوان السورة في واجهة المستخدم
function updateSurahTitle(title) {
    const surahTitle = document.getElementById('current-surah');
    surahTitle.textContent = title;
}

// تحديث مصدر الصوت
function updateAudioSource(source) {
    const audioPlayer = document.getElementById('quran-audio');
    audioPlayer.src = source;
    audioPlayer.load();
    audioPlayer.play();
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
    
    // === Player controls augmentation ===
    const audioPlayer = document.getElementById('quran-audio');
    const playBtn = document.getElementById('play-pause');
    const downloadBtn = document.getElementById('download-btn');
    const repeatBtn = document.getElementById('repeat-btn');
    const progress = document.getElementById('progress');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const disc = document.querySelector('.disc');
    const discImage = document.querySelector('.disc-image');

    function formatTime(s) {
        const m = Math.floor(s/60).toString().padStart(2,'0');
        const sec = Math.floor(s%60).toString().padStart(2,'0');
        return `${m}:${sec}`;
    }

    // Override updateAudioSource to update download link and UI
    function updateAudioSource(source) {
        if (!audioPlayer) return;
        audioPlayer.src = source;
        if (downloadBtn) downloadBtn.href = source;
        audioPlayer.load();
        audioPlayer.play().catch(()=>{});
        if (playBtn) playBtn.querySelector('i').classList.replace('fa-play','fa-pause');
        if (disc) disc.classList.add('playing');
        if (discImage) discImage.classList.add('playing');
    }

    if (playBtn && audioPlayer) {
        playBtn.addEventListener('click', function() {
            if (audioPlayer.paused) audioPlayer.play(); else audioPlayer.pause();
        });
    }

    if (repeatBtn && audioPlayer) {
        const syncRepeatState = () => {
            repeatBtn.classList.toggle('active', audioPlayer.loop);
            repeatBtn.setAttribute('aria-pressed', audioPlayer.loop ? 'true' : 'false');
            repeatBtn.title = audioPlayer.loop ? 'إيقاف التكرار' : 'تكرار السورة';
        };

        syncRepeatState();

        repeatBtn.addEventListener('click', function() {
            audioPlayer.loop = !audioPlayer.loop;
            syncRepeatState();
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
            const seekTime = (progress.value/100) * audioPlayer.duration;
            audioPlayer.currentTime = seekTime;
        });

        audioPlayer.addEventListener('play', function() {
            if (playBtn) playBtn.querySelector('i').classList.replace('fa-play','fa-pause');
            if (disc) disc.classList.add('playing');
            if (discImage) discImage.classList.add('playing');
        });

        audioPlayer.addEventListener('pause', function() {
            if (playBtn) playBtn.querySelector('i').classList.replace('fa-pause','fa-play');
            if (disc) disc.classList.remove('playing');
            if (discImage) discImage.classList.remove('playing');
        });

        audioPlayer.addEventListener('ended', function() {
            if (!audioPlayer.loop) {
                if (playBtn) playBtn.querySelector('i').classList.replace('fa-pause','fa-play');
                if (disc) disc.classList.remove('playing');
                if (discImage) discImage.classList.remove('playing');
            }
        });
    }
}); 
