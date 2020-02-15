import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/shared/service/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.sass']
})
export class PlanComponent implements OnInit {

  data = {};
  constructor(private sessionService: SessionService,
              private router: Router) { }

  ngOnInit() {
  }

  submitForm(form) {
    console.log(form);
    const list = form.storyList.split('\n').filter(item => item !== ''); //utils service

    console.log(list);
    const data = [];

    list.forEach(element => {
      data.push({
        status: 'NOT_VOTED',
        content: element,
        point: 0
      });
    });

    form.storyList = data;
    this.sessionService.createSession(form)
      .subscribe(
        (response) => {
          //this.sessionService.setSession(response.data);
          this.router.navigate(['/poker-planning-view-as-scrum-master/' + response.data.id]);
          console.log(response);
        }, (error) => {
          console.log(error);
        }
      );

  }
}
