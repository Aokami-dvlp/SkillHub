import { Developer } from "../models/developer";

export const datamapper = (developers:Developer[]) => {

        const data = developers.map((developer) => {
        return {
            id: Math.random(),
            name: developer.name,
            surname: developer.surname,
            age: developer.age,
            level: developer.level,
            email: developer.email,
            inpwcfrom: developer.inpwcfrom,
            skill: developer.skill.map((skill) => {
                return ' ' + skill.name + ' ' + skill.level})
                };
            })
        return data;
};