import 'axios';

declare global {
    type SafeAny = any;
    type AnyObj = Record<string, SafeAny>;
    type AnyFunc = (...args: SafeAny[]) => SafeAny;
    type UnknownObj = Record<string, unknown>;

    interface ApiReturn<T = SafeAny> extends AnyObj {
        code: number;
        msg: string;
        data?: T;
    }

    /**
     * 联合类型转交叉
     * 实例如下：
     * type Demo = [ { a: string }, { b: number } ]
     * type A = Demo[number]        // 联合类型 { a: string } | { b: number }
     * type B = UnionToIntersection<A>  // 交叉类型 { a: string } & { b: number }
     */
    type UnionToIntersection<U> = (U extends SafeAny ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
}
