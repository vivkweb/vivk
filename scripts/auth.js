// وظائف المصادقة
function loginWithGoogle() {
    alert('سيتم توجيهك إلى صفحة تسجيل الدخول عبر جوجل...');
    // في التطبيق الحقيقي، سيتم توجيه المستخدم إلى صفحة مصادقة جوجل
    // window.location.href = '/auth/google';
}

function signupWithGoogle() {
    alert('سيتم توجيهك إلى صفحة إنشاء حساب عبر جوجل...');
    // في التطبيق الحقيقي، سيتم توجيه المستخدم إلى صفحة مصادقة جوجل
    // window.location.href = '/auth/google';
}

// محاكاة عملية تسجيل الدخول
function simulateLogin(email, password) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                user: {
                    id: 1,
                    name: 'مستخدم Vivk AI',
                    email: email,
                    avatar: 'assets/icons/user-avatar.png'
                }
            });
        }, 1500);
    });
}

// محاكاة عملية إنشاء حساب
function simulateSignup(name, email, password) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                user: {
                    id: 1,
                    name: name,
                    email: email,
                    avatar: 'assets/icons/user-avatar.png'
                }
            });
        }, 1500);
    });
}