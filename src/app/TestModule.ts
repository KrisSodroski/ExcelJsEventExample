import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { OfficeHelper, OfficeService } from './OfficeService';
import { Addin } from './Pages/Addin/Addin';
import { Main } from './Pages/Main/Main';
import { Root } from './Root';

const routes: Routes = [
  { path: '', component: Main },
  { path: 'Addin', component: Addin },
];

@NgModule({
  declarations: [
    Root,
    Main,
    Addin
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: OfficeHelper.LoadOffice,
      multi: true,
      deps: [OfficeService]
    }
  ],
  bootstrap: [Root],
  entryComponents: [Root, Main, Addin]
})
export class TestModule { }
