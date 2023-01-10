import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../update.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  hidden:boolean=false
data: any;
  id: string | undefined;

Course: any;
courses:any;
CourseName:any;
CourseId:any;
InstituteName:any;
Address: any;
CourseDuration:any;
CourseURL:any;
users: any;
  Obj: string | undefined;
  
  updatefunctioncalled:RequestInit | undefined
  constructor(private service:UpdateService) { }
  searchtext: any;
  CourseArray: any;
  ngOnInit(): void {
//Update
this.Courses()
}

  tabkey: any = [];
  tabValue: any = [];
getData(){
  this.CourseArray.forEach((element:any)=>{
    this.tabkey=Object.keys(element);
    this.tabValue?.push(Object.values(element));
  });
}
//make api call for edit
//target in place edit 
//1.How to change element or text based on conditions
isHidden=true;

//  A function to handle edit action
editDoc(){
  this.hidden=true;

}
toggle(){
  this.Course=!this.Course
}


//function for updating data 
updateCourseData(data:any){
  console.log(data)

  this.service.update(data,data._id).subscribe((datas) =>{
    console.log(datas)
  })
}
  cancel(){
    this.hidden=false
  }


  //first lets get the updated information here
  
  // Make a api call for update

  // const Obj = {
  //   Course:this.Course,
  //   CourseName: this.CourseName,
  //   CourseId: this.CourseId,
  //   InstituteName: this.InstituteName,
  //   Address: this.Address,
  //   CourseDuration: this.CourseDuration,
  //   CourseURL:this.CourseURL
  //   }

//   fetch("http://localhost:5000/course/updateCourseDetails/" +this.Obj,{
    
//       method:'PUT',
//       headers:{
//         "Access-Control-Allow-Origin":"*",
//         "Content-Type":'application/json'
//       },
//       body:JSON.stringify(Obj)
//     }) .then (response => response.json())
//     .then(result =>
//       console.log(result))
     
//       .catch(error =>console.log(error));
      
//       this.Courses();

      
// }





/*delete*/

//Delete the course details
    deleteCourse(id:any){
      fetch("http://localhost:5000/course/deleteCourse/" +id,{
        method:"DELETE" ,
        headers:{
          "access-Control-Allow-Origin":"*",
        },
      })
      .then(response => response.json())
      .then(result =>{
        console.log(result),
        this.Courses()
      }
      ).catch(err =>
        console.log(err))
    }

    
/*get*/
    Courses(){
      fetch("http://localhost:5000/course/getCoursesDetails",{
        method:"GET" ,
        headers:{
          "access-Control-Allow-Origin":"*",
        },
      })
      .then(response => response.json())
      .then(result =>{
        console.log(result),
        this.courses = result.CoursesInfo
        console.log(this.courses)
      }
      ).catch(err =>
        console.log(err))
    }
onSubmit(){
//firt thing is we got the variables 
console.log('isbuttonclicked')
console.log(this.CourseName)
console.log(this.CourseId)
console.log(this.InstituteName)
console.log(this.Address)
console.log(this.CourseDuration)
console.log(this.CourseURL)
const Obj = {
Course:this.Course,
CourseName: this.CourseName,
CourseId: this.CourseId,
InstituteName: this.InstituteName,
Address: this.Address,
CourseDuration: this.CourseDuration,
CourseURL:this.CourseURL
}
//now send http request
//post
var requestOptions = {
  method: 'POST',
  body:JSON.stringify(Obj)
};
console.log(requestOptions);
fetch("http://localhost:5000/course/fillCourseDetails",{
  method:'POST',
  headers:{
    "Access-Control-Allow-Origin":"*",
    "Content-Type":'application/json'
  },
  body:JSON.stringify(Obj)
})  .then(response => response.json())
.then(result =>
  console.log(result))
.catch(error => console.log('error',error));

}
}




