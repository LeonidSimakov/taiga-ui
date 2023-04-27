(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{"06Vu":function(n,e,a){"use strict";a.r(e),e.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TuiDay,\n    TuiDayLike,\n    TuiDayRange,\n    TuiMonth,\n    tuiPure,\n    TuiStringHandler,\n} from '@taiga-ui/cdk';\nimport {TUI_MONTHS} from '@taiga-ui/core';\nimport {Observable} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\n// @dynamic\n@Component({\n    selector: 'tui-line-days-chart-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLineDaysChartExample1 {\n    range = new TuiDayRange(\n        TuiDay.currentLocal(),\n        TuiDay.currentLocal().append({year: 1}),\n    );\n\n    readonly maxLength: TuiDayLike = {month: 12};\n\n    readonly xStringify$: Observable<TuiStringHandler<TuiDay>> = this.months$.pipe(\n        map(\n            months =>\n                ({month, day}) =>\n                    `${months[month]}, ${day}`,\n        ),\n    );\n\n    constructor(\n        @Inject(TUI_MONTHS) private readonly months$: Observable<readonly string[]>,\n    ) {}\n\n    get value(): ReadonlyArray<[TuiDay, number]> {\n        return this.computeValue(this.range);\n    }\n\n    @tuiPure\n    computeLabels$({from, to}: TuiDayRange): Observable<readonly string[]> {\n        return this.months$.pipe(\n            map(months =>\n                Array.from(\n                    {length: TuiMonth.lengthBetween(from, to) + 1},\n                    (_, i) => months[from.append({month: i}).month],\n                ),\n            ),\n        );\n    }\n\n    readonly yStringify: TuiStringHandler<number> = y =>\n        `${(10 * y).toLocaleString('en-US', {maximumFractionDigits: 0})} $`;\n\n    @tuiPure\n    private computeValue({from, to}: TuiDayRange): ReadonlyArray<[TuiDay, number]> {\n        return new Array(TuiDay.lengthBetween(from, to) + 1)\n            .fill(0)\n            .reduce<ReadonlyArray<[TuiDay, number]>>(\n                (array, _, i) => [\n                    ...array,\n                    [\n                        from.append({day: i}),\n                        (i ? array[i - 1][1] : 100) + Math.random() * 10 - 5,\n                    ],\n                ],\n                [],\n            );\n    }\n}\n"}}]);