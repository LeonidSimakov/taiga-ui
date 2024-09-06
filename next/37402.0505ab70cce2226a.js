(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[37402],{37402:n=>{n.exports="import {I18nPluralPipe, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiInputRangeModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example3\",\n    imports: [\n        I18nPluralPipe,\n        NgSwitch,\n        NgSwitchCase,\n        NgSwitchDefault,\n        ReactiveFormsModule,\n        TuiInputRangeModule,\n    ],\n    templateUrl: './index.html',\n    styles: [\n        `\n            tui-input-range {\n                max-width: 30rem;\n            }\n        `,\n    ],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly control = new FormControl([0, 7]);\n\n    // See https://angular.io/api/common/I18nPluralPipe\n    protected readonly pluralize = {\n        '=0': 'days later',\n        '=1': 'day later',\n        other: 'days later',\n    };\n}\n"}}]);