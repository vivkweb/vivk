// scripts/main.js - الملف الرئيسي للوظائف

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    initScrollEffects();
    initServiceWorkers();
    setupChatToggle();
});

// تأثيرات الحركة والأنيميشن
function initAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

// تأثيرات التمرير
function initScrollEffects() {
    let lastScrollTop = 0;
    const header = document.querySelector('.header-modern');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Service Worker للتخزين المؤقت
function initServiceWorkers() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(() => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed: ', err));
    }
}

// زر toggle للشات
function setupChatToggle() {
    const chatToggle = document.createElement('div');
    chatToggle.innerHTML = '<i class="fas fa-comments"></i>';
    chatToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #6E3AFF, #00D4FF);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 24px;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(110, 58, 255, 0.3);
        transition: all 0.3s ease;
    `;
    
    chatToggle.addEventListener('mouseenter', () => {
        chatToggle.style.transform = 'scale(1.1)';
    });
    
    chatToggle.addEventListener('mouseleave', () => {
        chatToggle.style.transform = 'scale(1)';
    });
    
    chatToggle.addEventListener('click', () => {
        if (window.vivkChat) {
            window.vivkChat.toggleChat();
        }
    });
    
    document.body.appendChild(chatToggle);
}

// وظائف المساعدة
const utils = {
    formatDate: (date) => {
        return new Intl.DateTimeFormat('ar-SA').format(new Date(date));
    },
    
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// التصدير للاستخدام في ملفات أخرى
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { utils };
}