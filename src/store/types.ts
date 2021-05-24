import type { ActionHandler, CommitOptions, DispatchOptions, GetterTree, MutationTree } from 'vuex';
import type { modules, store } from './index';
import type { RootStore } from './root/store';

export type FixGetter<T extends GetterTree<any, any>> = {
    [K in keyof T]: ReturnType<T[K]>;
};

export type FixDispatch<T extends Record<string, ActionHandler<any, any>>> = <K extends keyof T>(
    key: K,
    payload?: Parameters<T[K]>[1],
    options?: DispatchOptions
) => ReturnType<T[K]>;

export type FixCommit<T extends MutationTree<any>> = <K extends keyof T, P extends Parameters<T[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
) => ReturnType<T[K]>;

// 取所有需要生成声明的 vuex 模块及其注册的 key
type ModuleType = typeof modules;
type ModuleKey = keyof ModuleType;

// vuex 模块具体字段类型
type ModuleField<T extends keyof ModuleType[ModuleKey]> = {
    [K in ModuleKey]: ModuleType[K][T];
};

// vuex 模块的 state 集合
type ModuleState = {
    [K in keyof ModuleField<'state'>]: ReturnType<ModuleField<'state'>[K]>;
};

// vuex 模块的 getters 类型交叉
type Getters = ModuleField<'getters'>;
type ModuleGetters = UnionToIntersection<
    {
        [K in keyof Getters]: FixGetter<Getters[K]>;
    }[ModuleKey]
>;

// vuex 模块的 commit 类型交叉
type Mutations = ModuleField<'mutations'>;
type ModuleCommits = UnionToIntersection<
    {
        [K in keyof Mutations]: FixCommit<Mutations[K]>;
    }[ModuleKey]
>;

// vuex 模块的 dispatch 类型交叉
type Actions = ModuleField<'actions'>;
type ModuleDispatch = UnionToIntersection<
    {
        [K in keyof Actions]: FixDispatch<Actions[K]>;
    }[ModuleKey]
>;

export type GlobalStore = Omit<typeof store, 'state' | 'getters' | 'commit' | 'dispatch'> & {
    state: RootStore['state'] & ModuleState;
    getters: RootStore['getters'] & ModuleGetters;
    commit: RootStore['commit'] & ModuleCommits;
    dispatch: RootStore['dispatch'] & ModuleDispatch;
};
