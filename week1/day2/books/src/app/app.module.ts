import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BookEditComponent } from './books/edit/edit.component';
import { BookListComponent } from './books/list/list.component';
import { BookDetailComponent } from './books/detail/detail.component';
import { BookNewComponent } from './books/new/book-new.component';


@NgModule({
  declarations: [
    AppComponent,
    BookEditComponent,
    BookListComponent,
    BookDetailComponent,
    BookNewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
