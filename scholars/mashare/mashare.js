// روابط السور من موقع MP3Quran.net
const surahLinks = {
    'سورة الفاتحة': 'https://server8.mp3quran.net/download/afs/001.mp3',
    'سورة البقرة': 'https://server8.mp3quran.net/download/afs/002.mp3',
    'سورة آل عمران': 'https://server8.mp3quran.net/download/afs/003.mp3',
    'سورة النساء': 'https://server8.mp3quran.net/download/afs/004.mp3',
    'سورة المائدة': 'https://server8.mp3quran.net/download/afs/005.mp3',
    'سورة الأنعام': 'https://server8.mp3quran.net/download/afs/006.mp3',
    'سورة الأعراف': 'https://server8.mp3quran.net/download/afs/007.mp3',
    'سورة الأنفال': 'https://server8.mp3quran.net/download/afs/008.mp3',
    'سورة التوبة': 'https://server8.mp3quran.net/download/afs/009.mp3',
    'سورة يونس': 'https://server8.mp3quran.net/download/afs/010.mp3',
    'سورة هود': 'https://server8.mp3quran.net/download/afs/011.mp3',
    'سورة يوسف': 'https://server8.mp3quran.net/download/afs/012.mp3',
    'سورة الرعد': 'https://server8.mp3quran.net/download/afs/013.mp3',
    'سورة إبراهيم': 'https://server8.mp3quran.net/download/afs/014.mp3',
    'سورة الحجر': 'https://server8.mp3quran.net/download/afs/015.mp3',
    'سورة النحل': 'https://server8.mp3quran.net/download/afs/016.mp3',
    'سورة الإسراء': 'https://server8.mp3quran.net/download/afs/017.mp3',
    'سورة الكهف': 'https://server8.mp3quran.net/download/afs/018.mp3',
    'سورة مريم': 'https://server8.mp3quran.net/download/afs/019.mp3',
    'سورة طه': 'https://server8.mp3quran.net/download/afs/020.mp3',
    'سورة الأنبياء': 'https://server8.mp3quran.net/download/afs/021.mp3',
    'سورة الحج': 'https://server8.mp3quran.net/download/afs/022.mp3',
    'سورة المؤمنون': 'https://server8.mp3quran.net/download/afs/023.mp3',
    'سورة النور': 'https://server8.mp3quran.net/download/afs/024.mp3',
    'سورة الفرقان': 'https://server8.mp3quran.net/download/afs/025.mp3',
    'سورة الشعراء': 'https://server8.mp3quran.net/download/afs/026.mp3',
    'سورة النمل': 'https://server8.mp3quran.net/download/afs/027.mp3',
    'سورة القصص': 'https://server8.mp3quran.net/download/afs/028.mp3',
    'سورة العنكبوت': 'https://server8.mp3quran.net/download/afs/029.mp3',
    'سورة الروم': 'https://server8.mp3quran.net/download/afs/030.mp3',
    'سورة لقمان': 'https://server8.mp3quran.net/download/afs/031.mp3',
    'سورة السجدة': 'https://server8.mp3quran.net/download/afs/032.mp3',
    'سورة الأحزاب': 'https://server8.mp3quran.net/download/afs/033.mp3',
    'سورة سبأ': 'https://server8.mp3quran.net/download/afs/034.mp3',
    'سورة فاطر': 'https://server8.mp3quran.net/download/afs/035.mp3',
    'سورة يس': 'https://server8.mp3quran.net/download/afs/036.mp3',
    'سورة الصافات': 'https://server8.mp3quran.net/download/afs/037.mp3',
    'سورة ص': 'https://server8.mp3quran.net/download/afs/038.mp3',
    'سورة الزمر': 'https://server8.mp3quran.net/download/afs/039.mp3',
    'سورة غافر': 'https://server8.mp3quran.net/download/afs/040.mp3',
    'سورة فصلت': 'https://server8.mp3quran.net/download/afs/041.mp3',
    'سورة الشورى': 'https://server8.mp3quran.net/download/afs/042.mp3',
    'سورة الزخرف': 'https://server8.mp3quran.net/download/afs/043.mp3',
    'سورة الدخان': 'https://server8.mp3quran.net/download/afs/044.mp3',
    'سورة الجاثية': 'https://server8.mp3quran.net/download/afs/045.mp3',
    'سورة الأحقاف': 'https://server8.mp3quran.net/download/afs/046.mp3',
    'سورة محمد': 'https://server8.mp3quran.net/download/afs/047.mp3',
    'سورة الفتح': 'https://server8.mp3quran.net/download/afs/048.mp3',
    'سورة الحجرات': 'https://server8.mp3quran.net/download/afs/049.mp3',
    'سورة ق': 'https://server8.mp3quran.net/download/afs/050.mp3',
    'سورة الذاريات': 'https://server8.mp3quran.net/download/afs/051.mp3',
    'سورة الطور': 'https://server8.mp3quran.net/download/afs/052.mp3',
    'سورة النجم': 'https://server8.mp3quran.net/download/afs/053.mp3',
    'سورة القمر': 'https://server8.mp3quran.net/download/afs/054.mp3',
    'سورة الرحمن': 'https://server8.mp3quran.net/download/afs/055.mp3',
    'سورة الواقعة': 'https://server8.mp3quran.net/download/afs/056.mp3',
    'سورة الحديد': 'https://server8.mp3quran.net/download/afs/057.mp3',
    'سورة المجادلة': 'https://server8.mp3quran.net/download/afs/058.mp3',
    'سورة الحشر': 'https://server8.mp3quran.net/download/afs/059.mp3',
    'سورة الممتحنة': 'https://server8.mp3quran.net/download/afs/060.mp3',
    'سورة الصف': 'https://server8.mp3quran.net/download/afs/061.mp3',
    'سورة الجمعة': 'https://server8.mp3quran.net/download/afs/062.mp3',
    'سورة المنافقون': 'https://server8.mp3quran.net/download/afs/063.mp3',
    'سورة التغابن': 'https://server8.mp3quran.net/download/afs/064.mp3',
    'سورة الطلاق': 'https://server8.mp3quran.net/download/afs/065.mp3',
    'سورة التحريم': 'https://server8.mp3quran.net/download/afs/066.mp3',
    'سورة الملك': 'https://server8.mp3quran.net/download/afs/067.mp3',
    'سورة القلم': 'https://server8.mp3quran.net/download/afs/068.mp3',
    'سورة الحاقة': 'https://server8.mp3quran.net/download/afs/069.mp3',
    'سورة المعارج': 'https://server8.mp3quran.net/download/afs/070.mp3',
    'سورة نوح': 'https://server8.mp3quran.net/download/afs/071.mp3',
    'سورة الجن': 'https://server8.mp3quran.net/download/afs/072.mp3',
    'سورة المزمل': 'https://server8.mp3quran.net/download/afs/073.mp3',
    'سورة المدثر': 'https://server8.mp3quran.net/download/afs/074.mp3',
    'سورة القيامة': 'https://server8.mp3quran.net/download/afs/075.mp3',
    'سورة الإنسان': 'https://server8.mp3quran.net/download/afs/076.mp3',
    'سورة المرسلات': 'https://server8.mp3quran.net/download/afs/077.mp3',
    'سورة النبأ': 'https://server8.mp3quran.net/download/afs/078.mp3',
    'سورة النازعات': 'https://server8.mp3quran.net/download/afs/079.mp3',
    'سورة عبس': 'https://server8.mp3quran.net/download/afs/080.mp3',
    'سورة التكوير': 'https://server8.mp3quran.net/download/afs/081.mp3',
    'سورة الانفطار': 'https://server8.mp3quran.net/download/afs/082.mp3',
    'سورة المطففين': 'https://server8.mp3quran.net/download/afs/083.mp3',
    'سورة الانشقاق': 'https://server8.mp3quran.net/download/afs/084.mp3',
    'سورة البروج': 'https://server8.mp3quran.net/download/afs/085.mp3',
    'سورة الطارق': 'https://server8.mp3quran.net/download/afs/086.mp3',
    'سورة الأعلى': 'https://server8.mp3quran.net/download/afs/087.mp3',
    'سورة الغاشية': 'https://server8.mp3quran.net/download/afs/088.mp3',
    'سورة الفجر': 'https://server8.mp3quran.net/download/afs/089.mp3',
    'سورة البلد': 'https://server8.mp3quran.net/download/afs/090.mp3',
    'سورة الشمس': 'https://server8.mp3quran.net/download/afs/091.mp3',
    'سورة الليل': 'https://server8.mp3quran.net/download/afs/092.mp3',
    'سورة الضحى': 'https://server8.mp3quran.net/download/afs/093.mp3',
    'سورة الشرح': 'https://server8.mp3quran.net/download/afs/094.mp3',
    'سورة التين': 'https://server8.mp3quran.net/download/afs/095.mp3',
    'سورة العلق': 'https://server8.mp3quran.net/download/afs/096.mp3',
    'سورة القدر': 'https://server8.mp3quran.net/download/afs/097.mp3',
    'سورة البينة': 'https://server8.mp3quran.net/download/afs/098.mp3',
    'سورة الزلزلة': 'https://server8.mp3quran.net/download/afs/099.mp3',
    'سورة العاديات': 'https://server8.mp3quran.net/download/afs/100.mp3',
    'سورة القارعة': 'https://server8.mp3quran.net/download/afs/101.mp3',
    'سورة التكاثر': 'https://server8.mp3quran.net/download/afs/102.mp3',
    'سورة العصر': 'https://server8.mp3quran.net/download/afs/103.mp3',
    'سورة الهمزة': 'https://server8.mp3quran.net/download/afs/104.mp3',
    'سورة الفيل': 'https://server8.mp3quran.net/download/afs/105.mp3',
    'سورة قريش': 'https://server8.mp3quran.net/download/afs/106.mp3',
    'سورة الماعون': 'https://server8.mp3quran.net/download/afs/107.mp3',
    'سورة الكوثر': 'https://server8.mp3quran.net/download/afs/108.mp3',
    'سورة الكافرون': 'https://server8.mp3quran.net/download/afs/109.mp3',
    'سورة النصر': 'https://server8.mp3quran.net/download/afs/110.mp3',
    'سورة المسد': 'https://server8.mp3quran.net/download/afs/111.mp3',
    'سورة الإخلاص': 'https://server8.mp3quran.net/download/afs/112.mp3',
    'سورة الفلق': 'https://server8.mp3quran.net/download/afs/113.mp3',
    'سورة الناس': 'https://server8.mp3quran.net/download/afs/114.mp3'
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