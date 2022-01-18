import { DataSekolah, Home, ModalData } from "../pages";



const routes = [
    {
        key: 'page-home',
        name: 'page-home',
        component: Home,
        path: '/home',
    },
    {
        key: 'page-data-sekolah',
        name: 'page-data-sekolah',
        component: DataSekolah,
        path: '/datasekolah',
    },
    {
        key: 'page-modal',
        name: 'page-modal',
        component: ModalData,
        path: '/modaldata'

    }

];

export default routes;