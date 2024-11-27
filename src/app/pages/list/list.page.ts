import { Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { BookStorageState } from '../../services/book-storage.state'
import { MatSharedModule } from '../../modules/mat-shared.module'
import { CommonModule } from '@angular/common'
import { Book } from '../../models&types/Book.model'
import { BookInfoDetails } from '../../components/book-info-dialog/book-info.dialog'
import { MatDialog } from '@angular/material/dialog'

@Component({
  standalone: true,
  imports: [RouterOutlet, MatSharedModule, CommonModule],
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
}