import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { StatChartComponent } from '../stat-chart/stat-chart/stat-chart.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
   CommonModule,
   MatCardModule,
   MatIconModule,
   MatTableModule,
   StatChartComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  kpis = [
    {title: 'Usuarios activos',
     value: 120,
     icon:'person' 
    },
    {title: 'Ventas hoy',
      value: '$1.250',
      icon: 'shopping_cart'      
    },
    {title: 'Visitas web',
      value: '5230',
      icon: 'visibility'      
    },
    {title: 'Tickets abiertos',
      value: '14',
      icon: 'support_agent'      
    },
  ];

  users = [
    { id: 1, nombre: 'Felipe', correo: 'felipe@correo.com' },
    { id: 2, nombre: 'Laura', correo: 'laura@correo.com' },
    { id: 3, nombre: 'Andrés', correo: 'andres@correo.com' }
  ];
  
  displayedColumns: string[] = ['id', 'nombre', 'correo'];
  
}
