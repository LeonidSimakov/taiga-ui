(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[59730],{59730:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay, TuiDayRange} from '@taiga-ui/cdk';\nimport {TuiInputDateRangeModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example2\",\n    imports: [ReactiveFormsModule, TuiInputDateRangeModule],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly control = new FormControl(\n        new TuiDayRange(new TuiDay(2018, 2, 10), new TuiDay(2018, 3, 20)),\n    );\n}\n"}}]);