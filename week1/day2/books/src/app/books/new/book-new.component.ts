import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { BookService } from '../../services/book.service';

import { Book } from '../../book';

@Component({
  selector: 'books-book-new',
  templateUrl: './book-new.component.html'
})
export class BookNewComponent implements OnDestroy {
  book = new Book();
  sub: Subscription;

  @Output()
  newBook = new EventEmitter<Book>();

  constructor(private bookService: BookService) {}

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    console.log(this.book);

    // this.books.push(this.book);

    this.sub = this.bookService.addBook(this.book)
      .subscribe(book => {
        this.newBook.emit(book);
        this.book = new Book();
        form.reset();

      }, (response) => {
        console.log(response);
        // handle error
      });




    // this.books.push('this is not a book');

    // console.log('submitting ', this.books);
  }
}
