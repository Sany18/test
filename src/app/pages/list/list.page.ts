import { Component, inject } from '@angular/core'
import { BookStorageState } from '../../services/book-storage.state'
import { MatSharedModule } from '../../modules/mat-shared.module'
import { CommonModule } from '@angular/common'
import { Book } from '../../models&types/Book.model'
import { BookInfoDetails } from '../../components/book-info-dialog/book-info.dialog'
import { MatDialog } from '@angular/material/dialog'
import { BookCreateEditDialog } from '../../components/book-create-edit-dialog/book-create-edit.dialog'

@Component({
  standalone: true,
  imports: [MatSharedModule, CommonModule],
  templateUrl: './list.page.html',
  styleUrl: './list.page.scss',
  providers: [BookStorageState]
})
export default class HomePage {
  dialog = inject(MatDialog);
  booksState = inject(BookStorageState);

  onDetails(book: Book) {
    this.dialog.open(BookInfoDetails, {
      data: book,
    });
  }

  onDelete(book: Book) {
    if (confirm('Are you sure you want to delete this book?')) {
      this.booksState.deleteById(book.id);
    }
  }

  onEdit(book: Book) {
    const dialogRef = this.dialog.open(BookCreateEditDialog, {
      data: book,
    });

    dialogRef.afterClosed().subscribe(updatedBook => {
      this.booksState.updateById(book.id, updatedBook);
    });
  }
}
