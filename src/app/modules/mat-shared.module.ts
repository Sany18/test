import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSortModule } from '@angular/material/sort';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';

const matModules = [
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSortModule,
  MatTreeModule,
  MatCardModule,
  MatChipsModule,
  MatInputModule,
  MatInputModule,
  MatTableModule,
  MatRadioModule,
  MatBadgeModule,
  MatSelectModule,
  MatDialogModule,
  MatButtonModule,
  MatSliderModule,
  MatRippleModule,
  MatToolbarModule,
  MatDividerModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatGridListModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule,
]

@NgModule({
  imports: [
    CommonModule,
    ...matModules,
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [
    ...matModules,
  ]
})
export class MatSharedModule {}
