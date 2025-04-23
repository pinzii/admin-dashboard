import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
   CommonModule,
   MatCardModule,
   MatIconModule
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
}
