import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  Course: any;
  courses:any;
  CourseName:any;
  CourseId:any;
  InstituteName:any;
  Address: any;
  CourseDuration:any;
  CourseURL:any;
  constructor() { }
  ngOnInit(): void {
        
  }
  toggleCourse(){
    this.Course=!this.Course
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
alert("data Submitted Successfully");
window.location.reload()
return true;
}
}







