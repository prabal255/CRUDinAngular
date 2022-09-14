import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentClassService {

  constructor() { }

  getEmployees(){
    return [
      {
          "ID": 1,
          "Name": "Prabal",
          "Email": "Prabal@gmail.com",
          "Password": "prabal"
      },
      {
        "ID": 2,
        "Name": "Radix",
        "Email": "radix@gmail.com",
        "Password": "Radix"
    },
    {
      "ID": 3,
      "Name": "Virat",
      "Email": "Virat@gmail.com",
      "Password": "Virat"
  },
  
      
      ];
  }
}
