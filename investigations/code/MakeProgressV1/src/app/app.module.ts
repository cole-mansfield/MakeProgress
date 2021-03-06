import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WheelsPage } from '../pages/wheels/wheels';
import { TemplatesPage } from '../pages/templates/templates';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AddwheelPage } from '../pages/addwheel/addwheel';
import { AddtemplatePage } from '../pages/addtemplate/addtemplate';

@NgModule({
  declarations: [
    MyApp,
    WheelsPage,
    TemplatesPage,
    TabsPage,
    AddwheelPage,
    AddtemplatePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WheelsPage,
    TemplatesPage,
    TabsPage,
    AddwheelPage,
    AddtemplatePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
