import { Component, OnInit } from "@angular/core";
import * as flashlight from "nativescript-flashlight";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    toggleFlashlight() {
        if (!flashlight.isAvailable()) {
            alert("Sorry, flashlight is not available.")
            return
        }
        flashlight.toggle();
    }

}
