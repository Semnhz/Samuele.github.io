// Aggiungi eventuali funzionalità interattive qui (es: animazioni, effetti di scorrimento)
console.log("Benvenuti in GoldBlackAgency!");






document.addEventListener('DOMContentLoaded', function() {
    // Controlla se il consenso ai cookie è già stato dato
    if (!localStorage.getItem('cookieConsent')) {
        document.getElementById('cookie-banner').style.display = 'block';
    }

    // Se l'utente accetta i cookie
    document.getElementById('accept-cookies').addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        document.getElementById('cookie-banner').style.display = 'none';
        // Qui puoi inserire codice per attivare i cookie o analisi (es. Google Analytics)
    });

    // Se l'utente rifiuta i cookie
    document.getElementById('reject-cookies').addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'rejected');
        document.getElementById('cookie-banner').style.display = 'none';
        // Qui puoi disattivare i cookie o bloccare l'esecuzione di analisi
    });
});

