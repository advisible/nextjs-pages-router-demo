adk.cmd.push(() => {
    const { publisherId } = window.advisible

    adk.config()
        .addContainer('my-container', adk.container.config()
            .provider('adk.hello'))
        .addContainer('lazy-container', adk.container.config()
            .provider('adk.hello')
            .lazy())
        .apply()
        .init(publisherId)
})