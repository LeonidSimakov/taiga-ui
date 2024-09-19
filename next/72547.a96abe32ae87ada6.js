(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[72547],{72547:n=>{n.exports="@import '@taiga-ui/core/styles/taiga-ui-local';\n\n:host {\n    inline-size: 100%;\n    color: var(--tui-text-primary);\n    background: var(--tui-background-base);\n    font-family: monospace;\n    table-layout: fixed;\n\n    tr:not(:first-child) {\n        border-top: 1px solid var(--tui-border-normal);\n    }\n\n    td {\n        padding: 1.5rem 0.5rem;\n\n        &:last-child {\n            color: var(--tui-text-secondary);\n            padding-right: 0;\n        }\n    }\n}\n\n.circle {\n    text-align: center;\n}\n\n.demo {\n    position: relative;\n    display: inline-flex;\n    inline-size: 3rem;\n    block-size: 3rem;\n    border-radius: 100%;\n    overflow: hidden;\n    box-shadow: inset 0 0 0 1px var(--tui-border-normal);\n}\n\n.name {\n    .transition(color);\n\n    position: relative;\n    display: inline-block;\n    min-block-size: 2rem;\n    background: var(--tui-background-base-alt);\n    border-radius: var(--tui-radius-m);\n    padding: 0.25rem 0.75rem;\n    box-sizing: border-box;\n\n    &:hover {\n        color: transparent;\n\n        .copy {\n            opacity: 1;\n        }\n    }\n}\n\n.value {\n    position: relative;\n    inline-size: fit-content;\n    margin-right: 1rem;\n    padding: 1rem 0.75rem;\n    overflow-wrap: break-word;\n    text-align: center;\n}\n\n.copy {\n    .transition(opacity);\n\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: var(--tui-background-base-alt);\n    opacity: 0;\n    inline-size: 100%;\n    block-size: 100%;\n    min-block-size: 2rem;\n\n    ::ng-deep button {\n        position: absolute;\n        top: 0;\n        left: 0;\n        block-size: 100%;\n        inline-size: 100%;\n    }\n\n    &:hover {\n        opacity: 1;\n    }\n}\n"}}]);