import { Component, OnInit } from "@angular/core";
import { Artist } from "../../models/Artist";
@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.css"]
})
export class MainContentComponent implements OnInit {
  public artist = [];
  constructor() {}

  ngOnInit() {}
}
