const { VITE_APP_MODE } = import.meta.env;

export const isDevMode = VITE_APP_MODE === 'development';
