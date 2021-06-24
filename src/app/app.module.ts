import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NullishStringPipe } from "./nullishString.pipe";

@NgModule({
    declarations: [AppComponent, NullishStringPipe],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
