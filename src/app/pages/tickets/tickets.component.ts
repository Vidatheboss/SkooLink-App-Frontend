import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketsService } from '../../services/tickets.service';



@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {
  new: string = '';

  public tickets: any;

  displayedColumns: string[] = ['creator_id', 'email', 'subject', 'description', 'date'];


  constructor(private route: ActivatedRoute, private ticketsService: TicketsService, private router: Router) {

    this.ticketsService.getTickets().subscribe((response) => {
      this.tickets = response;
      console.log(this.tickets);
    }, (error => {

    }));

  }


}
