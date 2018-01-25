export class Classroom{
    
    public name: string;
    public professor: string;
    public institution: string;
    public members: {Studentnum: boolean;};
    public classCode: string;
    public year: string;
    constructor(name, professor, institution, members, classCode, year ){
        this.name = name;
        this.professor = professor;
        this.institution = institution;
        this.members = null;
        this.classCode = classCode;
        this.year = year;
    }
} 