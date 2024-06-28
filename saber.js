// script.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-content');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.classList.toggle('show');
            if (content.classList.contains('show')) {
                this.textContent = 'Ver menos';
            } else {
                this.textContent = 'Ver más';
            }
        });
    });
});
