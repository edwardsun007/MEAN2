 import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Book } from '../../book';

@Component({
  selector: 'books-book-new',
  templateUrl: './book-new.component.html'
})
export class BookNewComponent {
  book = new Book();

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    console.log(this.book);

    // this.books.push(this.book);

    this.book = new Book();

    form.reset();

    // this.books.push('this is not a book');

    // console.log('submitting ', this.books);
  }
}
