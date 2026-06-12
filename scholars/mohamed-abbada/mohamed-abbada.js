// روابط سور القارئ محمد عبادة - Archive.org
const baseUrl = 'https://dn721808.ca.archive.org/0/items/z02402xxxxxxxxxxx/';

const surahLinks = {
    'سورة الفاتحة': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20001%20%20الفاتحة%20%20mp3.mp3`,
    'سورة البقرة': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20002%20%20البقرة%20%20mp3.mp3`,
    'سورة آل عمران': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20003%20%20آل%20عمران%20%20mp3.mp3`,
    'سورة النساء': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20004%20%20النساء%20%20mp3.mp3`,
    'سورة المائدة': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20005%20%20المائدة%20%20mp3.mp3`,
    'سورة الأنعام': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20006%20%20الأنعام%20%20mp3.mp3`,
    'سورة الأعراف': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20007%20%20الأعراف%20%20mp3.mp3`,
    'سورة الأنفال': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20008%20%20الأنفال%20%20mp3.mp3`,
    'سورة التوبة': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20009%20%20التوبة%20%20mp3.mp3`,
    'سورة يونس': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20010%20%20يونس%20%20mp3.mp3`,
    'سورة هود': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20011%20%20هود%20%20mp3.mp3`,
    'سورة يوسف': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20012%20%20يوسف%20%20mp3.mp3`,
    'سورة الرعد': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20013%20%20الرعد%20%20mp3.mp3`,
    'سورة إبراهيم': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20014%20%20إبراهيم%20%20mp3.mp3`,
    'سورة الحجر': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20015%20%20الحجر%20%20mp3.mp3`,
    'سورة النحل': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20016%20%20النحل%20%20mp3.mp3`,
    'سورة الإسراء': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20017%20%20الإسراء%20%20mp3.mp3`,
    'سورة الكهف': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20018%20%20الكهف%20%20mp3.mp3`,
    'سورة مريم': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20019%20%20مريم%20%20mp3.mp3`,
    'سورة طه': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20020%20%20طه%20%20mp3.mp3`,
    'سورة الأنبياء': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20021%20%20الأنبياء%20%20mp3.mp3`,
    'سورة الحج': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20022%20%20الحج%20%20mp3.mp3`,
    'سورة المؤمنون': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20023%20%20المؤمنون%20%20mp3.mp3`,
    'سورة النور': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20024%20%20النور%20%20mp3.mp3`,
    'سورة الفرقان': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20025%20%20الفرقان%20%20mp3.mp3`,
    'سورة الشعراء': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20026%20%20الشعراء%20%20mp3.mp3`,
    'سورة النمل': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20027%20%20النمل%20%20mp3.mp3`,
    'سورة القصص': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20028%20%20القصص%20%20mp3.mp3`,
    'سورة العنكبوت': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20029%20%20العنكبوت%20%20mp3.mp3`,
    'سورة الروم': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20030%20%20الروم%20%20mp3.mp3`,
    'سورة لقمان': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20031%20%20لقمان%20%20mp3.mp3`,
    'سورة السجدة': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20032%20%20السجدة%20%20mp3.mp3`,
    'سورة الأحزاب': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20033%20%20الأحزاب%20%20mp3.mp3`,
    'سورة سبأ': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20034%20%20سبأ%20%20mp3.mp3`,
    'سورة فاطر': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20035%20%20فاطر%20%20mp3.mp3`,
    'سورة يس': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20036%20%20يس%20%20mp3.mp3`,
    'سورة الصافات': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20037%20%20الصافات%20%20mp3.mp3`,
    'سورة ص': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20038%20%20ص%20%20mp3.mp3`,
    'سورة الزمر': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20039%20%20الزمر%20%20mp3.mp3`,
    'سورة غافر': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20040%20%20غافر%20%20mp3.mp3`,
    'سورة فصلت': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20041%20%20فصلت%20%20mp3.mp3`,
    'سورة الشورى': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20042%20%20الشورى%20%20mp3.mp3`,
    'سورة الزخرف': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20043%20%20الزخرف%20%20mp3.mp3`,
    'سورة الدخان': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20044%20%20الدخان%20%20mp3.mp3`,
    'سورة الجاثية': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20045%20%20الجاثية%20%20mp3.mp3`,
    'سورة الأحقاف': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20046%20%20الأحقاف%20%20mp3.mp3`,
    'سورة محمد': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20047%20%20محمد%20%20mp3.mp3`,
    'سورة الفتح': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20048%20%20الفتح%20%20mp3.mp3`,
    'سورة الحجرات': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20049%20%20الحجرات%20%20mp3.mp3`,
    'سورة ق': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20050%20%20ق%20%20mp3.mp3`,
    'سورة الذاريات': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20051%20%20الذاريات%20%20mp3.mp3`,
    'سورة الطور': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20052%20%20الطور%20%20mp3.mp3`,
    'سورة النجم': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20053%20%20النجم%20%20mp3.mp3`,
    'سورة القمر': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20054%20%20القمر%20%20mp3.mp3`,
    'سورة الرحمن': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20055%20%20الرحمن%20%20mp3.mp3`,
    'سورة الواقعة': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20056%20%20الواقعة%20%20mp3.mp3`,
    'سورة الحديد': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20057%20%20الحديد%20%20mp3.mp3`,
    'سورة المجادلة': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20058%20%20المجادلة%20%20mp3.mp3`,
    'سورة الحشر': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20059%20%20الحشر%20%20mp3.mp3`,
    'سورة الممتحنة': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20060%20%20الممتحنة%20%20mp3.mp3`,
    'سورة الصف': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20061%20%20الصف%20%20mp3.mp3`,
    'سورة الجمعة': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20062%20%20الجمعة%20%20mp3.mp3`,
    'سورة المنافقون': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20063%20%20المنافقون%20%20mp3.mp3`,
    'سورة التغابن': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20064%20%20التغابن%20%20mp3.mp3`,
    'سورة الطلاق': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20065%20%20الطلاق%20%20mp3.mp3`,
    'سورة التحريم': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20066%20%20التحريم%20%20mp3.mp3`,
    'سورة الملك': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20067%20%20الملك%20%20mp3.mp3`,
    'سورة القلم': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20068%20%20القلم%20%20mp3.mp3`,
    'سورة الحاقة': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20069%20%20الحاقة%20%20mp3.mp3`,
    'سورة المعارج': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20070%20%20المعارج%20%20mp3.mp3`,
    'سورة نوح': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20071%20%20نوح%20%20mp3.mp3`,
    'سورة الجن': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20072%20%20الجن%20%20mp3.mp3`,
    'سورة المزمل': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20073%20%20المزمل%20%20mp3.mp3`,
    'سورة المدثر': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20074%20%20المدثر%20%20mp3.mp3`,
    'سورة القيامة': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20075%20%20القيامة%20%20mp3.mp3`,
    'سورة الإنسان': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20076%20%20الإنسان%20%20mp3.mp3`,
    'سورة المرسلات': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20077%20%20المرسلات%20%20mp3.mp3`,
    'سورة النبأ': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20078%20%20النبأ%20%20mp3.mp3`,
    'سورة النازعات': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20079%20%20النازعات%20%20mp3.mp3`,
    'سورة عبس': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20080%20%20عبس%20%20mp3.mp3`,
    'سورة التكوير': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20081%20%20التكوير%20%20mp3.mp3`,
    'سورة الانفطار': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20082%20%20الانفطار%20%20mp3.mp3`,
    'سورة المطففين': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20083%20%20المطففين%20%20mp3.mp3`,
    'سورة الانشقاق': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20084%20%20الانشقاق%20%20mp3.mp3`,
    'سورة البروج': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20085%20%20البروج%20%20mp3.mp3`,
    'سورة الطارق': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20086%20%20الطارق%20%20mp3.mp3`,
    'سورة الأعلى': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20087%20%20الأعلى%20%20mp3.mp3`,
    'سورة الغاشية': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20088%20%20الغاشية%20%20mp3.mp3`,
    'سورة الفجر': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20089%20%20الفجر%20%20mp3.mp3`,
    'سورة البلد': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20090%20%20البلد%20%20mp3.mp3`,
    'سورة الشمس': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20091%20%20الشمس%20%20mp3.mp3`,
    'سورة الليل': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20092%20%20الليل%20%20mp3.mp3`,
    'سورة الضحى': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20093%20%20الضحى%20%20mp3.mp3`,
    'سورة الشرح': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20094%20%20الشرح%20%20mp3.mp3`,
    'سورة التين': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20095%20%20التين%20%20mp3.mp3`,
    'سورة العلق': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20096%20%20العلق%20%20mp3.mp3`,
    'سورة القدر': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20097%20%20القدر%20%20mp3.mp3`,
    'سورة البينة': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20098%20%20البينة%20%20mp3.mp3`,
    'سورة الزلزلة': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20099%20%20الزلزلة%20%20mp3.mp3`,
    'سورة العاديات': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20100%20%20العاديات%20%20mp3.mp3`,
    'سورة القارعة': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20101%20%20القارعة%20%20mp3.mp3`,
    'سورة التكاثر': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20102%20%20التكاثر%20%20mp3.mp3`,
    'سورة العصر': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20103%20%20العصر%20%20mp3.mp3`,
    'سورة الهمزة': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20104%20%20الهمزة%20%20mp3.mp3`,
    'سورة الفيل': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20105%20%20الفيل%20%20mp3.mp3`,
    'سورة قريش': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20106%20%20قريش%20%20mp3.mp3`,
    'سورة الماعون': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20107%20%20الماعون%20%20mp3.mp3`,
    'سورة الكوثر': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20108%20%20الكوثر%20%20mp3.mp3`,
    'سورة الكافرون': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20109%20%20الكافرون%20%20mp3.mp3`,
    'سورة النصر': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20110%20%20النصر%20%20mp3.mp3`,
    'سورة المسد': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20111%20%20المسد%20%20mp3.mp3`,
    'سورة الإخلاص': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20112%20%20الإخلاص%20%20mp3.mp3`,
    'سورة الفلق': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20113%20%20الفلق%20%20mp3.mp3`,
    'سورة الناس': `${baseUrl}تلاوة%20محمد%20عبادة%20سورة%20114%20%20الناس%20%20mp3.mp3`
};

function updateSurahTitle(title) {
    const surahTitle = document.getElementById('current-surah');
    surahTitle.textContent = title;
}

function updateAudioSource(source) {
    const audioPlayer = document.getElementById('quran-audio');
    const downloadBtn = document.getElementById('download-btn');
    const playBtn = document.getElementById('play-pause');
    const disc = document.querySelector('.disc');
    const discImage = document.querySelector('.disc-image');

    audioPlayer.src = source;
    if (downloadBtn) downloadBtn.href = source;
    audioPlayer.load();
    audioPlayer.play().catch(() => {
        // autoplay may be blocked by browser; user can press play
    });

    if (playBtn) {
        const icon = playBtn.querySelector('i');
        if (icon) { icon.classList.remove('fa-play'); icon.classList.add('fa-pause'); }
    }
    if (disc) disc.classList.add('playing');
    if (discImage) discImage.classList.add('playing');
}

document.addEventListener('DOMContentLoaded', function() {
    const surahList = document.querySelectorAll('.surah-list li');
    const audioPlayer = document.getElementById('quran-audio');
    const playBtn = document.getElementById('play-pause');
    const downloadBtn = document.getElementById('download-btn');
    const repeatBtn = document.getElementById('repeat-btn');
    const disc = document.querySelector('.disc');
    const discImage = document.querySelector('.disc-image');

    surahList.forEach(surah => {
        surah.addEventListener('click', function() {
            const surahName = this.textContent;
            const audioSource = surahLinks[surahName];

            if (audioSource) {
                updateSurahTitle(surahName);
                updateAudioSource(audioSource);

                surahList.forEach(item => item.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Play/Pause button
    if (playBtn && audioPlayer) {
        playBtn.addEventListener('click', function() {
            if (audioPlayer.paused) {
                audioPlayer.play();
            } else {
                audioPlayer.pause();
            }
        });
    }

    // Repeat toggle
    if (repeatBtn && audioPlayer) {
        repeatBtn.addEventListener('click', function() {
            audioPlayer.loop = !audioPlayer.loop;
            this.classList.toggle('active', audioPlayer.loop);
        });
    }

    // Audio events to update UI
    if (audioPlayer) {
        audioPlayer.addEventListener('play', function() {
            if (playBtn) {
                const icon = playBtn.querySelector('i');
                if (icon) { icon.classList.remove('fa-play'); icon.classList.add('fa-pause'); }
            }
            if (disc) disc.classList.add('playing');
            if (discImage) discImage.classList.add('playing');
        });

        audioPlayer.addEventListener('pause', function() {
            if (playBtn) {
                const icon = playBtn.querySelector('i');
                if (icon) { icon.classList.remove('fa-pause'); icon.classList.add('fa-play'); }
            }
            if (disc) disc.classList.remove('playing');
            if (discImage) discImage.classList.remove('playing');
        });

        audioPlayer.addEventListener('ended', function() {
            if (!audioPlayer.loop) {
                if (playBtn) {
                    const icon = playBtn.querySelector('i');
                    if (icon) { icon.classList.remove('fa-pause'); icon.classList.add('fa-play'); }
                }
                if (disc) disc.classList.remove('playing');
                if (discImage) discImage.classList.remove('playing');
            }
        });
        
        // Progress / seek UI (قابل للتعديل)
        const progress = document.getElementById('progress');
        const currentTimeEl = document.getElementById('current-time');
        const durationEl = document.getElementById('duration');

        function formatTime(s){
            if (!isFinite(s) || s <= 0) return '00:00';
            const m = Math.floor(s/60).toString().padStart(2,'0');
            const sec = Math.floor(s%60).toString().padStart(2,'0');
            return `${m}:${sec}`;
        }

        if (audioPlayer) {
            audioPlayer.addEventListener('loadedmetadata', () => {
                if (durationEl) durationEl.textContent = formatTime(audioPlayer.duration || 0);
            });

            audioPlayer.addEventListener('timeupdate', () => {
                if (progress && audioPlayer.duration) {
                    const pct = (audioPlayer.currentTime / audioPlayer.duration) * 100;
                    progress.value = pct || 0;
                    // visual gradient
                    progress.style.background = `linear-gradient(90deg, ${encodeURIComponent("#F5A623")} ${pct}%, #333 ${pct}%)`;
                }
                if (currentTimeEl) currentTimeEl.textContent = formatTime(audioPlayer.currentTime || 0);
            });

            progress && progress.addEventListener('input', () => {
                if (!audioPlayer.duration) return;
                const t = (progress.value/100) * audioPlayer.duration;
                audioPlayer.currentTime = t;
            });
        }
    }
});
