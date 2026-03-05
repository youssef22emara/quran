// روابط السور من موقع MP3Quran.net
const surahLinks = {
    'سورة الفاتحة': 'https://server6.mp3quran.net/download/qtm/001.mp3',
    'سورة البقرة': 'https://server6.mp3quran.net/download/qtm/002.mp3',
    'سورة آل عمران': 'https://server6.mp3quran.net/download/qtm/003.mp3',
    'سورة النساء': 'https://server6.mp3quran.net/download/qtm/004.mp3',
    'سورة المائدة': 'https://server6.mp3quran.net/download/qtm/005.mp3',
    'سورة الأنعام': 'https://server6.mp3quran.net/download/qtm/006.mp3',
    'سورة الأعراف': 'https://server6.mp3quran.net/download/qtm/007.mp3',
    'سورة الأنفال': 'https://server6.mp3quran.net/download/qtm/008.mp3',
    'سورة التوبة': 'https://server6.mp3quran.net/download/qtm/009.mp3',
    'سورة يونس': 'https://server6.mp3quran.net/download/qtm/010.mp3',
    'سورة هود': 'https://server6.mp3quran.net/download/qtm/011.mp3',
    'سورة يوسف': 'https://server6.mp3quran.net/download/qtm/012.mp3',
    'سورة الرعد': 'https://server6.mp3quran.net/download/qtm/013.mp3',
    'سورة إبراهيم': 'https://server6.mp3quran.net/download/qtm/014.mp3',
    'سورة الحجر': 'https://server6.mp3quran.net/download/qtm/015.mp3',
    'سورة النحل': 'https://server6.mp3quran.net/download/qtm/016.mp3',
    'سورة الإسراء': 'https://server6.mp3quran.net/download/qtm/017.mp3',
    'سورة الكهف': 'https://server6.mp3quran.net/download/qtm/018.mp3',
    'سورة مريم': 'https://server6.mp3quran.net/download/qtm/019.mp3',
    'سورة طه': 'https://server6.mp3quran.net/download/qtm/020.mp3',
    'سورة الأنبياء': 'https://server6.mp3quran.net/download/qtm/021.mp3',
    'سورة الحج': 'https://server6.mp3quran.net/download/qtm/022.mp3',
    'سورة المؤمنون': 'https://server6.mp3quran.net/download/qtm/023.mp3',
    'سورة النور': 'https://server6.mp3quran.net/download/qtm/024.mp3',
    'سورة الفرقان': 'https://server6.mp3quran.net/download/qtm/025.mp3',
    'سورة الشعراء': 'https://server6.mp3quran.net/download/qtm/026.mp3',
    'سورة النمل': 'https://server6.mp3quran.net/download/qtm/027.mp3',
    'سورة القصص': 'https://server6.mp3quran.net/download/qtm/028.mp3',
    'سورة العنكبوت': 'https://server6.mp3quran.net/download/qtm/029.mp3',
    'سورة الروم': 'https://server6.mp3quran.net/download/qtm/030.mp3',
    'سورة لقمان': 'https://server6.mp3quran.net/download/qtm/031.mp3',
    'سورة السجدة': 'https://server6.mp3quran.net/download/qtm/032.mp3',
    'سورة الأحزاب': 'https://server6.mp3quran.net/download/qtm/033.mp3',
    'سورة سبأ': 'https://server6.mp3quran.net/download/qtm/034.mp3',
    'سورة فاطر': 'https://server6.mp3quran.net/download/qtm/035.mp3',
    'سورة يس': 'https://server6.mp3quran.net/download/qtm/036.mp3',
    'سورة الصافات': 'https://server6.mp3quran.net/download/qtm/037.mp3',
    'سورة ص': 'https://server6.mp3quran.net/download/qtm/038.mp3',
    'سورة الزمر': 'https://server6.mp3quran.net/download/qtm/039.mp3',
    'سورة غافر': 'https://server6.mp3quran.net/download/qtm/040.mp3',
    'سورة فصلت': 'https://server6.mp3quran.net/download/qtm/041.mp3',
    'سورة الشورى': 'https://server6.mp3quran.net/download/qtm/042.mp3',
    'سورة الزخرف': 'https://server6.mp3quran.net/download/qtm/043.mp3',
    'سورة الدخان': 'https://server6.mp3quran.net/download/qtm/044.mp3',
    'سورة الجاثية': 'https://server6.mp3quran.net/download/qtm/045.mp3',
    'سورة الأحقاف': 'https://server6.mp3quran.net/download/qtm/046.mp3',
    'سورة محمد': 'https://server6.mp3quran.net/download/qtm/047.mp3',
    'سورة الفتح': 'https://server6.mp3quran.net/download/qtm/048.mp3',
    'سورة الحجرات': 'https://server6.mp3quran.net/download/qtm/049.mp3',
    'سورة ق': 'https://server6.mp3quran.net/download/qtm/050.mp3',
    'سورة الذاريات': 'https://server6.mp3quran.net/download/qtm/051.mp3',
    'سورة الطور': 'https://server6.mp3quran.net/download/qtm/052.mp3',
    'سورة النجم': 'https://server6.mp3quran.net/download/qtm/053.mp3',
    'سورة القمر': 'https://server6.mp3quran.net/download/qtm/054.mp3',
    'سورة الرحمن': 'https://server6.mp3quran.net/download/qtm/055.mp3',
    'سورة الواقعة': 'https://server6.mp3quran.net/download/qtm/056.mp3',
    'سورة الحديد': 'https://server6.mp3quran.net/download/qtm/057.mp3',
    'سورة المجادلة': 'https://server6.mp3quran.net/download/qtm/058.mp3',
    'سورة الحشر': 'https://server6.mp3quran.net/download/qtm/059.mp3',
    'سورة الممتحنة': 'https://server6.mp3quran.net/download/qtm/060.mp3',
    'سورة الصف': 'https://server6.mp3quran.net/download/qtm/061.mp3',
    'سورة الجمعة': 'https://server6.mp3quran.net/download/qtm/062.mp3',
    'سورة المنافقون': 'https://server6.mp3quran.net/download/qtm/063.mp3',
    'سورة التغابن': 'https://server6.mp3quran.net/download/qtm/064.mp3',
    'سورة الطلاق': 'https://server6.mp3quran.net/download/qtm/065.mp3',
    'سورة التحريم': 'https://server6.mp3quran.net/download/qtm/066.mp3',
    'سورة الملك': 'https://server6.mp3quran.net/download/qtm/067.mp3',
    'سورة القلم': 'https://server6.mp3quran.net/download/qtm/068.mp3',
    'سورة الحاقة': 'https://server6.mp3quran.net/download/qtm/069.mp3',
    'سورة المعارج': 'https://server6.mp3quran.net/download/qtm/070.mp3',
    'سورة نوح': 'https://server6.mp3quran.net/download/qtm/071.mp3',
    'سورة الجن': 'https://server6.mp3quran.net/download/qtm/072.mp3',
    'سورة المزمل': 'https://server6.mp3quran.net/download/qtm/073.mp3',
    'سورة المدثر': 'https://server6.mp3quran.net/download/qtm/074.mp3',
    'سورة القيامة': 'https://server6.mp3quran.net/download/qtm/075.mp3',
    'سورة الإنسان': 'https://server6.mp3quran.net/download/qtm/076.mp3',
    'سورة المرسلات': 'https://server6.mp3quran.net/download/qtm/077.mp3',
    'سورة النبأ': 'https://server6.mp3quran.net/download/qtm/078.mp3',
    'سورة النازعات': 'https://server6.mp3quran.net/download/qtm/079.mp3',
    'سورة عبس': 'https://server6.mp3quran.net/download/qtm/080.mp3',
    'سورة التكوير': 'https://server6.mp3quran.net/download/qtm/081.mp3',
    'سورة الانفطار': 'https://server6.mp3quran.net/download/qtm/082.mp3',
    'سورة المطففين': 'https://server6.mp3quran.net/download/qtm/083.mp3',
    'سورة الانشقاق': 'https://server6.mp3quran.net/download/qtm/084.mp3',
    'سورة البروج': 'https://server6.mp3quran.net/download/qtm/085.mp3',
    'سورة الطارق': 'https://server6.mp3quran.net/download/qtm/086.mp3',
    'سورة الأعلى': 'https://server6.mp3quran.net/download/qtm/087.mp3',
    'سورة الغاشية': 'https://server6.mp3quran.net/download/qtm/088.mp3',
    'سورة الفجر': 'https://server6.mp3quran.net/download/qtm/089.mp3',
    'سورة البلد': 'https://server6.mp3quran.net/download/qtm/090.mp3',
    'سورة الشمس': 'https://server6.mp3quran.net/download/qtm/091.mp3',
    'سورة الليل': 'https://server6.mp3quran.net/download/qtm/092.mp3',
    'سورة الضحى': 'https://server6.mp3quran.net/download/qtm/093.mp3',
    'سورة الشرح': 'https://server6.mp3quran.net/download/qtm/094.mp3',
    'سورة التين': 'https://server6.mp3quran.net/download/qtm/095.mp3',
    'سورة العلق': 'https://server6.mp3quran.net/download/qtm/096.mp3',
    'سورة القدر': 'https://server6.mp3quran.net/download/qtm/097.mp3',
    'سورة البينة': 'https://server6.mp3quran.net/download/qtm/098.mp3',
    'سورة الزلزلة': 'https://server6.mp3quran.net/download/qtm/099.mp3',
    'سورة العاديات': 'https://server6.mp3quran.net/download/qtm/100.mp3',
    'سورة القارعة': 'https://server6.mp3quran.net/download/qtm/101.mp3',
    'سورة التكاثر': 'https://server6.mp3quran.net/download/qtm/102.mp3',
    'سورة العصر': 'https://server6.mp3quran.net/download/qtm/103.mp3',
    'سورة الهمزة': 'https://server6.mp3quran.net/download/qtm/104.mp3',
    'سورة الفيل': 'https://server6.mp3quran.net/download/qtm/105.mp3',
    'سورة قريش': 'https://server6.mp3quran.net/download/qtm/106.mp3',
    'سورة الماعون': 'https://server6.mp3quran.net/download/qtm/107.mp3',
    'سورة الكوثر': 'https://server6.mp3quran.net/download/qtm/108.mp3',
    'سورة الكافرون': 'https://server6.mp3quran.net/download/qtm/109.mp3',
    'سورة النصر': 'https://server6.mp3quran.net/download/qtm/110.mp3',
    'سورة المسد': 'https://server6.mp3quran.net/download/qtm/111.mp3',
    'سورة الإخلاص': 'https://server6.mp3quran.net/download/qtm/112.mp3',
    'سورة الفلق': 'https://server6.mp3quran.net/download/qtm/113.mp3',
    'سورة الناس': 'https://server6.mp3quran.net/download/qtm/114.mp3'
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