import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should retrieve one user', () => {
    const data = Object(
      {
        id: 6,
        username: "skadmin",
        email: "admin@skoolink.ca",
        role: "5",
        name: "Admin",
        fullName: "ADMIN"
      }
    );

    service.getOneUser(6, 5).subscribe(user => {
      expect(user).toBe(data);
    });

    const request = httpMock.expectOne('http://localhost:8080/users/getOneUser/6/5');
    expect(request.request.method).toBe('GET');
    request.flush(data);
  });

  it('check Token', () => {
    const data = Object(
      {
        message: "true"
      }
    );

    service.checkToken().subscribe(user => {
      expect(user).toBe(data);
    });

    const request = httpMock.expectOne('http://localhost:8080/users/checkToken');
    expect(request.request.method).toBe('GET');
    request.flush(data);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
