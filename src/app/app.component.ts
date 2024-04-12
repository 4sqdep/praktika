import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {DialogComponent} from "./dialog/dialog.component";
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule, MatPaginatorIntl} from '@angular/material/paginator';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  file_name: string;
  file_autocad: string;
  smeta_pdf: string;
  smeta_excel: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Vodorod',
    weight: 1.0079,
    symbol: 'H',
    file_name: 'PDF',
    file_autocad: 'AUTOCAD',
    smeta_pdf: 'SMETA PDF',
    smeta_excel: 'SMETA EXCEL',
  },
  {
    position: 2,
    name: 'Geliy',
    weight: 4.0026,
    symbol: 'He',
    file_name: 'PDF',
    file_autocad: 'AUTOCAD',
    smeta_pdf: 'SMETA PDF',
    smeta_excel: 'SMETA EXCEL',
  },
  {
    position: 3,
    name: 'Litiy',
    weight: 6.941,
    symbol: 'Li',
    file_name: 'PDF',
    file_autocad: 'AUTOCAD',
    smeta_pdf: 'SMETA PDF',
    smeta_excel: 'SMETA EXCEL'
  },
  {
    position: 4,
    name: 'Berilliy',
    weight: 9.0122,
    symbol: 'Be',
    file_name: 'PDF',
    file_autocad: 'AUTOCAD',
    smeta_pdf: 'SMETA PDF',
    smeta_excel: 'SMETA EXCEL'
  },
  {
    position: 5,
    name: 'Bor',
    weight: 10.811,
    symbol: 'B',
    file_name: 'PDF',
    file_autocad: 'AUTOCAD',
    smeta_pdf: 'SMETA PDF',
    smeta_excel: 'SMETA EXCEL'
  },
  {
    position: 6,
    name: 'Uglerod',
    weight: 12.0107,
    symbol: 'C',
    file_name: 'PDF',
    file_autocad: 'AUTOCAD',
    smeta_pdf: 'SMETA PDF',
    smeta_excel: 'SMETA EXCEL'
  },
  {
    position: 7,
    name: 'Azot',
    weight: 14.0067,
    symbol: 'N',
    file_name: 'PDF',
    file_autocad: 'AUTOCAD',
    smeta_pdf: 'SMETA PDF',
    smeta_excel: 'SMETA EXCEL'
  },
  {
    position: 8,
    name: 'Kislorod',
    weight: 15.9994,
    symbol: 'O',
    file_name: 'PDF',
    file_autocad: 'AUTOCAD',
    smeta_pdf: 'SMETA PDF',
    smeta_excel: 'SMETA EXCEL'
  },
  {
    position: 9,
    name: 'Ftor',
    weight: 18.9984,
    symbol: 'F',
    file_name: 'PDF',
    file_autocad: 'AUTOCAD',
    smeta_pdf: 'SMETA PDF',
    smeta_excel: 'SMETA EXCEL'
  },
  {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    file_name: 'PDF',
    file_autocad: 'AUTOCAD',
    smeta_pdf: 'SMETA PDF',
    smeta_excel: 'SMETA EXCEL'
  },
];


interface TableBasicExample {
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements TableBasicExample {
  title = 'praktika1';

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'file_name',
    'file_autocad', 'smeta_pdf', 'smeta_excel', 'in_detail'];
  dataSource = ELEMENT_DATA;

  constructor(private dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "50%"
    })
  }
  handleButtonClick() {
    console.log('Button clicked!');
    // Add your button's functionality here
  }
}


