(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[88332],{88332:n=>{n.exports="import {JsonPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {MaskitoDirective} from '@maskito/angular';\nimport type {MaskitoOptions} from '@maskito/core';\nimport {TuiUnmaskHandler} from '@taiga-ui/kit';\nimport {TuiInputModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [\n        ReactiveFormsModule,\n        TuiInputModule,\n        MaskitoDirective,\n        TuiUnmaskHandler,\n        JsonPipe,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly testForm = new FormGroup({\n        testValue1: new FormControl(''),\n        testValue2: new FormControl(''),\n    });\n\n    protected readonly maskOptions1: MaskitoOptions = {\n        mask: [/\\d/, /\\d/, /\\d/, /\\d/, ' ', /\\d/, /\\d/, /\\d/, /\\d/, /\\d/, /\\d/],\n    };\n\n    protected readonly maskOptions2: MaskitoOptions = {\n        mask: [\n            /\\d/,\n            /\\d/,\n            /\\d/,\n            '-',\n            /\\d/,\n            /\\d/,\n            /\\d/,\n            '-',\n            /\\d/,\n            /\\d/,\n            /\\d/,\n            '-',\n            /\\d/,\n            /\\d/,\n        ],\n    };\n\n    protected readonly unmask = (value: string): string => value.replaceAll('-', '');\n}\n"}}]);