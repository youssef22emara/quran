// روابط السور من موقع MP3Quran.net
const surahLinks = {
    'سورة الفاتحة': 'https://server13.mp3quran.net/husr/001.mp3',
    'سورة البقرة': 'https://server13.mp3quran.net/husr/002.mp3',
    'سورة آل عمران': 'https://server13.mp3quran.net/husr/003.mp3',
    'سورة النساء': 'https://server13.mp3quran.net/husr/004.mp3',
    'سورة المائدة': 'https://server13.mp3quran.net/husr/005.mp3',
    'سورة الأنعام': 'https://server13.mp3quran.net/husr/006.mp3',
    'سورة الأعراف': 'https://server13.mp3quran.net/husr/007.mp3',
    'سورة الأنفال': 'https://server13.mp3quran.net/husr/008.mp3',
    'سورة التوبة': 'https://server13.mp3quran.net/husr/009.mp3',
    'سورة يونس': 'https://server13.mp3quran.net/husr/010.mp3',
    'سورة هود': 'https://server13.mp3quran.net/husr/011.mp3',
    'سورة يوسف': 'https://server13.mp3quran.net/husr/012.mp3',
    'سورة الرعد': 'https://server13.mp3quran.net/husr/013.mp3',
    'سورة إبراهيم': 'https://server13.mp3quran.net/husr/014.mp3',
    'سورة الحجر': 'https://server13.mp3quran.net/husr/015.mp3',
    'سورة النحل': 'https://server13.mp3quran.net/husr/016.mp3',
    'سورة الإسراء': 'https://server13.mp3quran.net/husr/017.mp3',
    'سورة الكهف': 'https://server13.mp3quran.net/husr/018.mp3',
    'سورة مريم': 'https://server13.mp3quran.net/husr/019.mp3',
    'سورة طه': 'https://server13.mp3quran.net/husr/020.mp3',
    'سورة الأنبياء': 'https://server13.mp3quran.net/husr/021.mp3',
    'سورة الحج': 'https://server13.mp3quran.net/husr/022.mp3',
    'سورة المؤمنون': 'https://server13.mp3quran.net/husr/023.mp3',
    'سورة النور': 'https://server13.mp3quran.net/husr/024.mp3',
    'سورة الفرقان': 'https://server13.mp3quran.net/husr/025.mp3',
    'سورة الشعراء': 'https://server13.mp3quran.net/husr/026.mp3',
    'سورة النمل': 'https://server13.mp3quran.net/husr/027.mp3',
    'سورة القصص': 'https://server13.mp3quran.net/husr/028.mp3',
    'سورة العنكبوت': 'https://server13.mp3quran.net/husr/029.mp3',
    'سورة الروم': 'https://server13.mp3quran.net/husr/030.mp3',
    'سورة لقمان': 'https://server13.mp3quran.net/husr/031.mp3',
    'سورة السجدة': 'https://server13.mp3quran.net/husr/032.mp3',
    'سورة الأحزاب': 'https://server13.mp3quran.net/husr/033.mp3',
    'سورة سبأ': 'https://server13.mp3quran.net/husr/034.mp3',
    'سورة فاطر': 'https://server13.mp3quran.net/husr/035.mp3',
    'سورة يس': 'https://server13.mp3quran.net/husr/036.mp3',
    'سورة الصافات': 'https://server13.mp3quran.net/husr/037.mp3',
    'سورة ص': 'https://server13.mp3quran.net/husr/038.mp3',
    'سورة الزمر': 'https://server13.mp3quran.net/husr/039.mp3',
    'سورة غافر': 'https://server13.mp3quran.net/husr/040.mp3',
    'سورة فصلت': 'https://server13.mp3quran.net/husr/041.mp3',
    'سورة الشورى': 'https://server13.mp3quran.net/husr/042.mp3',
    'سورة الزخرف': 'https://server13.mp3quran.net/husr/043.mp3',
    'سورة الدخان': 'https://server13.mp3quran.net/husr/044.mp3',
    'سورة الجاثية': 'https://server13.mp3quran.net/husr/045.mp3',
    'سورة الأحقاف': 'https://server13.mp3quran.net/husr/046.mp3',
    'سورة محمد': 'https://server13.mp3quran.net/husr/047.mp3',
    'سورة الفتح': 'https://server13.mp3quran.net/husr/048.mp3',
    'سورة الحجرات': 'https://server13.mp3quran.net/husr/049.mp3',
    'سورة ق': 'https://server13.mp3quran.net/husr/050.mp3',
    'سورة الذاريات': 'https://server13.mp3quran.net/husr/051.mp3',
    'سورة الطور': 'https://server13.mp3quran.net/husr/052.mp3',
    'سورة النجم': 'https://server13.mp3quran.net/husr/053.mp3',
    'سورة القمر': 'https://server13.mp3quran.net/husr/054.mp3',
    'سورة الرحمن': 'https://server13.mp3quran.net/husr/055.mp3',
    'سورة الواقعة': 'https://server13.mp3quran.net/husr/056.mp3',
    'سورة الحديد': 'https://server13.mp3quran.net/husr/057.mp3',
    'سورة المجادلة': 'https://server13.mp3quran.net/husr/058.mp3',
    'سورة الحشر': 'https://server13.mp3quran.net/husr/059.mp3',
    'سورة الممتحنة': 'https://server13.mp3quran.net/husr/060.mp3',
    'سورة الصف': 'https://server13.mp3quran.net/husr/061.mp3',
    'سورة الجمعة': 'https://server13.mp3quran.net/husr/062.mp3',
    'سورة المنافقون': 'https://server13.mp3quran.net/husr/063.mp3',
    'سورة التغابن': 'https://server13.mp3quran.net/husr/064.mp3',
    'سورة الطلاق': 'https://server13.mp3quran.net/husr/065.mp3',
    'سورة التحريم': 'https://server13.mp3quran.net/husr/066.mp3',
    'سورة الملك': 'https://server13.mp3quran.net/husr/067.mp3',
    'سورة القلم': 'https://server13.mp3quran.net/husr/068.mp3',
    'سورة الحاقة': 'https://server13.mp3quran.net/husr/069.mp3',
    'سورة المعارج': 'https://server13.mp3quran.net/husr/070.mp3',
    'سورة نوح': 'https://server13.mp3quran.net/husr/071.mp3',
    'سورة الجن': 'https://server13.mp3quran.net/husr/072.mp3',
    'سورة المزمل': 'https://server13.mp3quran.net/husr/073.mp3',
    'سورة المدثر': 'https://server13.mp3quran.net/husr/074.mp3',
    'سورة القيامة': 'https://server13.mp3quran.net/husr/075.mp3',
    'سورة الإنسان': 'https://server13.mp3quran.net/husr/076.mp3',
    'سورة المرسلات': 'https://server13.mp3quran.net/husr/077.mp3',
    'سورة النبأ': 'https://server13.mp3quran.net/husr/078.mp3',
    'سورة النازعات': 'https://server13.mp3quran.net/husr/079.mp3',
    'سورة عبس': 'https://server13.mp3quran.net/husr/080.mp3',
    'سورة التكوير': 'https://server13.mp3quran.net/husr/081.mp3',
    'سورة الانفطار': 'https://server13.mp3quran.net/husr/082.mp3',
    'سورة المطففين': 'https://server13.mp3quran.net/husr/083.mp3',
    'سورة الانشقاق': 'https://server13.mp3quran.net/husr/084.mp3',
    'سورة البروج': 'https://server13.mp3quran.net/husr/085.mp3',
    'سورة الطارق': 'https://server13.mp3quran.net/husr/086.mp3',
    'سورة الأعلى': 'https://server13.mp3quran.net/husr/087.mp3',
    'سورة الغاشية': 'https://server13.mp3quran.net/husr/088.mp3',
    'سورة الفجر': 'https://server13.mp3quran.net/husr/089.mp3',
    'سورة البلد': 'https://server13.mp3quran.net/husr/090.mp3',
    'سورة الشمس': 'https://server13.mp3quran.net/husr/091.mp3',
    'سورة الليل': 'https://server13.mp3quran.net/husr/092.mp3',
    'سورة الضحى': 'https://server13.mp3quran.net/husr/093.mp3',
    'سورة الشرح': 'https://server13.mp3quran.net/husr/094.mp3',
    'سورة التين': 'https://server13.mp3quran.net/husr/095.mp3',
    'سورة العلق': 'https://server13.mp3quran.net/husr/096.mp3',
    'سورة القدر': 'https://server13.mp3quran.net/husr/097.mp3',
    'سورة البينة': 'https://server13.mp3quran.net/husr/098.mp3',
    'سورة الزلزلة': 'https://server13.mp3quran.net/husr/099.mp3',
    'سورة العاديات': 'https://server13.mp3quran.net/husr/100.mp3',
    'سورة القارعة': 'https://server13.mp3quran.net/husr/101.mp3',
    'سورة التكاثر': 'https://server13.mp3quran.net/husr/102.mp3',
    'سورة العصر': 'https://server13.mp3quran.net/husr/103.mp3',
    'سورة الهمزة': 'https://server13.mp3quran.net/husr/104.mp3',
    'سورة الفيل': 'https://server13.mp3quran.net/husr/105.mp3',
    'سورة قريش': 'https://server13.mp3quran.net/husr/106.mp3',
    'سورة الماعون': 'https://server13.mp3quran.net/husr/107.mp3',
    'سورة الكوثر': 'https://server13.mp3quran.net/husr/108.mp3',
    'سورة الكافرون': 'https://server13.mp3quran.net/husr/109.mp3',
    'سورة النصر': 'https://server13.mp3quran.net/husr/110.mp3',
    'سورة المسد': 'https://server13.mp3quran.net/husr/111.mp3',
    'سورة الإخلاص': 'https://server13.mp3quran.net/husr/112.mp3',
    'سورة الفلق': 'https://server13.mp3quran.net/husr/113.mp3',
    'سورة الناس': 'https://server13.mp3quran.net/husr/114.mp3'
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