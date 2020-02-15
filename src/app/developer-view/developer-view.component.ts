import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/shared/service/session.service';
import { SessionInterface } from '../interfaces/session.interface';

@Component({
  selector: 'app-developer-view',
  templateUrl: './developer-view.component.html',
  styleUrls: ['./developer-view.component.sass']
})
export class DeveloperViewComponent implements OnInit {
  session: SessionInterface;

  constructor(private activeRoute: ActivatedRoute,
              private sessionService: SessionService) { }

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
  }

}
