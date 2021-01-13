import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditworkerComponent } from './ui/editworker/editworker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule } from '@angular/common/http';
import { MyfilterPipe } from './shared/pipes/myfilter.pipe';


@NgModule({
  declarations: [AppComponent, TableWorkersComponent, AddformWorkerComponent, EditworkerComponent, MyfilterPipe],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
