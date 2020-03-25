import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: 'articleFilter'
})

export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any, args1?: any): any {

    if (!args) {
      return value;
    }

    return value.filter((val) => {
      args = args.toString().toLocaleLowerCase();
      let rVal;
      if (args1 == 1) {
        rVal = (val.author.toLocaleLowerCase().includes(args));
      }
      else if (args1 == 2) {
        rVal = (val.title.toLocaleLowerCase().includes(args));
      } else if (args1 == 3) {
        rVal = (val.body.toLocaleLowerCase().includes(args));
      }

      return rVal;
    });

  }
}