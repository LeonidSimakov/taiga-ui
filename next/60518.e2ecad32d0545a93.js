(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[60518],{60518:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiIcon, TuiTitle, TuiTooltip} from '@taiga-ui/core';\nimport {TuiAvatar, TuiBlock, TuiCheckboxComponent, TuiSwitch} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [\n        ReactiveFormsModule,\n        TuiAvatar,\n        TuiTooltip,\n        TuiIcon,\n        TuiBlock,\n        TuiCheckboxComponent,\n        TuiTitle,\n        TuiSwitch,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly testForm = new FormGroup({\n        testValue1: new FormControl(false),\n        testValue2: new FormControl(false),\n        testValue3: new FormControl(false),\n        testValue4: new FormControl(false),\n    });\n}\n"}}]);