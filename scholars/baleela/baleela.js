// روابط السور من موقع MP3Quran.net
const surahLinks = {
    'سورة الفاتحة': 'https://server6.mp3quran.net/download/balilah/001.mp3',
    'سورة البقرة': 'https://server6.mp3quran.net/download/balilah/002.mp3',
    'سورة آل عمران': 'https://server6.mp3quran.net/download/balilah/003.mp3',
    'سورة النساء': 'https://server6.mp3quran.net/download/balilah/004.mp3',
    'سورة المائدة': 'https://server6.mp3quran.net/download/balilah/005.mp3',
    'سورة الأنعام': 'https://server6.mp3quran.net/download/balilah/006.mp3',
    'سورة الأعراف': 'https://server6.mp3quran.net/download/balilah/007.mp3',
    'سورة الأنفال': 'https://server6.mp3quran.net/download/balilah/008.mp3',
    'سورة التوبة': 'https://server6.mp3quran.net/download/balilah/009.mp3',
    'سورة يونس': 'https://server6.mp3quran.net/download/balilah/010.mp3',
    'سورة هود': 'https://server6.mp3quran.net/download/balilah/011.mp3',
    'سورة يوسف': 'https://server6.mp3quran.net/download/balilah/012.mp3',
    'سورة الرعد': 'https://server6.mp3quran.net/download/balilah/013.mp3',
    'سورة إبراهيم': 'https://server6.mp3quran.net/download/balilah/014.mp3',
    'سورة الحجر': 'https://server6.mp3quran.net/download/balilah/015.mp3',
    'سورة النحل': 'https://server6.mp3quran.net/download/balilah/016.mp3',
    'سورة الإسراء': 'https://server6.mp3quran.net/download/balilah/017.mp3',
    'سورة الكهف': 'https://server6.mp3quran.net/download/balilah/018.mp3',
    'سورة مريم': 'https://server6.mp3quran.net/download/balilah/019.mp3',
    'سورة طه': 'https://server6.mp3quran.net/download/balilah/020.mp3',
    'سورة الأنبياء': 'https://server6.mp3quran.net/download/balilah/021.mp3',
    'سورة الحج': 'https://server6.mp3quran.net/download/balilah/022.mp3',
    'سورة المؤمنون': 'https://server6.mp3quran.net/download/balilah/023.mp3',
    'سورة النور': 'https://server6.mp3quran.net/download/balilah/024.mp3',
    'سورة الفرقان': 'https://server6.mp3quran.net/download/balilah/025.mp3',
    'سورة الشعراء': 'https://server6.mp3quran.net/download/balilah/026.mp3',
    'سورة النمل': 'https://server6.mp3quran.net/download/balilah/027.mp3',
    'سورة القصص': 'https://server6.mp3quran.net/download/balilah/028.mp3',
    'سورة العنكبوت': 'https://server6.mp3quran.net/download/balilah/029.mp3',
    'سورة الروم': 'https://server6.mp3quran.net/download/balilah/030.mp3',
    'سورة لقمان': 'https://server6.mp3quran.net/download/balilah/031.mp3',
    'سورة السجدة': 'https://server6.mp3quran.net/download/balilah/032.mp3',
    'سورة الأحزاب': 'https://server6.mp3quran.net/download/balilah/033.mp3',
    'سورة سبأ': 'https://server6.mp3quran.net/download/balilah/034.mp3',
    'سورة فاطر': 'https://server6.mp3quran.net/download/balilah/035.mp3',
    'سورة يس': 'https://server6.mp3quran.net/download/balilah/036.mp3',
    'سورة الصافات': 'https://server6.mp3quran.net/download/balilah/037.mp3',
    'سورة ص': 'https://server6.mp3quran.net/download/balilah/038.mp3',
    'سورة الزمر': 'https://server6.mp3quran.net/download/balilah/039.mp3',
    'سورة غافر': 'https://server6.mp3quran.net/download/balilah/040.mp3',
    'سورة فصلت': 'https://server6.mp3quran.net/download/balilah/041.mp3',
    'سورة الشورى': 'https://server6.mp3quran.net/download/balilah/042.mp3',
    'سورة الزخرف': 'https://server6.mp3quran.net/download/balilah/043.mp3',
    'سورة الدخان': 'https://server6.mp3quran.net/download/balilah/044.mp3',
    'سورة الجاثية': 'https://server6.mp3quran.net/download/balilah/045.mp3',
    'سورة الأحقاف': 'https://server6.mp3quran.net/download/balilah/046.mp3',
    'سورة محمد': 'https://server6.mp3quran.net/download/balilah/047.mp3',
    'سورة الفتح': 'https://server6.mp3quran.net/download/balilah/048.mp3',
    'سورة الحجرات': 'https://server6.mp3quran.net/download/balilah/049.mp3',
    'سورة ق': 'https://server6.mp3quran.net/download/balilah/050.mp3',
    'سورة الذاريات': 'https://server6.mp3quran.net/download/balilah/051.mp3',
    'سورة الطور': 'https://server6.mp3quran.net/download/balilah/052.mp3',
    'سورة النجم': 'https://server6.mp3quran.net/download/balilah/053.mp3',
    'سورة القمر': 'https://server6.mp3quran.net/download/balilah/054.mp3',
    'سورة الرحمن': 'https://server6.mp3quran.net/download/balilah/055.mp3',
    'سورة الواقعة': 'https://server6.mp3quran.net/download/balilah/056.mp3',
    'سورة الحديد': 'https://server6.mp3quran.net/download/balilah/057.mp3',
    'سورة المجادلة': 'https://server6.mp3quran.net/download/balilah/058.mp3',
    'سورة الحشر': 'https://server6.mp3quran.net/download/balilah/059.mp3',
    'سورة الممتحنة': 'https://server6.mp3quran.net/download/balilah/060.mp3',
    'سورة الصف': 'https://server6.mp3quran.net/download/balilah/061.mp3',
    'سورة الجمعة': 'https://server6.mp3quran.net/download/balilah/062.mp3',
    'سورة المنافقون': 'https://server6.mp3quran.net/download/balilah/063.mp3',
    'سورة التغابن': 'https://server6.mp3quran.net/download/balilah/064.mp3',
    'سورة الطلاق': 'https://server6.mp3quran.net/download/balilah/065.mp3',
    'سورة التحريم': 'https://server6.mp3quran.net/download/balilah/066.mp3',
    'سورة الملك': 'https://server6.mp3quran.net/download/balilah/067.mp3',
    'سورة القلم': 'https://server6.mp3quran.net/download/balilah/068.mp3',
    'سورة الحاقة': 'https://server6.mp3quran.net/download/balilah/069.mp3',
    'سورة المعارج': 'https://server6.mp3quran.net/download/balilah/070.mp3',
    'سورة نوح': 'https://server6.mp3quran.net/download/balilah/071.mp3',
    'سورة الجن': 'https://server6.mp3quran.net/download/balilah/072.mp3',
    'سورة المزمل': 'https://server6.mp3quran.net/download/balilah/073.mp3',
    'سورة المدثر': 'https://server6.mp3quran.net/download/balilah/074.mp3',
    'سورة القيامة': 'https://server6.mp3quran.net/download/balilah/075.mp3',
    'سورة الإنسان': 'https://server6.mp3quran.net/download/balilah/076.mp3',
    'سورة المرسلات': 'https://server6.mp3quran.net/download/balilah/077.mp3',
    'سورة النبأ': 'https://server6.mp3quran.net/download/balilah/078.mp3',
    'سورة النازعات': 'https://server6.mp3quran.net/download/balilah/079.mp3',
    'سورة عبس': 'https://server6.mp3quran.net/download/balilah/080.mp3',
    'سورة التكوير': 'https://server6.mp3quran.net/download/balilah/081.mp3',
    'سورة الانفطار': 'https://server6.mp3quran.net/download/balilah/082.mp3',
    'سورة المطففين': 'https://server6.mp3quran.net/download/balilah/083.mp3',
    'سورة الانشقاق': 'https://server6.mp3quran.net/download/balilah/084.mp3',
    'سورة البروج': 'https://server6.mp3quran.net/download/balilah/085.mp3',
    'سورة الطارق': 'https://server6.mp3quran.net/download/balilah/086.mp3',
    'سورة الأعلى': 'https://server6.mp3quran.net/download/balilah/087.mp3',
    'سورة الغاشية': 'https://server6.mp3quran.net/download/balilah/088.mp3',
    'سورة الفجر': 'https://server6.mp3quran.net/download/balilah/089.mp3',
    'سورة البلد': 'https://server6.mp3quran.net/download/balilah/090.mp3',
    'سورة الشمس': 'https://server6.mp3quran.net/download/balilah/091.mp3',
    'سورة الليل': 'https://server6.mp3quran.net/download/balilah/092.mp3',
    'سورة الضحى': 'https://server6.mp3quran.net/download/balilah/093.mp3',
    'سورة الشرح': 'https://server6.mp3quran.net/download/balilah/094.mp3',
    'سورة التين': 'https://server6.mp3quran.net/download/balilah/095.mp3',
    'سورة العلق': 'https://server6.mp3quran.net/download/balilah/096.mp3',
    'سورة القدر': 'https://server6.mp3quran.net/download/balilah/097.mp3',
    'سورة البينة': 'https://server6.mp3quran.net/download/balilah/098.mp3',
    'سورة الزلزلة': 'https://server6.mp3quran.net/download/balilah/099.mp3',
    'سورة العاديات': 'https://server6.mp3quran.net/download/balilah/100.mp3',
    'سورة القارعة': 'https://server6.mp3quran.net/download/balilah/101.mp3',
    'سورة التكاثر': 'https://server6.mp3quran.net/download/balilah/102.mp3',
    'سورة العصر': 'https://server6.mp3quran.net/download/balilah/103.mp3',
    'سورة الهمزة': 'https://server6.mp3quran.net/download/balilah/104.mp3',
    'سورة الفيل': 'https://server6.mp3quran.net/download/balilah/105.mp3',
    'سورة قريش': 'https://server6.mp3quran.net/download/balilah/106.mp3',
    'سورة الماعون': 'https://server6.mp3quran.net/download/balilah/107.mp3',
    'سورة الكوثر': 'https://server6.mp3quran.net/download/balilah/108.mp3',
    'سورة الكافرون': 'https://server6.mp3quran.net/download/balilah/109.mp3',
    'سورة النصر': 'https://server6.mp3quran.net/download/balilah/110.mp3',
    'سورة المسد': 'https://server6.mp3quran.net/download/balilah/111.mp3',
    'سورة الإخلاص': 'https://server6.mp3quran.net/download/balilah/112.mp3',
    'سورة الفلق': 'https://server6.mp3quran.net/download/balilah/113.mp3',
    'سورة الناس': 'https://server6.mp3quran.net/download/balilah/114.mp3'
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