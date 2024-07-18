document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById('eid-image').style.display = 'none';
        document.getElementById('eid-message').style.display = 'block';
    }, 5000);
});

function submitMessage() {
    alert('Thank you for your message!');
    // Redirect to a thank you section (implement accordingly)
    // For example:
    // window.location.href = '#thank-you';
}
