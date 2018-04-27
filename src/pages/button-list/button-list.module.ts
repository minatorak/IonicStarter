import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ButtonListPage } from './button-list';

@NgModule({
  declarations: [
    ButtonListPage,
  ],
  imports: [
    IonicPageModule.forChild(ButtonListPage),
  ],
})
export class ButtonListPageModule {}
