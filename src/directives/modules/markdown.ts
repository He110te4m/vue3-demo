import type { App } from 'vue';

import Markdown from 'markdown-it';

const md = new Markdown({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true
});

export function register(app: App) {
    app.directive('markdown', {
        mounted(el, binding) {
            el.innerHTML = md.render(binding.value ?? '');
        },
        updated(el, binding) {
            el.innerHTML = md.render(binding.value ?? '');
        }
    });
}
