import axios from 'axios';

declare global {
    type SafeAny = any;

    type ApiReturn<T = SafeAny> = {
        code: number;
        msg: string;
        data?: T;
    };
}
