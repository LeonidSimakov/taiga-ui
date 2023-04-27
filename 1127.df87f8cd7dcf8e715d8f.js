(window.webpackJsonp=window.webpackJsonp||[]).push([[1127],{dwLb:function(e,n,i){"use strict";i.r(n),n.default="import {Component, Inject} from '@angular/core';\nimport {DomSanitizer} from '@angular/platform-browser';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_MOBILE} from '@taiga-ui/cdk';\nimport {TuiPdfViewerOptions, TuiPdfViewerService} from '@taiga-ui/kit';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: 'tui-pdf-viewer-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPdfViewerExample1 {\n    private readonly pdf = 'assets/media/taiga.pdf';\n\n    constructor(\n        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,\n        @Inject(TuiPdfViewerService) private readonly pdfService: TuiPdfViewerService,\n        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,\n    ) {}\n\n    /**\n     * @description:\n     * Embedded PDFs in mobile doesn't work,\n     * so you can use third-party services\n     * or your own service to render PDF in mobile iframe\n     */\n    show(actions: PolymorpheusContent<TuiPdfViewerOptions>): void {\n        this.pdfService\n            .open(\n                this.sanitizer.bypassSecurityTrustResourceUrl(\n                    this.isMobile\n                        ? `https://drive.google.com/viewerng/viewer?embedded=true&url=https://taiga-ui.dev/${this.pdf}`\n                        : this.pdf,\n                ),\n                {\n                    label: 'Taiga UI',\n                    actions,\n                },\n            )\n            .subscribe();\n    }\n}\n"}}]);