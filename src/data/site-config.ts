export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://github.com/vsksv',
    title: 'Kevin Alfonso Villafuerte Sanchez',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    subtitle: 'Bienvenidos a mi Blog Personal 👨🏻‍💻',
    headerNavLinks: [
        {
            text: 'Presentación',
            href: '/'
        },
        {
            text: 'Proyectos',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Github',
            href: 'https://github.com/vsksv'
        }
    ],
    footerNavLinks: [
        {
            text: 'Acerda de mi',
            href: '/about'
        },
        {
            text: 'Contactame',
            href: '/contact'
        },
        {
            text: 'Terminos',
            href: '/terms'
        },
    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'www.linkedin.com/in/vsksv'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/vsniveksv/'
        },
        {
            text: 'X/Twitter',
            href: 'https://x.com/nivek9021'
        }
    ],
    hero: {
        title: 'Hola y bienvenido a mi rincón de la web!.',
        text: "Soy **Kevin Alfonso Villafuerte Sanchez**, Analista de Sistemas y estadistico en el Centro de Salud Mental Comunitario Santiago, dedicado a los ámbitos de la creacion de reportes estadistico, creacion y mantenimiento de sistemas y aplicaciones para el manejo de informacion de los usuarios y personal de la salud mental. Mi enfoque se basa en la intuición, la investigación justa y el uso de la estética como catalizador para crear productos excepcionales. Aprecio profundamente el software de alta gama, el diseño visual y los principios del crecimiento impulsado por el producto. Explora algunos de mis proyectos de programación en <a href='https://github.com/vsksv'>GitHub</a>.",
         image: {
            src: '/vs.jpg',
            alt: 'A person sitting at a desk in front of a computer in a mental health ward',
        },
        actions: [
            {
                text: 'Ponte en Contacto',
                href: '/contact'                
            }
        ]
    },
    subscribe: {
        title: 'Suscribete para recibir mis notificaciones',
        text: 'Una actualización por semana. Recibe todas mis últimas publicaciones directamente en tu bandeja de entrada.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
