import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { MatSharedModule } from './modules/mat-shared.module'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { BookStorageState } from './services/book-storage.state'
import { debounceTime } from 'rxjs'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSharedModule, ReactiveFormsModule],
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  cdr = inject(ChangeDetectorRef);
  booksState = inject(BookStorageState);

  search = new FormControl('');

  ngOnInit() {
    this.search.valueChanges
      .pipe(debounceTime(300))
      .subscribe(filterValue => {
        this.booksState.setFilter(filterValue || '');
        this.cdr.detectChanges();
      });
  }
}
