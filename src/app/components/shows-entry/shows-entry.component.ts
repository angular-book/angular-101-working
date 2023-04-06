import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ShowsDataService } from 'src/app/shows-data.service';
import { ShowCreate } from 'src/app/models';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-shows-entry',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="add()">
      <div>
        <label for="title">Title</label>
        <input type="text" id="title" formControlName="title">
      </div>
      <div>
        <label for="streamingPlatform">Streaming Platform</label>
        <select type="text" id="streamingPlatform" formControlName="streamingPlatform">
          <option *ngFor="let platform of platforms$ | async">{{platform}}</option>
        </select>
      </div>
      <button type='submit'>Add New Show</button>
  </form>
  `,
  styles: [
  ]
})
export class ShowsEntryComponent {
  private readonly service = inject(ShowsDataService);
  readonly platforms$ = this.service.getStreamingPlatforms();
  form = new FormGroup({
    title: new FormControl(''),
    streamingPlatform: new FormControl('')
  })

  add() {
    console.log('adding', this.form.value);
    const showCreate: ShowCreate = {
      title: this.form.controls.title.value!,
      streamingPlatform: this.form.controls.streamingPlatform.value!
    }
    this.service.addShow(showCreate);
  }
}
