document.addEventListener('DOMContentLoaded', () => {
    const greetingMessage = document.createElement('h2');
    greetingMessage.style.color = "#555";
    greetingMessage.style.fontSize = "1.5rem";
    greetingMessage.style.marginTop = "20px";

    const currentHour = new Date().getHours();
    if (currentHour < 12) {
        greetingMessage.textContent = "Good Morning!";
    } else if (currentHour < 18) {
        greetingMessage.textContent = "Good Afternoon!";
    } else {
        greetingMessage.textContent = "Good Evening!";
    }

    document.querySelector('.container').appendChild(greetingMessage);
});
