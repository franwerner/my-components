import { useEffect, useState } from "react";


interface IUseKeyBoard {
    isActive?: boolean //ayudamos a que se evite el uso cuando el componente donde es utilizado no esta activo.
    type?: "keydown" | "keypress" | "keyup"
    action?: () => void
    key?: string
    code?: string
    altKey?: boolean
    shiftKey?: boolean
    ctrlKey?: boolean
    getState?: boolean
    preventDefault?: boolean
}

interface State {
    timeStamp: number,
    key: string,
    code: string
}

 const useKeyboard = ({
    type = "keydown",
    action,
    key = "",
    code,
    isActive,
    altKey,
    ctrlKey,
    shiftKey,
    getState,//Esto solo servira  para cuando queremos actualizar la UI al momento de presionar una tecla.
    preventDefault
}: IUseKeyBoard) => {


    const [keyInfo, setKeyInfo] = useState<State>()

    useEffect(() => {

        if (!isActive) return

        const processAction = (e: KeyboardEvent) => {

            preventDefault && e.preventDefault()

            if (altKey && !e.altKey || ctrlKey && !e.ctrlKey || shiftKey && !e.shiftKey) return

            if ((e.key.toLowerCase()) == key.toLowerCase() || e.code == code) {
                getState && setKeyInfo({ timeStamp: Date.now(), key: e.key, code: e.code })
                typeof action === "function" && action()

            }
        }

        window.addEventListener(type, processAction)

        return () => {
            window.removeEventListener(type, processAction)
        }

    }, [isActive])

    return { keyInfo }

};

export type {IUseKeyBoard}
export default useKeyboard