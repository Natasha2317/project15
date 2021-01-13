import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(workers, searchStr: string): any[] {
    if (workers.lenght === 0 || searchStr === '') {
      return workers;
    }
    else {
      let filteredItems = workers.filter(function (worker) {
          let fullname = worker.name.toLowerCase() + ' ' + worker.surname.toLowerCase();
          return fullname.indexOf(searchStr.toLowerCase()) !== -1;
        });
      return filteredItems;
    }
  }
}

