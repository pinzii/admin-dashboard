import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule
  ],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {

  reports = [
    { tipo: 'Ventas - Marzo', fecha: '2025-04-20', estado: 'Completado' },
    { tipo: 'Usuarios activos', fecha: '2025-04-18', estado: 'Pendiente' },
    { tipo: 'Soporte técnico', fecha: '2025-04-17', estado: 'Completado' },
    { tipo: 'Errores sistema', fecha: '2025-04-15', estado: 'Fallido' }
  ];
  
  displayedColumns: string[] = ['tipo', 'fecha', 'estado'];
  
}
