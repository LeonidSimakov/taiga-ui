(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[26763],{26763:e=>{e.exports="import {NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiHovered} from '@taiga-ui/cdk';\nimport {TuiBadge, TuiPresent} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [NgIf, TuiBadge, TuiHovered, TuiPresent],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected counterCSS = 0;\n\n    protected counterIf = 0;\n\n    protected hovered = false;\n\n    protected onHovered(hovered: boolean): void {\n        this.hovered = hovered;\n    }\n\n    protected onCSS(visible: boolean): void {\n        this.counterCSS += visible ? 1 : -1;\n    }\n\n    protected onIf(visible: boolean): void {\n        this.counterIf += visible ? 1 : -1;\n    }\n}\n"}}]);