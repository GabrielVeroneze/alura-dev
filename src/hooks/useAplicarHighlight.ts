import { useRef } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/tokyo-night-dark.css'

export const useAplicarHighlight = () => {
    const codigoRef = useRef<HTMLElement>(null)

    const aplicarHighlight = () => {
        if (codigoRef.current) {
            hljs.highlightElement(codigoRef.current)
        }
    }

    return {
        codigoRef,
        aplicarHighlight,
    }
}
