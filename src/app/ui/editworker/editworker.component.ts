import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/models/worker.model';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-editworker',
  templateUrl: './editworker.component.html',
  styleUrls: ['./editworker.component.css']
})
export class EditworkerComponent implements OnInit {

  @Input() workerUser: object;

  id: number;
  personForm : FormGroup;
  myWorkerType = MyWorkerType;
  disabledForms = false;

  public mask = ['+', 7, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]

  @Output() editWorker = new EventEmitter<MyWorker>();
  @Output() cancelPopup = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.id = this.workerUser["id"];
    this.personForm = new FormGroup({
      // firstName: new FormControl()
      // firstName: new FormControl('Чем инициализируется')
      firstname: new FormControl({ value: this.workerUser["name"], disabled: this.disabledForms }, [
        Validators.required,
      ]),
      lastname: new FormControl({ value: this.workerUser["surname"], disabled: this.disabledForms }, [
        Validators.required,
      ]),
      userphone: new FormControl({ value: this.workerUser["phone"], disabled: this.disabledForms }, [
        Validators.required,
      ]),
      usertype: new FormControl({ value: this.workerUser["type"], disabled: this.disabledForms }, [
        Validators.required,
      ]),
    });
  }

  onEditWorker() {
    this.editWorker.emit({
      id: this.id,
      name: this.personForm.get('firstname').value,
      surname: this.personForm.get('lastname').value,
      phone: this.personForm.get('userphone').value,
      type: this.personForm.get('usertype').value,
    });
  }

  closePopup(){
    this.cancelPopup.emit();
  }
}
