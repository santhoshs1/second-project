import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'second-project';

  
}
class Spacecraft {
  
  milesPerKilometer=0.62;
  name="delhi";
  speedMph=80;
  

  getDaysToLocation(kilometersAway:number):number{
    
    let mileAway:number=kilometersAway*this.milesPerKilometer;
    let hours:number=mileAway/this.speedMph;
    return hours/24;
    
  }

}
console.log(Spacecraft);

  
  

  
  
  


    
  
