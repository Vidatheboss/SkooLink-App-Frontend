import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StudentService } from './student.service';

describe('studentService', () => {
  let service: StudentService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [StudentService]
      });
      service = TestBed.get(StudentService);
      httpMock = TestBed.get(HttpTestingController);
  });

  it('should be able to retrieve student', () => {
    const data = Object({ name: 'Bruna Donatoni' });

    service.getStudent(2).subscribe(student => {
        expect(student).toBe(data);
    });

    const request = httpMock.expectOne('http://localhost:8080/students/profile/2');
    expect(request.request.method).toBe('GET');
    request.flush(data);
  });

  afterEach(() => {
    httpMock.verify();
  });

});
