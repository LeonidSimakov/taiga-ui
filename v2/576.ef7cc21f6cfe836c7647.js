(window.webpackJsonp=window.webpackJsonp||[]).push([[576],{rx5F:function(t,n,i){"use strict";i.r(n),n.default='<tui-combo-box\n    class="b-form"\n    [stringify]="stringify"\n    [(ngModel)]="value"\n>\n    Find the best employees\n    <input\n        tuiTextfield\n        placeholder="Type a name"\n    />\n    <tui-data-list-wrapper\n        *tuiDataList\n        [items]="items | tuiFilterByInputWith: stringify"\n        [itemContent]="stringify | tuiStringifyContent"\n    ></tui-data-list-wrapper>\n</tui-combo-box>\n'}}]);