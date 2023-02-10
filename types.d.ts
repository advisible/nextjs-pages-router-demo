type AdkContext = {
    reloadContainers: (reloadOptions?: ReloadOptions) => void
    registerReloadableContainer: (container: ReloadableContainer) => void
    unregisterReloadableContainer: (container: ReloadableContainer) => void
    attachContainer: (elementRef: HTMLDivElement) => void
    detachContainer: (elementRef: HTMLDivElement) => void
}

type ReloadOptions = {
    reloadId: string | string[]
    containerId?: string | string[]
} | {
    reloadId?: string | string[]
    containerId: string | string[]
}

type ReloadableContainer = {
    element: HTMLDivElement;
    reloadId: string | null;
}
