import { Component } from '@angular/core';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {

  public courses : any = ['Engg', "BTech Agri", "MCS", "MSC"];

  public allData:any;

  public fn:any;
  public ln:any;
  public el:any;
  public cor:any;
  public gen:any;
  public ps:any;
  public cps:any;
  public idd:any;

  
  constructor(private api: ServiceService){
    this.getAllData();
  }

  onSubmitData(data:any){
    console.log(data.value);
    this.api.addData(data.value).subscribe(
      ((res:any)=>{
        console.log(res);
        this.getAllData();
      }),
      ((err:any)=>{
        console.log(err);
      })
    )
  }

  getAllData(){
    this.api.getData().subscribe(
      ((res:any)=>{
        console.log(res);
        this.allData = res;
      }),
      ((err:any)=>{
        console.log(err);
      })
    )
  }

  onDel(data:any){
    console.log(data);
    this.api.deleteData(data.id).subscribe(
      ((res:any)=>{
        console.log(res);
        this.getAllData();
      }),
      ((err:any)=>{
        console.log(err);
      })
    )
  }

  onUpdate(data:any){
    console.log(data);
    this.fn = data.fname;
    this.ln = data.lname;
    this.el = data.eml;
    this.cor = data.course;
    this.gen = data.gender;
    this.ps = data.pass;
    this.cps = data.cpass;
    this.idd = data.id;
  }

  onClickUpdateBtn(data:any){
    console.log(data);
    this.api.updateData(data.value).subscribe(
      ((res:any)=>{
        console.log(res);
        this.getAllData();
      }),
      ((err:any)=>{
        console.log(err);
      })
    )
  }
}
