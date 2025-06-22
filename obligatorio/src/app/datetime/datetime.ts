import { CommonModule } from '@angular/common';
import { Component, NgZone, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-datetime',
  imports: [CommonModule],
  templateUrl: './datetime.html',
  styleUrl: './datetime.css'
})
export class Datetime implements OnDestroy{

  today: Date = new Date();
  timer: any

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.timer = setInterval(() => {
        this.ngZone.run(() => {
          this.today = new Date()
        })
      }, 1000)
    })
  }

  ngOnDestroy(): void {
    clearInterval(this.timer)
  }
}
