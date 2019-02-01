//AppComponent is the component thet controls the shell of ther app.
//The shell contains all the elemt of the page

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Tour of Heroes";
}
