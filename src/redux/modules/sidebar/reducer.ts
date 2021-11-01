import { SHOWSIDEBAR, HIDDENSIDEBAR } from './initialconst'

const initialState = {
    status: 'none',
};

type Action = any;

export default function reducer(state = initialState, actions: Action) {
    // console.log(actions)

    switch (actions.type) {
        case SHOWSIDEBAR:
            return {
                status: 'block'
            }
        case HIDDENSIDEBAR:
            return {
                status: 'none'
            }

        default:
            return state;
    }
}
