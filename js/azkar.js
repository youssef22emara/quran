document.addEventListener('DOMContentLoaded', () => {
    // تهيئة العدادات لكل ذكر
    const azkarItems = document.querySelectorAll('.azkar-item');
    
    azkarItems.forEach(item => {
        const countText = item.querySelector('.azkar-count').textContent;
        let maxCount;
        
        // تحويل النص إلى رقم
        if (countText.includes('مائة')) {
            maxCount = 100;
        } else if (countText.includes('أربع')) {
            maxCount = 4;
        } else if (countText.includes('ثلاث')) {
            maxCount = 3;
        } else if (countText.includes('سبع')) {
            maxCount = 7;
        } else {
            maxCount = 1;
        }
        
        // إنشاء عناصر العداد
        const counterContainer = document.createElement('div');
        counterContainer.className = 'counter-container';
        
        const decrementButton = document.createElement('button');
        decrementButton.className = 'counter-button';
        decrementButton.innerHTML = '<i class="fas fa-minus"></i>';
        decrementButton.disabled = true;
        
        const counterDisplay = document.createElement('span');
        counterDisplay.className = 'counter-display';
        counterDisplay.textContent = '0';
        
        const incrementButton = document.createElement('button');
        incrementButton.className = 'counter-button';
        incrementButton.innerHTML = '<i class="fas fa-plus"></i>';
        
        counterContainer.appendChild(decrementButton);
        counterContainer.appendChild(counterDisplay);
        counterContainer.appendChild(incrementButton);
        
        // إضافة العداد بعد نص الذكر
        const azkarText = item.querySelector('.azkar-text');
        azkarText.after(counterContainer);
        
        // إضافة مستمعي الأحداث
        let currentCount = 0;
        
        incrementButton.addEventListener('click', () => {
            if (currentCount < maxCount) {
                currentCount++;
                counterDisplay.textContent = currentCount;
                decrementButton.disabled = false;
                
                if (currentCount === maxCount) {
                    incrementButton.disabled = true;
                    // إضافة تأثير عند إكمال العدد
                    item.style.background = 'rgba(0, 255, 0, 0.1)';
                }
            }
        });
        
        decrementButton.addEventListener('click', () => {
            if (currentCount > 0) {
                currentCount--;
                counterDisplay.textContent = currentCount;
                incrementButton.disabled = false;
                
                if (currentCount === 0) {
                    decrementButton.disabled = true;
                }
                
                if (currentCount < maxCount) {
                    item.style.background = 'rgba(255,255,255,0.05)';
                }
            }
        });
    });
}); 