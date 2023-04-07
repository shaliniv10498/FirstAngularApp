import {Component} from '@angular/core'
@Component({
    selector : 'app-user',
    templateUrl : './user.component.html'
})
export class UserLoginComponent{
  
   username : string = "";
   buttonDisabled = true;
   
   onFormSubmission=()=>{
      if(this.username != "" && this.username != null){
         console.log(this.username);
         this.username="";
         
      }
      this.buttonDisabled=true;
   }

   onChangeofTextFieldData=(event)=>{
    if(event.target.value != "" && event.target.value != null){
        this.buttonDisabled=false;
     }
   }
}

