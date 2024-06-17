(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[88333],{88333:n=>{n.exports="import {AsyncPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport type {AbstractControl} from '@angular/forms';\nimport {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';\nimport {RouterLink} from '@angular/router';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {DemoRoute} from '@demo/routes';\nimport {TuiErrorComponent, TuiLabelDirective, TuiLink} from '@taiga-ui/core';\nimport {TuiFieldErrorPipe} from '@taiga-ui/kit';\nimport {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\nimport {distinctUntilChanged} from 'rxjs';\n\nconst latinChars = /^[a-zA-Z]+$/;\n\nexport function passwordValidator(field: AbstractControl): Validators | null {\n    return field.value && latinChars.test(field.value)\n        ? null\n        : {\n              other: 'Only latin letters are allowed',\n          };\n}\n\nexport function superComputerValidator(field: AbstractControl): Validators | null {\n    return field.value === '42'\n        ? null\n        : {\n              other: 'Wrong',\n          };\n}\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [\n        ReactiveFormsModule,\n        TuiLabelDirective,\n        TuiInputModule,\n        TuiTextfieldControllerModule,\n        TuiErrorComponent,\n        TuiFieldErrorPipe,\n        AsyncPipe,\n        RouterLink,\n        TuiLink,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly routes = DemoRoute;\n    protected readonly testValue1 = new FormControl('', [\n        Validators.required,\n        passwordValidator,\n    ]);\n\n    protected readonly testValue3 = new FormControl('', [\n        Validators.required,\n        passwordValidator,\n    ]);\n\n    protected readonly testForm = new FormGroup(\n        {\n            testValue1: this.testValue1,\n            testValue2: new FormControl('', [\n                Validators.required,\n                superComputerValidator,\n            ]),\n        },\n        control =>\n            Object.values((control as FormGroup).controls).every(({valid}) => valid)\n                ? null\n                : {other: 'Form is invalid'},\n    );\n\n    constructor() {\n        this.testValue1.valueChanges.pipe(distinctUntilChanged()).subscribe(() => {\n            this.testValue1.markAsTouched();\n        });\n    }\n}\n"}}]);