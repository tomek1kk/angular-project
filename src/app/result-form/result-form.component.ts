import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActuarialService } from '../actuarial.service';
import { CalculationType, FormValue } from '../model/form-value';
import { Result } from '../model/result';


@Component({
  selector: 'app-result-form',
  templateUrl: './result-form.component.html',
  styleUrls: ['./result-form.component.css']
})
export class ResultFormComponent implements OnInit {

  public form = this.builder.group({
    mainLimit: [0, Validators.required],
    mainRetention: [0, Validators.required],
  })
  public simple: CalculationType = CalculationType.Simple;

  constructor(
    private builder: FormBuilder,
    private actuarialService: ActuarialService
     ) { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => {
      if (this.form.valid) {
        let formValue = new FormValue(
          value.mainLimit,
          value.mainRetention,
          this.simple
        );
        this.actuarialService.formValue.next(formValue);
      }
    })
  }

  simpleChange(event: any) {
    this.simple = event.value == "1" ? CalculationType.Simple : CalculationType.Complex;
  }

}
