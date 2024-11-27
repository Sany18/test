import { Component, inject } from "@angular/core"
import { MAT_DIALOG_DATA } from "@angular/material/dialog"
import { MatSharedModule } from "../../modules/mat-shared.module"

@Component({
  selector: 'app-book-info-dialog',
  templateUrl: 'book-info.dialog.html',
  styleUrl: 'book-info.dialog.scss',
  standalone: true,
  imports: [MatSharedModule],
})
export class BookInfoDetails {
  data = inject(MAT_DIALOG_DATA);
}
