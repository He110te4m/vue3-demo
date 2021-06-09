import type { ActionHandler, ActionObject, ActionTree, CommitOptions, DispatchOptions, GetterTree, MutationTree } from 'vuex';
import type { modules, store } from './index';
import type { RootStore } from './root/store';

export type FixState<TState extends AnyObj | (() => AnyObj)> = TState extends AnyFunc ? ReturnType<TState> : TState;

export type FixGetter<TGetter extends GetterTree<any, any>> = {
    [TGetterKey in keyof TGetter]: ReturnType<TGetter[TGetterKey]>;
};

export type FixCommit<TMutation extends MutationTree<any>> = <TMutationName extends keyof TMutation>(
    key: TMutationName,
    payload?: Parameters<TMutation[TMutationName]>[1],
    options?: CommitOptions
) => ReturnType<TMutation[TMutationName]>;

export type FixNSCommit<TMutation extends MutationTree<any>, TNameSpace extends string> = <
    TMutationName extends `${TNameSpace}/${keyof TMutation & string}`,
    TMutationKey extends TMutationName extends `${TNameSpace}/${infer TKey}` ? TKey : never
>(
    key: TMutationName,
    payload?: Parameters<TMutation[TMutationKey]>[1],
    options?: CommitOptions
) => ReturnType<TMutation[TMutationName]>;

type GetActionHandler<TActionTree extends ActionTree<SafeAny, SafeAny>> = {
    [TActionName in keyof TActionTree]: TActionTree[TActionName] extends ActionHandler<SafeAny, SafeAny>
        ? TActionTree[TActionName]
        : TActionTree[TActionName] extends ActionObject<SafeAny, SafeAny>
        ? TActionTree[TActionName]['handler']
        : AnyFunc;
};

export type FixDispatch<TAction extends ActionTree<SafeAny, SafeAny>> = <TActionName extends keyof TAction>(
    key: TActionName,
    payload?: Parameters<GetActionHandler<TAction>[TActionName]>[1],
    options?: DispatchOptions
) => ReturnType<GetActionHandler<TAction>[TActionName]>;

export type FixNSDispatch<TAction extends ActionTree<SafeAny, SafeAny>, TNameSpace extends string> = <
    TActionName extends `${TNameSpace}/${keyof TAction & string}`,
    TActionKey extends TActionName extends `${TNameSpace}/${infer TKey}` ? TKey : never
>(
    key: TActionName,
    payload?: Parameters<GetActionHandler<TAction>[TActionKey]>[1],
    options?: DispatchOptions
) => ReturnType<GetActionHandler<TAction>[TActionKey]>;

// 取所有需要生成声明的 vuex 模块及其注册的 key
type ModuleType = typeof modules;
type ModuleKey = keyof ModuleType;
type ModuleWithNameSpace = {
    [TKey in ModuleKey]: (ModuleType[TKey] & { namespaced?: boolean })['namespaced'] extends true ? TKey : never;
}[ModuleKey];

// vuex 模块具体字段类型
type ModuleField<TModuleKey extends keyof ModuleType[ModuleKey]> = {
    [TModule in ModuleKey]: ModuleType[TModule][TModuleKey];
};

// vuex 模块的 state 集合
type ModuleState = {
    [TModule in ModuleKey]: FixState<ModuleField<'state'>[TModule]>;
};

// vuex 模块的 getters 类型交叉
type Getters = ModuleField<'getters'>;
type ModuleGetters = UnionToIntersection<
    {
        [TModule in ModuleKey]: TModule extends ModuleWithNameSpace
            ? {
                  [TKey in TModule]: FixGetter<Getters[TKey]>;
              }
            : FixGetter<Getters[TModule]>;
    }[ModuleKey]
>;

// vuex 模块的 commit 类型交叉
type Mutations = ModuleField<'mutations'>;
type ModuleCommits = UnionToIntersection<
    {
        [TModule in ModuleKey]: TModule extends ModuleWithNameSpace ? FixNSCommit<Mutations[TModule], TModule> : FixCommit<Mutations[TModule]>;
    }[ModuleKey]
>;

// vuex 模块的 dispatch 类型交叉
type Actions = ModuleField<'actions'>;
type ModuleDispatch = UnionToIntersection<
    {
        [TModule in ModuleKey]: TModule extends ModuleWithNameSpace ? FixNSDispatch<Actions[TModule], TModule> : FixDispatch<Actions[TModule]>;
    }[ModuleKey]
>;

export type GlobalStore = Omit<typeof store, 'state' | 'getters' | 'commit' | 'dispatch'> & {
    state: RootStore['state'] & ModuleState;
    getters: RootStore['getters'] & ModuleGetters;
    commit: RootStore['commit'] & ModuleCommits;
    dispatch: RootStore['dispatch'] & ModuleDispatch;
};
