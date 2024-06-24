// Array di post
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// Array per memorizzare gli id dei post a cui abbiamo messo "Mi Piace"
let likedPosts = [];

// Aggiungiamo un listener per il click sul pulsante "Mi Piace" in ogni post
document.querySelectorAll('.js-like-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Preveniamo il comportamento di default del click
        let postId = this.dataset.postid; // Otteniamo l'id del post
        handleLikeClick(postId); // Gestiamo il click sul pulsante "Mi Piace"
        this.classList.toggle('liked'); // Cambiamo il colore del testo del bottone
        if (this.classList.contains('liked')) {
            this.style.color = 'red'; // Se il pulsante è stato cliccato, lo rendiamo rosso
        } else {
            this.style.color = ''; // Altrimenti, lo rendiamo di nuovo normale
        }
        // Aggiorniamo il contatore dei likes
        document.querySelector(`#like-counter-${postId}`).textContent = posts[postId - 1].likes;
    });
});

// Trasformiamo le date relative in date estese
document.querySelectorAll('.post-meta__time').forEach(timeElement => {
    let monthsAgo = parseInt(timeElement.textContent.split(' ')[0]);
    timeElement.textContent = relativeToAbsoluteDate(monthsAgo);
});

// Stampa i post del nostro feed
posts.forEach(post => {
    console.log(`ID: ${post.id}`);
    console.log(`Contenuto: ${post.content}`);
    console.log(`Media: ${post.media}`);
    console.log(`Autore: ${post.author.name}`);
    console.log(`Mi piace: ${post.likes}`);
    console.log(`Data di creazione: ${formatDate(post.created)}`);
});