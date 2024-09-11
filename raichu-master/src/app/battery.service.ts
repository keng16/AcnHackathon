import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatteryService {

  private batteryUrl = 'http://localhost:8080/api/battery-status';
  private temperatureUrl = 'http://localhost:8080/api/temperature-status';
  private batteryStatusUrl = 'http://localhost:8080/status';

  constructor(private http: HttpClient) { }

  // Fetch battery data
  getBatteryStatus(): Observable<any> {
    return this.http.get(this.batteryUrl);
  }

  // Fetch temperature data
  getTemperatureStatus(): Observable<any> {
    return this.http.get(this.temperatureUrl);
  }

  getBatteryPercentage(voltage1: number, voltage2: number, voltage3: number): Observable<any> {
    let params = new HttpParams()
      .set('voltage1', voltage1.toString())
      .set('voltage2', voltage2.toString())
      .set('voltage3', voltage3.toString());

    return this.http.get<any>(this.batteryStatusUrl, { params });
  }
}
