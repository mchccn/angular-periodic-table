import { Component } from "@angular/core";
import data from "./data.json";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
})
export class AppComponent {
    public readonly size = 5.5;
    public readonly data = data;
    public current: typeof data["elements"][number] | undefined;

    public pickTextColor(color: string) {
        const rgb = parseInt(color.slice(1), 16);

        const [r, g, b] = [(rgb >> 16) & 0xff, (rgb >> 8) & 0xff, (rgb >> 0) & 0xff];

        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

        return luminance < 127 ? "white" : "black";
    }

    public showElement(element: typeof data["elements"][number]) {
        this.current = element;
    }
}
