import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PeoplesService } from './services/peoples.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PeoplesComponent } from './components/peoples/peoples.component';
import { UpdateComponent } from './components/update/update.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateService } from './services/update.service';
import { RegisterService } from './services/register.service';

const appRoutes: Routes = [
  {
    path: '',
    component: PeoplesComponent
  },
  {
    path: 'peoples',
    component: PeoplesComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PeoplesComponent,
    UpdateComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    PeoplesService,
    UpdateService,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
