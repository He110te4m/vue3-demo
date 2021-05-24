import type { ActionHandler, CommitOptions, DispatchOptions, GetterTree, MutationTree } from 'vuex';

export type FixGetter<T extends GetterTree<any, any>> = {
    [K in keyof T]: ReturnType<T[K]>;
};

export type FixDispatch<T extends Record<string, ActionHandler<any, any>>> = <K extends keyof T>(
    key: K,
    payload: Parameters<T[K]>[1],
    options?: DispatchOptions
) => ReturnType<T[K]>;

export type FixCommit<T extends MutationTree<any>> = <K extends keyof T, P extends Parameters<T[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
) => ReturnType<T[K]>;
