// قاعدة معارف الذكاء الاصطناعي
const aiKnowledgeBase = {
    greetings: [
        "مرحباً! كيف يمكنني مساعدتك اليوم؟",
        "أهلاً وسهلاً! كيف حالك؟",
        "مرحباً بك! أنا هنا لمساعدتك.",
        "أهلاً! ما الذي يمكنني فعله لك اليوم؟"
    ],
    farewells: [
        "إلى اللقاء! كان حديثاً ممتعاً.",
        "وداعاً! لا تتردد في العودة إذا كان لديك المزيد من الأسئلة.",
        "أتمنى لك يوماً رائعاً!",
        "مع السلامة! أنا هنا دائماً لمساعدتك."
    ],
    thanks: [
        "على الرحب والسعة! سعيد لأنني استطعت المساعدة.",
        "لا شكر على واجب! دائماً سعيد لمساعدتك.",
        "شكراً لك على التواصل معي!",
        "أنت welcome! ما الذي تريد المساعدة فيه الآن؟"
    ],
    questions: {
        "ما هو اسمك": "أنا Vivk AI، مساعدك الذكي!",
        "من صنعك": "لقد تم تطويري لمساعدتك في مختلف المهام.",
        "ماذا يمكنك أن تفعل": "يمكنني المساعدة في answering questions, generating text, translation, and more!",
        "كيف حالك": "أنا بخير، شكراً لسؤالك! كيف حالك؟",
    },
    responses: [
        "هذا سؤال مثير للاهتمام!",
        "أفهم استفسارك بشكل كامل.",
        "دعني أفكر في أفضل طريقة للإجابة على هذا.",
        "هذا موضوع شيق بالفعل.",
        "لدي بعض الأفكار حول هذا الموضوع."
    ]
};

// دالة للحصول على رد من الذكاء الاصطناعي
function getAIResponse(message) {
    // تنظيف الرسالة وتحويلها لحروف صغيرة
    const cleanMessage = message.toLowerCase().trim();
    
    // التحقق من التحيات
    if (cleanMessage.includes('مرحبا') || cleanMessage.includes('اهلا') || cleanMessage.includes('اهلين')) {
        return getRandomResponse(aiKnowledgeBase.greetings);
    }
    
    // التحقق من الوداع
    if (cleanMessage.includes('وداعا') || cleanMessage.includes('مع السلامة') || cleanMessage.includes('الى اللقاء')) {
        return getRandomResponse(aiKnowledgeBase.farewells);
    }
    
    // التحقق من الشكر
    if (cleanMessage.includes('شكرا') || cleanMessage.includes('مشكور') || cleanMessage.includes('thank')) {
        return getRandomResponse(aiKnowledgeBase.thanks);
    }
    
    // التحقق من الأسئلة المحددة
    for (const [question, answer] of Object.entries(aiKnowledgeBase.questions)) {
        if (cleanMessage.includes(question.toLowerCase())) {
            return answer;
        }
    }
    
    // الرد على الأسئلة البرمجية
    if (cleanMessage.includes('برمجة') || cleanMessage.includes('كود') || cleanMessage.includes('برمج')) {
        return "يمكنني مساعدتك في الأمور البرمجية! ما اللغة التي تريد المساعدة فيها؟";
    }
    
    // الرد على أسئلة الترجمة
    if (cleanMessage.includes('ترجمة') || cleanMessage.includes('ترجم') || cleanMessage.includes('translate')) {
        return "يمكنني المساعدة في ترجمة النصوص! ما النص الذي تريد ترجمته؟";
    }
    
    // رد افتراضي
    return getRandomResponse(aiKnowledgeBase.responses) + " " + generateContextualResponse(cleanMessage);
}

// دالة للحصول على رد عشوائي من مصفوفة
function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

// دالة لإنشاء رد contextual
function generateContextualResponse(message) {
    if (message.includes('؟') || message.includes('?')) {
        return "هل يمكنك توضيح سؤالك أكثر؟";
    }
    
    if (message.length < 5) {
        return "هل يمكنك إعطائي المزيد من التفاصيل؟";
    }
    
    const responses = [
        "ما رأيك في مناقشة هذا الموضوع بمزيد من العمق؟",
        "أود معرفة المزيد عن هذا الموضوع.",
        "هذا مثير للاهتمام! هل لديك المزيد من الأسئلة؟",
        "أعتقد أن لدي بعض الأفكار التي قد تساعدك.",
        "دعني أساعدك في هذا الأمر."
    ];
    
    return getRandomResponse(responses);
}

// دالة لمحاكاة الذكاء الاصطناعي المتقدم (لأغراض العرض)
function simulateAdvancedAI(message) {
    // في التطبيق الحقيقي، سيتم استبدال هذا باستدعاء API
    console.log("معالجة الرسالة:", message);
    
    // محاكاة معالجة اللغة الطبيعية الأساسية
    if (message.includes("كيف") && message.includes("عمل")) {
        return "أعمل باستخدام خوارزميات متقدمة لفهم اللغة الطبيعية وتوليد الردود المناسبة.";
    }
    
    if (message.includes("وقت") || message.includes("تاريخ")) {
        return "حاليا الوقت هو: " + new Date().toLocaleTimeString() + " والتاريخ هو: " + new Date().toLocaleDateString();
    }
    
    return getAIResponse(message);
}

// جعل الدالة متاحة globally لاستخدامها في main.js
window.getAIResponse = simulateAdvancedAI;