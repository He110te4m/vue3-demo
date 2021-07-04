import type { App } from 'vue';

const directivesRegister = Object.values(import.meta.globEager('./modules/*.ts')).map(item => item.register as (app: App) => void);

export function registerDirectives(app: App) {
    directivesRegister.forEach(register => {
        register(app);
    });
}
