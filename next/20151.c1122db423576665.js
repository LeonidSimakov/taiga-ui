(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[20151],{20151:e=>{e.exports="import {ChangeDetectionStrategy, Component, inject} from '@angular/core';\nimport type {SafeStyle} from '@angular/platform-browser';\nimport {DomSanitizer} from '@angular/platform-browser';\nimport {TuiButton, TuiDropdown} from '@taiga-ui/core';\nimport {TuiColorSelectorModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example2\",\n    imports: [TuiButton, TuiColorSelectorModule, TuiDropdown],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport default class Example {\n    private readonly sanitizer = inject(DomSanitizer);\n\n    protected color = '#ffdd2d';\n\n    protected get background(): SafeStyle {\n        return this.sanitizer.bypassSecurityTrustStyle(this.color);\n    }\n}\n"}}]);