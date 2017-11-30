import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CookieModule } from 'ngx-cookie';


import { AppComponent } from './app.component';
import { BookEditComponent } from './books/edit/edit.component';
import { BookListComponent } from './books/list/list.component';
import { BookDetailComponent } from './books/detail/detail.component';
import { BookNewComponent } from './books/new/book-new.component';
import { NavComponent } from './nav/nav.component';

import { TitleizePipe } from './titleize.pipe';

import { BookService } from './services/book.service';
import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register/register.component';

// TitleizePipe.skipWords = ['new', 'things'];

@NgModule({
  declarations: [
    AppComponent,
    BookEditComponent,
    BookListComponent,
    BookDetailComponent,
    BookNewComponent,
    TitleizePipe,
    NavComponent,
    NotFoundComponent,
    HomeComponent,
    RegisterComponent,
  ],
  imports: [
    CookieModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    BookService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
