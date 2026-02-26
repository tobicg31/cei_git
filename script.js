document.querySelectorAll('.secretaria-card').forEach(card => {
    card.addEventListener('click', function() {

        const title = this.getAttribute('data-title');
        const text = this.getAttribute('data-text');

        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalText').textContent = text;

        const modal = new bootstrap.Modal(document.getElementById('secretariaModal'));
        modal.show();
    });
});

const sections = document.querySelectorAll('.fade-normal, .fade-right, .fade-left');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show'); // ← esto hace que se resetee
        }
    });
}, {
    threshold: 0.25
});
//hola
sections.forEach(section => {
    observer.observe(section);
});