// روابط السور من موقع MP3Quran.net
const surahLinks = {
    'سورة الفاتحة': 'https://server8.mp3quran.net/download/jbrl/001.mp3',
    'سورة البقرة': 'https://server8.mp3quran.net/download/jbrl/002.mp3',
    'سورة آل عمران': 'https://server8.mp3quran.net/download/jbrl/003.mp3',
    'سورة النساء': 'https://server8.mp3quran.net/download/jbrl/004.mp3',
    'سورة المائدة': 'https://server8.mp3quran.net/download/jbrl/005.mp3',
    'سورة الأنعام': 'https://server8.mp3quran.net/download/jbrl/006.mp3',
    'سورة الأعراف': 'https://server8.mp3quran.net/download/jbrl/007.mp3',
    'سورة الأنفال': 'https://server8.mp3quran.net/download/jbrl/008.mp3',
    'سورة التوبة': 'https://server8.mp3quran.net/download/jbrl/009.mp3',
    'سورة يونس': 'https://server8.mp3quran.net/download/jbrl/010.mp3',
    'سورة هود': 'https://server8.mp3quran.net/download/jbrl/011.mp3',
    'سورة يوسف': 'https://server8.mp3quran.net/download/jbrl/012.mp3',
    'سورة الرعد': 'https://server8.mp3quran.net/download/jbrl/013.mp3',
    'سورة إبراهيم': 'https://server8.mp3quran.net/download/jbrl/014.mp3',
    'سورة الحجر': 'https://server8.mp3quran.net/download/jbrl/015.mp3',
    'سورة النحل': 'https://server8.mp3quran.net/download/jbrl/016.mp3',
    'سورة الإسراء': 'https://server8.mp3quran.net/download/jbrl/017.mp3',
    'سورة الكهف': 'https://server8.mp3quran.net/download/jbrl/018.mp3',
    'سورة مريم': 'https://server8.mp3quran.net/download/jbrl/019.mp3',
    'سورة طه': 'https://server8.mp3quran.net/download/jbrl/020.mp3',
    'سورة الأنبياء': 'https://server8.mp3quran.net/download/jbrl/021.mp3',
    'سورة الحج': 'https://server8.mp3quran.net/download/jbrl/022.mp3',
    'سورة المؤمنون': 'https://server8.mp3quran.net/download/jbrl/023.mp3',
    'سورة النور': 'https://server8.mp3quran.net/download/jbrl/024.mp3',
    'سورة الفرقان': 'https://server8.mp3quran.net/download/jbrl/025.mp3',
    'سورة الشعراء': 'https://server8.mp3quran.net/download/jbrl/026.mp3',
    'سورة النمل': 'https://server8.mp3quran.net/download/jbrl/027.mp3',
    'سورة القصص': 'https://server8.mp3quran.net/download/jbrl/028.mp3',
    'سورة العنكبوت': 'https://server8.mp3quran.net/download/jbrl/029.mp3',
    'سورة الروم': 'https://server8.mp3quran.net/download/jbrl/030.mp3',
    'سورة لقمان': 'https://server8.mp3quran.net/download/jbrl/031.mp3',
    'سورة السجدة': 'https://server8.mp3quran.net/download/jbrl/032.mp3',
    'سورة الأحزاب': 'https://server8.mp3quran.net/download/jbrl/033.mp3',
    'سورة سبأ': 'https://server8.mp3quran.net/download/jbrl/034.mp3',
    'سورة فاطر': 'https://server8.mp3quran.net/download/jbrl/035.mp3',
    'سورة يس': 'https://server8.mp3quran.net/download/jbrl/036.mp3',
    'سورة الصافات': 'https://server8.mp3quran.net/download/jbrl/037.mp3',
    'سورة ص': 'https://server8.mp3quran.net/download/jbrl/038.mp3',
    'سورة الزمر': 'https://server8.mp3quran.net/download/jbrl/039.mp3',
    'سورة غافر': 'https://server8.mp3quran.net/download/jbrl/040.mp3',
    'سورة فصلت': 'https://server8.mp3quran.net/download/jbrl/041.mp3',
    'سورة الشورى': 'https://server8.mp3quran.net/download/jbrl/042.mp3',
    'سورة الزخرف': 'https://server8.mp3quran.net/download/jbrl/043.mp3',
    'سورة الدخان': 'https://server8.mp3quran.net/download/jbrl/044.mp3',
    'سورة الجاثية': 'https://server8.mp3quran.net/download/jbrl/045.mp3',
    'سورة الأحقاف': 'https://server8.mp3quran.net/download/jbrl/046.mp3',
    'سورة محمد': 'https://server8.mp3quran.net/download/jbrl/047.mp3',
    'سورة الفتح': 'https://server8.mp3quran.net/download/jbrl/048.mp3',
    'سورة الحجرات': 'https://server8.mp3quran.net/download/jbrl/049.mp3',
    'سورة ق': 'https://server8.mp3quran.net/download/jbrl/050.mp3',
    'سورة الذاريات': 'https://server8.mp3quran.net/download/jbrl/051.mp3',
    'سورة الطور': 'https://server8.mp3quran.net/download/jbrl/052.mp3',
    'سورة النجم': 'https://server8.mp3quran.net/download/jbrl/053.mp3',
    'سورة القمر': 'https://server8.mp3quran.net/download/jbrl/054.mp3',
    'سورة الرحمن': 'https://server8.mp3quran.net/download/jbrl/055.mp3',
    'سورة الواقعة': 'https://server8.mp3quran.net/download/jbrl/056.mp3',
    'سورة الحديد': 'https://server8.mp3quran.net/download/jbrl/057.mp3',
    'سورة المجادلة': 'https://server8.mp3quran.net/download/jbrl/058.mp3',
    'سورة الحشر': 'https://server8.mp3quran.net/download/jbrl/059.mp3',
    'سورة الممتحنة': 'https://server8.mp3quran.net/download/jbrl/060.mp3',
    'سورة الصف': 'https://server8.mp3quran.net/download/jbrl/061.mp3',
    'سورة الجمعة': 'https://server8.mp3quran.net/download/jbrl/062.mp3',
    'سورة المنافقون': 'https://server8.mp3quran.net/download/jbrl/063.mp3',
    'سورة التغابن': 'https://server8.mp3quran.net/download/jbrl/064.mp3',
    'سورة الطلاق': 'https://server8.mp3quran.net/download/jbrl/065.mp3',
    'سورة التحريم': 'https://server8.mp3quran.net/download/jbrl/066.mp3',
    'سورة الملك': 'https://server8.mp3quran.net/download/jbrl/067.mp3',
    'سورة القلم': 'https://server8.mp3quran.net/download/jbrl/068.mp3',
    'سورة الحاقة': 'https://server8.mp3quran.net/download/jbrl/069.mp3',
    'سورة المعارج': 'https://server8.mp3quran.net/download/jbrl/070.mp3',
    'سورة نوح': 'https://server8.mp3quran.net/download/jbrl/071.mp3',
    'سورة الجن': 'https://server8.mp3quran.net/download/jbrl/072.mp3',
    'سورة المزمل': 'https://server8.mp3quran.net/download/jbrl/073.mp3',
    'سورة المدثر': 'https://server8.mp3quran.net/download/jbrl/074.mp3',
    'سورة القيامة': 'https://server8.mp3quran.net/download/jbrl/075.mp3',
    'سورة الإنسان': 'https://server8.mp3quran.net/download/jbrl/076.mp3',
    'سورة المرسلات': 'https://server8.mp3quran.net/download/jbrl/077.mp3',
    'سورة النبأ': 'https://server8.mp3quran.net/download/jbrl/078.mp3',
    'سورة النازعات': 'https://server8.mp3quran.net/download/jbrl/079.mp3',
    'سورة عبس': 'https://server8.mp3quran.net/download/jbrl/080.mp3',
    'سورة التكوير': 'https://server8.mp3quran.net/download/jbrl/081.mp3',
    'سورة الانفطار': 'https://server8.mp3quran.net/download/jbrl/082.mp3',
    'سورة المطففين': 'https://server8.mp3quran.net/download/jbrl/083.mp3',
    'سورة الانشقاق': 'https://server8.mp3quran.net/download/jbrl/084.mp3',
    'سورة البروج': 'https://server8.mp3quran.net/download/jbrl/085.mp3',
    'سورة الطارق': 'https://server8.mp3quran.net/download/jbrl/086.mp3',
    'سورة الأعلى': 'https://server8.mp3quran.net/download/jbrl/087.mp3',
    'سورة الغاشية': 'https://server8.mp3quran.net/download/jbrl/088.mp3',
    'سورة الفجر': 'https://server8.mp3quran.net/download/jbrl/089.mp3',
    'سورة البلد': 'https://server8.mp3quran.net/download/jbrl/090.mp3',
    'سورة الشمس': 'https://server8.mp3quran.net/download/jbrl/091.mp3',
    'سورة الليل': 'https://server8.mp3quran.net/download/jbrl/092.mp3',
    'سورة الضحى': 'https://server8.mp3quran.net/download/jbrl/093.mp3',
    'سورة الشرح': 'https://server8.mp3quran.net/download/jbrl/094.mp3',
    'سورة التين': 'https://server8.mp3quran.net/download/jbrl/095.mp3',
    'سورة العلق': 'https://server8.mp3quran.net/download/jbrl/096.mp3',
    'سورة القدر': 'https://server8.mp3quran.net/download/jbrl/097.mp3',
    'سورة البينة': 'https://server8.mp3quran.net/download/jbrl/098.mp3',
    'سورة الزلزلة': 'https://server8.mp3quran.net/download/jbrl/099.mp3',
    'سورة العاديات': 'https://server8.mp3quran.net/download/jbrl/100.mp3',
    'سورة القارعة': 'https://server8.mp3quran.net/download/jbrl/101.mp3',
    'سورة التكاثر': 'https://server8.mp3quran.net/download/jbrl/102.mp3',
    'سورة العصر': 'https://server8.mp3quran.net/download/jbrl/103.mp3',
    'سورة الهمزة': 'https://server8.mp3quran.net/download/jbrl/104.mp3',
    'سورة الفيل': 'https://server8.mp3quran.net/download/jbrl/105.mp3',
    'سورة قريش': 'https://server8.mp3quran.net/download/jbrl/106.mp3',
    'سورة الماعون': 'https://server8.mp3quran.net/download/jbrl/107.mp3',
    'سورة الكوثر': 'https://server8.mp3quran.net/download/jbrl/108.mp3',
    'سورة الكافرون': 'https://server8.mp3quran.net/download/jbrl/109.mp3',
    'سورة النصر': 'https://server8.mp3quran.net/download/jbrl/110.mp3',
    'سورة المسد': 'https://server8.mp3quran.net/download/jbrl/111.mp3',
    'سورة الإخلاص': 'https://server8.mp3quran.net/download/jbrl/112.mp3',
    'سورة الفلق': 'https://server8.mp3quran.net/download/jbrl/113.mp3',
    'سورة الناس': 'https://server8.mp3quran.net/download/jbrl/114.mp3'
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
}); 