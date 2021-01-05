
import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { PopulateDropDownService } from "../populate-drop-down.service";
import {PromtionServicesService} from "../promtion-services.service";
import {roleandzones} from "../roleandzones";
import { from } from "rxjs";



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

  selectedzone: any;
  selectedRole: any;

  rolezone: any;
  

  constructor(private popService: PopulateDropDownService, private service: PromtionServicesService,private http:HttpClient) {}

  

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

  selectChangeHandler(event: any) {
    //update the ui
    this.selectedzone = event.target.value;
  //console.log(this.selectedzone);
}
selectChangeRoleHandler(event: any){
  this.selectedRole = event.target.value;
}
public submitClick(selectedzone: string,selectedRole: string){
   this.rolezone = new roleandzones(selectedzone,selectedRole);
   let resp=this.service.submit(this.rolezone);
   resp.subscribe((data)=>this.rolezone=data);
      
}
}
