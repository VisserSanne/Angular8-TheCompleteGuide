import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  @Output() intervalEmitter = new EventEmitter<number>();
  interval;
  lastNum = 0;

  // When starting the game, an event (holding a incrementing number) should get emitted each second (ref = setInterval())

  startGame() {
    this.interval = setInterval(() => {
      this.intervalEmitter.emit(this.lastNum + 1);
      this.lastNum++;
    }, 1000);
  }

  pauzeGame() {
    clearInterval(this.interval);
  }

  constructor() {}

  ngOnInit() {}
}
