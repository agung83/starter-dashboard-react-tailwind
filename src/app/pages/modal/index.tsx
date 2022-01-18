
import { Modal } from "app/components/interface"
import { DefaultLayout } from "app/components/layout"

const breadcrumb = [
    {
        name: "Home",
        url: "/home",
        now: false
    },
    {
        name: "Modal Data",
        url: "/modaldata",
        now: true,
    },
]


export const ModalData = () => {
    return (
        <DefaultLayout breadcrumb={breadcrumb} title="Data Sekolah">
            <div className="px-3 py-3">
                <Modal />
            </div>
        </DefaultLayout>
    )
}
