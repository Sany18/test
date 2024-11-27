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

  readonly rawList: BookList = { ...bookList };

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

  setFilter(filter: string = ''): void {
    if (!isNaN(+filter)) {
      this.#books.next(
        Object.keys(this.rawList)
          .filter(key => (this.rawList[key].year + '').includes(filter))
          .reduce((acc, key) => ({ ...acc, [key]: this.rawList[key] }), {})
      );

      return;
    }

    if (typeof filter === 'string') {
      this.#books.next(
        Object.keys(this.rawList)
          .filter(key => this.rawList[key].title.toLowerCase().includes(filter.toLowerCase()))
          .reduce((acc, key) => ({ ...acc, [key]: this.rawList[key] }), {})
      );

      return;
    }

    this.#books.next(this.rawList);
  }

  setList(list: BookList): void {
    this.#books.next(list);
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

  updateById(id: string, book: Partial<Book>): Observable<Book[]> {
    this.#books.next({
      ...this.booksList,
      [id]: { ...this.booksList[id], ...book }
    });

    return this.$books;
  }

  add(book: Book): Observable<Book[]> {
    this.#books.next({
      ...this.booksList,
      [book.id]: book
    });

    return this.$books;
  }
}
