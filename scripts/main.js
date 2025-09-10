// وظائف عامة للموقع
function showLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function showSignupModal() {
    document.getElementById('signupModal').style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function showDemo() {
    alert('عرض توضيحي لـ Vivk AI سيبدأ قريباً...');
}

// إغلاق النافذة عند النقر خارجها
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = 'none';
        }
    }
}

// تأثيرات التمرير
window.addEventListener('scroll', () => {
    const features = document.querySelectorAll('.feature-card');
    features.forEach(feature => {
        const position = feature.getBoundingClientRect();
        if (position.top < window.innerHeight - 50) {
            feature.style.opacity = 1;
            feature.style.transform = 'translateY(0)';
        }
    });
});

// تهيئة تأثيرات عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    // إعداد الشفافية الأولية للبطاقات
    const features = document.querySelectorAll('.feature-card');
    features.forEach(feature => {
        feature.style.opacity = 0;
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // تأثير للشعار
    const logo = document.querySelector('.logo');
    logo.classList.add('pulse');
    
    // تعطيل إرسال النماذج (لمنع إعادة تحميل الصفحة)
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('تم محاكاة عملية تسجيل الدخول بنجاح!');
        closeModal('loginModal');
    });
    
    document.getElementById('signupForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('تم محاكاة عملية إنشاء حساب بنجاح!');
        closeModal('signupModal');
    });
});