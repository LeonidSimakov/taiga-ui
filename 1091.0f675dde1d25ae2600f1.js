(window.webpackJsonp=window.webpackJsonp||[]).push([[1091],{vF5f:function(e,n,t){"use strict";t.r(n),n.default="import {\n    ChangeDetectorRef,\n    Component,\n    Inject,\n    Optional,\n    Self,\n    ViewChild,\n} from '@angular/core';\nimport {NgControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {AbstractTuiControl, TuiNativeFocusableElement} from '@taiga-ui/cdk';\nimport {\n    TuiPrimitiveTextfieldComponent,\n    tuiPrimitiveTextfieldOptionsProvider,\n} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-primitive-textfield-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    providers: [\n        tuiPrimitiveTextfieldOptionsProvider({\n            iconCleaner: 'tuiIconChevronUp',\n        }),\n    ],\n})\nexport class TuiPrimitiveTextfieldExample2 extends AbstractTuiControl<string> {\n    @ViewChild(TuiPrimitiveTextfieldComponent)\n    private readonly textfield?: TuiPrimitiveTextfieldComponent;\n\n    constructor(\n        @Optional()\n        @Self()\n        @Inject(NgControl)\n        control: NgControl | null,\n        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,\n    ) {\n        super(control, changeDetectorRef);\n    }\n\n    get nativeFocusableElement(): TuiNativeFocusableElement | null {\n        return this.computedDisabled || !this.textfield\n            ? null\n            : this.textfield.nativeFocusableElement;\n    }\n\n    get focused(): boolean {\n        return !!this.textfield && this.textfield.focused;\n    }\n\n    onValueChange(textValue: string): void {\n        this.updateValue(textValue);\n    }\n\n    onFocused(focused: boolean): void {\n        this.updateFocused(focused);\n    }\n\n    protected getFallbackValue(): string {\n        return '';\n    }\n}\n"}}]);