import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "nullishString",
})
export class NullishStringPipe implements PipeTransform {
    transform<T extends string | null | undefined, K extends string>(value: T, fallbackValue: K): string {
        return value ?? fallbackValue;
    }
}
