// عناصر واجهة المستخدم
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendMessage');
const statusText = document.getElementById('statusText');

// إرسال رسالة عند النقر على الزر
sendButton.addEventListener('click', sendMessage);

// إرسال رسالة عند الضغط على Enter
userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// دالة إرسال الرسالة
function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;
    
    // إضافة رسالة المستخدم
    addMessage(message, 'user');
    userInput.value = '';
    
    // إظهار مؤشر الكتابة
    const typingIndicator = showTypingIndicator();
    
    // الحصول على رد من الذكاء الاصطناعي (بعد تأخير لمحاكاة المعالجة)
    setTimeout(() => {
        // إزالة مؤشر الكتابة
        if (typingIndicator) {
            chatMessages.removeChild(typingIndicator);
        }
        
        // الحصول على رد الذكاء الاصطناعي
        const response = getAIResponse(message);
        
        // إضافة الرد
        addMessage(response, 'ai');
    }, 1000);
}

// دالة إضافة رسالة إلى الدردشة
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
    
    return messageDiv;
}

// دالة إظهار مؤشر الكتابة
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.classList.add('message', 'ai');
    typingDiv.id = 'typingIndicator';
    
    const avatar = document.createElement('div');
    avatar.classList.add('message-avatar');
    avatar.innerHTML = '<i class="fas fa-robot"></i>';
    
    const content = document.createElement('div');
    content.classList.add('message-content');
    
    const loadingDiv = document.createElement('div');
    loadingDiv.classList.add('typing-indicator');
    
    const text = document.createElement('span');
    text.textContent = 'يكتب';
    
    const dots = document.createElement('div');
    dots.classList.add('typing-dots');
    
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.classList.add('typing-dot');
        dots.appendChild(dot);
    }
    
    loadingDiv.appendChild(text);
    loadingDiv.appendChild(dots);
    content.appendChild(loadingDiv);
    typingDiv.appendChild(avatar);
    typingDiv.appendChild(content);
    
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    return typingDiv;
}