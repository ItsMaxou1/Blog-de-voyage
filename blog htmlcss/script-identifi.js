document.addEventListener('DOMContentLoaded', function() {
    const identificationForm = document.getElementById('identificationForm');

    identificationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut

        // Récupère les valeurs du formulaire
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Récupère les informations d'identification stockées dans le stockage local
        const storedCredentials = JSON.parse(localStorage.getItem('credentials'));

        console.log('Redirection vers index.html');
        // Vérifie si les informations d'identification saisies correspondent à celles stockées
        if (storedCredentials && email === storedCredentials.email && password === storedCredentials.password) {
            // Redirige vers la page d'accueil ou une autre page sécurisée
            window.location.href = 'info-profile.html';
        } else {
            // Affiche un message d'erreur si les informations d'identification sont incorrectes
            alert('Adresse e-mail ou mot de passe incorrect.');
        }
    });
});