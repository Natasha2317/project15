import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/models/worker.model';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})
export class AddformWorkerComponent implements OnInit {

  myWorkerType = MyWorkerType;
  disabledForms = false;

  personForm : FormGroup;

  public mask = ['+', 7, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() {
    this.personForm = new FormGroup({
      // firstName: new FormControl()
      // firstName: new FormControl('Чем инициализируется')
      firstname: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
      ]),
      lastname: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
      ]),
      userphone: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
      ]),
      usertype: new FormControl({ value: 0, disabled: this.disabledForms }, [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
  }

  onAddWorker() {
      this.addWorker.emit({
        name: this.personForm.get('firstname').value,
        surname: this.personForm.get('lastname').value,
        phone: this.personForm.get('userphone').value,
        type: this.personForm.get('usertype').value,
      });
  }
}
