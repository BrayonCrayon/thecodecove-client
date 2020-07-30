import React from 'react';
import {IAboutMeState, IStoreState} from "../../store/StoreState";
import {connect} from "react-redux";
import profilePhoto from "../../assets/images/profilePhoto.png";
import Project from "../components/Project";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

interface IAboutMeProps extends IAboutMeState {
}

const AboutMe = ({projects = [], workExperience = []}: IAboutMeProps) => {
    return (
        <div className="flex flex-col justify-center p-4">
            <div
                className="w-full self-center bg-white flex flex-col justify-center rounded-lg shadow-lg border-2 border-gray-400 mt-32 p-4 pt-0 md:w-3/4 lg:w-1/2">
                <img src={profilePhoto} alt="Brady Alan Deroy"
                     className="rounded-full h-64 border-2 border-gray-400 self-center -mt-32"/>
                <div className="pt-10">
                    <div className="text-2xl font-semibold text-center">Brady Alan Deroy</div>
                    <div className="text-sm text-center">Software Developer</div>
                </div>
                <div className="pb-10 self-center pt-2 text-4xl">
                    <a href="https://github.com/BrayonCrayon" className="px-2">
                        <FontAwesomeIcon icon={faGithub} className="hover:text-gray-600"/>
                    </a>
                    <a href="https://www.linkedin.com/in/brady-deroy-b70a05115/" className="px-2">
                        <FontAwesomeIcon icon={faLinkedin} className="hover:text-gray-600"/>
                    </a>
                </div>
                <div className=" text-center">
                    At first Brady was exposed to computer programming in high school where he created small shape
                    applications that demonstrated basic concepts of programming. Most of the term was creating a small
                    video game in 2D, and various move this shape from one screen to the next and randomly generate
                    levels. He really enjoyed his time programming and wanted to move further in this field.
                    <br/>
                    <br/>
                    After graduating high school, he was accepted into Fanshawe College in the Computer Programmer
                    Analyst course that was a 2 year course with a year onsite co-op experience. During his time there
                    he as able to gain a vast knowledge of the fundamentals as well as an in depth and specialized
                    understanding in areas such as OOP in both a Windows and Linux based environments, client-server web
                    development, various software patterns, as well as database development. While working in these
                    areas he was able to apply his knowledge and understanding through the creation of various in class
                    web applications, libraries, and console applications that demonstrated various objected oriented
                    programming and software patterns.
                    <br/>
                    <br/>
                    On his co-op terms Brady was hired by FCT (First Canadian Title) as a Software Developer. While
                    there he effectively navigated complex systems and processes while efficiently correcting
                    application errors in C# .Net applications using Microsoft SQL Server. Worked in collaboration with
                    a team to implement new features in various web applications and database systems.
                    <br/>
                    <br/>
                    Soon after finishing his time at Fanshawe College he was hired by WinAir (Av-Base Systems). He
                    collaborated with a team to meet project deadlines and develop maintainable code on an
                    existing codebase written in Java EE applications. Developed new automated testing procedures and
                    improved current ones for reliable testing against existing products with Selenium and JUnit.
                    Created various internal applications for use within the organization to improve upon existing
                    processes to assist in a decrease of code refactoring and overall costs for the company.
                    <br/>
                    <br/>
                    Currently Brady has been coordinating within a small team to develop maintainable code in a
                    new code base written in PHP Laravel with VueJs. Pair programed to avoid possible technical debt
                    that could arise later in the codebase lifecycle. Developed and improving tests in PhpUnit to reduce
                    conflicts of newly added features.
                </div>
            </div>

            <div className="w-full p-4 my-8 flex flex-col justify-center self-center md:w-3/4 lg:1/2">
                <div className="text-4xl w-full border-b-4 rounded border-gray-400 mb-8">Projects</div>
                <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2">
                    {
                        projects.map(p =>
                            <div key={p.name} className="m-2">
                                <Project name={p.name} description={p.description} technologies={p.technologies}
                                         link={p.link} screenShots={p.screenShots} github={p.github}/>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="w-full p-4 my-8 flex flex-col justify-center self-center md:w-3/4 lg:1/2">
                <div className="text-4xl w-full border-b-4 rounded border-gray-400 mb-8">Experience</div>
                <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2">
                    {
                        workExperience.map(workExp =>
                            <div key={workExp.name} className="m-2">
                                <Project name={workExp.name} description={workExp.description}
                                         technologies={workExp.technologies}
                                         link={workExp.link} screenShots={workExp.screenShots} github={workExp.github}/>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state: IStoreState) {
    return {
        projects: state.aboutMeState.projects,
        workExperience: state.aboutMeState.workExperience,
    }
}

export default connect(mapStateToProps)(AboutMe);