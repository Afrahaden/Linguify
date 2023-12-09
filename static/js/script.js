function copyText() {
    // Get the text to copy
    var translatedText = document.getElementById("translatedText");

    // Create a temporary textarea to hold the text
    var textarea = document.createElement("textarea");
    textarea.value = translatedText.textContent;
    document.body.appendChild(textarea);

    // Select and copy the text
    textarea.select();
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // Optionally provide feedback to the user (e.g., display a tooltip)
    alert("Text copied to clipboard!");
}
