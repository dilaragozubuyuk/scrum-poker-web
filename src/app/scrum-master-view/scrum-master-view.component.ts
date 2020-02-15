import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/shared/service/session.service';
import { ActivatedRoute } from '@angular/router';
import { SessionInterface } from '../interfaces/session.interface';

@Component({
  selector: 'app-scrum-master-view',
  templateUrl: './scrum-master-view.component.html',
  styleUrls: ['./scrum-master-view.component.sass']
})
export class ScrumMasterViewComponent implements OnInit {

  constructor(private sessionService: SessionService,
              private activeRoute: ActivatedRoute) { }
  session: SessionInterface;

  ngOnInit() {
    if (this.activeRoute.snapshot.paramMap.get('sessionId')) {
      console.log(this.activeRoute.snapshot.paramMap.get('sessionId'));

      this.sessionService.getSession(this.activeRoute.snapshot.paramMap.get('sessionId'))
        .subscribe((response) => {
          console.log(response);
          this.session = response;
        },
        (error) => {
          console.log(error);
        });
    }
    //console.log(this.sessionService.getSession());
  }

}
