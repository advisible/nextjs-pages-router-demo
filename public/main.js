(() => {
    const el = document.createElement('SCRIPT');
    el.setAttribute('src', 'https://cdn.advisible.com/adk-1.20.15.js');
    document.head.appendChild(el)

    adk.cmd.push(() => {
        adk.config()
            .addContainer('does-not-reload', adk.container.config()
                .provider('adk.hello')
                .params({
                    text: 'I do not reload'
                }))
            .addContainer('reloads', adk.container.config()
                .provider('adk.hello')
                .params({
                    text: 'I reload'
                }))
            .apply()
            .init(/* your publisher id */)
    })
})()
