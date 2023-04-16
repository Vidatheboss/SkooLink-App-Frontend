import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InboxService } from './inbox.service';

describe('InboxService', () => {
  let service: InboxService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InboxService]
  });
  service = TestBed.get(InboxService);
  httpMock = TestBed.get(HttpTestingController)
  });

  it('should be created for Inbox', () => {
    const data = Object({ id: 2 });

    service.getMessage(2).subscribe(inbox => {
        expect(inbox).toBe(data);
    });

    const request = httpMock.expectOne('http://localhost:8080/inbox/messages/2');
    expect(request.request.method).toBe('GET');
    request.flush(data);
  });




});
