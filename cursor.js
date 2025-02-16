// Sélectionne l'élément du curseur personnalisé
const cursor = document.querySelector('.cursor');

// Fonction pour déplacer le curseur
const moveCursor = (e) => {
    // Récupère les coordonnées de la souris
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Déplace le curseur personnalisé aux coordonnées de la souris
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
};

// Fonction pour agrandir le curseur au survol d'un élément cliquable
const hoverEffect = () => {
    cursor.classList.add('hover');
};

// Fonction pour réduire le curseur quand il quitte un élément cliquable
const unhoverEffect = () => {
    cursor.classList.remove('hover');
};

// Ajoute un écouteur d'événement pour suivre les mouvements de la souris
document.addEventListener('mousemove', moveCursor);

// Ajoute des écouteurs d'événements pour les éléments cliquables
document.querySelectorAll('a, button, .clickable').forEach((element) => {
    element.addEventListener('mouseenter', hoverEffect);
    element.addEventListener('mouseleave', unhoverEffect);
});