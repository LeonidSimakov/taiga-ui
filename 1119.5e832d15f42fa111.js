(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1119],{1119:t=>{t.exports='<tui-select [(ngModel)]="value">\n    Country\n    <cdk-virtual-scroll-viewport\n        *tuiDataList\n        appendOnly\n        tuiScrollable\n        class="scroll"\n        [itemSize]="44"\n    >\n        <tui-data-list>\n            <button\n                *cdkVirtualFor="let item of countries"\n                tuiOption\n                type="button"\n                [value]="item"\n            >\n                {{ item }}\n            </button>\n        </tui-data-list>\n    </cdk-virtual-scroll-viewport>\n</tui-select>\n'}}]);