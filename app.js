let escapeCount = 0; // Inizializziamo un contatore per tenere traccia dei tentativi

// Funzione per spostare il pulsante "No" o farlo cliccare per il reindirizzamento
function moveButton() {
    if (escapeCount < 2) {  // Il pulsante "No" sfugge solo per i primi due tentativi
        const button = document.getElementById('noButton');
        const buttonWidth = button.offsetWidth;
        const buttonHeight = button.offsetHeight;

        // Impostiamo un'area limitata per il movimento del pulsante, ad esempio il 70% della larghezza e altezza della finestra
        const maxX = (window.innerWidth - buttonWidth) * 0.7;
        const maxY = (window.innerHeight - buttonHeight) * 0.7;

        // Generiamo coordinate casuali limitate all'interno di questa area
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        button.style.left = `${x}px`;
        button.style.top = `${y}px`;

        escapeCount++;  // Incrementiamo il contatore ogni volta che sfugge
    }
}

// Funzione per il reindirizzamento quando viene cliccato il pulsante "No" dopo che ha smesso di sfuggire
function handleClick() {
    if (escapeCount >= 2) {  // Solo dopo che il pulsante ha sfuggito 2 volte
        window.location.href = "no.html"; // Reindirizza alla pagina "no.html"
    }
}