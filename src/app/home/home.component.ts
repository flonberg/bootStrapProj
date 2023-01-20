import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model: NgbDateStruct | undefined;
	date: { year: number; month: number; } | undefined;
  constructor(private calendar: NgbCalendar) { }

  ngOnInit(): void {
  }
  selectToday() {
		this.model = this.calendar.getToday();
	}
}
