import { Component } from '@angular/core';
import { BmiCalcService } from '../../services/bmi-calc.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bmi-calc',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bmi-calc.component.html',
  styleUrl: './bmi-calc.component.css'
})
export class BmiCalcComponent {
  public result:string|null=null;
  public m:number|null=null;
  public h:number|null=null;

  constructor (private bmiCalc:BmiCalcService){

  }

  public calculate(){
  if (this.m!=null && this.h!=null){
    this.bmiCalc.sendCalculate(this.m,this.h).subscribe((data:any)=>{
      if(data.bmi <= 18.4){
        this.result='Gautas rezultatas: '+ data.bmi + ', nepakankamas svoris';
      } else if (data.bmi > 18.4 && data.bmi <= 24.9) {
        this.result='Gautas rezultatas: '+ data.bmi + ', normalus svoris';
      } else if (data.bmi > 24.9 && data.bmi <= 29.9) {
        this.result='Gautas rezultatas: '+ data.bmi + ', antsvoris';
      } else {
        this.result='Gautas rezultatas: '+ data.bmi + ', nutukimas';
      }
    });
  }
  }

}
