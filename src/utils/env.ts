const { VITE_APP_MODE } = import.meta.env;

export const isDevEnv = VITE_APP_MODE === 'development';

export const isProdEnv = VITE_APP_MODE === 'production';

export const ENVIRONMENT = VITE_APP_MODE;
