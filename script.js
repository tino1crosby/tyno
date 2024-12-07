document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target[0].value;

    try {
        if (!validateEmail(email)) {
            throw new Error('Invalid email format.');
        }
        // Simulate a successful subscription
        alert('Subscription successful for ' + email);
    } catch (error) {
        console.error('Subscription Error:', error);
        alert(error.message);
    }
});

document.getElementById('submission-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = event.target[0].value;
    const content = event.target[1].value;

    try {
        if (title.trim() === '' || content.trim() === '') {
            throw new Error('All fields are required.');
        }
        // Simulate a successful article submission
        alert('Article submitted successfully: ' + title);
    } catch (error) {
        console.error('Submission Error:', error);
        alert(error.message);
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (!name || !email) {
        event.preventDefault();
        document.getElementById('message').innerText = 'Please fill in all fields.';
    }
});

document.getElementById('purchaseForm').addEventListener('submit', function(event) {
    let errorMessage = '';
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Basic validation
    if (!/^\d{16}$/.test(cardNumber)) {
        errorMessage += 'Card number must be 16 digits.\n';
    }
    if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(expiryDate)) {
        errorMessage += 'Expiry date must be in MM/YY format.\n';
    }
    if (!/^\d{3}$/.test(cvv)) {
        errorMessage += 'CVV must be 3 digits.\n';
    }

    if (errorMessage) {
        event.preventDefault();
        document.getElementById('errorMessage').innerText = errorMessage;
    }
});

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const amount = document.getElementById('amount').value;
    const paymentMessage = document.getElementById('payment-message');

    if (amount <= 0) {
        paymentMessage.textContent = 'Please enter a valid amount.';
        paymentMessage.style.color = 'red';
        return;
    }

    // Simulate a payment process
    paymentMessage.textContent = 'Processing your payment...';
    paymentMessage.style.color = 'blue';

    // Here you would typically send the data to the server
    // For demonstration, we will just simulate success
    setTimeout(() => {
        paymentMessage.textContent = 'Payment successful!';
        paymentMessage.style.color = 'green';
    }, 2000);
});

document.getElementById('submissionForm').addEventListener('submit', function(event) {
    let errorMessage = '';
    const authorName = document.getElementById('authorName').value;
    const email = document.getElementById('email').value;

    if (authorName.trim() === '') {
        errorMessage += 'Author name is required.\n';
    }
    if (email.trim() === '') {
        errorMessage += 'Email is required.\n';
    }

    if (errorMessage) {
        event.preventDefault();
        document.getElementById('errorMessage').innerText = errorMessage;
    }
});

// script.js
document.addEventListener("DOMContentLoaded", function() {
    try {
        // Simulating a function that might throw an error
        initializeJournal();
    } catch (error) {
        console.error("An error occurred while initializing the journal: ", error);
        alert("There was an issue loading the journal. Please try again later.");
    }
});

function initializeJournal() {
    // Example function that could throw an error
    if (Math.random() < 0.5) {
        throw new Error("Initialization failed due to a random error.");
    }
    console.log("Journal initialized successfully.");
}
