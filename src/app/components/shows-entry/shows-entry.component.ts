import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShowsDataService, selectStreamingPlatforms } from 'src/app/shows-data.service';
import { ShowCreate } from 'src/app/models';
import { TitleStrategy } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-shows-entry',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="add(foci)">
      <div>
        <label for="title">Title</label>
        <input type="text" id="title" formControlName="title" autofocus #foci>
        <div class="error-display" *ngIf="title.invalid && (title.touched || title.dirty)">
          <p *ngIf="title.hasError('required')">The title is required.</p>
          <p *ngIf="title.hasError('maxlength')">That is too long.</p>
        </div>
      </div>
      <div>
        <label for="streamingPlatform">Streaming Platform</label>
        <select type="text" id="streamingPlatform" formControlName="streamingPlatform">
          <option *ngFor="let platform of platforms$ | async">{{platform}}</option>
        </select>
        <div class="error-display" *ngIf="streamingPlatform.invalid && (streamingPlatform.touched || streamingPlatform.dirty)">
          <p *ngIf="streamingPlatform.hasError('required')">Please select a streaming platform.</p>
        </div>
      </div>
      <button type='submit'>Add New Show</button>
  </form>
  `,
  styles: [

    //  ".error-display { color: red }" // why does THIS make my side by side flow break?
  ]
})
export class ShowsEntryComponent {
  private readonly service = inject(ShowsDataService);
  readonly platforms$ = this.service.query(selectStreamingPlatforms).pipe(map(platforms => ['', ...platforms]))
  form = new FormGroup<FormDataType<ShowCreate>>({
    title: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(100)]
    }),
    streamingPlatform: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  })

  get title() { return this.form.controls.title; }
  get streamingPlatform() { return this.form.controls.streamingPlatform; }
  add(foci: HTMLInputElement) {
    if (this.form.valid) {
      const showCreate: ShowCreate = {
        title: this.form.controls.title.value,
        streamingPlatform: this.form.controls.streamingPlatform.value
      }
      this.service.addShow(showCreate);
      this.form.reset();
      foci.focus();
    } else {
      // TODO: Make it so the validations run - this is always dumb. looking for a better way.
      // do not want to disable the submit button.
    }


  }
}

type FormDataType<T> = {
  [Property in keyof T]: FormControl<T[Property]>;
};