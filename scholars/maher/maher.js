// روابط السور من موقع MP3Quran.net
const surahLinks = {
    'سورة الفاتحة': 'https://server12.mp3quran.net/download/maher/001.mp3',
    'سورة البقرة': 'https://server12.mp3quran.net/download/maher/002.mp3',
    'سورة آل عمران': 'https://server12.mp3quran.net/download/maher/003.mp3',
    'سورة النساء': 'https://server12.mp3quran.net/download/maher/004.mp3',
    'سورة المائدة': 'https://server12.mp3quran.net/download/maher/005.mp3',
    'سورة الأنعام': 'https://server12.mp3quran.net/download/maher/006.mp3',
    'سورة الأعراف': 'https://server12.mp3quran.net/download/maher/007.mp3',
    'سورة الأنفال': 'https://server12.mp3quran.net/download/maher/008.mp3',
    'سورة التوبة': 'https://server12.mp3quran.net/download/maher/009.mp3',
    'سورة يونس': 'https://server12.mp3quran.net/download/maher/010.mp3',
    'سورة هود': 'https://server12.mp3quran.net/download/maher/011.mp3',
    'سورة يوسف': 'https://server12.mp3quran.net/download/maher/012.mp3',
    'سورة الرعد': 'https://server12.mp3quran.net/download/maher/013.mp3',
    'سورة إبراهيم': 'https://server12.mp3quran.net/download/maher/014.mp3',
    'سورة الحجر': 'https://server12.mp3quran.net/download/maher/015.mp3',
    'سورة النحل': 'https://server12.mp3quran.net/download/maher/016.mp3',
    'سورة الإسراء': 'https://server12.mp3quran.net/download/maher/017.mp3',
    'سورة الكهف': 'https://server12.mp3quran.net/download/maher/018.mp3',
    'سورة مريم': 'https://server12.mp3quran.net/download/maher/019.mp3',
    'سورة طه': 'https://server12.mp3quran.net/download/maher/020.mp3',
    'سورة الأنبياء': 'https://server12.mp3quran.net/download/maher/021.mp3',
    'سورة الحج': 'https://server12.mp3quran.net/download/maher/022.mp3',
    'سورة المؤمنون': 'https://server12.mp3quran.net/download/maher/023.mp3',
    'سورة النور': 'https://server12.mp3quran.net/download/maher/024.mp3',
    'سورة الفرقان': 'https://server12.mp3quran.net/download/maher/025.mp3',
    'سورة الشعراء': 'https://server12.mp3quran.net/download/maher/026.mp3',
    'سورة النمل': 'https://server12.mp3quran.net/download/maher/027.mp3',
    'سورة القصص': 'https://server12.mp3quran.net/download/maher/028.mp3',
    'سورة العنكبوت': 'https://server12.mp3quran.net/download/maher/029.mp3',
    'سورة الروم': 'https://server12.mp3quran.net/download/maher/030.mp3',
    'سورة لقمان': 'https://server12.mp3quran.net/download/maher/031.mp3',
    'سورة السجدة': 'https://server12.mp3quran.net/download/maher/032.mp3',
    'سورة الأحزاب': 'https://server12.mp3quran.net/download/maher/033.mp3',
    'سورة سبأ': 'https://server12.mp3quran.net/download/maher/034.mp3',
    'سورة فاطر': 'https://server12.mp3quran.net/download/maher/035.mp3',
    'سورة يس': 'https://server12.mp3quran.net/download/maher/036.mp3',
    'سورة الصافات': 'https://server12.mp3quran.net/download/maher/037.mp3',
    'سورة ص': 'https://server12.mp3quran.net/download/maher/038.mp3',
    'سورة الزمر': 'https://server12.mp3quran.net/download/maher/039.mp3',
    'سورة غافر': 'https://server12.mp3quran.net/download/maher/040.mp3',
    'سورة فصلت': 'https://server12.mp3quran.net/download/maher/041.mp3',
    'سورة الشورى': 'https://server12.mp3quran.net/download/maher/042.mp3',
    'سورة الزخرف': 'https://server12.mp3quran.net/download/maher/043.mp3',
    'سورة الدخان': 'https://server12.mp3quran.net/download/maher/044.mp3',
    'سورة الجاثية': 'https://server12.mp3quran.net/download/maher/045.mp3',
    'سورة الأحقاف': 'https://server12.mp3quran.net/download/maher/046.mp3',
    'سورة محمد': 'https://server12.mp3quran.net/download/maher/047.mp3',
    'سورة الفتح': 'https://server12.mp3quran.net/download/maher/048.mp3',
    'سورة الحجرات': 'https://server12.mp3quran.net/download/maher/049.mp3',
    'سورة ق': 'https://server12.mp3quran.net/download/maher/050.mp3',
    'سورة الذاريات': 'https://server12.mp3quran.net/download/maher/051.mp3',
    'سورة الطور': 'https://server12.mp3quran.net/download/maher/052.mp3',
    'سورة النجم': 'https://server12.mp3quran.net/download/maher/053.mp3',
    'سورة القمر': 'https://server12.mp3quran.net/download/maher/054.mp3',
    'سورة الرحمن': 'https://server12.mp3quran.net/download/maher/055.mp3',
    'سورة الواقعة': 'https://server12.mp3quran.net/download/maher/056.mp3',
    'سورة الحديد': 'https://server12.mp3quran.net/download/maher/057.mp3',
    'سورة المجادلة': 'https://server12.mp3quran.net/download/maher/058.mp3',
    'سورة الحشر': 'https://server12.mp3quran.net/download/maher/059.mp3',
    'سورة الممتحنة': 'https://server12.mp3quran.net/download/maher/060.mp3',
    'سورة الصف': 'https://server12.mp3quran.net/download/maher/061.mp3',
    'سورة الجمعة': 'https://server12.mp3quran.net/download/maher/062.mp3',
    'سورة المنافقون': 'https://server12.mp3quran.net/download/maher/063.mp3',
    'سورة التغابن': 'https://server12.mp3quran.net/download/maher/064.mp3',
    'سورة الطلاق': 'https://server12.mp3quran.net/download/maher/065.mp3',
    'سورة التحريم': 'https://server12.mp3quran.net/download/maher/066.mp3',
    'سورة الملك': 'https://server12.mp3quran.net/download/maher/067.mp3',
    'سورة القلم': 'https://server12.mp3quran.net/download/maher/068.mp3',
    'سورة الحاقة': 'https://server12.mp3quran.net/download/maher/069.mp3',
    'سورة المعارج': 'https://server12.mp3quran.net/download/maher/070.mp3',
    'سورة نوح': 'https://server12.mp3quran.net/download/maher/071.mp3',
    'سورة الجن': 'https://server12.mp3quran.net/download/maher/072.mp3',
    'سورة المزمل': 'https://server12.mp3quran.net/download/maher/073.mp3',
    'سورة المدثر': 'https://server12.mp3quran.net/download/maher/074.mp3',
    'سورة القيامة': 'https://server12.mp3quran.net/download/maher/075.mp3',
    'سورة الإنسان': 'https://server12.mp3quran.net/download/maher/076.mp3',
    'سورة المرسلات': 'https://server12.mp3quran.net/download/maher/077.mp3',
    'سورة النبأ': 'https://server12.mp3quran.net/download/maher/078.mp3',
    'سورة النازعات': 'https://server12.mp3quran.net/download/maher/079.mp3',
    'سورة عبس': 'https://server12.mp3quran.net/download/maher/080.mp3',
    'سورة التكوير': 'https://server12.mp3quran.net/download/maher/081.mp3',
    'سورة الانفطار': 'https://server12.mp3quran.net/download/maher/082.mp3',
    'سورة المطففين': 'https://server12.mp3quran.net/download/maher/083.mp3',
    'سورة الانشقاق': 'https://server12.mp3quran.net/download/maher/084.mp3',
    'سورة البروج': 'https://server12.mp3quran.net/download/maher/085.mp3',
    'سورة الطارق': 'https://server12.mp3quran.net/download/maher/086.mp3',
    'سورة الأعلى': 'https://server12.mp3quran.net/download/maher/087.mp3',
    'سورة الغاشية': 'https://server12.mp3quran.net/download/maher/088.mp3',
    'سورة الفجر': 'https://server12.mp3quran.net/download/maher/089.mp3',
    'سورة البلد': 'https://server12.mp3quran.net/download/maher/090.mp3',
    'سورة الشمس': 'https://server12.mp3quran.net/download/maher/091.mp3',
    'سورة الليل': 'https://server12.mp3quran.net/download/maher/092.mp3',
    'سورة الضحى': 'https://server12.mp3quran.net/download/maher/093.mp3',
    'سورة الشرح': 'https://server12.mp3quran.net/download/maher/094.mp3',
    'سورة التين': 'https://server12.mp3quran.net/download/maher/095.mp3',
    'سورة العلق': 'https://server12.mp3quran.net/download/maher/096.mp3',
    'سورة القدر': 'https://server12.mp3quran.net/download/maher/097.mp3',
    'سورة البينة': 'https://server12.mp3quran.net/download/maher/098.mp3',
    'سورة الزلزلة': 'https://server12.mp3quran.net/download/maher/099.mp3',
    'سورة العاديات': 'https://server12.mp3quran.net/download/maher/100.mp3',
    'سورة القارعة': 'https://server12.mp3quran.net/download/maher/101.mp3',
    'سورة التكاثر': 'https://server12.mp3quran.net/download/maher/102.mp3',
    'سورة العصر': 'https://server12.mp3quran.net/download/maher/103.mp3',
    'سورة الهمزة': 'https://server12.mp3quran.net/download/maher/104.mp3',
    'سورة الفيل': 'https://server12.mp3quran.net/download/maher/105.mp3',
    'سورة قريش': 'https://server12.mp3quran.net/download/maher/106.mp3',
    'سورة الماعون': 'https://server12.mp3quran.net/download/maher/107.mp3',
    'سورة الكوثر': 'https://server12.mp3quran.net/download/maher/108.mp3',
    'سورة الكافرون': 'https://server12.mp3quran.net/download/maher/109.mp3',
    'سورة النصر': 'https://server12.mp3quran.net/download/maher/110.mp3',
    'سورة المسد': 'https://server12.mp3quran.net/download/maher/111.mp3',
    'سورة الإخلاص': 'https://server12.mp3quran.net/download/maher/112.mp3',
    'سورة الفلق': 'https://server12.mp3quran.net/download/maher/113.mp3',
    'سورة الناس': 'https://server12.mp3quran.net/download/maher/114.mp3'
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