document.addEventListener('DOMContentLoaded', function() {
    const articleForm = document.getElementById('articleForm');

    articleForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut

        // Récupère les valeurs du formulaire
        const titre = document.getElementById('titre').value;
        const contenu = document.getElementById('contenu').value;

        // Crée un objet représentant l'article
        const nouvelArticle = {
            titre: titre,
            contenu: contenu
        };

        // Stocke l'article dans le stockage local du navigateur
        sauvegarderArticle(nouvelArticle);

        // Redirige vers la page d'accueil
        window.location.href = 'index.html';
    });

    // Affiche les articles lors du chargement de la page
    afficherArticles();
});

// Fonction pour sauvegarder un article dans le stockage local du navigateur
function sauvegarderArticle(article) {
    let articles = JSON.parse(localStorage.getItem('articles')) || [];
    articles.push(article);
    localStorage.setItem('articles', JSON.stringify(articles));
}

// Fonction pour afficher les articles sur la page d'accueil
function afficherArticles() {
    const articlesContainer = document.getElementById('articlesContainer');
    articlesContainer.innerHTML = '';

    let articles = JSON.parse(localStorage.getItem('articles')) || [];
    articles.forEach(function(article) {
        const nouvelArticleHTML = `
            <div class="article">
                <h2>${article.titre}</h2>
                <p>${article.contenu}</p>
            </div>
        `;
        articlesContainer.insertAdjacentHTML('beforeend', nouvelArticleHTML);
    });
}

// Ajout du code pour l'overlay gris avec opacité
window.addEventListener('scroll', function() {
    var topBackground = document.querySelector('.top-background');
    var backgroundImageHeight = topBackground.offsetHeight;

    if (window.pageYOffset > backgroundImageHeight) {
        topBackground.classList.add('scrolled');
    } else {
        topBackground.classList.remove('scrolled');
    }
});

/* fin du code pour l'overlay gris avec opacité */

/* pour faire le cookie */

function acceptCookies() {
    document.getElementById("cookieConsent").style.display = "none";
    document.cookie = "cookies_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

function checkCookie() {
    if (document.cookie.indexOf("cookies_accepted=true") === -1) {
        document.getElementById("cookieConsent").style.display = "block";
    }
}

window.onload = function() {
    checkCookie();
}

/* fin du cookie */
