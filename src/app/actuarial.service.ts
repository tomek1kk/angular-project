import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CalculationType, FormValue } from './model/form-value';
import { Result } from './model/result';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActuarialService {

  constructor() { }

  formValue: Subject<FormValue> = new Subject();
  results$: Observable<Result[]> = this.formValue.pipe(
    map(formValue => {
      return this.calculate(formValue);
    })
  )

  private calculate(formValue: FormValue): Result[] {
    let result: Result[] = [];
    for (let i = 0; i < 20; i++) {
      result.push(new Result(
        new Date(),
        i * 3,
        formValue.mainRetention * 200,
        formValue.mainRetention + formValue.mainLimit * 3443,
        formValue.type == CalculationType.Complex ? 100000 : 200000,
        formValue.mainRetention * i + formValue.mainLimit * i))
    }
    return result;
  }
}
