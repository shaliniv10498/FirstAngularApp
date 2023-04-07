import { Component } from "@angular/core";

@Component({
    selector:'success',
    template : 
    `
    <p>This is a success msg</p>
    `,
    styles:[
        `
         p  {
             color:green;
             margin-left:2px;
             margin-right : 2px;
             padding :10px;
             background-color : 'lightgreen';
             border : 1px solid green 
         }
        `
    ]
})
export class SuccessComponent{

}