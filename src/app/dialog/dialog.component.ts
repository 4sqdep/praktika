import {Component, OnInit} from '@angular/core';
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
import {FormBuilder, FormsModule, Validators,} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatCalendarCellCssClasses} from '@angular/material/datepicker'
import {MatRadioModule} from '@angular/material/radio';
import {ApiService} from "../services/api.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";


interface Food {
  value: string;
  viewValue: string;
}

interface Construction {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    HttpClientModule,
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
    MatRadioModule,
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
  providers: [provideNativeDateAdapter(), HttpClient],

})
export class DialogComponent implements OnInit {
  projectForm!: FormGroup;
  favoriteSeason: string;
  seasons: string[] = ['Oybek', 'Hasan', 'Erkin', 'MuhammadSodiq'];

  constructor(private formBuilder: FormBuilder, private api: ApiService) {
    this.favoriteSeason = ''
  }


  foods: Food[] = [
    {value: '145-60-41-0', viewValue: '145-60-41'},
    {value: '145-60-42-1', viewValue: '145-60-42'},
    {value: '145-60-43-2', viewValue: '145-60-43'},
    {value: '145-60-44-3', viewValue: '145-60-44'},
  ];
  construction: Construction[] = [
    {value: 'chotqol', viewValue: 'Chotqol'},
    {value: 'piskom', viewValue: 'Piskom'},
    {value: 'chorvoq', viewValue: 'Chorvoq'},
    {value: 'quyipiskom', viewValue: 'Quyi Piskom'},
  ]

  selectedFood = this.foods[0].value;
  selectedConstruction = this.construction[0].value;



  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  dateClass(date: Date): MatCalendarCellCssClasses{
    return (date.getDay() === 0 || date.getDay() === 6) ? 'weekend-date' : '';
  }

  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      projectName: ["", Validators.required],
      objectName: ["", Validators.required],
      documentName: ["", Validators.required],
      selectCalendar: ["", Validators.required],
      commentName: ["", Validators.required],
      buildername: ["", Validators.required],
    })
  }

  addProject() {
    console.log(this.projectForm.value  )
  }

}
