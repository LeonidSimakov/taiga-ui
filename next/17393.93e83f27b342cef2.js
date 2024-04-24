(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[17393],{17393:n=>{n.exports="import {JsonPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TuiComboBoxModule,\n    TuiDataListWrapperModule,\n    TuiFilterByInputPipeModule,\n    TuiStringifyContentPipeModule,\n} from '@taiga-ui/kit';\n\ninterface Dictionary {\n    readonly id: number;\n    readonly name: string;\n}\n\nconst DICTIONARY: Dictionary[] = [\n    {id: 1, name: 'Luke Skywalker'},\n    {id: 2, name: 'Princess Leia'},\n    {id: 3, name: 'Darth Vader'},\n    {id: 4, name: 'Han Solo'},\n    {id: 5, name: 'Obi-Wan Kenobi'},\n    {id: 6, name: 'Yoda'},\n];\n\n@Component({\n    standalone: true,\n    imports: [\n        JsonPipe,\n        ReactiveFormsModule,\n        TuiComboBoxModule,\n        TuiDataListWrapperModule,\n        TuiStringifyContentPipeModule,\n        TuiFilterByInputPipeModule,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly control = new FormControl(3);\n    protected readonly items = DICTIONARY.map(({id}) => id);\n    protected readonly stringify = (id: number): string =>\n        DICTIONARY.find(item => item.id === id)?.name || '';\n}\n"}}]);