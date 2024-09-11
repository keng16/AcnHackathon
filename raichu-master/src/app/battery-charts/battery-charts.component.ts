import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { BatteryService } from '../battery.service'; // Import the service

@Component({
  selector: 'app-battery-charts',
  templateUrl: './battery-charts.component.html',
  styleUrls: ['./battery-charts.component.css']
})
export class BatteryChartsComponent implements OnInit {

  constructor(private batteryService: BatteryService) { }

  batteryChart: any;
  temperatureChart: any;

  ngOnInit(): void {
    this.createCharts();
    this.updateCharts();
    // Update the charts every 5 seconds
    setInterval(() => {
      this.updateCharts();
    }, 5000);
  }

  createCharts(): void {
    // Battery Chart
    const batteryCanvas = document.getElementById('batteryChart') as HTMLCanvasElement;
    if (batteryCanvas) {
      const batteryCtx = batteryCanvas.getContext('2d');
      if (batteryCtx) {
        this.batteryChart = new Chart(batteryCtx, {
          type: 'line',
          data: {
            labels: [], // X-axis labels (time)
            datasets: [
              {
                label: 'Battery 1 (V)',
                borderColor: 'red',
                borderWidth: 2,
                fill: false,
                data: [] // Y-axis data for Battery 1
              },
              {
                label: 'Battery 2 (V)',
                borderColor: 'blue',
                borderWidth: 2,
                fill: false,
                data: [] // Y-axis data for Battery 2
              },
              {
                label: 'Battery 3 (V)',
                borderColor: 'orange',
                borderWidth: 2,
                fill: false,
                data: [] // Y-axis data for Battery 3
              }
            ]
          },
          options: {
            scales: {
              x: { /* axis options */ },
              y: { /* axis options */ }
            },
            plugins: { /* plugin options */ }
          }
        });
      }
    }

    // Temperature Chart
    const tempCanvas = document.getElementById('temperatureChart') as HTMLCanvasElement;
    if (tempCanvas) {
      const tempCtx = tempCanvas.getContext('2d');
      if (tempCtx) {
        this.temperatureChart = new Chart(tempCtx, {
          type: 'line',
          data: {
            labels: [], // X-axis labels (time)
            datasets: [
              {
                label: 'Temperature (C)',
                borderColor: 'black',
                borderWidth: 2,
                fill: false,
                data: [] // Y-axis data for Temperature
              }
            ]
          },
          options: {
            scales: {
              x: { /* axis options */ },
              y: { /* axis options */ }
            },
            plugins: { /* plugin options */ }
          }
        });
      }
    }
  }

  updateCharts(): void {
    // Fetch battery data and update the chart
    this.batteryService.getBatteryStatus().subscribe(data => {
      const timestamp = new Date().toLocaleTimeString();
      this.batteryChart.data.labels.push(timestamp);
      this.batteryChart.data.datasets[0].data.push(data.battery1);
      this.batteryChart.data.datasets[1].data.push(data.battery2);
      this.batteryChart.data.datasets[2].data.push(data.battery3);
      this.batteryChart.update();
    });

    // Fetch temperature data and update the chart
    this.batteryService.getTemperatureStatus().subscribe(data => {
      const timestamp = new Date().toLocaleTimeString();
      this.temperatureChart.data.labels.push(timestamp);
      this.temperatureChart.data.datasets[0].data.push(data.temperature);
      this.temperatureChart.update();
    });
  }
}
