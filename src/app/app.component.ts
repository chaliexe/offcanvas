import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit{
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  timeOptions: string[] = [];
  dateOptions: string[] = [];


  ngOnInit() {
    this.generateTimeOptions();
    this.generateTimeOptions();
  }
  generateDateOptions() {
    const today = new Date();
    const currentDay = today.getDay();

    for (let date = new Date(today.getFullYear(), today.getMonth(), today.getDate()); date <= today; date = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())) {
      if (date.getDay() != 6 && date.getDay() != 0) {
        this.dateOptions.push(date.toDateString());
      }
    }
  }

  generateTimeOptions() {
    for (let hour = 9; hour <= 17; hour++)  {
      for (let minutes = 0; minutes < 60; minutes += 30) {
        if (hour === 17 && minutes == 0) {
          break;
        }
        const time = `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
        this.timeOptions.push(time);
      }
    }
  }
}
  

