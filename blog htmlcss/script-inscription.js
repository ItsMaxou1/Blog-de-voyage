document.addEventListener('DOMContentLoaded', function() {
    const inscriptionForm = document.getElementById('inscriptionForm');

    inscriptionForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut

        // Récupère les valeurs du formulaire
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Crée un objet représentant les informations d'identification
        const credentials = {
            email: email,
            password: password
        };

        // Stocke les informations d'identification dans le stockage local du navigateur
        localStorage.setItem('credentials', JSON.stringify(credentials));

        // Redirige vers la page d'identification
        window.location.href = 'identification.html';
    });
});
