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
sections.forEach(section => {
    observer.observe(section);
});


const timelineData = [
    { year: "2025-2026", text: "Ele" },
    { year: "2024-2025", text: "Mateo" },
    { year: "2023-2024", text: "Venie" },
    { year: "2022-2023", text: "Jose" },
    { year: "2021-2022", text: "Jose" },
];

const container = document.getElementById("timeline-vertical");

timelineData.forEach((item, index) => {

    const side = index % 2 === 0 ? "left" : "right";

    const element = document.createElement("div");
    element.className = `timeline-item ${side}`;

    element.innerHTML = `
        <div class="timeline-content">
            <h4>${item.year}</h4>
            <p>${item.text}</p>
        </div>
    `;

    container.appendChild(element);
});