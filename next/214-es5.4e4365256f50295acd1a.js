(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{x6kq:function(e,n,t){"use strict";t.r(n),n.default='<div class="wrapper">\n    <tui-ring-chart\n        [value]="value"\n        [content]="content"\n        [(activeItemIndex)]="activeItemIndex"\n    ></tui-ring-chart>\n\n    <ng-template #content>\n        <tui-money [singleColor]="true" [value]="sum"></tui-money>\n        <div>Total</div>\n    </ng-template>\n\n    <div class="legend">\n        <tui-legend-item\n            *ngFor="let label of labels; let index = index"\n            size="s"\n            class="item"\n            [color]="getColor(index)"\n            [text]="label"\n            [active]="isItemActive(index)"\n            (tuiHoveredChange)="onHover(index, $event)"\n        >\n            <tui-money [singleColor]="true" [value]="value[index]"></tui-money>\n        </tui-legend-item>\n    </div>\n</div>\n'}}]);