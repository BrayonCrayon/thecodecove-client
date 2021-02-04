import React, {useCallback, useState} from 'react';
import {connect} from "react-redux";
import {Modal} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

interface IImageViewerProps {
    imageSources: Array<string>,
    className: string,
}

const ImageViewer = ({imageSources = [], className = ""}: IImageViewerProps) => {
    const [show, setShow] = useState(false);
    const [selectedImgIdx, setSelectedImgIdx] = useState(0);

    const toggle = useCallback(() => {
        setShow(!show);
    }, [setShow, show]);

    const thumbnail = useCallback(() => {
        return imageSources.length ? imageSources[0] : "";
    }, [imageSources]);

    const nextImg = useCallback(() => {
        const nextIdx = selectedImgIdx + 1 >= imageSources.length ? 0 : selectedImgIdx + 1;
        setSelectedImgIdx(nextIdx);
    }, [selectedImgIdx, setSelectedImgIdx, imageSources]);

    const previousImg = useCallback(() => {
        const previousIdx = selectedImgIdx === 0 ? imageSources.length - 1 : selectedImgIdx - 1;
        setSelectedImgIdx(previousIdx);
    }, [selectedImgIdx, setSelectedImgIdx, imageSources]);


    return (
        <div>
            <img src={thumbnail()} className="h-20 rounded border border-gray-500 m-2 cursor-pointer hover:opacity-50"
                 alt={thumbnail() + '-thumbnail'} onClick={toggle}/>
            <Modal
                open={show}
                onClose={toggle}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className="flex p-1 justify-center "
            >
                <div className="modal-lg">
                    <div className="text-3xl font-semibold border-b-2 border-gray-400 rounded">
                        ScreenShots
                    </div>
                    <div className="grid grid-cols-12 ">
                        <div className="col-span-1 flex justify-center">
                            <FontAwesomeIcon icon={faArrowLeft}
                                             className="text-4xl self-center cursor-pointer hover:text-gray-600"
                                             onClick={previousImg}/>
                        </div>
                        <div className="col-span-10 p-2">
                            <img src={imageSources[selectedImgIdx]}
                                 alt={imageSources[selectedImgIdx] + '-selected-image'}
                                 className="border-2 border-gray-400 rounded"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center">
                            <FontAwesomeIcon icon={faArrowRight}
                                             className="text-4xl self-center cursor-pointer hover:text-gray-600"
                                             onClick={nextImg}/>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="self-center text-lg ">
                            {selectedImgIdx + 1} / {imageSources.length}
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps)(ImageViewer);