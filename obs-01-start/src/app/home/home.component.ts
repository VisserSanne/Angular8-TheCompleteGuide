import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval, Subscription, Observable, Observer } from "rxjs";
import { map, filter } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubcription: Subscription;
  private secondObsSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // every ... (time) an event happens this event gives an observable, so you can subscribe to it
    // this observable doesn't stop automatically, so it's not just that you will not get the values
    // you're not interested in. When you go to another page it will continue counting.
    // When you go to home again it will start another one.
    // You stop this by setting it in a variable and then destroy it after.
    this.firstObsSubcription = interval(1000).subscribe(count => {
      // console.log(count);
    });

    // This is what actually happens in the background!
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
          // Whenever the observable is completed it is destroyed immediatly. No other values are emitted
        }
        if (count >= 3) {
          // When you throw an error it automatically destroys the observable
          observer.error(new Error("Count is greater than 3!"));
        }
        count++;
      }, 1000);
    });

    this.secondObsSubscription = customIntervalObservable
      .pipe(
        // Filter needs to return true or false, so whether we're continuing to the next step
        filter(data => {
          return data > 0;
        }),
        map((data: number) => {
          return "Round: " + (data + 1);
        })
      )
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
          alert(error.message);
        },
        // This will not be called when an error occured
        () => {
          console.log("Completed!");
        }
      );
  }

  ngOnDestroy() {
    this.firstObsSubcription.unsubscribe();
    // When you have a completed observable you don't necessarily have to unsubscribe because it's already destroyed.
    // If you're uncertain then you can always add it.
    this.secondObsSubscription.unsubscribe();
  }
}
