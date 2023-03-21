import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  course: string = '';
  grade: string = '';

  public id: any;
  public student: any;
  public grades: any;
  public gradeId: any;
  public courses: any;
  public permission: any = 2;
  displayedColumns: string[] = ['course', 'grade', 'actions'];

  ngOnInit(): void {
    if(this.permission == 1) this.displayedColumns.splice(2, 1);
  }

  constructor(private route: ActivatedRoute, private studentService: StudentService, private courseService: CourseService, private router: Router){
    this.id = route.snapshot.paramMap.get('id');
    
    this.studentService.getStudent(this.id).subscribe((response)=>{
      let result: any;
      result = response;

      this.student = result[0].name;
    },(error=>{

    }));

    this.studentService.getStudentGrade(this.id).subscribe((response)=>{
      this.grades = response;
    },(error=>{

    }));

    this.courseService.getCourses().subscribe((response)=>{
      this.courses = response;
    },(error=>{

    }));
  }

  insertGrade(course: any, grade: any){
    let data = {
      course: course,
      student: this.id,
      grade: grade
    }

    this.studentService.postStudentGrade(data).subscribe();
    window.location.reload();
  }

  deleteGrade(grade: any){
    this.studentService.deleteStudentGrade(grade).subscribe();
    window.location.reload();
  }

  loadCourse(id:any, course: any, grade: any){
    this.gradeId = id;
    this.course = course;
    this.grade = grade;
  }

  editGrade(id:any, course: any, grade: any){
    let data = {
      id: id,
      course: course,
      grade: grade
    }

    this.studentService.editStudentGrade(data).subscribe();
    window.location.reload();
  }

  clearFields(){
    this.course = "";
    this.grade = ""
  }

  ifTeacher() : boolean{
    if(this.permission == 2) return true
    else return false
  }
}

