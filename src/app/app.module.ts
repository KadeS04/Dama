import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ConfigService } from './config/config.service';
@NgModule({
  imports:      [ 
    BrowserModule, 
    HttpClientModule,
    FormsModule, 
  ],
  declarations: [ 
    AppComponent, 
    TopBarComponent,
  ],
  bootstrap:    [ 
    AppComponent, 
  ]
})
export class AppModule { }


