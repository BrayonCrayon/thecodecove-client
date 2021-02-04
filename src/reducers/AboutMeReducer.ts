import {IAboutMeState} from "../store/StoreState";
import {DocmosisImages, FctImages, CodeCoveCardImages, WinairImages} from "./Helper";
import {ApiError} from "../dtos/ApiError";


const initialState: IAboutMeState = {
    projects: [
        {
            name: 'Docmosis',
            link: 'https://docmosis.io/',
            github: '',
            description: 'Docmosis is an online platform that we like to call your online employee handbook. Using Docmosis, you can keep your team updated on company policies, procedures, onboarding, and training all while maintaining focus in all other important areas of your business.',
            screenShots: [
                DocmosisImages.docmosisHome,
                DocmosisImages.docmosisLogin,
                DocmosisImages.docmosisRegister,
                DocmosisImages.docmosisSubjects,
                DocmosisImages.docmosisSubjectView,
                DocmosisImages.docmosisSubjectEdit,
                DocmosisImages.docmosisTopicView,
                DocmosisImages.docmosisTopicEdit,
                DocmosisImages.docmosisCurriculums,
                DocmosisImages.docmosisCurriculumEdit,
                DocmosisImages.docmosisCurriculumMembers,
                DocmosisImages.docmosisTraining,
                DocmosisImages.docmosisTrainingSubject,
                DocmosisImages.docmosisAdminMembers,
            ],
            technologies: [
                {name: 'PHP'},
                {name: 'Laravel'},
                {name: 'Docker'},
                {name: 'Vue Js'},
                {name: 'Vuex'},
                {name: 'PostgreSQL'},
                {name: 'TailwindCss'},
                {name: 'phpunit with Laravel'},
                {name: 'Sass'},
            ]
        },
        {
            name: 'The CodeCove Cards',
            link: 'https://thecodecovecards.ca/',
            github: 'https://github.com/BrayonCrayon/cardplayer',
            description: 'A web application that allows users to play Cards Against Humanity with friends online.',
            screenShots: [
                CodeCoveCardImages.codeCoveCardsHome,
                CodeCoveCardImages.codeCoveCardsLogin,
                CodeCoveCardImages.codeCoveCardsRegister,
                CodeCoveCardImages.codeCoveCardsGames,
                CodeCoveCardImages.codeCoveCardsGameplay,
            ],
            technologies: [
                {name: 'C#'},
                {name: '.NET Core'},
                {name: 'SingalR'},
                {name: 'PostgreSQL'},
                {name: 'Docker'},
                {name: 'React JS'},
                {name: 'React Redux'},
                {name: 'TailwindCss'},
                {name: 'Sass'}
            ]
        },
        {
            name: 'Inveniet',
            link: '',
            github: 'https://github.com/BrayonCrayon/inveniet',
            description: 'An event web application that allows users to connect with one another.',
            screenShots: [],
            technologies: [
                {name: 'PHP'},
                {name: 'Laravel'},
                {name: 'Vue'},
                {name: 'MySql'},
                {name: 'Sass'},
            ]
        }
    ],
    workExperience: [
        {
            name: 'FCT (First Canadian Title)',
            link: 'https://fct.ca/',
            github: '',
            description: 'An insurance company that provide a wide variety of financial services to companies and individuals.',
            screenShots: [
                FctImages.fct
            ],
            technologies: [
                {name: 'C#'},
                {name: '.NET'},
                {name: 'Microsoft SQL Server'},
                {name: 'TSF'},
                {name: 'WPF'},
                {name: 'Javascript'}
            ]
        },
        {
            name: 'WinAir (Av-Base Systems)',
            link: 'https://winair.ca/',
            github: '',
            description: 'An aviation software company that distributes Maintenance, Inventory, Accounting, and Dashboard software for Airlines in various countries around the world.',
            screenShots: [
                WinairImages.winairHome,
            ],
            technologies: [
                {name: 'Java'},
                {name: 'Java EE'},
                {name: 'Java CLI'},
                {name: 'JSP'},
                {name: 'Struts'},
                {name: 'Javascript'},
                {name: 'JQuery'},
                {name: 'Microsoft SQL Server'},
                {name: 'Vue js'},
                {name: 'Jenkins'},
                {name: 'Selenium'},
            ]
        }
    ],
    error: new ApiError(),
    type: "",
    pending: false,
};

export function aboutMeReducer(state = initialState, action: any): IAboutMeState {
    switch (action.type) {
        default:
            return state
    }
}