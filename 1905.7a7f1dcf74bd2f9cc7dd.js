(window.webpackJsonp=window.webpackJsonp||[]).push([[1905],{HGGC:function(n,t,e){"use strict";e.r(t),t.default='```html\n<table\n  tuiTable\n  [columns]="columns"\n>\n  <thead tuiThead>\n    <tr tuiThGroup>\n      <th\n        *tuiHead="\'name\'"\n        tuiTh\n      >\n        Name\n      </th>\n      <th\n        *tuiHead="\'email\'"\n        tuiTh\n      >\n        E-mail\n      </th>\n      <th\n        *tuiHead="\'status\'"\n        tuiTh\n      >\n        Status\n      </th>\n      <th\n        *tuiHead="\'tags\'"\n        tuiTh\n        [sorter]="null"\n      >\n        Tags\n      </th>\n    </tr>\n  </thead>\n  <tbody tuiTbody>\n    <tr\n      *ngFor="let item of users | tuiTableSort"\n      tuiTr\n    >\n      <td\n        *tuiCell="\'name\' of item; let value"\n        tuiTd\n      >\n        {{value}}\n      </td>\n      <td\n        *tuiCell="\'email\' of item; let value"\n        tuiTd\n      >\n        <a\n          *ngIf="value"\n          tuiLink\n          [href]="\'mailto:\' + value"\n        >\n          {{value}}\n        </a>\n      </td>\n      <td\n        *tuiCell="\'status\' of item; let value"\n        tuiTd\n      >\n        <div [class]="value">{{value}}</div>\n      </td>\n      <td\n        *tuiCell="\'tags\' of item; let tags"\n        tuiTd\n      >\n        <tui-tag\n          *ngFor="let tag of tags"\n          class="tui-space_right-1"\n          [value]="tag"\n          [autoColor]="true"\n        ></tui-tag>\n      </td>\n    </tr>\n  </tbody>\n</table>\n```\n'}}]);