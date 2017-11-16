import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { Book } from '../../book';

@Component({
  selector: 'books-book-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailComponent {
  @Input()
  book: Book;
}
