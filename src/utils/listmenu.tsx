
import {
    CogIcon,
    HomeIcon,
    CalendarIcon,
    DatabaseIcon,
    UserAddIcon,
    CheckCircleIcon,
    ChevronDoubleDownIcon,
    FolderAddIcon,
    BookOpenIcon,
    ViewListIcon,
    InboxInIcon
} from '@heroicons/react/outline'

const ListMenu = [
    {
        name: "Dashboard",
        icon: HomeIcon,
        uri: '/home'
    },
    {
        name: "Manajamen",
        icon: CogIcon,
        uri: '/datasekolah'
    },
    {
        name: "Schedule",
        icon: CalendarIcon,
        uri: '/datasekolah'
    },
    {
        name: "Data Sekolah",
        icon: DatabaseIcon,
        uri: '/datasekolah'
    },
    {
        name: "Siswa",
        icon: UserAddIcon,
        uri: '/datasekolah'
    },
    {
        name: "Verifikasi",
        icon: CheckCircleIcon,
        uri: '/datasekolah'
    },
    {
        name: "Perangkingan",
        icon: ChevronDoubleDownIcon,
        uri: '/datasekolah'
    },
    {
        name: "Pangkalan Data",
        icon: FolderAddIcon,
        uri: '/datasekolah'
    },
    {
        name: "Laporan",
        icon: BookOpenIcon,
        uri: '/datasekolah'
    },
    {
        name: "Daftar Ulang",
        icon: ViewListIcon,
        uri: '/datasekolah'
    },
    {
        name: "Inbox",
        icon: InboxInIcon,
        uri: '/datasekolah'
    },


]


export default ListMenu;