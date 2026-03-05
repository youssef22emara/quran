// روابط السور من موقع MP3Quran.net
const surahLinks = {
    'سورة الفاتحة': 'https://server7.mp3quran.net/download/shur/001.mp3',
    'سورة البقرة': 'https://server7.mp3quran.net/download/shur/002.mp3',
    'سورة آل عمران': 'https://server7.mp3quran.net/download/shur/003.mp3',
    'سورة النساء': 'https://server7.mp3quran.net/download/shur/004.mp3',
    'سورة المائدة': 'https://server7.mp3quran.net/download/shur/005.mp3',
    'سورة الأنعام': 'https://server7.mp3quran.net/download/shur/006.mp3',
    'سورة الأعراف': 'https://server7.mp3quran.net/download/shur/007.mp3',
    'سورة الأنفال': 'https://server7.mp3quran.net/download/shur/008.mp3',
    'سورة التوبة': 'https://server7.mp3quran.net/download/shur/009.mp3',
    'سورة يونس': 'https://server7.mp3quran.net/download/shur/010.mp3',
    'سورة هود': 'https://server7.mp3quran.net/download/shur/011.mp3',
    'سورة يوسف': 'https://server7.mp3quran.net/download/shur/012.mp3',
    'سورة الرعد': 'https://server7.mp3quran.net/download/shur/013.mp3',
    'سورة إبراهيم': 'https://server7.mp3quran.net/download/shur/014.mp3',
    'سورة الحجر': 'https://server7.mp3quran.net/download/shur/015.mp3',
    'سورة النحل': 'https://server7.mp3quran.net/download/shur/016.mp3',
    'سورة الإسراء': 'https://server7.mp3quran.net/download/shur/017.mp3',
    'سورة الكهف': 'https://server7.mp3quran.net/download/shur/018.mp3',
    'سورة مريم': 'https://server7.mp3quran.net/download/shur/019.mp3',
    'سورة طه': 'https://server7.mp3quran.net/download/shur/020.mp3',
    'سورة الأنبياء': 'https://server7.mp3quran.net/download/shur/021.mp3',
    'سورة الحج': 'https://server7.mp3quran.net/download/shur/022.mp3',
    'سورة المؤمنون': 'https://server7.mp3quran.net/download/shur/023.mp3',
    'سورة النور': 'https://server7.mp3quran.net/download/shur/024.mp3',
    'سورة الفرقان': 'https://server7.mp3quran.net/download/shur/025.mp3',
    'سورة الشعراء': 'https://server7.mp3quran.net/download/shur/026.mp3',
    'سورة النمل': 'https://server7.mp3quran.net/download/shur/027.mp3',
    'سورة القصص': 'https://server7.mp3quran.net/download/shur/028.mp3',
    'سورة العنكبوت': 'https://server7.mp3quran.net/download/shur/029.mp3',
    'سورة الروم': 'https://server7.mp3quran.net/download/shur/030.mp3',
    'سورة لقمان': 'https://server7.mp3quran.net/download/shur/031.mp3',
    'سورة السجدة': 'https://server7.mp3quran.net/download/shur/032.mp3',
    'سورة الأحزاب': 'https://server7.mp3quran.net/download/shur/033.mp3',
    'سورة سبأ': 'https://server7.mp3quran.net/download/shur/034.mp3',
    'سورة فاطر': 'https://server7.mp3quran.net/download/shur/035.mp3',
    'سورة يس': 'https://server7.mp3quran.net/download/shur/036.mp3',
    'سورة الصافات': 'https://server7.mp3quran.net/download/shur/037.mp3',
    'سورة ص': 'https://server7.mp3quran.net/download/shur/038.mp3',
    'سورة الزمر': 'https://server7.mp3quran.net/download/shur/039.mp3',
    'سورة غافر': 'https://server7.mp3quran.net/download/shur/040.mp3',
    'سورة فصلت': 'https://server7.mp3quran.net/download/shur/041.mp3',
    'سورة الشورى': 'https://server7.mp3quran.net/download/shur/042.mp3',
    'سورة الزخرف': 'https://server7.mp3quran.net/download/shur/043.mp3',
    'سورة الدخان': 'https://server7.mp3quran.net/download/shur/044.mp3',
    'سورة الجاثية': 'https://server7.mp3quran.net/download/shur/045.mp3',
    'سورة الأحقاف': 'https://server7.mp3quran.net/download/shur/046.mp3',
    'سورة محمد': 'https://server7.mp3quran.net/download/shur/047.mp3',
    'سورة الفتح': 'https://server7.mp3quran.net/download/shur/048.mp3',
    'سورة الحجرات': 'https://server7.mp3quran.net/download/shur/049.mp3',
    'سورة ق': 'https://server7.mp3quran.net/download/shur/050.mp3',
    'سورة الذاريات': 'https://server7.mp3quran.net/download/shur/051.mp3',
    'سورة الطور': 'https://server7.mp3quran.net/download/shur/052.mp3',
    'سورة النجم': 'https://server7.mp3quran.net/download/shur/053.mp3',
    'سورة القمر': 'https://server7.mp3quran.net/download/shur/054.mp3',
    'سورة الرحمن': 'https://server7.mp3quran.net/download/shur/055.mp3',
    'سورة الواقعة': 'https://server7.mp3quran.net/download/shur/056.mp3',
    'سورة الحديد': 'https://server7.mp3quran.net/download/shur/057.mp3',
    'سورة المجادلة': 'https://server7.mp3quran.net/download/shur/058.mp3',
    'سورة الحشر': 'https://server7.mp3quran.net/download/shur/059.mp3',
    'سورة الممتحنة': 'https://server7.mp3quran.net/download/shur/060.mp3',
    'سورة الصف': 'https://server7.mp3quran.net/download/shur/061.mp3',
    'سورة الجمعة': 'https://server7.mp3quran.net/download/shur/062.mp3',
    'سورة المنافقون': 'https://server7.mp3quran.net/download/shur/063.mp3',
    'سورة التغابن': 'https://server7.mp3quran.net/download/shur/064.mp3',
    'سورة الطلاق': 'https://server7.mp3quran.net/download/shur/065.mp3',
    'سورة التحريم': 'https://server7.mp3quran.net/download/shur/066.mp3',
    'سورة الملك': 'https://server7.mp3quran.net/download/shur/067.mp3',
    'سورة القلم': 'https://server7.mp3quran.net/download/shur/068.mp3',
    'سورة الحاقة': 'https://server7.mp3quran.net/download/shur/069.mp3',
    'سورة المعارج': 'https://server7.mp3quran.net/download/shur/070.mp3',
    'سورة نوح': 'https://server7.mp3quran.net/download/shur/071.mp3',
    'سورة الجن': 'https://server7.mp3quran.net/download/shur/072.mp3',
    'سورة المزمل': 'https://server7.mp3quran.net/download/shur/073.mp3',
    'سورة المدثر': 'https://server7.mp3quran.net/download/shur/074.mp3',
    'سورة القيامة': 'https://server7.mp3quran.net/download/shur/075.mp3',
    'سورة الإنسان': 'https://server7.mp3quran.net/download/shur/076.mp3',
    'سورة المرسلات': 'https://server7.mp3quran.net/download/shur/077.mp3',
    'سورة النبأ': 'https://server7.mp3quran.net/download/shur/078.mp3',
    'سورة النازعات': 'https://server7.mp3quran.net/download/shur/079.mp3',
    'سورة عبس': 'https://server7.mp3quran.net/download/shur/080.mp3',
    'سورة التكوير': 'https://server7.mp3quran.net/download/shur/081.mp3',
    'سورة الانفطار': 'https://server7.mp3quran.net/download/shur/082.mp3',
    'سورة المطففين': 'https://server7.mp3quran.net/download/shur/083.mp3',
    'سورة الانشقاق': 'https://server7.mp3quran.net/download/shur/084.mp3',
    'سورة البروج': 'https://server7.mp3quran.net/download/shur/085.mp3',
    'سورة الطارق': 'https://server7.mp3quran.net/download/shur/086.mp3',
    'سورة الأعلى': 'https://server7.mp3quran.net/download/shur/087.mp3',
    'سورة الغاشية': 'https://server7.mp3quran.net/download/shur/088.mp3',
    'سورة الفجر': 'https://server7.mp3quran.net/download/shur/089.mp3',
    'سورة البلد': 'https://server7.mp3quran.net/download/shur/090.mp3',
    'سورة الشمس': 'https://server7.mp3quran.net/download/shur/091.mp3',
    'سورة الليل': 'https://server7.mp3quran.net/download/shur/092.mp3',
    'سورة الضحى': 'https://server7.mp3quran.net/download/shur/093.mp3',
    'سورة الشرح': 'https://server7.mp3quran.net/download/shur/094.mp3',
    'سورة التين': 'https://server7.mp3quran.net/download/shur/095.mp3',
    'سورة العلق': 'https://server7.mp3quran.net/download/shur/096.mp3',
    'سورة القدر': 'https://server7.mp3quran.net/download/shur/097.mp3',
    'سورة البينة': 'https://server7.mp3quran.net/download/shur/098.mp3',
    'سورة الزلزلة': 'https://server7.mp3quran.net/download/shur/099.mp3',
    'سورة العاديات': 'https://server7.mp3quran.net/download/shur/100.mp3',
    'سورة القارعة': 'https://server7.mp3quran.net/download/shur/101.mp3',
    'سورة التكاثر': 'https://server7.mp3quran.net/download/shur/102.mp3',
    'سورة العصر': 'https://server7.mp3quran.net/download/shur/103.mp3',
    'سورة الهمزة': 'https://server7.mp3quran.net/download/shur/104.mp3',
    'سورة الفيل': 'https://server7.mp3quran.net/download/shur/105.mp3',
    'سورة قريش': 'https://server7.mp3quran.net/download/shur/106.mp3',
    'سورة الماعون': 'https://server7.mp3quran.net/download/shur/107.mp3',
    'سورة الكوثر': 'https://server7.mp3quran.net/download/shur/108.mp3',
    'سورة الكافرون': 'https://server7.mp3quran.net/download/shur/109.mp3',
    'سورة النصر': 'https://server7.mp3quran.net/download/shur/110.mp3',
    'سورة المسد': 'https://server7.mp3quran.net/download/shur/111.mp3',
    'سورة الإخلاص': 'https://server7.mp3quran.net/download/shur/112.mp3',
    'سورة الفلق': 'https://server7.mp3quran.net/download/shur/113.mp3',
    'سورة الناس': 'https://server7.mp3quran.net/download/shur/114.mp3'
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