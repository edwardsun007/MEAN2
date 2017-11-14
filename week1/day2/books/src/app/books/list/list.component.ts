import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {Book } from '../../book';
import { BOOKS } from '../../data/book-data';

@Component({
  selector: 'books-book-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class BookListComponent implements OnInit {
  books: Array<Book> = BOOKS;
  selectedBook: Book;

  constructor() { }

  ngOnInit() {
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

}
