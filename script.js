        document.querySelector('.hamburger').addEventListener('click', function() {
            document.querySelector('.menu').classList.toggle('active');
			
        });
		
// Show chatbot only if user is on Home section
const openBtn = document.getElementById('open-chatbot');
const chatbot = document.getElementById('chatbot');
const closeBtn = document.getElementById('close-chatbot');
const sendBtn = document.getElementById('chatbot-send');
const inputField = document.getElementById('chatbot-input');
const messagesDiv = document.getElementById('chatbot-messages');

// Only show button if Home section is visible
function isHomeVisible() {
    const home = document.getElementById('home');
    const rect = home.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

window.addEventListener('scroll', () => {
    openBtn.style.display = isHomeVisible() ? 'block' : 'none';
});

// Open chatbot with animation
openBtn.addEventListener('click', () => {
    chatbot.classList.add('show');
});

// Close chatbot
closeBtn.addEventListener('click', () => {
    chatbot.classList.remove('show');
});

// Send message function
function addMessage(sender, text) {
    const message = document.createElement('div');
    message.innerHTML = `<b>${sender}:</b> ${text}`;
    message.style.margin = "5px 0";
    messagesDiv.appendChild(message);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Simple animated bot responses
function botResponse(message) {
    message = message.toLowerCase();
    if(message.includes('hello') || message.includes('hi')) return '?? Hi there! I am Themba Manyama Chatbot Assistant. How can I help you today?';
    if(message.includes('portfolio')) return '? You can explore my projects in the Projects menu!';
    if(message.includes('skills')) return '?? I have skills in HTML, CSS, JS, PHP, MySQL, Python, and more.';
    if(message.includes('contact')) return '?? You can find my contact info in the Contact section of this website.';
    return "?? Sorry, I didn't understand that. Ask me about my portfolio, skills, or projects!";
}

sendBtn.addEventListener('click', () => {
    const userMessage = inputField.value.trim();
    if(userMessage === '') return;
    addMessage('You', userMessage);
    const reply = botResponse(userMessage);
    setTimeout(() => addMessage('TM Assistant', reply), 500);
    inputField.value = '';
});

inputField.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') sendBtn.click();
});


//Form
const contactForm = document.querySelector("#contact form");

contactForm.addEventListener("submit", function(e){
    e.preventDefault();
    
    const formData = new FormData(this);
    const action = this.action;
    
    fetch(action, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
    })
    .then(response => {
        if(response.ok){
            alert("Thank you! Your message has been sent.");
            contactForm.reset();
        } else {
            alert("Oops! Something went wrong.");
        }
    })
    .catch(() => alert("Oops! There was a problem sending your message."));
});
