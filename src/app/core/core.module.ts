import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MessagesComponent } from './components/messages/messages.component';
import { MaterialModule } from '../material/material.module';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

const COMPONENTES = [ MessagesComponent, ToolbarComponent ]
const MODULES = [ FlexLayoutModule, MaterialModule ]

@NgModule({
  declarations: [ COMPONENTES ],
  imports: [
    CommonModule,
    MODULES,
    RouterModule
  ],
  exports: [
    COMPONENTES,
    MODULES,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import this module in the AppModule.')
    }
  }
}
