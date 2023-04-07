import {Component} from '@angular/core';

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html'
})
export class ServerComponent{
    serverName = ""
    serverId : number = 10;
    serverStatus : string = 'offline';
    allowNewServer = false;
    serverCreationStatus = "No server created!";
    constructor(){
        setTimeout(()=>{this.allowNewServer=true},2000);
    }
   
    onCreateServer(){
        this.serverCreationStatus = "New Server Created!"
    }
   
    onUpdateServerName(event:any){
        console.log(event);
        this.serverName=event.target.value;
    }
}