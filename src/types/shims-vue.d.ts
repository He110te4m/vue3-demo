declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<UnknownObj, UnknownObj, SafeAny>;
    export default component;
}
