"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[30954],{30954:e=>{e.exports="import {TuiEditorAttachedFile} from '@taiga-ui/addon-editor';\nimport {forkJoin, Observable} from 'rxjs';\nimport {finalize} from 'rxjs/operators';\n\nimport {FileIoService} from './filesio.service';\n\nexport function fileLoader(\n    service: FileIoService,\n): (files: File[]) => Observable<TuiEditorAttachedFile[]> {\n    return (files: File[]) => {\n        service.loading$.next(true);\n\n        return forkJoin(files.map(file => service.upload(file))).pipe(\n            finalize(() => service.loading$.next(false)),\n        );\n    };\n}\n"}}]);