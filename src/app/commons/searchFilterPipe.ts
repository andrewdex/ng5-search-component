import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilterPipe',
})
export class searchFilterPipe implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            input = input.toString().toLowerCase();
            return value.filter(function (el: any) {
                return el.toString().toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }

}