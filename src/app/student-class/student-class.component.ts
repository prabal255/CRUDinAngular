import { Component, OnInit } from '@angular/core';
import { StudentClassService } from '../student-class.service';
import { Studentclass } from '../student-class.model';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-student-class',
  templateUrl: './student-class.component.html',
  styleUrls: ['./student-class.component.css']
})
export class StudentClassComponent implements OnInit {

  //students:StudentClass[] = [];
  list=new Array<Studentclass>();
  public ID;
  public Name;
  public Password;
  public Email;
  public flag = true
  public editIndex : number = -1;
  // person:Studentclass={
  //   ID:1,Name:'Hari',Email:'Hari@gmail',Password:'hari'
  // }
  Add(form){
    this.flag=true
    this.list.push(
      {
        ID:this.ID,
        Email:this.Email,
        Name:this.Name,
        Password :this.Password
      })
    console.log(this.list)
      form.reset()
  }
  clearvalues(){
    this.ID=''
    this.Name='';
    this.Email='';
    this.Password=''
  }
  edit(index){

   this.flag=false
   this.editIndex = index;
   this.ID=this.list[index].ID;
   this.Name=this.list[index].Name;
   this.Email=this.list[index].Email;
   this.Password=this.list[index].Password

  }
  Update(form){  
    this.flag=true
    this.ID
    
  this.list[this.editIndex]={
    ID:this.ID,
    Email:this.Email,
    Name:this.Name,
    Password :this.Password
  }
    // var index=this.list.findIndex((obj)=>obj.ID=this.ID);
    // this.list[index]=this.list.find((obj)=>obj.ID=this.ID);


    
    // for (let i = 0; i < this.list.length; i++) {
    //   if(this.list[i].ID == this.ID){
    //     this.list[i] = this.ID;
    //this.list == this.list.find(st => this.ID == st.ID).this. = itemUpdated.name;
    form.reset()
  }
  del(ID){
    this.list=this.list.filter((st) => st.ID !== ID)
  }
  constructor(private _studentService:StudentClassService) {
   }

  ngOnInit() {
    this.list=this._studentService.getEmployees();

}
}
