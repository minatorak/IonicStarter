import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ButtonListPage} from "../pages/button-list/button-list";
import {ActionSheetComponent} from "../components/action-sheet/action-sheet";
import {CustomComponent} from "../components/custom/custom";
import {SecondPage} from "../pages/second/second";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ButtonListPage,
    ActionSheetComponent,
    CustomComponent,
    SecondPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ButtonListPage,
    SecondPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
