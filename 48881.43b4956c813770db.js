(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[48881],{48881:e=>{e.exports="import {NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiHandler} from '@taiga-ui/cdk';\nimport {EMPTY_ARRAY, TuiMapperPipe} from '@taiga-ui/cdk';\nimport {TuiLabelDirective} from '@taiga-ui/core';\nimport {TuiCheckboxComponent, TuiTree} from '@taiga-ui/kit';\n\ninterface TreeNode {\n    readonly children?: readonly TreeNode[];\n    readonly text: string;\n}\n\nfunction flatten(item: TreeNode): readonly TreeNode[] {\n    return item.children\n        ? item.children.map(flatten).reduce((arr, item) => [...arr, ...item], [])\n        : [item];\n}\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent6\",\n    imports: [\n        TuiTree,\n        NgForOf,\n        TuiCheckboxComponent,\n        TuiLabelDirective,\n        FormsModule,\n        TuiMapperPipe,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected map = new Map<TreeNode, boolean>();\n\n    protected readonly data: TreeNode = {\n        text: 'Topmost',\n        children: [\n            {\n                text: 'Top level 1',\n                children: [\n                    {\n                        text: 'Another item',\n                        children: [\n                            {text: 'Next level 1'},\n                            {text: 'Next level 2'},\n                            {text: 'Next level 3'},\n                        ],\n                    },\n                ],\n            },\n            {text: 'Top level 2'},\n            {\n                text: 'Top level 3',\n                children: [{text: 'Test 1'}, {text: 'Test 2'}],\n            },\n        ],\n    };\n\n    protected readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>\n        item.children || EMPTY_ARRAY;\n\n    protected readonly getValue = (\n        item: TreeNode,\n        map: Map<TreeNode, boolean>,\n    ): boolean | null => {\n        const flat = flatten(item);\n        const result = !!map.get(flat[0]);\n\n        for (const item of flat) {\n            if (result !== !!map.get(item)) {\n                return null;\n            }\n        }\n\n        return result;\n    };\n\n    protected onChecked(node: TreeNode, value: boolean): void {\n        flatten(node).forEach(item => this.map.set(item, value));\n\n        this.map = new Map(this.map.entries());\n    }\n}\n"}}]);