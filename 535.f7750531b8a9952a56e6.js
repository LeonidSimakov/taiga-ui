(window.webpackJsonp=window.webpackJsonp||[]).push([[535],{tUIY:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-checkbox-block-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCheckboxBlockExample1 {\n    testForm = new FormGroup({\n        testValue1: new FormControl(false),\n        testValue2: new FormControl(false),\n        testValue3: new FormControl(false),\n    });\n}\n"}}]);