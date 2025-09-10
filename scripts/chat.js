// محاكاة نظام الدردشة بالذكاء الاصطناعي
document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendMessage');
    
    // ردود الذكاء الاصطناعي
    const aiResponses = [
        "هذا سؤال ممتاز! يمكنني مساعدتك في ذلك.",
        "أفهم استفسارك. دعني أوضح ذلك لك.",
        "هذا موضوع شيق. إليك ما تحتاج إلى معرفته:",
        "بناءً على طلبك، هذه هي أفضل الحلول المقترحة:",
        "لقد قمت بتحليل سؤالك ووجدت أن الإجابة الأمثل هي:",
        "شكراً لسؤالك. إليك المعلومات التي تحتاجها:",
        "هذا استفسار مهم. دعني أقدم لك التفاصيل الكاملة:"
    ];
    
    // إرسال رسالة عند النقر على زر الإرسال
    sendButton.addEventListener('click', sendMessage);
    
    // إرسال رسالة عند الضغط على Enter
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    function sendMessage() {
        const message = chatInput.value.trim();
        
        if (message === '') return;
        
        // إضافة رسالة المستخدم
        addMessage(message, 'user');
        chatInput.value = '';
        
        // محاكاة typing effect
        simulateTyping();
    }
    
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(sender);
        
        const avatar = document.createElement('div');
        avatar.classList.add('message-avatar');
        avatar.innerHTML = `<i class="fas fa-${sender === 'user' ? 'user' : 'robot'}"></i>`;
        
        const content = document.createElement('div');
        content.classList.add('message-content');
        
        const textDiv = document.createElement('div');
        textDiv.classList.add('message-text');
        textDiv.textContent = text;
        
        content.appendChild(textDiv);
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function simulateTyping() {
        // إضافة مؤشر الكتابة
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('message', 'ai');
        typingIndicator.id = 'typing-indicator';
        
        const avatar = document.createElement('div');
        avatar.classList.add('message-avatar');
        avatar.innerHTML = '<i class="fas fa-robot"></i>';
        
        const content = document.createElement('div');
        content.classList.add('message-content');
        
        const textDiv = document.createElement('div');
        textDiv.classList.add('message-text');
        textDiv.innerHTML = '<i class="fas fa-ellipsis-h"></i>';
        
        content.appendChild(textDiv);
        typingIndicator.appendChild(avatar);
        typingIndicator.appendChild(content);
        
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // محاكاة وقت المعالجة ثم إضافة الرد
        setTimeout(() => {
            // إزالة مؤشر الكتابة
            document.getElementById('typing-indicator').remove();
            
            // إضافة رد الذكاء الاصطناعي
            const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
            addMessage(randomResponse, 'ai');
        }, 2000);
    }
    
    // تفعيل خيارات المحادثة الجانبية
    const chatItems = document.querySelectorAll('.chat-item');
    chatItems.forEach(item => {
        item.addEventListener('click', function() {
            chatItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // مسح المحادثة الحالية
            chatMessages.innerHTML = '';
            
            // إضافة رسالة ترحيب جديدة
            addMessage('مرحباً! أنا مساعدك الذكي Vivk AI. كيف يمكنني مساعدتك اليوم؟', 'ai');
        });
    });
    
    // تفعيل زر المحادثة الجديدة
    const newChatBtn = document.querySelector('.new-chat-btn');
    newChatBtn.addEventListener('click', function() {
        chatItems.forEach(i => i.classList.remove('active'));
        chatItems[0].classList.add('active');
        
        // مسح المحادثة الحالية
        chatMessages.innerHTML = '';
        
        // إضافة رسالة ترحيب جديدة
        addMessage('مرحباً! أنا مساعدك الذكي Vivk AI. كيف يمكنني مساعدتك اليوم؟', 'ai');
    });
});

// في ملف scripts/chat.js الحقيقي
async function getAIResponse(userMessage) {
  const apiKey = "your-openai-api-key-here"; // يجب استبدالها بمفتاحك
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: userMessage}]
    })
  });
  
  const data = await response.json();
  return data.choices[0].message.content;
}

// تسجيل الدخول بجوجل باستخدام Firebase Authentication
function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // تم تسجيل الدخول بنجاح
      const user = result.user;
      console.log("المستخدم:", user);
    }).catch((error) => {
      console.error("خطأ في التسجيل:", error);
    });
}