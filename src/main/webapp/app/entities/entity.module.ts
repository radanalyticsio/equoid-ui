import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { EquoidItemModule } from './item/item.module';
import { EquoidHandlerModule } from './handler/handler.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        EquoidItemModule,
        EquoidHandlerModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EquoidEntityModule {}
