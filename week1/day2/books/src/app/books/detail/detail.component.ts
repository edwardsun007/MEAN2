import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { BookService } from '../../services/book.service';

import { Book } from '../../book';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'books-book-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailComponent implements OnInit {
  @Input()
  book: Book;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap(params =>
        this.bookService.getBook(params.get('id'))
      )
      .subscribe(
        book => this.book = book,
        () => {
          this.router.navigate(['/books']);
        }
      );
  }

}
