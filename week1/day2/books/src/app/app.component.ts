import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  books: Array<Book> = [];
  book = new Book();


  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    console.log(this.book);

    this.books.push(this.book);

    this.book = new Book();

    form.reset();

    // this.books.push('this is not a book');

    console.log('submitting ', this.books);
  }
}
