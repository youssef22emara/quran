// روابط السور من موقع MP3Quran.net
const surahLinks = {
    'سورة الفاتحة': 'https://server7.mp3quran.net/download/s_gmd/001.mp3',
    'سورة البقرة': 'https://server7.mp3quran.net/download/s_gmd/002.mp3',
    'سورة آل عمران': 'https://server7.mp3quran.net/download/s_gmd/003.mp3',
    'سورة النساء': 'https://server7.mp3quran.net/download/s_gmd/004.mp3',
    'سورة المائدة': 'https://server7.mp3quran.net/download/s_gmd/005.mp3',
    'سورة الأنعام': 'https://server7.mp3quran.net/download/s_gmd/006.mp3',
    'سورة الأعراف': 'https://server7.mp3quran.net/download/s_gmd/007.mp3',
    'سورة الأنفال': 'https://server7.mp3quran.net/download/s_gmd/008.mp3',
    'سورة التوبة': 'https://server7.mp3quran.net/download/s_gmd/009.mp3',
    'سورة يونس': 'https://server7.mp3quran.net/download/s_gmd/010.mp3',
    'سورة هود': 'https://server7.mp3quran.net/download/s_gmd/011.mp3',
    'سورة يوسف': 'https://server7.mp3quran.net/download/s_gmd/012.mp3',
    'سورة الرعد': 'https://server7.mp3quran.net/download/s_gmd/013.mp3',
    'سورة إبراهيم': 'https://server7.mp3quran.net/download/s_gmd/014.mp3',
    'سورة الحجر': 'https://server7.mp3quran.net/download/s_gmd/015.mp3',
    'سورة النحل': 'https://server7.mp3quran.net/download/s_gmd/016.mp3',
    'سورة الإسراء': 'https://server7.mp3quran.net/download/s_gmd/017.mp3',
    'سورة الكهف': 'https://server7.mp3quran.net/download/s_gmd/018.mp3',
    'سورة مريم': 'https://server7.mp3quran.net/download/s_gmd/019.mp3',
    'سورة طه': 'https://server7.mp3quran.net/download/s_gmd/020.mp3',
    'سورة الأنبياء': 'https://server7.mp3quran.net/download/s_gmd/021.mp3',
    'سورة الحج': 'https://server7.mp3quran.net/download/s_gmd/022.mp3',
    'سورة المؤمنون': 'https://server7.mp3quran.net/download/s_gmd/023.mp3',
    'سورة النور': 'https://server7.mp3quran.net/download/s_gmd/024.mp3',
    'سورة الفرقان': 'https://server7.mp3quran.net/download/s_gmd/025.mp3',
    'سورة الشعراء': 'https://server7.mp3quran.net/download/s_gmd/026.mp3',
    'سورة النمل': 'https://server7.mp3quran.net/download/s_gmd/027.mp3',
    'سورة القصص': 'https://server7.mp3quran.net/download/s_gmd/028.mp3',
    'سورة العنكبوت': 'https://server7.mp3quran.net/download/s_gmd/029.mp3',
    'سورة الروم': 'https://server7.mp3quran.net/download/s_gmd/030.mp3',
    'سورة لقمان': 'https://server7.mp3quran.net/download/s_gmd/031.mp3',
    'سورة السجدة': 'https://server7.mp3quran.net/download/s_gmd/032.mp3',
    'سورة الأحزاب': 'https://server7.mp3quran.net/download/s_gmd/033.mp3',
    'سورة سبأ': 'https://server7.mp3quran.net/download/s_gmd/034.mp3',
    'سورة فاطر': 'https://server7.mp3quran.net/download/s_gmd/035.mp3',
    'سورة يس': 'https://server7.mp3quran.net/download/s_gmd/036.mp3',
    'سورة الصافات': 'https://server7.mp3quran.net/download/s_gmd/037.mp3',
    'سورة ص': 'https://server7.mp3quran.net/download/s_gmd/038.mp3',
    'سورة الزمر': 'https://server7.mp3quran.net/download/s_gmd/039.mp3',
    'سورة غافر': 'https://server7.mp3quran.net/download/s_gmd/040.mp3',
    'سورة فصلت': 'https://server7.mp3quran.net/download/s_gmd/041.mp3',
    'سورة الشورى': 'https://server7.mp3quran.net/download/s_gmd/042.mp3',
    'سورة الزخرف': 'https://server7.mp3quran.net/download/s_gmd/043.mp3',
    'سورة الدخان': 'https://server7.mp3quran.net/download/s_gmd/044.mp3',
    'سورة الجاثية': 'https://server7.mp3quran.net/download/s_gmd/045.mp3',
    'سورة الأحقاف': 'https://server7.mp3quran.net/download/s_gmd/046.mp3',
    'سورة محمد': 'https://server7.mp3quran.net/download/s_gmd/047.mp3',
    'سورة الفتح': 'https://server7.mp3quran.net/download/s_gmd/048.mp3',
    'سورة الحجرات': 'https://server7.mp3quran.net/download/s_gmd/049.mp3',
    'سورة ق': 'https://server7.mp3quran.net/download/s_gmd/050.mp3',
    'سورة الذاريات': 'https://server7.mp3quran.net/download/s_gmd/051.mp3',
    'سورة الطور': 'https://server7.mp3quran.net/download/s_gmd/052.mp3',
    'سورة النجم': 'https://server7.mp3quran.net/download/s_gmd/053.mp3',
    'سورة القمر': 'https://server7.mp3quran.net/download/s_gmd/054.mp3',
    'سورة الرحمن': 'https://server7.mp3quran.net/download/s_gmd/055.mp3',
    'سورة الواقعة': 'https://server7.mp3quran.net/download/s_gmd/056.mp3',
    'سورة الحديد': 'https://server7.mp3quran.net/download/s_gmd/057.mp3',
    'سورة المجادلة': 'https://server7.mp3quran.net/download/s_gmd/058.mp3',
    'سورة الحشر': 'https://server7.mp3quran.net/download/s_gmd/059.mp3',
    'سورة الممتحنة': 'https://server7.mp3quran.net/download/s_gmd/060.mp3',
    'سورة الصف': 'https://server7.mp3quran.net/download/s_gmd/061.mp3',
    'سورة الجمعة': 'https://server7.mp3quran.net/download/s_gmd/062.mp3',
    'سورة المنافقون': 'https://server7.mp3quran.net/download/s_gmd/063.mp3',
    'سورة التغابن': 'https://server7.mp3quran.net/download/s_gmd/064.mp3',
    'سورة الطلاق': 'https://server7.mp3quran.net/download/s_gmd/065.mp3',
    'سورة التحريم': 'https://server7.mp3quran.net/download/s_gmd/066.mp3',
    'سورة الملك': 'https://server7.mp3quran.net/download/s_gmd/067.mp3',
    'سورة القلم': 'https://server7.mp3quran.net/download/s_gmd/068.mp3',
    'سورة الحاقة': 'https://server7.mp3quran.net/download/s_gmd/069.mp3',
    'سورة المعارج': 'https://server7.mp3quran.net/download/s_gmd/070.mp3',
    'سورة نوح': 'https://server7.mp3quran.net/download/s_gmd/071.mp3',
    'سورة الجن': 'https://server7.mp3quran.net/download/s_gmd/072.mp3',
    'سورة المزمل': 'https://server7.mp3quran.net/download/s_gmd/073.mp3',
    'سورة المدثر': 'https://server7.mp3quran.net/download/s_gmd/074.mp3',
    'سورة القيامة': 'https://server7.mp3quran.net/download/s_gmd/075.mp3',
    'سورة الإنسان': 'https://server7.mp3quran.net/download/s_gmd/076.mp3',
    'سورة المرسلات': 'https://server7.mp3quran.net/download/s_gmd/077.mp3',
    'سورة النبأ': 'https://server7.mp3quran.net/download/s_gmd/078.mp3',
    'سورة النازعات': 'https://server7.mp3quran.net/download/s_gmd/079.mp3',
    'سورة عبس': 'https://server7.mp3quran.net/download/s_gmd/080.mp3',
    'سورة التكوير': 'https://server7.mp3quran.net/download/s_gmd/081.mp3',
    'سورة الانفطار': 'https://server7.mp3quran.net/download/s_gmd/082.mp3',
    'سورة المطففين': 'https://server7.mp3quran.net/download/s_gmd/083.mp3',
    'سورة الانشقاق': 'https://server7.mp3quran.net/download/s_gmd/084.mp3',
    'سورة البروج': 'https://server7.mp3quran.net/download/s_gmd/085.mp3',
    'سورة الطارق': 'https://server7.mp3quran.net/download/s_gmd/086.mp3',
    'سورة الأعلى': 'https://server7.mp3quran.net/download/s_gmd/087.mp3',
    'سورة الغاشية': 'https://server7.mp3quran.net/download/s_gmd/088.mp3',
    'سورة الفجر': 'https://server7.mp3quran.net/download/s_gmd/089.mp3',
    'سورة البلد': 'https://server7.mp3quran.net/download/s_gmd/090.mp3',
    'سورة الشمس': 'https://server7.mp3quran.net/download/s_gmd/091.mp3',
    'سورة الليل': 'https://server7.mp3quran.net/download/s_gmd/092.mp3',
    'سورة الضحى': 'https://server7.mp3quran.net/download/s_gmd/093.mp3',
    'سورة الشرح': 'https://server7.mp3quran.net/download/s_gmd/094.mp3',
    'سورة التين': 'https://server7.mp3quran.net/download/s_gmd/095.mp3',
    'سورة العلق': 'https://server7.mp3quran.net/download/s_gmd/096.mp3',
    'سورة القدر': 'https://server7.mp3quran.net/download/s_gmd/097.mp3',
    'سورة البينة': 'https://server7.mp3quran.net/download/s_gmd/098.mp3',
    'سورة الزلزلة': 'https://server7.mp3quran.net/download/s_gmd/099.mp3',
    'سورة العاديات': 'https://server7.mp3quran.net/download/s_gmd/100.mp3',
    'سورة القارعة': 'https://server7.mp3quran.net/download/s_gmd/101.mp3',
    'سورة التكاثر': 'https://server7.mp3quran.net/download/s_gmd/102.mp3',
    'سورة العصر': 'https://server7.mp3quran.net/download/s_gmd/103.mp3',
    'سورة الهمزة': 'https://server7.mp3quran.net/download/s_gmd/104.mp3',
    'سورة الفيل': 'https://server7.mp3quran.net/download/s_gmd/105.mp3',
    'سورة قريش': 'https://server7.mp3quran.net/download/s_gmd/106.mp3',
    'سورة الماعون': 'https://server7.mp3quran.net/download/s_gmd/107.mp3',
    'سورة الكوثر': 'https://server7.mp3quran.net/download/s_gmd/108.mp3',
    'سورة الكافرون': 'https://server7.mp3quran.net/download/s_gmd/109.mp3',
    'سورة النصر': 'https://server7.mp3quran.net/download/s_gmd/110.mp3',
    'سورة المسد': 'https://server7.mp3quran.net/download/s_gmd/111.mp3',
    'سورة الإخلاص': 'https://server7.mp3quran.net/download/s_gmd/112.mp3',
    'سورة الفلق': 'https://server7.mp3quran.net/download/s_gmd/113.mp3',
    'سورة الناس': 'https://server7.mp3quran.net/download/s_gmd/114.mp3'
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