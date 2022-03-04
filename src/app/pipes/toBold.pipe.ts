import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toBold' })
export class ToBoldPipe implements PipeTransform {
    transform(text: string) {
        return `<b>${text}</b>`
    }
}
