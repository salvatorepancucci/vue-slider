Struttura del Progetto

HTML

Contiene la struttura del carosello con immagini, testi e miniature.
Utilizza Vue.js per il rendering dinamico delle slide e delle miniature.

CSS

Stile base per il layout del carosello.
Posizionamento e stile delle immagini, testi e miniature.
Gestione dello stato attivo per le miniature.
Stile per le frecce di navigazione.

JavaScript/Vue.js

Gestisce lo stato del carosello e le interazioni dell'utente.
Include metodi per la navigazione tra le slide, il controllo delle miniature e l'autoplay.
>
Passaggi Logici dello Script
1. Configurazione Vue.js
Inizializzazione dell'app Vue.js con createApp.
Definizione dei dati iniziali, inclusa la lista delle slide e l'indice della slide corrente.
2. Render delle Slide
Uso di v-for per iterare attraverso l'array delle slide e visualizzarle.
Uso di v-show per mostrare solo la slide corrente.
3. Navigazione tra le Slide
Definizione del metodo prevSlide per andare alla slide precedente.
Definizione del metodo nextSlide per andare alla slide successiva.
4. Selezione Diretta delle Slide tramite Miniature
Definizione del metodo goToSlide per impostare l'indice della slide corrente basato sulla miniatura cliccata.
Uso di v-for per iterare attraverso l'array delle slide e generare le miniature.
Aggiunta della classe active alla miniatura corrispondente alla slide corrente.