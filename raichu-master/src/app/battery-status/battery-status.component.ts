import { Component, OnInit } from '@angular/core';
import { BatteryService } from '../battery.service';

@Component({
  selector: 'app-battery-status',
  templateUrl: './battery-status.component.html',
  styleUrls: ['./battery-status.component.css']
})
export class BatteryStatusComponent implements OnInit {
  batteryData: any[] = [];
  private defaultVoltages = [1.2, 1.1, 1.0]; // Example default voltages

  constructor(private batteryService: BatteryService) {}

  ngOnInit(): void {
    this.loadBatteryData();
    setInterval(() => this.loadBatteryData(), 5000); // Update data every 5 seconds
  }

  loadBatteryData(): void {
    const [voltage1, voltage2, voltage3] = this.defaultVoltages;
    this.batteryService.getBatteryPercentage(voltage1, voltage2, voltage3).subscribe(data => {
      this.batteryData = [
        { percentage: data.battery1, icon: 'fas fa-battery-full', color: this.getBatteryColor(data.battery1) },
        { percentage: data.battery2, icon: 'fas fa-battery-half', color: this.getBatteryColor(data.battery2) },
        { percentage: data.battery3, icon: 'fas fa-battery-quarter', color: this.getBatteryColor(data.battery3) }
      ];
    }, error => {
      console.error('Error fetching battery data', error);
    });
  }

  getBatteryColor(percentage: number): string {
    if (percentage < 20) return 'bg-danger';
    if (percentage < 50) return 'bg-warning';
    return 'bg-success';
  }
}
