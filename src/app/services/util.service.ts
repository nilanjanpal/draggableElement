import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UtilService {
    imageAddEvent = new Subject<string[]>();
}