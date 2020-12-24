import { Injectable } from "@angular/core";
import { RoleSelectionComponent } from "./role-selection/role-selection.component";

@Injectable({
  providedIn: "root",
})
export class PopulateDropDownService {
  roles: Array<string> = [
    "Market Manager",
    "Market Viewer",
    "Promotion Manager",
    "System Administrator",
    "Zone Administrator",
  ];

  zones: Array<string> = [
    "LATIN AMERICA",
    "FRANCE",
    "GERMANY",
    "ASIA",
    "EUROPE",
    "US",
  ];

  constructor() {}

  getRoles(): Array<string> {
    return this.roles;
  }

  getZones(): Array<string> {
    return this.zones;
  }
}
