import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilterPipe',
})

/**
 * This Pipe is written to filter the search Query to get matching suggestions to autocomplete the search 
 */

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