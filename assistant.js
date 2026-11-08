/* 
 * AI PORTFOLIO ASSISTANT
 * A lightweight, interactive Q&A guide. 
 * Designed to be easily upgraded to a real AI API in the future.
 */

const assistantData = {
    who: "Muskan Waheed is a Frontend Developer, Graphic Designer, and BS Computer Science student at Women University Multan. She specializes in building modern, responsive, and user-friendly digital experiences.",
    tech: "Muskan uses HTML5, CSS3, JavaScript, and React for frontend development. She also utilizes Canva and PixelLab for graphic and social media design, and is currently expanding her skills in Python.",
    projects: "Muskan has built several conceptual projects including NOVA (a premium fashion e-commerce frontend), DINEFLOW (a modern restaurant website), and a Student Learning Portal (a React-based educational dashboard). Check the Projects section for details!",
    services: "She offers Responsive Website Development, Frontend Website Design, Landing Page Development, Website Redesign, UI Implementation, and Graphic & Social Media Design.",
    contact: "You can reach Muskan via email at mlefty120@gmail.com or connect with her on LinkedIn. Use the 'Let's Chat' button in the Contact section to send an email directly.",
    python: "Yes! Muskan is currently learning Python to expand her understanding of programming logic, automation, and backend fundamentals."
};

const toggleBtn = document.getElementById('assistant-toggle');
const closeBtn = document.getElementById('assistant-close');
const assistantWindow = document.getElementById('assistant-window');
const chatBox = document.getElementById('assistant-chat');
const questionBtns = document.querySelectorAll('.assistant-questions button');

function toggleAssistant() {
    assistantWindow.classList.toggle('active');
}

function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('chat-message', sender);
    msgDiv.textContent = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

if (toggleBtn) toggleBtn.addEventListener('click', toggleAssistant);
if (closeBtn) closeBtn.addEventListener('click', toggleAssistant);

questionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const questionKey = btn.dataset.q;
        const questionText = btn.textContent;
        
        // Add user message
        addMessage(questionText, 'user');
        
        // Simulate typing delay
        setTimeout(() => {
            const response = assistantData[questionKey] || "I'm not sure about that. Please check the portfolio sections or contact Muskan directly!";
            addMessage(response, 'bot');
        }, 600);
    });
});

// Close assistant when clicking outside
document.addEventListener('click', (e) => {
    if (assistantWindow.classList.contains('active') && 
        !assistantWindow.contains(e.target) && 
        !toggleBtn.contains(e.target)) {
        assistantWindow.classList.remove('active');
    }
});