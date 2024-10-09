function generatePrompt() {
    const promptInput = document.getElementById("promptInput").value;
    const responseText = document.getElementById("responseText");

    if (promptInput.trim() === "") {
        responseText.innerText = "Please enter a prompt.";
        return;
    }

    // Example of calling an API (modify with your actual API URL and key handling)
    fetch('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', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
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
