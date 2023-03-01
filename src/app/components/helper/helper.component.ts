import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.css']
})
export class HelperComponent {
  enteredText:string = '';
  productData:any[] = [];
  productDataAvailable:boolean = false;
  constructor(private helperService:HelperService){}
  whenInputEntered(val:any){
    if(this.enteredText != ''){
      this.helperService.getData().subscribe((res:any) => {
        this.productData = res;
        this.productDataAvailable = this.productData.length != 0 ? true : false;
      })
    }else{
      this.productDataAvailable = false;
    }
  }
}
