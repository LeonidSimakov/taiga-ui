(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{"T+kw":function(o,n,e){"use strict";e.r(n),n.default="import {CommonModule} from '@angular/common';\nimport {NgModule} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {TuiMoneyModule} from '@taiga-ui/addon-commerce';\nimport {TuiAutoFocusModule} from '@taiga-ui/cdk';\nimport {\n    TuiButtonModule,\n    TuiDataListModule,\n    TuiTextfieldControllerModule,\n} from '@taiga-ui/core';\nimport {TuiDataListWrapperModule, TuiInputModule, TuiSelectModule} from '@taiga-ui/kit';\n\nimport {DialogExampleComponent} from './dialog-example.component';\n\n@NgModule({\n    imports: [\n        CommonModule,\n        FormsModule,\n        TuiButtonModule,\n        TuiSelectModule,\n        TuiInputModule,\n        TuiMoneyModule,\n        TuiTextfieldControllerModule,\n        TuiDataListModule,\n        TuiDataListWrapperModule,\n        TuiAutoFocusModule,\n    ],\n    declarations: [DialogExampleComponent],\n    exports: [DialogExampleComponent],\n    entryComponents: [DialogExampleComponent], // for stackblitz\n})\nexport class DialogExampleModule {}\n"}}]);