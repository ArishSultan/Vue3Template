import './assets/main.css';
import { createApp } from 'vue';

import App from './App.vue';

import router from './router';
import store from './store';
import vuetify from './vuetify';

import * as Sentry from '@sentry/vue';
import { isDevMode } from '@/utils/env';

const vueApp = createApp(App);

Sentry.init({
    app: vueApp,
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration()
    ],
    tracesSampleRate: 1.0,
    // tracePropagationTargets: ['http://localhost:5173', 'https://example.com'],
    replaysSessionSampleRate: isDevMode ? 1.0 : 0.0,
    replaysOnErrorSampleRate: 1.0,
    profilesSampleRate: 1.0,
});

vueApp.use(store).use(router).use(vuetify).mount('#app');
