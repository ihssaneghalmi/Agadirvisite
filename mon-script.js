
document.querySelectorAll('.reade-more').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.previousElementSibling; // Trouver le texte associé au bouton
        content.classList.toggle('show-more'); // Alterner l'affichage du texte
        // Changer le texte du bouton dynamiquement
        button.innerText = content.classList.contains('show-more') ? 'Cacher' : 'Lire la suite';
    });
});




