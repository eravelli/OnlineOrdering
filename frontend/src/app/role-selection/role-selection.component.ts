import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PopulateDropDownService } from "../populate-drop-down.service";

@Component({
  selector: "app-role-selection",
  templateUrl: "./role-selection.component.html",
  styleUrls: ["./role-selection.component.css"],
})
export class RoleSelectionComponent implements OnInit {
  // name = "";
  // setValue() {
  //   this.name = "Nancy";
  // }
  // name = new FormControl("", [
  //   Validators.required,
  //   Validators.minLength(4),
  //   Validators.maxLength(10),
  // ]);
  registerForm: FormGroup;
  roles: Array<string> = [];

  zones: Array<string> = [];

  constructor(private popService: PopulateDropDownService) {}

  ngOnInit(): void {
    this.getRoles();
    this.getZones();
  }

  getRoles(): void {
    this.roles = this.popService.getRoles();
  }

  getZones(): void {
    this.zones = this.popService.getZones();
  }
}
