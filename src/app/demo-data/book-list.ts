import { Book } from "../models&types/Book.model"
import { BookList } from "../models&types/BookList.type"

const randomcolor = () => Math.floor(Math.random() * 16777215).toString(16);

const coverGenerator = (title?: string) => `https://placehold.co/400x600/${randomcolor()}/${randomcolor()}?text=${title}`;

const about = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const rawBookList: Partial<Book>[] = [
  { title: 'The Silent Dawn', author: 'John Smith', year: 2005, id: '1', cover: '' },
  { title: 'Echoes of Tomorrow', author: 'Jane Doe', year: 2010, id: '2', cover: '' },
  { title: 'Whispers in the Wind', author: 'Emily Johnson', year: 2018, id: '3', cover: '' },
  { title: 'The Forgotten Path', author: 'Michael Brown', year: 2000, id: '4', cover: '' },
  { title: 'Shadows and Light', author: 'Laura Wilson', year: 2015, id: '5', cover: '' },
  { title: 'A Journey Beyond', author: 'Chris Taylor', year: 2021, id: '6', cover: '' },
  { title: 'Bound by Destiny', author: 'Megan Davis', year: 1999, id: '7', cover: '' },
  { title: 'The Clockwork Heart', author: 'Ethan Martinez', year: 2016, id: '8', cover: '' },
  { title: 'Fragments of Time', author: 'Sophia Anderson', year: 2008, id: '9', cover: '' },
  { title: 'Beneath the Surface', author: 'Daniel Thompson', year: 2012, id: '10', cover: '' },
  { title: 'The Eternal Flame', author: 'Emma White', year: 2003, id: '11', cover: '' },
  { title: 'Lost Horizons', author: 'Oliver Hall', year: 2019, id: '12', cover: '' },
  { title: 'Secrets of the Forest', author: 'Grace Lewis', year: 2007, id: '13', cover: '' },
  { title: 'A World Apart', author: 'Liam Allen', year: 2013, id: '14', cover: '' },
  { title: 'The Rising Storm', author: 'Ava King', year: 2020, id: '15', cover: '' },
  { title: 'Crimson Skies', author: 'Benjamin Scott', year: 2017, id: '16', cover: '' },
  { title: 'The Golden Thread', author: 'Isabella Adams', year: 2011, id: '17', cover: '' },
  { title: 'Echoes of the Past', author: 'Lucas Perez', year: 2006, id: '18', cover: '' },
  { title: 'Winds of Change', author: 'Ella Garcia', year: 2022, id: '19', cover: '' },
  { title: 'The Hidden Truth', author: 'James Moore', year: 2004, id: '20', cover: '' }
];

export const bookList: BookList = rawBookList.reduce((acc, book) => {
  const cover = coverGenerator(book.title);
  book.cover = cover;
  book.about = about;

  const TBook = new Book(book);

  return {
    ...acc,
    [TBook.id]: TBook
  }}, {} as BookList
);
