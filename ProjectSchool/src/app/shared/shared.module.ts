import { NgModule } from '@angular/core';
import { ToolbarTitleComponent } from './components/toolbar-title/toolbar-title.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule
  ],
  declarations: [
    ToolbarTitleComponent
  ],
  exports: [
    ToolbarTitleComponent
  ]
})
export class SharedModule { }
