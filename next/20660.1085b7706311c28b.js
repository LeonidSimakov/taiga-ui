(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[20660],{20660:e=>{e.exports="import {AsyncPipe, NgForOf} from '@angular/common';\nimport {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiLegendItem, TuiRingChart} from '@taiga-ui/addon-charts';\nimport {TuiAmountPipe} from '@taiga-ui/addon-commerce';\nimport {tuiPure, tuiSum} from '@taiga-ui/cdk';\nimport {TuiAlertService, tuiFormatNumber, TuiIcon, TuiNotification} from '@taiga-ui/core';\nimport {TuiCheckbox} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example2\",\n    imports: [\n        AsyncPipe,\n        NgForOf,\n        TuiAmountPipe,\n        TuiCheckbox,\n        TuiIcon,\n        TuiLegendItem,\n        TuiNotification,\n        TuiRingChart,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    private readonly alerts = inject(TuiAlertService);\n    private enabled = new Array(5).fill(true);\n\n    protected readonly data = [13769, 12367, 10172, 3018, 2592];\n    protected readonly sum = tuiSum(...this.data);\n    protected readonly labels = ['Axes', 'Faxes', 'Taxes', 'Saxes', 'Other'];\n\n    protected get value(): readonly number[] {\n        return this.getValue(this.data, this.enabled);\n    }\n\n    protected isEnabled(index: number): boolean {\n        return this.enabled[index];\n    }\n\n    protected toggle(index: number): void {\n        this.enabled = this.enabled.map((value, i) => (i === index ? !value : value));\n    }\n\n    protected onClick(index: number): void {\n        if (this.isEnabled(index)) {\n            this.alerts\n                .open(`Category spending: ${tuiFormatNumber(this.data[index] ?? 0)} ₽`, {\n                    label: this.labels[index],\n                })\n                .subscribe();\n        } else {\n            this.toggle(index);\n        }\n    }\n\n    @tuiPure\n    private getValue(\n        data: readonly number[],\n        enabled: readonly number[],\n    ): readonly number[] {\n        return data.map((value, index) => (enabled[index] ? value : 0));\n    }\n}\n"}}]);