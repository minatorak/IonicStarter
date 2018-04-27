import {NgModule} from '@angular/core';
import {ActionSheetComponent} from './action-sheet/action-sheet';
import {CustomComponent} from './custom/custom';

@NgModule({
  declarations: [
    ActionSheetComponent,
    CustomComponent
  ],
  imports: [],
  exports: [
    ActionSheetComponent,
    CustomComponent
  ]
})
export class ComponentsModule {
}
