function openModal() {
    document.getElementById('contact-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('contact-modal').style.display = 'none';
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    var modal = document.getElementById('contact-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
