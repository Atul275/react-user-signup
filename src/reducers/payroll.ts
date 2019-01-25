import { PayRoll } from '../model';

const initialState: PayRoll = {
    isLogin: false
};

const RESET = 'app/RESET';

export const reset = (payload: any) => ({ type: RESET, payload });

type Action = { type: String; payload: any };

export default function rootReducer(state: any = initialState, action: Action) {
    switch (action.type) {
         case RESET:
             return { ...state, ...action.payload };
        default:
            return state;
    }
}
