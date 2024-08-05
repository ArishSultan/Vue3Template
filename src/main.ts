import './assets/main.css';
import { createApp } from 'vue';

import App from './App.vue';

import router from './router';
import store from './store';
import vuetify from './vuetify';

import * as Sentry from '@sentry/vue';
import { ENVIRONMENT, isDevEnv } from '@/utils/env';

const vueApp = createApp(App);

Sentry.init({
    environment: ENVIRONMENT,
    app: vueApp,
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [
        Sentry.browserTracingIntegration({
            router,
        }),
        Sentry.replayIntegration(),
    ],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: isDevEnv ? 1.0 : 0.0,
    replaysOnErrorSampleRate: 1.0,
    profilesSampleRate: 1.0,
});

vueApp.use(store).use(router).use(vuetify).mount('#app');
