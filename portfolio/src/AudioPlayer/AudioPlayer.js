import React from 'react';
import Cyril from '../img/Cyril.mp3';
import Hypnosis from '../img/Hypnosis.mp3';
import AudioPlayer  from 'react-responsive-audio-player';


const items = [
    {url: Hypnosis, title: 'Ian Clarke - Hypnosis, Christina Kopecky, flute and Ellen Sommer, piano'},
    { url: Cyril, title: 'Cyril Scott - A Scotch Pastorale, Christina Kopecky, flute and Ellen Sommer, piano'} 
]

const controls = [
    'spacer', 'backskip', 'playpause', 'forwardskip', 'spacer', 'progress',
]

const style = { position: 'fixed', bottom: 0, width: '100%' }

const Audio = (props) => {
    return (
        <AudioPlayer playlist={items} controls={controls} autoplay="false" style={style}/>
    )
}
export default Audio;
