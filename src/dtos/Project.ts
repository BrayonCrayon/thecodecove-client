
export interface ISkill {
    name: string,
}

export interface IProject {
    name: string,
    link: string,
    github: string,
    description: string,
    technologies: Array<ISkill>,
    screenShots: Array<string>
}

export class Project implements IProject {
    description: string = "";
    github: string = "";
    link: string = "";
    name: string = "";
    screenShots: Array<string> = [];
    technologies: Array<ISkill> = [];
}
