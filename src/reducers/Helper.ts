import {Post} from "../dtos/Post";
import {getInitialPostObj} from "../store/StoreState";
import docmosisCurriculumEdit from '../assets/images/projects/docmosis/docmosis-curriculum-edit.png';
import docmosisAdminMembers from '../assets/images/projects/docmosis/docmosis-admin-members.png';
import docmosisCurriculumMembers from '../assets/images/projects/docmosis/docmosis-curriculum-members.png';
import docmosisCurriculums from '../assets/images/projects/docmosis/docmosis-curriculums.png';
import docmosisHome from '../assets/images/projects/docmosis/docmosis-home.png';
import docmosisLogin from '../assets/images/projects/docmosis/docmosis-login.png';
import docmosisRegister from '../assets/images/projects/docmosis/docmosis-register.png';
import docmosisSubjectEdit from '../assets/images/projects/docmosis/docmosis-subject-edit.png';
import docmosisSubjectView from '../assets/images/projects/docmosis/docmosis-subject-view.png';
import docmosisSubjects from '../assets/images/projects/docmosis/docmosis-subjects.png';
import docmosisTopicEdit from '../assets/images/projects/docmosis/docmosis-topic-edit.png';
import docmosisTopicView from '../assets/images/projects/docmosis/docmosis-topic-view.png';
import docmosisTraining from '../assets/images/projects/docmosis/docmosis-training.png';
import docmosisTrainingSubject from '../assets/images/projects/docmosis/docmosis-training-subject.png';
import fct from '../assets/images/projects/fct/fct.png';
import codeCoveCardsGameplay from '../assets/images/projects/thecodecovecards/thecodecovecards-gameplay.png';
import codeCoveCardsGames from '../assets/images/projects/thecodecovecards/thecodecovecards-games.png';
import codeCoveCardsHome from '../assets/images/projects/thecodecovecards/thecodecovecards-home.png';
import codeCoveCardsLogin from '../assets/images/projects/thecodecovecards/thecodecovecards-login.png';
import codeCoveCardsRegister from '../assets/images/projects/thecodecovecards/thecodecovecards-register.png';
import winairHome from '../assets/images/projects/winair/winair.png';

export function findPostById(id: number, posts: Array<Post>) {
    const post = posts.find(p => p.id === id);
    return post ? post : getInitialPostObj();
}

export function isEmpty(array: Array<Object>) : Boolean {
    return array.length === 0;
}

export const DocmosisImages = {
    docmosisCurriculumEdit,
    docmosisAdminMembers,
    docmosisCurriculumMembers,
    docmosisCurriculums,
    docmosisHome,
    docmosisLogin,
    docmosisRegister,
    docmosisSubjectEdit,
    docmosisSubjectView,
    docmosisSubjects,
    docmosisTopicEdit,
    docmosisTopicView,
    docmosisTraining,
    docmosisTrainingSubject
}

export const FctImages = {
    fct,
}

export const CodeCoveCardImages = {
    codeCoveCardsGameplay,
    codeCoveCardsGames,
    codeCoveCardsHome,
    codeCoveCardsLogin,
    codeCoveCardsRegister
}

export const WinairImages = {
    winairHome,
}