(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[39163],{39163:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiItemDirective, TuiRepeatTimes} from '@taiga-ui/cdk';\nimport {\n    TuiButtonDirective,\n    TuiDataList,\n    TuiDropdownModule,\n    TuiLink,\n} from '@taiga-ui/core';\nimport {TuiBreadcrumbsComponent, tuiBreadcrumbsOptionsProvider} from '@taiga-ui/kit';\nimport {TuiInputNumberModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [\n        FormsModule,\n        TuiBreadcrumbsComponent,\n        TuiDropdownModule,\n        TuiDataList,\n        TuiInputNumberModule,\n        TuiRepeatTimes,\n        TuiLink,\n        TuiButtonDirective,\n        TuiItemDirective,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        tuiBreadcrumbsOptionsProvider({\n            icon: 'tuiIconArrowRight',\n            size: 'l',\n        }),\n    ],\n})\nexport default class Example {\n    protected readonly items = [\n        {\n            caption: 'Open Source',\n            link: 'https://github.com',\n        },\n        {\n            caption: 'Angular',\n            link: 'https://github.com/topics/angular',\n        },\n        {\n            caption: 'Tinkoff',\n            link: 'https://github.com/tinkoff',\n        },\n        {\n            caption: 'Taiga UI',\n            link: 'https://github.com/taiga-family/taiga-ui',\n        },\n        {\n            caption: 'Components',\n            link: 'https://taiga-ui.dev',\n        },\n        {\n            caption: 'Breadcrumbs',\n            link: 'https://taiga-ui.dev/navigation/breadcrumbs',\n        },\n    ];\n\n    protected max = 4;\n}\n"}}]);