import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BookEditComponent } from './books/edit/edit.component';
import { BookListComponent } from './books/list/list.component';
import { BookDetailComponent } from './books/detail/detail.component';
import { BookNewComponent } from './books/new/book-new.component';

import { TitleizePipe } from './titleize.pipe';

import { BookService } from './services/book.service';

// TitleizePipe.skipWords = ['new', 'things'];

@NgModule({
  declarations: [
    AppComponent,
    BookEditComponent,
    BookListComponent,
    BookDetailComponent,
    BookNewComponent,
    TitleizePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    BookService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
