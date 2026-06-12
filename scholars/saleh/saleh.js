// روابط السور من موقع MP3Quran.net
const surahLinks = {
    'سورة الفاتحة': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/001.mp3',
    'سورة البقرة': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/002.mp3',
    'سورة آل عمران': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/003.mp3',
    'سورة النساء': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/004.mp3',
    'سورة المائدة': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/005.mp3',
    'سورة الأنعام': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/006.mp3',
    'سورة الأعراف': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/007.mp3',
    'سورة الأنفال': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/008.mp3',
    'سورة التوبة': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/009.mp3',
    'سورة يونس': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/010.mp3',
    'سورة هود': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/011.mp3',
    'سورة يوسف': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/012.mp3',
    'سورة الرعد': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/013.mp3',
    'سورة إبراهيم': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/014.mp3',
    'سورة الحجر': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/015.mp3',
    'سورة النحل': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/016.mp3',
    'سورة الإسراء': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/017.mp3',
    'سورة الكهف': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/018.mp3',
    'سورة مريم': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/019.mp3',
    'سورة طه': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/020.mp3',
    'سورة الأنبياء': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/021.mp3',
    'سورة الحج': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/022.mp3',
    'سورة المؤمنون': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/023.mp3',
    'سورة النور': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/024.mp3',
    'سورة الفرقان': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/025.mp3',
    'سورة الشعراء': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/026.mp3',
    'سورة النمل': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/027.mp3',
    'سورة القصص': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/028.mp3',
    'سورة العنكبوت': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/029.mp3',
    'سورة الروم': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/030.mp3',
    'سورة لقمان': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/031.mp3',
    'سورة السجدة': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/032.mp3',
    'سورة الأحزاب': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/033.mp3',
    'سورة سبأ': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/034.mp3',
    'سورة فاطر': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/035.mp3',
    'سورة يس': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/036.mp3',
    'سورة الصافات': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/037.mp3',
    'سورة ص': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/038.mp3',
    'سورة الزمر': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/039.mp3',
    'سورة غافر': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/040.mp3',
    'سورة فصلت': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/041.mp3',
    'سورة الشورى': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/042.mp3',
    'سورة الزخرف': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/043.mp3',
    'سورة الدخان': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/044.mp3',
    'سورة الجاثية': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/045.mp3',
    'سورة الأحقاف': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/046.mp3',
    'سورة محمد': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/047.mp3',
    'سورة الفتح': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/048.mp3',
    'سورة الحجرات': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/049.mp3',
    'سورة ق': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/050.mp3',
    'سورة الذاريات': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/051.mp3',
    'سورة الطور': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/052.mp3',
    'سورة النجم': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/053.mp3',
    'سورة القمر': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/054.mp3',
    'سورة الرحمن': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/055.mp3',
    'سورة الواقعة': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/056.mp3',
    'سورة الحديد': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/057.mp3',
    'سورة المجادلة': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/058.mp3',
    'سورة الحشر': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/059.mp3',
    'سورة الممتحنة': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/060.mp3',
    'سورة الصف': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/061.mp3',
    'سورة الجمعة': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/062.mp3',
    'سورة المنافقون': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/063.mp3',
    'سورة التغابن': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/064.mp3',
    'سورة الطلاق': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/065.mp3',
    'سورة التحريم': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/066.mp3',
    'سورة الملك': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/067.mp3',
    'سورة القلم': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/068.mp3',
    'سورة الحاقة': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/069.mp3',
    'سورة المعارج': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/070.mp3',
    'سورة نوح': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/071.mp3',
    'سورة الجن': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/072.mp3',
    'سورة المزمل': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/073.mp3',
    'سورة المدثر': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/074.mp3',
    'سورة القيامة': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/075.mp3',
    'سورة الإنسان': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/076.mp3',
    'سورة المرسلات': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/077.mp3',
    'سورة النبأ': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/078.mp3',
    'سورة النازعات': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/079.mp3',
    'سورة عبس': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/080.mp3',
    'سورة التكوير': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/081.mp3',
    'سورة الانفطار': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/082.mp3',
    'سورة المطففين': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/083.mp3',
    'سورة الانشقاق': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/084.mp3',
    'سورة البروج': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/085.mp3',
    'سورة الطارق': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/086.mp3',
    'سورة الأعلى': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/087.mp3',
    'سورة الغاشية': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/088.mp3',
    'سورة الفجر': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/089.mp3',
    'سورة البلد': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/090.mp3',
    'سورة الشمس': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/091.mp3',
    'سورة الليل': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/092.mp3',
    'سورة الضحى': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/093.mp3',
    'سورة الشرح': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/094.mp3',
    'سورة التين': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/095.mp3',
    'سورة العلق': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/096.mp3',
    'سورة القدر': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/097.mp3',
    'سورة البينة': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/098.mp3',
    'سورة الزلزلة': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/099.mp3',
    'سورة العاديات': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/100.mp3',
    'سورة القارعة': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/101.mp3',
    'سورة التكاثر': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/102.mp3',
    'سورة العصر': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/103.mp3',
    'سورة الهمزة': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/104.mp3',
    'سورة الفيل': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/105.mp3',
    'سورة قريش': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/106.mp3',
    'سورة الماعون': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/107.mp3',
    'سورة الكوثر': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/108.mp3',
    'سورة الكافرون': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/109.mp3',
    'سورة النصر': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/110.mp3',
    'سورة المسد': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/111.mp3',
    'سورة الإخلاص': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/112.mp3',
    'سورة الفلق': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/113.mp3',
    'سورة الناس': 'https://server16.mp3quran.net/download/h_saleh/Rewayat-Hafs-A-n-Assem/114.mp3'
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