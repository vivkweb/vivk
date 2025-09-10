// وظائف لوحة التحكم
document.addEventListener('DOMContentLoaded', function() {
    // تحميل الإحصائيات (محاكاة)
    loadStats();
    
    // تحميل النشاط الأخير (محاكاة)
    loadRecentActivity();
    
    // تفعيل أزرار الإجراءات
    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const text = this.textContent.trim();
            alert(`سيتم توجيهك إلى صفحة: ${text}`);
        });
    });
});

function loadStats() {
    // محاكاة تحميل الإحصائيات من الخادم
    console.log('جاري تحميل الإحصائيات...');
    
    // في التطبيق الحقيقي، سيتم جلب البيانات من API
    // fetch('/api/stats')
    //   .then(response => response.json())
    //   .then(data => updateStats(data));
}

function loadRecentActivity() {
    // محاكاة تحميل النشاط الأخير من الخادم
    console.log('جاري تحميل النشاط الأخير...');
    
    // في التطبيق الحقيقي، سيتم جلب البيانات من API
    // fetch('/api/activity')
    //   .then(response => response.json())
    //   .then(data => updateActivity(data));
}

function updateStats(data) {
    // في التطبيق الحقيقي، سيتم تحديث واجهة المستخدم بالبيانات
    document.querySelector('.stat-number').textContent = data.conversations;
    // ... إلخ
}

function updateActivity(data) {
    // في التطبيق الحقيقي، سيتم تحديث واجهة المستخدم بالبيانات
    const activityList = document.querySelector('.activity-list');
    activityList.innerHTML = ''; // مسح المحتوى الحالي
    
    data.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.classList.add('activity-item');
        activityItem.innerHTML = `
            <div class="activity-icon">
                <i class="fas fa-${activity.icon}"></i>
            </div>
            <div class="activity-details">
                <h4>${activity.title}</h4>
                <p>${activity.time}</p>
            </div>
        `;
        activityList.appendChild(activityItem);
    });
}