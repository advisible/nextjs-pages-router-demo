import { ReactNode, useCallback, useContext, useRef } from 'react'
import { AdkContext } from './AdkContext'

interface TypedWindow extends Window {
    adk: AdkInstance
}

const win = globalThis.window as unknown as TypedWindow

type Props = {
    children: ReactNode
}

export const AdkProvider = ({ children }: Props) => {
    const reloadableContainers = useRef<ReloadableContainer[]>([])

    const reloadContainers = useCallback((reloadOptions?: ReloadOptions) => {
        let containersToBeReloaded: ReloadableContainer[]

        if (reloadOptions === undefined) {
            containersToBeReloaded = reloadableContainers.current
        } else {
            const { reloadId, containerId } = reloadOptions

            containersToBeReloaded = reloadableContainers.current.filter((c) => {
                let reloadIdIsMatching: boolean
                if (c.reloadId === null || reloadId === undefined) {
                    reloadIdIsMatching = false
                } else {
                    reloadIdIsMatching = Array.isArray(reloadId)
                        ? reloadId.includes(c.reloadId)
                        : (c.reloadId === reloadId)
                }

                let containerIdIsMatching: boolean
                const { adkContainer } = c.element.dataset
                if (containerId === undefined || adkContainer === undefined) {
                    containerIdIsMatching = false
                } else {
                    containerIdIsMatching = Array.isArray(containerId)
                        ? containerId.includes(adkContainer)
                        : (adkContainer === containerId)
                }

                return reloadIdIsMatching || containerIdIsMatching
            })
        }

        containersToBeReloaded.forEach(({ element }) => {
            win.adk.container.reload(element)
        })
    }, [])

    const registerReloadableContainer = useCallback((container: ReloadableContainer) => {
        reloadableContainers.current.push(container)
    }, [])

    const unregisterReloadableContainer = useCallback((container: ReloadableContainer) => {
        reloadableContainers.current = reloadableContainers.current.filter((c) => c !== container)
    }, [])

    const attachContainer = useCallback((elementRef: HTMLDivElement) => {
        win.adk.cmd.push(() => {
            win.adk.container.attach(elementRef)
        })
    }, [])

    const detachContainer = useCallback((elementRef: HTMLDivElement) => {
        win.adk.container && win.adk.container.detach(elementRef)
    }, [])

    return (
        <AdkContext.Provider value={{
            reloadContainers,
            registerReloadableContainer,
            unregisterReloadableContainer,
            attachContainer,
            detachContainer,
        }}>
            {children}
        </AdkContext.Provider>
    )
}

export const useAdk = () => {
    const context = useContext(AdkContext)

    if (!context) {
        throw new Error('Cannot call useAdk() or use AdkContainer component outside of AdkProvider')
    }

    return context
}
