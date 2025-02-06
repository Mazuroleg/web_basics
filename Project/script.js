function submitApplication() {
    const form = document.getElementById('applicationForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    
    if (form.checkValidity()) {
        confirmationMessage.style.display = 'block';
        form.reset();
    } else {
        alert('Будь ласка, заповніть всі поля форми.');
    }
}
