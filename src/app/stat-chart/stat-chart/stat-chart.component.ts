import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-stat-chart',
  standalone: true,
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  templateUrl: './stat-chart.component.html',
  styleUrls: ['./stat-chart.component.scss']
})
export class StatChartComponent {
view: [number, number] = [600,300];

  data = [
    { name: 'Ventas', value: 1050 },
    { name: 'Gastos', value: 5500 },
    { name: 'Utilidad', value: 5000 }
  ];

  colorScheme = {
    name: 'myScheme',           
    selectable: true,          
    group: ScaleType.Ordinal,       
    domain: ['#8e3ff2', '#4e54c8', '#6441a5']
  };
}
