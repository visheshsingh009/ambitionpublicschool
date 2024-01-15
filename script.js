document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        showFeedbackPrompt();
    }, 15000); // Show the feedback prompt after 15 seconds

    function showFeedbackPrompt() {
        var feedback = prompt("We'd love to hear your feedback! Please share your thoughts:");

        if (feedback !== null && feedback.trim() !== "") {
            sendFeedbackToFormspree(feedback);
        }
    }

    function sendFeedbackToFormspree(feedback) {
        // Replace 'YOUR_FORMSPREE_ENDPOINT' with your Formspree endpoint
        var formEndpoint = 'https://formspree.io/f/mnqendbp';

        // Create a new FormData object and append the feedback data
        var formData = new FormData();
        formData.append('feedback', feedback);

        // Send a POST request to Formspree
        fetch(formEndpoint, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(function (response) {
            if (response.ok) {
                alert('Thank you for your feedback!');
            } else {
                alert('Oops! Something went wrong. Please try again later.');
            }
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
    }
});
