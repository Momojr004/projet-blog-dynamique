
const toggleModeButton = document.getElementById("toggle-mode");
const body = document.body;

toggleModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add("dark-mode");
}

// Récupération des éléments du DOM
const publishButton = document.getElementById("publishComment");
const commentSection = document.getElementById("commentSection");
const inputComment = document.getElementById("inputComment");

// Fonction pour ajouter un commentaire
function addComment() {
    const commentText = inputComment.value;
    const newComment = document.createElement("p");
    newComment.textContent = commentText;
    commentSection.appendChild(newComment);
    inputComment.value = "";
}

// Événement de clic sur le bouton "Publier"
publishButton.addEventListener("click", addComment);

// Événement de clic sur le lien "Voir les commentaires"
