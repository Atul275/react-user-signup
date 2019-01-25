import { getCheckBackend } from 'src/app/client/api';

export const LAYOUT_ONCHANGE = 'LAYOUT_ONCHANGE';
export const LAYOUT_ONOUTERCHANGE = 'LAYOUT_ONOUTERCHANGE';

export const onChange = (name: string, value: any) => {
    return { type: LAYOUT_ONCHANGE, payload: { 'name': name, 'value': value } };
};

export const onOuterChange = (name: string, value: any) => {
    return { type: LAYOUT_ONOUTERCHANGE, payload: { 'name': name, 'value': value } };
};

export const checkBackend = () => {
    return async (dispatch: any, getState: any) => {
        let { data } = await getCheckBackend();
        console.log(data);
    };
};
