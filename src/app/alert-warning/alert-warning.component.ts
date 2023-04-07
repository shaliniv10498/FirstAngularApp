import { Component } from "@angular/core";

@Component({
    selector:'alert-warning',
    template:
    `<p>Hi Shalini, This is a warning!</p>
    `,
    styles:[
        `
         p {
             color : red;
             margin-left :20px;
             margin-right:20px;
             border : 1px solid red;
             background-color:mistyrose;
             padding:20px;
         }
        `
    ]
    
})
export class WarningComponent{

}