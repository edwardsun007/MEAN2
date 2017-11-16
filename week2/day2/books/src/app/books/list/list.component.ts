import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Book } from '../../book';
import { BOOKS } from '../../data/book-data';

import { TitleizePipe } from '../../titleize.pipe';

@Component({
  selector: 'books-book-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [TitleizePipe],
})
export class BookListComponent implements OnInit {
  books: Array<Book> = BOOKS;
  selectedBook: Book;

  constructor(private titleize: TitleizePipe) { }

  ngOnInit() {
    this.books.forEach(book => {
      book.author = this.titleize.transform(book.author);
    });
  }

  onSelect(book: Book): void {
    // this.selectedBook = book;
    this.selectedBook = this.selectedBook === book ? null : book;
    // if (this.selectedBook === book) {
    //   // do something
    //   this.selectedBook = null;
    // } else {
    //   this.selectedBook = book;
    // }
  }

  addBook(book: Book): void {
    console.log('adding book', book);

    this.books.push(book);
  }

}
