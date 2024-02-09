import {useState} from 'react';

export default function AudioControlComponent({click, source} : {click: () => void, source : string}) {

    return (
        <div className="audio-control-wrapper">
            <img className="audio-control" src={source} onClick={click}></img>
        </div>
    )
}