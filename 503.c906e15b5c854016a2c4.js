(window.webpackJsonp=window.webpackJsonp||[]).push([[503],{"8Def":function(n,e,a){"use strict";a.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-calendar-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCalendarExample1 {\n    value: TuiDay | null = null;\n\n    onDayClick(day: TuiDay): void {\n        this.value = day;\n    }\n}\n"}}]);