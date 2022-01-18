import { memo } from "react";
import { lazyLoad } from "utils/lazyload.config";


const ModalData = lazyLoad(
    () => import('./index'), (module) => module.ModalData
);


export default memo(ModalData)