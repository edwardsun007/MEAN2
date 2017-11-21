import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Book } from '../../book';

import { BookService } from '../../services/book.service';

import { TitleizePipe } from '../../titleize.pipe';

@Component({
  selector: 'books-book-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [TitleizePipe],
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Array<Book> = [];
  selectedBook: Book;
  errorMessage: string;
  sub: Subscription;

  constructor(
    private titleize: TitleizePipe,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.sub = this.bookService.getBooks()
      .subscribe(books => {
        this.books = books;
        // this.titleCaseAuthors();
      },
      (response) => {
        console.log('there was an error!');
      }
    );

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
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

  titleCaseAuthors(): void {
    this.books.forEach(book => {
      book.author = this.titleize.transform(book.author);
    });
  }

  deleteBook(book: Book): void {
    this.bookService.deleteBook(book)
      .subscribe(deletedBook => {
        console.log(deletedBook);

        this.books.splice(this.books.indexOf(book), 1);

        if (this.selectedBook === book) {
          this.onSelect(book);
        }
      },

    (response) => {
      console.log('there was an error', response);

      this.errorMessage = response.json();
    });
  }

  onEvent(event: Event): void {
    event.stopPropagation();
  }

  addBook(book: Book) {
    console.log('adding a book', book);

    this.books.push(book);
  }

}
