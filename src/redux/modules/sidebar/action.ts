import { HIDDENSIDEBAR, SHOWSIDEBAR } from "./initialconst";


const show = () => {
    return { type: SHOWSIDEBAR }
}

const hidden = () => {
    return { type: HIDDENSIDEBAR }
}


export {
    show,
    hidden
}