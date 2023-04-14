(window.webpackJsonp=window.webpackJsonp||[]).push([[1080],{"8ajj":function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_DEFAULT_MATCHER, TuiBooleanHandler, tuiPure} from '@taiga-ui/cdk';\n\nconst ITEMS: readonly string[] = [\n    'Luke Skywalker',\n    'Leia Organa Solo',\n    'Darth Vader',\n    'Han Solo',\n    'Obi-Wan Kenobi',\n    'Yoda',\n];\n\n@Component({\n    selector: 'tui-multi-select-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMultiSelectExample1 {\n    search: string | null = '';\n\n    readonly control = new FormControl([ITEMS[0]]);\n\n    @tuiPure\n    filter(search: string | null): readonly string[] {\n        return ITEMS.filter(item => TUI_DEFAULT_MATCHER(item, search || ''));\n    }\n\n    tagValidator: TuiBooleanHandler<string> = tag => !tag.startsWith('Han');\n}\n"}}]);