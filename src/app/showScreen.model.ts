import { getLocaleTimeFormat, Time } from "@angular/common";

export class ShowScreen{
    constructor(
        public showId : number = 0,
        public screen : number = 0,
        public showDate : Date = new Date(),
        public showTime : string = "",
        public statusShow : string = ""
    ){}
}