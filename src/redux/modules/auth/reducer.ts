import { LOGIN } from './initialconst'

const initialState = {
    isLogin: false,
};

type Action = any;




export default function reducer(state = initialState, actions: Action) {
    // console.log(actions)
    switch (actions.type) {
        case LOGIN:
            // let htmltes = (document.querySelector('html') as any)
            // htmltes.setAttribute('class', 'agung')
            return {
                ...state,
                isLogin: true
            }

        default:
            return state;
    }
}
