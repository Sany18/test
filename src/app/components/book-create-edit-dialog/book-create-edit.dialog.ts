import { Component, inject } from "@angular/core"
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog"
import { MatSharedModule } from "../../modules/mat-shared.module"
import { CommonModule } from "@angular/common"
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"
import { Book } from "../../models&types/Book.model"
import { MatDatepicker } from "@angular/material/datepicker"

@Component({
  selector: 'app-book-create-edit-dialog',
  styleUrl: 'book-create-edit.dialog.scss',
  templateUrl: 'book-create-edit.dialog.html',
  standalone: true,
  imports: [MatSharedModule, CommonModule, ReactiveFormsModule],
  providers: [
  ]
})
export class BookCreateEditDialog {
  data = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef);

  form = new FormGroup({
    title: new FormControl(this.data.title, Validators.required),
    author: new FormControl(this.data.author, Validators.required),
    year: new FormControl(new Date(this.data.year, 0, 1), Validators.required),
    cover: new FormControl(this.data.cover, Validators.required),
    about: new FormControl(this.data.about, Validators.required),
  });

  onClose() {
    this.form.reset();
    this.dialogRef.close();
  }

  chosenYearHandler(normalizedYear: Date, datepicker: MatDatepicker<Date>) {
    const year = normalizedYear.getFullYear();
    this.form.get('year')?.setValue(new Date(year, 0, 1));
    datepicker.close();
  }

  selectImage(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      this.form.get('cover')?.setValue(url);
    }
  }

  onSave() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const year = this.form.get('year')?.value as Date;
    const yearNumber = new Date(year).getFullYear();
    const nextData = {
      ...this.data,
      ...this.form.getRawValue(),
      year: yearNumber
    };

    this.dialogRef.close(new Book(nextData));
  }
}
