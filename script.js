document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value.trim();
    const resultsDiv = document.getElementById('results-div');

    if (userInput === '') {
        alert('Please provide a phone number');
        return;
    }

    // Regular expression for validating US phone numbers
    const regex = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?([0-9]{3})[\s\-]?([0-9]{4})$/;

    if (regex.test(userInput)) {
        resultsDiv.textContent = `Valid US number: ${userInput}`;
    } else {
        resultsDiv.textContent = `Invalid US number: ${userInput}`;
    }
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('results-div').textContent = '';
});
