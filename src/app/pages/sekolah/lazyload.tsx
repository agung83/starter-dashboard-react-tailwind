import { memo } from "react";
import { lazyLoad } from "utils/lazyload.config";


const DataSekolah = lazyLoad(
    () => import('./index'), (module) => module.DataSekolah
);


export default memo(DataSekolah)