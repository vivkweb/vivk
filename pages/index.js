<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vivk AI - منصة الذكاء الاصطناعي المتكاملة</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <script src="https://unpkg.com/framer-motion@10.16.0/dist/framer-motion.js"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: {
                            50: '#f0f9ff',
                            100: '#e0f2fe',
                            200: '#bae6fd',
                            300: '#7dd3fc',
                            400: '#38bdf8',
                            500: '#0ea5e9',
                            600: '#0284c7',
                            700: '#0369a1',
                            800: '#075985',
                            900: '#0c4a6e',
                        },
                    },
                    animation: {
                        'fade-in': 'fadeIn 0.5s ease-in-out',
                        'slide-up': 'slideUp 0.5s ease-out',
                    },
                    keyframes: {
                        fadeIn: {
                            '0%': { opacity: '0' },
                            '100%': { opacity: '1' },
                        },
                        slideUp: {
                            '0%': { transform: 'translateY(10px)', opacity: '0' },
                            '100%': { transform: 'translateY(0)', opacity: '1' },
                        },
                    },
                },
            },
        }
    </script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap');
        
        body {
            font-family: 'Tajawal', sans-serif;
            transition: all 0.3s ease;
        }
        
        .gradient-bg {
            background: linear-gradient(135deg, #0ea5e9 0%, #7e22ce 100%);
        }
        
        .chat-message-user {
            border-radius: 20px 20px 0 20px;
            background-color: #0ea5e9;
            color: white;
        }
        
        .chat-message-ai {
            border-radius: 20px 20px 20px 0;
            background-color: #f3f4f6;
            color: #1f2937;
        }
        
        .dark .chat-message-ai {
            background-color: #374151;
            color: #f9fafb;
        }
        
        .typing-animation {
            display: inline-block;
        }
        
        .typing-animation span {
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #9ca3af;
            margin: 0 2px;
            animation: typing 1.4s infinite both;
        }
        
        .typing-animation span:nth-child(2) {
            animation-delay: 0.2s;
        }
        
        .typing-animation span:nth-child(3) {
            animation-delay: 0.4s;
        }
        
        @keyframes typing {
            0% { transform: scale(0); }
            50% { transform: scale(1); }
            100% { transform: scale(0); }
        }
        
        .language-selector {
            transition: all 0.3s ease;
        }
        
        .language-selector:hover {
            transform: scale(1.1);
        }
        
        .feature-card {
            transition: all 0.3s ease;
        }
        
        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        .dark .feature-card:hover {
            box-shadow: 0 10px 25px -5px rgba(255, 255, 255, 0.1);
        }
        
        .code-block {
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-size: 0.9em;
        }
        
        /* تحسينات للوضع المظلم */
        .dark .code-block {
            background-color: #1f2937;
            color: #f3f4f6;
        }
        
        /* تحسينات للاستجابة */
        @media (max-width: 768px) {
            .hero-title {
                font-size: 2.5rem;
            }
            
            .feature-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body class="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
    <!-- شريط التنقل -->
    <nav class="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 py-4 px-6 shadow-sm">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <div class="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl">V</div>
                <span class="text-xl font-bold">Vivk AI</span>
            </div>
            
            <div class="flex items-center space-x-6 rtl:space-x-reverse">
                <a href="#features" class="hover:text-primary-500 transition-colors hidden md:block">الميزات</a>
                <a href="#chat" class="hover:text-primary-500 transition-colors hidden md:block">المحادثة</a>
                <a href="#api" class="hover:text-primary-500 transition-colors hidden md:block">API</a>
                
                <div class="flex items-center space-x-4 rtl:space-x-reverse">
                    <!-- تبديل اللغة -->
                    <div class="flex items-center space-x-2 rtl:space-x-reverse bg-gray-100 dark:bg-gray-800 rounded-full p-1">
                        <button class="language-selector w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center" title="العربية">
                            <span>AR</span>
                        </button>
                        <button class="language-selector w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center" title="English">
                            <span>EN</span>
                        </button>
                        <button class="language-selector w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center" title="Español">
                            <span>ES</span>
                        </button>
                    </div>
                    
                    <!-- تبديل الوضع الداكن -->
                    <button id="theme-toggle" class="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                        <i class="fas fa-moon dark:hidden"></i>
                        <i class="fas fa-sun hidden dark:block"></i>
                    </button>

                    <!-- زر القائمة للموبايل -->
                    <button id="mobile-menu-button" class="p-2 rounded-full bg-gray-100 dark:bg-gray-800 md:hidden">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- قائمة الموبايل -->
        <div id="mobile-menu" class="hidden mt-4 md:hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
            <a href="#features" class="block py-2 hover:text-primary-500 transition-colors">الميزات</a>
            <a href="#chat" class="block py-2 hover:text-primary-500 transition-colors">المحادثة</a>
            <a href="#api" class="block py-2 hover:text-primary-500 transition-colors">API</a>
        </div>
    </nav>

    <!-- القسم الرئيسي -->
    <header class="pt-32 pb-20 px-6 gradient-bg text-white">
        <div class="max-w-7xl mx-auto text-center">
            <h1 class="hero-title text-4xl md:text-6xl font-bold mb-6 animate-fade-in">منصة ذكاء اصطناعي <span class="text-yellow-300">تتفوق على DeepSeek</span></h1>
            <p class="text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-slide-up">اكتشف قوة الذكاء الاصطناعي المتقدم مع Vivk AI. سرعة فائقة، دقة غير مسبوقة، وخصوصية تامة.</p>
            <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 rtl:sm:space-x-reverse animate-slide-up">
                <button class="bg-white text-primary-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">جرب الآن</button>
                <button class="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">المزيد من المعلومات</button>
            </div>
        </div>
    </header>

    <!-- قسم الميزات -->
    <section id="features" class="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">لماذا تختار <span class="text-primary-600">Vivk AI</span>؟</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 feature-grid">
                <!-- ميزة السرعة -->
                <div class="feature-card bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
                    <div class="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500 mb-4">
                        <i class="fas fa-bolt text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">سرعة فائقة</h3>
                    <p class="text-gray-600 dark:text-gray-400">معالجة فائقة السرعة للطلبات باستخدام أحدث تقنيات الذكاء الاصطناعي.</p>
                </div>
                
                <!-- ميزة الدقة -->
                <div class="feature-card bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
                    <div class="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-500 mb-4">
                        <i class="fas fa-bullseye text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">دقة غير مسبوقة</h3>
                    <p class="text-gray-600 dark:text-gray-400">نتائج دقيقة وذكية تلبي توقعاتك بأعلى معايير الجودة.</p>
                </div>
                
                <!-- ميزة السهولة -->
                <div class="feature-card bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
                    <div class="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-500 mb-4">
                        <i class="fas fa-user-check text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">سهولة الاستخدام</h3>
                    <p class="text-gray-600 dark:text-gray-400">واجهة بديهية وسهلة الاستخدام تناسب جميع المستخدمين.</p>
                </div>
                
                <!-- ميزة الخصوصية -->
                <div class="feature-card bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
                    <div class="w-14 h-14 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500 mb-4">
                        <i class="fas fa-shield-alt text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">خصوصية تامة</h3>
                    <p class="text-gray-600 dark:text-gray-400">بياناتك محمية بشكل كامل ولا يتم مشاركتها مع أي طرف ثالث.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- قسم المحادثة -->
    <section id="chat" class="py-20 px-6 bg-white dark:bg-gray-900">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-6">تجربة محادثة ذكية</h2>
            <p class="text-center text-gray-600 dark:text-gray-400 mb-12">تفاعل مع نموذج الذكاء الاصطناعي المتقدم الخاص بنا</p>
            
            <div class="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                <!-- رأس واجهة المحادثة -->
                <div class="bg-primary-600 text-white p-4 flex items-center">
                    <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div>
                        <h3 class="font-bold">Vivk AI Assistant</h3>
                        <p class="text-xs">متصل وجاهز للمساعدة</p>
                    </div>
                </div>
                
                <!-- منطقة المحادثة -->
                <div class="h-96 overflow-y-auto p-4 space-y-4">
                    <!-- رسالة من الذكاء الاصطناعي -->
                    <div class="flex items-start space-x-3 rtl:space-x-reverse">
                        <div class="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white flex-shrink-0">
                            <i class="fas fa-robot text-sm"></i>
                        </div>
                        <div class="chat-message-ai p-4 max-w-md">
                            <p>مرحباً! أنا مساعد Vivk AI. كيف يمكنني مساعدتك اليوم؟</p>
                        </div>
                    </div>
                    
                    <!-- رسالة من المستخدم -->
                    <div class="flex items-start space-x-3 rtl:space-x-reverse flex-row-reverse">
                        <div class="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white flex-shrink-0">
                            <i class="fas fa-user text-sm"></i>
                        </div>
                        <div class="chat-message-user p-4 max-w-md">
                            <p>أحتاج مساعدة في كتابة رسالة بريد إلكتروني لعميل</p>
                        </div>
                    </div>
                    
                    <!-- رسالة من الذكاء الاصطناعي -->
                    <div class="flex items-start space-x-3 rtl:space-x-reverse">
                        <div class="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white flex-shrink-0">
                            <i class="fas fa-robot text-sm"></i>
                        </div>
                        <div class="chat-message-ai p-4 max-w-md">
                            <p>بالطبع! يمكنني مساعدتك في ذلك. ما هو نوع الرسالة التي تريد كتابتها؟ هل هي رسالة متابعة، شكر، أو تقديم خدمة جديدة؟</p>
                        </div>
                    </div>
                    
                    <!-- مؤشر الكتابة -->
                    <div class="flex items-start space-x-3 rtl:space-x-reverse">
                        <div class="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-600 flex-shrink-0">
                            <i class="fas fa-robot text-sm"></i>
                        </div>
                        <div class="bg-gray-200 dark:bg-gray-700 p-4 rounded-r-2xl rounded-tl-2xl">
                            <div class="typing-animation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- صندوق الإدخال -->
                <div class="p-4 border-t border-gray-200 dark:border-gray-700">
                    <div class="flex space-x-2 rtl:space-x-reverse">
                        <input type="text" placeholder="اكتب رسالتك هنا..." class="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500">
                        <button class="p-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- قسم API -->
    <section id="api" class="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-6">API للمطورين</h2>
            <p class="text-center text-gray-600 dark:text-gray-400 mb-12">ادمج قوة Vivk AI في تطبيقاتك بسهولة</p>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h3 class="text-2xl font-bold mb-4">مثال للاستخدام</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-6">استخدم API الخاص بنا لدمج الذكاء الاصطناعي في تطبيقاتك بسهولة مع وثائق شاملة وأمثلة عملية.</p>
                    
                    <div class="bg-gray-800 rounded-xl p-6 mb-6">
                        <pre class="text-green-400 code-block overflow-x-auto">
<span class="text-gray-400">// مثال كود JavaScript</span>
<span class="text-blue-400">const</span> <span class="text-yellow-400">response</span> = <span class="text-blue-400">await</span> <span class="text-red-400">fetch</span>(<span class="text-green-300">'https://api.vivk.ai/v1/chat'</span>, {
    <span class="text-blue-400">method</span>: <span class="text-green-300">'POST'</span>,
    <span class="text-blue-400">headers</span>: {
        <span class="text-green-300">'Content-Type'</span>: <span class="text-green-300">'application/json'</span>,
        <span class="text-green-300">'Authorization'</span>: <span class="text-green-300">'Bearer YOUR_API_KEY'</span>
    },
    <span class="text-blue-400">body</span>: <span class="text-red-400">JSON</span>.<span class="text-yellow-400">stringify</span>({
        <span class="text-green-300">'message'</span>: <span class="text-green-300">'كيف يمكنني استخدام API الخاص بكم؟'</span>,
        <span class="text-green-300">'model'</span>: <span class="text-green-300">'vivk-ai-pro'</span>
    })
});

<span class="text-blue-400">const</span> <span class="text-yellow-400">data</span> = <span class="text-blue-400">await</span> <span class="text-yellow-400">response</span>.<span class="text-yellow-400">json</span>();
<span class="text-red-400">console</span>.<span class="text-yellow-400">log</span>(<span class="text-yellow-400">data</span>.<span class="text-yellow-400">response</span>);</pre>
                    </div>
                    
                    <div class="flex space-x-4 rtl:space-x-reverse">
                        <button class="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors">التوثيق الكامل</button>
                        <button class="border border-primary-500 text-primary-500 px-6 py-2 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors">احصل على API Key</button>
                    </div>
                </div>
                
                <div>
                    <h3 class="text-2xl font-bold mb-4">ميزات API</h3>
                    
                    <div class="space-y-6">
                        <div class="flex items-start space-x-4 rtl:space-x-reverse">
                            <div class="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-500 flex-shrink-0">
                                <i class="fas fa-code"></i>
                            </div>
                            <div>
                                <h4 class="font-bold mb-1">سهولة الدمج</h4>
                                <p class="text-gray-600 dark:text-gray-400">واجهة برمجة تطبيقات بسيطة وواضحة مع أمثلة شاملة لجميع لغات البرمجة.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-4 rtl:space-x-reverse">
                            <div class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-500 flex-shrink-0">
                                <i class="fas fa-tachometer-alt"></i>
                            </div>
                            <div>
                                <h4 class="font-bold mb-1">أداء عالي</h4>
                                <p class="text-gray-600 dark:text-gray-400">استجابة سريعة مع معدل استجابة أقل من 100 مللي ثانية للطلبات.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-4 rtl:space-x-reverse">
                            <div class="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-500 flex-shrink-0">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <div>
                                <h4 class="font-bold mb-1">أمان متقدم</h4>
                                <p class="text-gray-600 dark:text-gray-400">مصادقة قوية وتشفير كامل للبيانات مع حماية من الهجمات الإلكترونية.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- التذييل -->
    <footer class="py-12 px-6 bg-gray-800 text-white">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center space-x-2 rtl:space-x-reverse mb-4">
                        <div class="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl">V</div>
                        <span class="text-xl font-bold">Vivk AI</span>
                    </div>
                    <p class="text-gray-400">منصة الذكاء الاصطناعي المتكاملة التي تتفوق على المنافسين في السرعة والدقة.</p>
                </div>
                
                <div>
                    <h4 class="font-bold mb-4">الروابط السريعة</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">الرئيسية</a></li>
                        <li><a href="#features" class="text-gray-400 hover:text-white transition-colors">الميزات</a></li>
                        <li><a href="#chat" class="text-gray-400 hover:text-white transition-colors">المحادثة</a></li>
                        <li><a href="#api" class="text-gray-400 hover:text-white transition-colors">API</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-bold mb-4">الموارد</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">التوثيق</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">الدعم</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">المساعدة</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">الأسئلة الشائعة</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-bold mb-4">اتصل بنا</h4>
                    <div class="flex space-x-4 rtl:space-x-reverse">
                        <a href="#" class="text-gray-400 hover:text-white transition-colors">
                            <i class="fab fa-twitter text-lg"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors">
                            <i class="fab fa-facebook text-lg"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors">
                            <i class="fab fa-linkedin text-lg"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors">
                            <i class="fab fa-github text-lg"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
                <p>© 2023 Vivk AI. جميع الحقوق محفوظة.</p>
            </div>
        </div>
    </footer>

    <script>
        // تبديل الوضع الداكن
        const themeToggle = document.getElementById('theme-toggle');
        const html = document.documentElement;
        
        // التحقق من التفضيلات المحفوظة
        if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
        
        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
        });
        
        // تبديل اللغة
        const languageButtons = document.querySelectorAll('.language-selector');
        languageButtons.forEach(button => {
            button.addEventListener('click', () => {
                languageButtons.forEach(btn => btn.classList.remove('bg-primary-500', 'text-white'));
                languageButtons.forEach(btn => btn.classList.add('bg-gray-200', 'dark:bg-gray-700'));
                
                button.classList.remove('bg-gray-200', 'dark:bg-gray-700');
                button.classList.add('bg-primary-500', 'text-white');
                
                // هنا يمكنك إضافة منطق تغيير اللغة
            });
        });
        
        // قائمة الموبايل
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // إغلاق القائمة عند النقر على رابط
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
        
        // تأثيرات التمرير
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    </script>
</body>
</html>