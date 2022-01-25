Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            // Links header
            headerLinks: [
                'Introduzione',
                'Norme sulla privacy',
                'Termini di servizio',
                'Tecnologie',
                'Domande frequenti'
            ],
            // Link selezionato
            selectedLink: 4,
            // Links footer
            footerLinks: [
                'Google',
                'Tutto su Google',
                'Privacy',
                'Termini'
            ]
        },
        methods: {

        }
    }
);
    
