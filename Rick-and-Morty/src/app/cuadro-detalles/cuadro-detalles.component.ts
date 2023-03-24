import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
/*@Component({
  selector: 'app-cuadro-detalles',
  templateUrl: './cuadro-detalles.component.html',
  styleUrls: ['./cuadro-detalles.component.css']
})
*/
export interface DialogData {
  
}

export class CuadroDetallesComponent {
  

  constructor(public dialog: MatDialog) {}

}
