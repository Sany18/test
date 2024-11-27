import { v4 } from 'uuid';

export class Book {
  id: string;
  year: number;
  title: string;
  cover: string;
  about: string;
  author: string;

  constructor(data: Partial<Book>) {
    this.id ||= data.id || v4()
    this.year = data.year || 1970;
    this.title = data.title || '';
    this.cover = data.cover || '';
    this.about = data.about || '';
    this.author = data.author || '';
  }
}
