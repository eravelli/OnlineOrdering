import { stringify } from "@angular/compiler/src/util";
import { NoSsr } from "@material-ui/core";

export class roleandzones{
    role: string;
    zone: string;
    
    constructor(selectedzone: string, 
        selectedrole: string
           ){
            this.zone = selectedzone;
        this.role = selectedrole;
        
    }
}