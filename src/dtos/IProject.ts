
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
