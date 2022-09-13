(window.webpackJsonp=window.webpackJsonp||[]).push([[1919],{"8WI2":function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiAssert} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-miscellaneous-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMiscellaneousExample1 {\n    get assertResult(): string {\n        const dayOfWeek = new Date().getDay();\n        const isFriday = dayOfWeek === 5;\n\n        tuiAssert.assert(isFriday, `Today is not a friday`);\n\n        return isFriday\n            ? `Nothing in console`\n            : `There is a console assert: 'Today is not a friday'`;\n    }\n}\n"}}]);