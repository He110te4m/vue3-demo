import '';

declare global {
    type SafeAny = any;
    type AnyObj = Record<string, SafeAny>;
    type AnyFunc = (...args: SafeAny[]) => SafeAny;

    interface ApiReturn<T = SafeAny> extends AnyObj {
        code: number;
        msg: string;
        data?: T;
    }
}
