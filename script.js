function generatePrompt() {
    const promptInput = document.getElementById("promptInput").value;
    const responseText = document.getElementById("responseText");

    if (promptInput.trim() === "") {
        responseText.innerText = "Please enter a prompt.";
        return;
    }

    // Example of calling an API (modify with your actual API URL and key handling)
    fetch('https://api.example.com/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer your_api_key_here'
        },
        body: JSON.stringify({ prompt: promptInput })
    })
    .then(response => response.json())
    .then(data => {
        responseText.innerText = data.generatedPrompt; // Adjust depending on the API response
    })
    .catch(error => {
        console.error('Error:', error);
        responseText.innerText = "An error occurred while generating the prompt.";
    });
}
