import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // We get an error "cannot read property 'push' of undefined" because "servers" is not an array, so we can't push anything to it
  // We fix this by defining servers as an array
  // servers;
  servers = [];

  onAddServer() {
    this.servers.push("Another Server");
  }

  // Now we're trying to remove the first server, but this doesn't work
  // To find the spot where it goes wrong we can use the debugger in the browser.
  // When you go to "sources" within the dev-tool you can search for you function in the "main.js" file.
  // When you found your function set breakpoints, and now it switches to your app.compnent.ts file
  // An easier way to find your function is to go to the right file. Click on "webpack://", then ".", "source", "app" amd then the right folder.
  // Now you can start debugging as usual!

  // For this error, we see that that the position is alwats +1, this is why you can't remove the first (aka position 0) in the list
  onRemoveServer(id: number) {
    // const position = id + 1;
    const position = id;
    this.servers.splice(position, 1);
  }

  // A third way to debug is via "Augury", this is an chrome extension
  // You can open it via your dev-tool and you can see all your components, you can easilly see all your depedencies , components, modules etc!

}
