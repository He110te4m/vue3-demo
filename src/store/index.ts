import { createStore } from 'vuex';
import { rootStore } from './root/store';

export const store =  createStore(rootStore);
