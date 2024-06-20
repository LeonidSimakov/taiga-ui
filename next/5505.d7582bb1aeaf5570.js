(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5505],{5505:e=>{e.exports="import {NgForOf, TitleCasePipe} from '@angular/common';\nimport {ChangeDetectionStrategy, Component, inject} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {TuiDataList, TuiFlagPipe} from '@taiga-ui/core';\nimport type {TuiCountryIsoCode, TuiLanguageName} from '@taiga-ui/i18n';\nimport {TuiLanguageSwitcherService} from '@taiga-ui/i18n';\nimport {TuiSelectModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    selector: 'tui-language-switcher',\n    imports: [\n        ReactiveFormsModule,\n        TuiDataList,\n        NgForOf,\n        TitleCasePipe,\n        TuiFlagPipe,\n        TuiSelectModule,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class TuiLanguageSwitcher {\n    protected readonly switcher = inject(TuiLanguageSwitcherService);\n    protected readonly language = new FormControl(capitalize(this.switcher.language));\n\n    public readonly flags = new Map<TuiLanguageName, TuiCountryIsoCode>([\n        ['belarusian', 'BY'],\n        ['chinese', 'CN'],\n        ['dutch', 'NL'],\n        ['english', 'GB'],\n        ['french', 'FR'],\n        ['german', 'DE'],\n        ['italian', 'IT'],\n        ['kazakh', 'KZ'],\n        ['malay', 'MY'],\n        ['polish', 'PL'],\n        ['portuguese', 'PT'],\n        ['russian', 'RU'],\n        ['spanish', 'ES'],\n        ['turkish', 'TR'],\n        ['ukrainian', 'UA'],\n        ['vietnamese', 'VN'],\n    ]);\n\n    public readonly names: TuiLanguageName[] = Array.from(this.flags.keys());\n}\n\nfunction capitalize(value: string): string {\n    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;\n}\n"}}]);