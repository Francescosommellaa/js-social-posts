// Funzione per gestire il click sul pulsante "Mi Piace"
function handleLikeClick(id) {
    // Troviamo l'indice del post nell'array likedPosts
    let index = likedPosts.indexOf(id);
    if (index > -1) {
        // Se il post è già presente, lo rimuoviamo e decrementiamo i likes
        likedPosts.splice(index, 1);
        posts[id - 1].likes--;
    } else {
        // Altrimenti, aggiungiamo il post e incrementiamo i likes
        likedPosts.push(id);
        posts[id - 1].likes++;
    }
}

// Funzione per trasformare una data relativa in una data estesa
function relativeToAbsoluteDate(monthsAgo) {
    // Creiamo una nuova data e sottraiamo i mesi
    let date = new Date();
    date.setMonth(date.getMonth() - monthsAgo);
    // Formattiamo la data in formato italiano
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
}