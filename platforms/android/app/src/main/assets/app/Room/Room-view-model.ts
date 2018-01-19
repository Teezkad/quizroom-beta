import { Observable } from "tns-core-modules/data/observable";

export class RoomViewModel extends Observable {

    constructor() {
        super();
        this.classroom = new Classroom("", "john@company.com", "New York", "5th Avenue", "2017");
    }

    set classroom(value: Classroom) {
        this.set("_classroom", value);
    }

    get classroom(): Classroom {
        return this.get("_classroom");
    }
}

export class Classroom{
    
    public name: string;
    public professor: string;
    public institution: string;
    public classCode: string;
    public year: string;

    constructor(name, professor, institution, classCode, year ){
        this.name = name;
        this.professor = professor;
        this.institution = institution;
        this.classCode = classCode;
        this.year = year;
    }
} 

