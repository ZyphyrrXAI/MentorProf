document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById("send-button");
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    // Predefined responses for simplicity
    const responses = {
        "hello": "Hi there! How can I assist you today?",
        "math": "Math is the language of the universe. What equation can I help with?",
        "science": "Science is amazing! What would you like to know?",
        "history": "History is full of amazing stories. What's your favorite period?",
        "technology": "Technology is advancing every day. What's your favorite tech topic?",
        "literature": "Literature helps us understand the world. What book are you interested in?"
    };

    // Function to add messages to chat box
    function addMessage(content, sender) {
        const message = document.createElement("div");
        message.classList.add(sender === "user" ? "user-message" : "bot-message");
        message.textContent = content;
        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom
    }

    // Function to handle user input
    function handleUserInput() {
        const userText = userInput.value.trim().toLowerCase();

        if (userText !== "") {
            addMessage(userText, "user");

            // Generate bot's response
            const botResponse = responses[userText] || "Sorry, I didn't understand that. Can you try asking something else?";
            setTimeout(() => {
                addMessage(botResponse, "bot");
            }, 500); // Delay for bot response
        }

        userInput.value = ""; // Clear input field
    }

    // Event listener for send button
    sendButton.addEventListener("click", handleUserInput);

    // Allow 'Enter' key to send messages as well
    userInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            handleUserInput();
        }
    });
});
