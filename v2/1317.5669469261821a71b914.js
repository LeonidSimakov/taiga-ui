(window.webpackJsonp=window.webpackJsonp||[]).push([[1317],{"Zca+":function(e,n,t){"use strict";t.r(n),n.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiSheetService} from '@taiga-ui/addon-mobile';\nimport {TuiDestroyService} from '@taiga-ui/cdk';\nimport {EMPTY, Observable, Subject} from 'rxjs';\nimport {first, retry, switchMap, takeUntil} from 'rxjs/operators';\n\n@Component({\n    selector: `tui-sheet-example-1`,\n    templateUrl: `./index.html`,\n    providers: [TuiDestroyService],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSheetExample1 {\n    readonly stream$ = new Subject();\n\n    constructor(\n        @Inject(TuiDestroyService) destroy$: Observable<unknown>,\n        @Inject(TuiSheetService) service: TuiSheetService,\n    ) {\n        this.stream$\n            .pipe(\n                switchMap((_, i) =>\n                    i % 2\n                        ? EMPTY\n                        : service.open(`Simple sheet`, {overlay: true}).pipe(first()),\n                ),\n                retry(),\n                takeUntil(destroy$),\n            )\n            .subscribe();\n    }\n}\n"}}]);