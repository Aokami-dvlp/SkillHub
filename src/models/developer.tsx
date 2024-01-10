export interface Developer {
    name: string;
    surname: string;
    age: number;
    level: string;
    skill: Skill[];
    inpwcfrom: string;
    email: string;
}

export interface Skill {
    name: string;
    level: number;
}