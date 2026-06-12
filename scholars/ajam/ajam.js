// روابط السور من موقع MP3Quran.net
const surahLinks = {
    'سورة الفاتحة': 'https://server10.mp3quran.net/download/ajm/001.mp3',
    'سورة البقرة': 'https://server10.mp3quran.net/download/ajm/002.mp3',
    'سورة آل عمران': 'https://server10.mp3quran.net/download/ajm/003.mp3',
    'سورة النساء': 'https://server10.mp3quran.net/download/ajm/004.mp3',
    'سورة المائدة': 'https://server10.mp3quran.net/download/ajm/005.mp3',
    'سورة الأنعام': 'https://server10.mp3quran.net/download/ajm/006.mp3',
    'سورة الأعراف': 'https://server10.mp3quran.net/download/ajm/007.mp3',
    'سورة الأنفال': 'https://server10.mp3quran.net/download/ajm/008.mp3',
    'سورة التوبة': 'https://server10.mp3quran.net/download/ajm/009.mp3',
    'سورة يونس': 'https://server10.mp3quran.net/download/ajm/010.mp3',
    'سورة هود': 'https://server10.mp3quran.net/download/ajm/011.mp3',
    'سورة يوسف': 'https://server10.mp3quran.net/download/ajm/012.mp3',
    'سورة الرعد': 'https://server10.mp3quran.net/download/ajm/013.mp3',
    'سورة إبراهيم': 'https://server10.mp3quran.net/download/ajm/014.mp3',
    'سورة الحجر': 'https://server10.mp3quran.net/download/ajm/015.mp3',
    'سورة النحل': 'https://server10.mp3quran.net/download/ajm/016.mp3',
    'سورة الإسراء': 'https://server10.mp3quran.net/download/ajm/017.mp3',
    'سورة الكهف': 'https://server10.mp3quran.net/download/ajm/018.mp3',
    'سورة مريم': 'https://server10.mp3quran.net/download/ajm/019.mp3',
    'سورة طه': 'https://server10.mp3quran.net/download/ajm/020.mp3',
    'سورة الأنبياء': 'https://server10.mp3quran.net/download/ajm/021.mp3',
    'سورة الحج': 'https://server10.mp3quran.net/download/ajm/022.mp3',
    'سورة المؤمنون': 'https://server10.mp3quran.net/download/ajm/023.mp3',
    'سورة النور': 'https://server10.mp3quran.net/download/ajm/024.mp3',
    'سورة الفرقان': 'https://server10.mp3quran.net/download/ajm/025.mp3',
    'سورة الشعراء': 'https://server10.mp3quran.net/download/ajm/026.mp3',
    'سورة النمل': 'https://server10.mp3quran.net/download/ajm/027.mp3',
    'سورة القصص': 'https://server10.mp3quran.net/download/ajm/028.mp3',
    'سورة العنكبوت': 'https://server10.mp3quran.net/download/ajm/029.mp3',
    'سورة الروم': 'https://server10.mp3quran.net/download/ajm/030.mp3',
    'سورة لقمان': 'https://server10.mp3quran.net/download/ajm/031.mp3',
    'سورة السجدة': 'https://server10.mp3quran.net/download/ajm/032.mp3',
    'سورة الأحزاب': 'https://server10.mp3quran.net/download/ajm/033.mp3',
    'سورة سبأ': 'https://server10.mp3quran.net/download/ajm/034.mp3',
    'سورة فاطر': 'https://server10.mp3quran.net/download/ajm/035.mp3',
    'سورة يس': 'https://server10.mp3quran.net/download/ajm/036.mp3',
    'سورة الصافات': 'https://server10.mp3quran.net/download/ajm/037.mp3',
    'سورة ص': 'https://server10.mp3quran.net/download/ajm/038.mp3',
    'سورة الزمر': 'https://server10.mp3quran.net/download/ajm/039.mp3',
    'سورة غافر': 'https://server10.mp3quran.net/download/ajm/040.mp3',
    'سورة فصلت': 'https://server10.mp3quran.net/download/ajm/041.mp3',
    'سورة الشورى': 'https://server10.mp3quran.net/download/ajm/042.mp3',
    'سورة الزخرف': 'https://server10.mp3quran.net/download/ajm/043.mp3',
    'سورة الدخان': 'https://server10.mp3quran.net/download/ajm/044.mp3',
    'سورة الجاثية': 'https://server10.mp3quran.net/download/ajm/045.mp3',
    'سورة الأحقاف': 'https://server10.mp3quran.net/download/ajm/046.mp3',
    'سورة محمد': 'https://server10.mp3quran.net/download/ajm/047.mp3',
    'سورة الفتح': 'https://server10.mp3quran.net/download/ajm/048.mp3',
    'سورة الحجرات': 'https://server10.mp3quran.net/download/ajm/049.mp3',
    'سورة ق': 'https://server10.mp3quran.net/download/ajm/050.mp3',
    'سورة الذاريات': 'https://server10.mp3quran.net/download/ajm/051.mp3',
    'سورة الطور': 'https://server10.mp3quran.net/download/ajm/052.mp3',
    'سورة النجم': 'https://server10.mp3quran.net/download/ajm/053.mp3',
    'سورة القمر': 'https://server10.mp3quran.net/download/ajm/054.mp3',
    'سورة الرحمن': 'https://server10.mp3quran.net/download/ajm/055.mp3',
    'سورة الواقعة': 'https://server10.mp3quran.net/download/ajm/056.mp3',
    'سورة الحديد': 'https://server10.mp3quran.net/download/ajm/057.mp3',
    'سورة المجادلة': 'https://server10.mp3quran.net/download/ajm/058.mp3',
    'سورة الحشر': 'https://server10.mp3quran.net/download/ajm/059.mp3',
    'سورة الممتحنة': 'https://server10.mp3quran.net/download/ajm/060.mp3',
    'سورة الصف': 'https://server10.mp3quran.net/download/ajm/061.mp3',
    'سورة الجمعة': 'https://server10.mp3quran.net/download/ajm/062.mp3',
    'سورة المنافقون': 'https://server10.mp3quran.net/download/ajm/063.mp3',
    'سورة التغابن': 'https://server10.mp3quran.net/download/ajm/064.mp3',
    'سورة الطلاق': 'https://server10.mp3quran.net/download/ajm/065.mp3',
    'سورة التحريم': 'https://server10.mp3quran.net/download/ajm/066.mp3',
    'سورة الملك': 'https://server10.mp3quran.net/download/ajm/067.mp3',
    'سورة القلم': 'https://server10.mp3quran.net/download/ajm/068.mp3',
    'سورة الحاقة': 'https://server10.mp3quran.net/download/ajm/069.mp3',
    'سورة المعارج': 'https://server10.mp3quran.net/download/ajm/070.mp3',
    'سورة نوح': 'https://server10.mp3quran.net/download/ajm/071.mp3',
    'سورة الجن': 'https://server10.mp3quran.net/download/ajm/072.mp3',
    'سورة المزمل': 'https://server10.mp3quran.net/download/ajm/073.mp3',
    'سورة المدثر': 'https://server10.mp3quran.net/download/ajm/074.mp3',
    'سورة القيامة': 'https://server10.mp3quran.net/download/ajm/075.mp3',
    'سورة الإنسان': 'https://server10.mp3quran.net/download/ajm/076.mp3',
    'سورة المرسلات': 'https://server10.mp3quran.net/download/ajm/077.mp3',
    'سورة النبأ': 'https://server10.mp3quran.net/download/ajm/078.mp3',
    'سورة النازعات': 'https://server10.mp3quran.net/download/ajm/079.mp3',
    'سورة عبس': 'https://server10.mp3quran.net/download/ajm/080.mp3',
    'سورة التكوير': 'https://server10.mp3quran.net/download/ajm/081.mp3',
    'سورة الانفطار': 'https://server10.mp3quran.net/download/ajm/082.mp3',
    'سورة المطففين': 'https://server10.mp3quran.net/download/ajm/083.mp3',
    'سورة الانشقاق': 'https://server10.mp3quran.net/download/ajm/084.mp3',
    'سورة البروج': 'https://server10.mp3quran.net/download/ajm/085.mp3',
    'سورة الطارق': 'https://server10.mp3quran.net/download/ajm/086.mp3',
    'سورة الأعلى': 'https://server10.mp3quran.net/download/ajm/087.mp3',
    'سورة الغاشية': 'https://server10.mp3quran.net/download/ajm/088.mp3',
    'سورة الفجر': 'https://server10.mp3quran.net/download/ajm/089.mp3',
    'سورة البلد': 'https://server10.mp3quran.net/download/ajm/090.mp3',
    'سورة الشمس': 'https://server10.mp3quran.net/download/ajm/091.mp3',
    'سورة الليل': 'https://server10.mp3quran.net/download/ajm/092.mp3',
    'سورة الضحى': 'https://server10.mp3quran.net/download/ajm/093.mp3',
    'سورة الشرح': 'https://server10.mp3quran.net/download/ajm/094.mp3',
    'سورة التين': 'https://server10.mp3quran.net/download/ajm/095.mp3',
    'سورة العلق': 'https://server10.mp3quran.net/download/ajm/096.mp3',
    'سورة القدر': 'https://server10.mp3quran.net/download/ajm/097.mp3',
    'سورة البينة': 'https://server10.mp3quran.net/download/ajm/098.mp3',
    'سورة الزلزلة': 'https://server10.mp3quran.net/download/ajm/099.mp3',
    'سورة العاديات': 'https://server10.mp3quran.net/download/ajm/100.mp3',
    'سورة القارعة': 'https://server10.mp3quran.net/download/ajm/101.mp3',
    'سورة التكاثر': 'https://server10.mp3quran.net/download/ajm/102.mp3',
    'سورة العصر': 'https://server10.mp3quran.net/download/ajm/103.mp3',
    'سورة الهمزة': 'https://server10.mp3quran.net/download/ajm/104.mp3',
    'سورة الفيل': 'https://server10.mp3quran.net/download/ajm/105.mp3',
    'سورة قريش': 'https://server10.mp3quran.net/download/ajm/106.mp3',
    'سورة الماعون': 'https://server10.mp3quran.net/download/ajm/107.mp3',
    'سورة الكوثر': 'https://server10.mp3quran.net/download/ajm/108.mp3',
    'سورة الكافرون': 'https://server10.mp3quran.net/download/ajm/109.mp3',
    'سورة النصر': 'https://server10.mp3quran.net/download/ajm/110.mp3',
    'سورة المسد': 'https://server10.mp3quran.net/download/ajm/111.mp3',
    'سورة الإخلاص': 'https://server10.mp3quran.net/download/ajm/112.mp3',
    'سورة الفلق': 'https://server10.mp3quran.net/download/ajm/113.mp3',
    'سورة الناس': 'https://server10.mp3quran.net/download/ajm/114.mp3'
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