
function getText() {
    var inputElement = document.getElementById('name');
    var inputValue = inputElement.value.trim();
    document.getElementById('chatpage').style.display = 'none';
    inputElement.value = "";
    if (inputValue !== '') {
        document.getElementById('miracle').innerText = "Text inside input: " + inputValue;
    } else {
    }
    document.getElementById('name').value = '';
    return inputValue;
}

function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var messageText = messageInput.value.trim();

    if (messageText !== "") {
        // Create a new message element
        var messageDiv = document.createElement("div");
        messageDiv.textContent = "Stefan: " + messageText;

        // Append the message to the chat window
        var chat = document.getElementById("chat");
        chat.appendChild(messageDiv);

        // Save the message to local storage
        saveMessage(messageText);

        // Clear input field after sending message
        messageInput.value = "";
    }
}
function saveMessage(message) {

    var messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    
    messages.push(message);
    
    localStorage.setItem("chatMessages", JSON.stringify(messages));
}

// Function to load saved messages from local storage
function loadMessages() {
    var chat = document.getElementById("chat");
    var messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    
    // Display saved messages in the chat window
    messages.forEach(function(message) {
        var messageDiv = document.createElement("div");
        messageDiv.textContent = "You: " + message;
        chat.appendChild(messageDiv);
    });
}

// Load saved messages when the page loads
window.onload = loadMessages;