import { Observable } from "data/observable";
import { Injectable} from "@angular/core";

@Injectable()

export class HomeViewModel extends Observable {
    counter: number = 10;
    constructor() {
        super();
    }

    get message(): String {
        if(this.counter >0){
            return this.counter + 'taps left';
        }else{
            return 'You succeeded';
        }
    }

    onTap(){
        this.counter--;
    }

}
