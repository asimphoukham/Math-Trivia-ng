import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OptionsService } from 'src/app/services/options/options.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-option-page',
  templateUrl: './option-page.component.html',
  styleUrls: ['./option-page.component.scss']
})
export class OptionPageComponent implements OnInit, OnDestroy {
  public radioGroupForm: FormGroup;
  subscription: Subscription = new Subscription();
  constructor(
    private formBuilder: FormBuilder,
    private optionsService: OptionsService
  ) {}

  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      model: ''
    });

    this.subscription.add(
      this.radioGroupForm.get('model').valueChanges.subscribe(x => {
        console.log('Option Chosen ---> ' + x);
        this.optionsService.setDifficulty(x);
        console.log('option-page says --> ' + this.optionsService.optionsLevel());
      })
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
