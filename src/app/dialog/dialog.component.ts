import { Component } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule,} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatCalendarCellCssClasses} from '@angular/material/datepicker'

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatFormFieldModule,
    MatIcon,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    MatDatepickerModule,
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
  providers: [provideNativeDateAdapter()]
})
export class DialogComponent {
  foods: Food[] = [
    {value: '145-60-41-0', viewValue: '145-60-41'},
    {value: '145-60-42-1', viewValue: '145-60-42'},
    {value: '145-60-43-2', viewValue: '145-60-43'},
    {value: '145-60-44-3', viewValue: '145-60-44'},
  ];
  selectedFood = this.foods[2].value;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  dateClass(date: Date): MatCalendarCellCssClasses{
    return (date.getDay() === 0 || date.getDay() === 6) ? 'weekend-date' : '';
  }
}
