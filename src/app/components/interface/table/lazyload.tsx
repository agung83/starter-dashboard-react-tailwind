

import { memo } from "react";
import { lazyLoad } from "utils/lazyload.config";


const TableData = lazyLoad(
    () => import('./index'), (module) => module.TableData

);


export default memo(TableData);