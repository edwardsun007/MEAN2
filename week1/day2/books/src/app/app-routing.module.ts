import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './books/list/list.component';
import { BookNewComponent } from './books/new/book-new.component';
import { BookDetailComponent } from './books/detail/detail.component';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    children: [
      // /books
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: BookListComponent,
      },
      {
        // /books/new
        path: 'new',
        component: BookNewComponent
      },
      {
        path: ':id',
        component: BookDetailComponent
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
