import { DataSekolah, Home } from "../pages";



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

];

export default routes;