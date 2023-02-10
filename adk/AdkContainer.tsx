import { useEffect, useRef } from 'react'
import { useAdk } from './useAdk'

type Props = {
    id: string
    reloadable?: boolean | string
}

export const AdkContainer = ({ id, reloadable }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { attachContainer, detachContainer, registerReloadableContainer, unregisterReloadableContainer } = useAdk()

    useEffect(() => {
        const { current } = containerRef
        if (!current) return

        attachContainer(current)
        return () => detachContainer(current)
    }, [attachContainer, detachContainer])

    useEffect(() => {
        const { current } = containerRef
        if (!current || !reloadable) return

        const reloadId = typeof reloadable === 'string' ? reloadable : null
        const reloadableContainer = { element: current, reloadId }

        registerReloadableContainer(reloadableContainer)

        return () => {
            unregisterReloadableContainer(reloadableContainer)
        }
    }, [reloadable, registerReloadableContainer, unregisterReloadableContainer])

    return (
        <div data-adk-container={id} ref={containerRef} />
    )
}