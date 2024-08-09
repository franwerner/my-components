import { BreakPointsKeys, breakPointsKeys } from "@/library/ResponsiveComponent/constant/breakpoints.constant"
import useSynchronizeBreakPoint, { SyncBreakPointCallback } from "@/library/ResponsiveComponent/hooks/useSyncBreakPoint"
import { useCallback } from "react"

/**
 * @description
 * Con este hook extenemos la funcionalidad del @useSyncBreakPoint haciendo que podamos sincronizarlos
 * basandonos en los maximon y minimos definidos.
 */

interface IUseSynchronizeBreakpoint {
    maxWidth?: boolean,
    minWidth?: boolean,
    breakPoint?: BreakPointsKeys | false
}

const useSyncBreakPointWithMaxAndMin = ({ breakPoint, maxWidth, minWidth }: IUseSynchronizeBreakpoint) => {

    const listenerExtend: SyncBreakPointCallback = useCallback(({ cache, current, setNotify }) => {

        if (!breakPoint || !current) return


        if (maxWidth && minWidth) {
            if (current === breakPoint) setNotify(breakPoint)
            else if (cache === breakPoint) setNotify(false)
        } else {
            const findI = breakPointsKeys.findIndex(i => i == breakPoint)
            const filter = breakPointsKeys.filter((_, index) => {
                if (maxWidth) return index <= findI
                else if(minWidth) return index >= findI
            })
            const cacheInFilter = cache && filter.includes(cache)
            const currentInFilter = filter.includes(current)

            if (currentInFilter && !cacheInFilter) setNotify(breakPoint)
            else if (!currentInFilter && cacheInFilter) setNotify(false)
        }
    },[])


    const notify = useSynchronizeBreakPoint(listenerExtend)

    return notify

}

export default useSyncBreakPointWithMaxAndMin
