import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MyApp } from './app.component';

// Third party modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectSearchableModule } from '@app/pages/modals/ionic-select-searchable';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { MomentModule } from 'ngx-moment';

// Custom Modules
import {
  TabsMainPage,
  Tab1Page,
  Tab2Page,
  Tab3Page
} from '@app/pages/general';

import {
  ExampleModal
} from '@app/pages/modals';

import {
  ApiService,
  AuthService
} from '@app/services';

@NgModule({
  declarations: [
    MyApp,
    TabsMainPage,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    ExampleModal
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    SelectSearchableModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsMainPage,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    ExampleModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientModule,
    ApiService,
    AuthService
  ]
})
export class AppModule {}
