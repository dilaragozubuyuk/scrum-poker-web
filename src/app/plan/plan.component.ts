import { Component } from '@angular/core';
import { SessionService } from 'src/shared/service/session.service';
import { Router } from '@angular/router';
import { UtilsService } from 'src/shared/service/utils.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styles: ['.container { padding-top: 40px }']
})
export class PlanComponent {
  data = {};
  constructor(private sessionService: SessionService,
    private utilsService: UtilsService,
    private router: Router) { }

  submitForm(form) {
    const list = this.utilsService.removeSpaces(form.storyList);

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
          this.router.navigate(['/poker-planning-view-as-scrum-master/' + response.data._id]);
        }, (error) => {
          console.log(error);
        }
      );
  }
}
