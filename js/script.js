const { createApp } = Vue;

createApp({
    data() {
        return {
            // Array di slide con immagini, titoli e descrizioni
            slides: [
                { img: 'img/01.webp', title: 'Spiderman', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.' },
                { img: 'img/02.webp', title: 'Ratchet & Clank', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.' },
                { img: 'img/03.webp', title: 'Fortnite', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.' },
                { img: 'img/04.webp', title: 'Stray', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.' },
                { img: 'img/05.webp', title: 'Avengers', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.' }
            ],
            // Indice della slide corrente
            currentSlide: 0,
            // ID del timer di autoplay
            autoplayTimer: null
        };
    },
    mounted() {
        // Avvia l'autoplay quando il componente è montato
        this.startAutoplay();
    },
    methods: {
        // Metodo per andare alla slide precedente
        prevSlide() {
            this.currentSlide = (this.currentSlide === 0) ? this.slides.length - 1 : this.currentSlide - 1;
        },
        // Metodo per andare alla slide successiva
        nextSlide() {
            this.currentSlide = (this.currentSlide === this.slides.length - 1) ? 0 : this.currentSlide + 1;
        },
        // Metodo per andare a una specifica slide
        goToSlide(index) {
            this.currentSlide = index;
        },
        // Metodo per avviare l'autoplay
        startAutoplay() {
            this.autoplayTimer = setInterval(this.nextSlide, 3000);
        },
        // Metodo per fermare l'autoplay
        pauseAutoplay() {
            clearInterval(this.autoplayTimer);
            this.autoplayTimer = null;
        }
    }
}).mount('#app');
