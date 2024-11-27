import { Injectable } from '@angular/core';

import { Book } from '../models&types/Book.model'
import { BehaviorSubject, map, Observable } from 'rxjs'
import { BookList } from '../models&types/BookList.type'
import { bookList } from '../demo-data/book-list'

@Injectable({
  providedIn: 'root'
})
export class BookStorageState {
  #books = new BehaviorSubject<BookList>(bookList);

  get booksList(): BookList {
    return this.#books.value;
  }

  get $booksList(): Observable<BookList> {
    return this.#books
  }

  get books(): Book[] {
    return Object.values(this.booksList);
  }

  get $books(): Observable<Book[]> {
    return this.#books
      .pipe(map(books => Object.values(books)))
  }

  deleteById(id: string): Observable<Book[]> {
    this.#books.next(
      Object.keys(this.booksList)
        .filter(key => key !== id)
        .reduce((acc, key) => ({ ...acc, [key]: this.booksList[key] }), {})
    );

    return this.$books;
  }

  getById(id: string): Observable<Book> {
    return this.#books.pipe(
      map(books => books[id])
    );
  }
}
