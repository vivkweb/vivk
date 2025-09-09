class VivkAIChat {
  constructor() {
    this.chatContainer = null;
    this.messagesContainer = null;
    this.inputField = null;
    this.sendButton = null;
    this.isProcessing = false;
    this.conversationHistory = [];
    
    this.init();
  }

  init() {
    this.createChatInterface();
    this.setupEventListeners();
    this.showWelcomeMessage();
  }

  createChatInterface() {
    // إنشاء واجهة الدردشة
    this.chatContainer = document.createElement('div');
    this.chatContainer.className = 'chat-container-advanced';
    this.chatContainer.innerHTML = `
      <div class="chat-header" style="
        background: linear-gradient(135deg, #6E3AFF, #00D4FF);
        padding: 20px;
        text-align: center;
        color: white;
        font-weight: bold;
        font-size: 18px;
      ">
        Vivk.Ai Assistant
      </div>
      <div class="chat-messages" style="
        height: 400px;
        overflow-y: auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 15px;
      "></div>
      <div class="chat-input" style="
        padding: 20px;
        background: rgba(255, 255, 255, 0.05);
        display: flex;
        gap: 10px;
      ">
        <input type="text" placeholder="اكتب رسالتك هنا..." style="
          flex: 1;
          padding: 15px;
          border-radius: 25px;
          border: 1px solid rgba(110, 58, 255, 0.3);
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 16px;
        ">
        <button style="
          background: #6E3AFF;
          color: white;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          cursor: pointer;
          font-size: 18px;
          transition: background 0.3s;
        ">
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    `;

    document.body.appendChild(this.chatContainer);
    
    this.messagesContainer = this.chatContainer.querySelector('.chat-messages');
    this.inputField = this.chatContainer.querySelector('input');
    this.sendButton = this.chatContainer.querySelector('button');
  }

  setupEventListeners() {
    this.sendButton.addEventListener('click', () => this.sendMessage());
    
    this.inputField.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.sendMessage();
      }
    });

    // إغلاق الدردشة عند النقر خارجها
    document.addEventListener('click', (e) => {
      if (!this.chatContainer.contains(e.target) && 
          !e.target.classList.contains('chat-toggle')) {
        this.hideChat();
      }
    });
  }

  async sendMessage() {
    const message = this.inputField.value.trim();
    if (!message || this.isProcessing) return;

    this.addMessage(message, 'user');
    this.inputField.value = '';
    this.isProcessing = true;

    // محاكاة استجابة الذكاء الاصطناعي
    setTimeout(() => {
      const aiResponse = this.generateAIResponse(message);
      this.addMessage(aiResponse, 'ai');
      this.isProcessing = false;
    }, 1000 + Math.random() * 1000); // وقت عشوائي لمحاكاة التفكير
  }

  addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.style.cssText = `
      max-width: 70%;
      padding: 15px;
      border-radius: 20px;
      align-self: ${sender === 'user' ? 'flex-end' : 'flex-start'};
      background: ${sender === 'user' ? 
        'rgba(0, 212, 255, 0.2)' : 
        'rgba(110, 58, 255, 0.2)'};
      border-bottom-${sender === 'user' ? 'right' : 'left'}-radius: 5px;
      animation: fadeIn 0.3s ease-in;
    `;
    
    messageDiv.textContent = text;
    this.messagesContainer.appendChild(messageDiv);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;

    // حفظ المحادثة في السجل
    this.conversationHistory.push({
      sender,
      text,
      timestamp: new Date().toISOString()
    });
  }

  generateAIResponse(userMessage) {
    const responses = {
      'hello': 'مرحباً! كيف يمكنني مساعدتك اليوم؟',
      'help': 'يمكنني مساعدتك في إنشاء المحتوى، الإجابة على الأسئلة، والكثير من الأشياء الأخرى. ما الذي تحتاج إليه؟',
      'video': 'لإنشاء فيديو، أرسل لي النص أو الفكرة وسأقوم بإنشاء فيديو مذهل لك!',
      'image': 'أحب إنشاء الصور! أخبرني ما الذي تريد رؤيته وسأصنعه لك.',
      'default': 'هذا مثير للاهتمام! هل يمكنك إعطائي المزيد من التفاصيل؟'
    };

    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('مرحبا') || lowerMessage.includes('اهلا')) {
      return responses['hello'];
    } else if (lowerMessage.includes('مساعدة') || lowerMessage.includes('help')) {
      return responses['help'];
    } else if (lowerMessage.includes('فيديو') || lowerMessage.includes('video')) {
      return responses['video'];
    } else if (lowerMessage.includes('صورة') || lowerMessage.includes('image')) {
      return responses['image'];
    } else {
      return responses['default'];
    }
  }

  showWelcomeMessage() {
    setTimeout(() => {
      this.addMessage('مرحباً! أنا مساعد Vivk.Ai. كيف يمكنني مساعدتك اليوم؟', 'ai');
    }, 500);
  }

  showChat() {
    this.chatContainer.style.display = 'block';
  }

  hideChat() {
    this.chatContainer.style.display = 'none';
  }

  toggleChat() {
    if (this.chatContainer.style.display === 'none') {
      this.showChat();
    } else {
      this.hideChat();
    }
  }
}

// تهيئة الدردشة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  window.vivkChat = new VivkAIChat();
});

// دالة لربط الدردشة بذكاء اصطناعي حقيقي لاحقاً
async function connectToRealAI(apiKey, model = 'gpt-3.5-turbo') {
  console.log('تم ربط الدردشة بنموذج الذكاء الاصطناعي:', model);
  // هنا سيتم إضافة كود الاتصال الفعلي بالذكاء الاصطناعي
}