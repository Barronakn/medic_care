import './bootstrap';
import '../css/app.css';
import "../css/navbar.css"
import "../css/home.css"
import "../css/about.css"
import "../css/timeline.css"
import "../css/booking.css"
import "../css/contact.css"
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';


createInertiaApp({
    title: () => "Medic Care - Health Specialist",
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
