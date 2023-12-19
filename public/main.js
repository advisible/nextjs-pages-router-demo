(() => {
    const loadScript = (src) => { const el = document.createElement('SCRIPT'); el.setAttribute('src', src); document.head.appendChild(el) }

    const publisherId = '10121724'

    window.advisible = { publisherId }

    loadScript('https://cdn.advisible.com/adk-1.18.1.js')
    loadScript('/setup.js?v=1')
})()