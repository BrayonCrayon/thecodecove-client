import React from 'react';
import {Label} from "reactstrap";
import Skill from "./Skill";
import {IProject} from "../../dtos/IProject";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import ImageViewer from "./ImageViewer";

interface IProjectProps extends IProject {
}

const Project = ({ name = "", link = "", description = "", technologies = [], screenShots = [], github = ""} : IProjectProps) => {
    return (
        <div className="rounded bg-white border-2 border-gray-500 shadow-lg p-4">
            <div className="flex ">
                <div className="text-2xl font-semibold">
                    {name}
                </div>
                {
                    link &&
                        <a href={link}>
                            <FontAwesomeIcon icon={faLink} className="text-2xl mt-2 mx-2 hover:text-gray-500" />
                        </a>
                }
                {
                    github &&
                        <a href={github}>
                            <FontAwesomeIcon icon={faGithub}  className="text-2xl mt-2 mx-2 hover:text-gray-500" />
                        </a>
                }
            </div>
            <div className="my-4">
                <Label className=" text-xs text-gray-600">Description</Label>
                <div className="text-base">
                    {description}
                </div>
            </div>
            <div className="my-4">
                <Label className="text-xs text-gray-600">Technologies</Label>
                <div className="flex flex-wrap">
                    {
                        technologies.map( tech =>
                            <Skill key={tech.name} className="p-2 m-2 rounded border-2 border-black text-center self-center font-semibold text-lg" name={tech.name}/>
                        )
                    }
                </div>
            </div>
            {
                screenShots.length > 0 &&
                    <div className="my-4">
                        <Label className="text-xs text-gray-600">ScreenShots</Label>
                        <div className="flex flex-wrap">
                            <ImageViewer className="" imageSources={screenShots} />
                        </div>
                    </div>
            }
        </div>
    );
}

export default Project;