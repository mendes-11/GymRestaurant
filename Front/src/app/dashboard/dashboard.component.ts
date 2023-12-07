import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [
    CommonModule, 
    NgChartsModule,
  ],
})
export class DashboardComponent {

  public chartType: ChartType = 'bar';
  public chartDatasets: ChartConfiguration['data']['datasets'] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 79, 85, 87, 80, 89], label: 'Vendas' },
  ];
  public chartLabels: string[] = [
    'Janeiro', 
    'Fevereiro', 
    'Março', 
    'Abril', 
    'Maio', 
    'Junho', 
    'Julho', 
    'Agosto', 
    'Setembro', 
    'Outubro', 
    'Novembro',
    'Dezembro',
  ];
  public chartOptions: ChartConfiguration['options'] = {
    responsive: true
  };


  public secondChartType: ChartType = 'line';
  public secondChartDatasets: ChartConfiguration['data']['datasets'] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 79, 85, 87, 80, 89], label: 'Vendas' }
  ];
  public secondChartLabels: string[] = [
    'Janeiro', 
    'Fevereiro', 
    'Março', 
    'Abril', 
    'Maio', 
    'Junho', 
    'Julho', 
    'Agosto', 
    'Setembro', 
    'Outubro', 
    'Novembro',
    'Dezembro',

  ];
  public secondChartOptions: ChartConfiguration['options'] = {
    responsive: true
  };
}

