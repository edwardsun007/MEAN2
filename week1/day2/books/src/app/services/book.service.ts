import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Http } from '@angular/http';

import { BOOKS } from '../data/book-data';
import { Book } from '../book';

// Angular 5+
// import { map } from 'rxjs/operators';

// Angular 4 | 5
import 'rxjs/add/operator/map';


@Injectable()
export class BookService {
  // private base = 'http://59498bce6d49df0011102cfc.mockapi.io/books';
  private base = '/api/books';

  constructor(private http: Http) {}

  getBooks(): Observable<Book[]> {
    return this.http.get(this.base)
      .map(response => response.json());

  }

  getBook(id: string): Observable<Book> {
    return this.http.get(`${ this.base }/${ id }`)
      .map(response => response.json());
  }

  addBook(book: Book): Observable<Book> {
    console.log('adding book', book);
    return this.http.post(this.base, book)
      .map(response => response.json());
  }

  deleteBook(book: Book): Observable<Book> {
    return this.http.delete(`${ this.base }/${ book._id }`)
      .map(response => response.json());
  }

}
