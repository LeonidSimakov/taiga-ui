(window.webpackJsonp=window.webpackJsonp||[]).push([[519],{USzq:function(e,n,t){"use strict";t.r(n),n.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiPaymentSystem} from '@taiga-ui/addon-commerce';\n\n@Component({\n    selector: 'tui-card-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCardExample3 {\n    readonly paymentSystem = TuiPaymentSystem.Mir;\n    readonly brandLogo = 'https://ng-web-apis.github.io/dist/assets/images/web-api.svg';\n}\n"}}]);