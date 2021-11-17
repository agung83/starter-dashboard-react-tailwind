
import { TableData } from "app/components/interface"
import { DefaultLayout } from "app/components/layout"

const breadcrumb = [
    {
        name: "Home",
        url: "/home",
        now: false
    },
    {
        name: "Data Sekolah",
        url: "/datasekolah",
        now: true,
    },
]


export const DataSekolah = () => {
    return (
        <DefaultLayout breadcrumb={breadcrumb} title="Data Sekolah">
            <div className="px-3 py-3">
                <TableData />
            </div>
        </DefaultLayout>
    )
}
