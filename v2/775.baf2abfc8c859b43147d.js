(window.webpackJsonp=window.webpackJsonp||[]).push([[775],{alMF:function(n,t,e){"use strict";e.r(t),t.default='<form\n    class="b-form"\n    [formGroup]="testForm"\n>\n    <p i18n>Default:</p>\n\n    <tui-input-date-time\n        formControlName="testValue"\n        timeMode="HH:MM"\n    >\n        Choose date and time\n    </tui-input-date-time>\n\n    <p i18n>With seconds:</p>\n\n    <tui-input-date-time\n        formControlName="testValue"\n        timeMode="HH:MM:SS"\n    >\n        Choose date and time\n    </tui-input-date-time>\n\n    <p i18n>With SS and MS:</p>\n\n    <tui-input-date-time\n        formControlName="testValue"\n        timeMode="HH:MM:SS.MSS"\n    >\n        Choose date and time\n    </tui-input-date-time>\n\n    <p i18n>Form value:</p>\n\n    <pre><code>{{testForm.value | json}}</code></pre>\n</form>\n'}}]);