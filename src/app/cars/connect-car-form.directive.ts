import { Directive, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';

@Directive({
  selector: '[appConnectCarForm]'
})
export class ConnectCarFormDirective {
  @Input('appConnectCarForm')
  set data(val: any) {
    if (val) {
      this.formGroupDirective.form.patchValue(val);
      this.formGroupDirective.form.markAsPristine();
    }
  }
  constructor(private formGroupDirective: FormGroupDirective) {}
}
