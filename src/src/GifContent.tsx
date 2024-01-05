import React, { useEffect, useMemo, useState } from 'react';
import * as models from "./models";

interface GifContentProps {
    gifs: models.Gif[];
}

interface GifIndex {
    gif: models.Gif;
    index: number;
    handle: NodeJS.Timer | null;
}

const defaultGif : GifIndex = {
    gif: {lengthInMillis:0,url:"",name:"placeholder"}, 
    index: -1,
    handle: null,
};

export const GifContent : React.FC<GifContentProps> = (props) => {
    const [gif, setGif] = useState<GifIndex>(defaultGif);

    const nextGif: (current: GifIndex) => GifIndex = (current) => {
        if(!props.gifs.length) return defaultGif;

        let newIndex = current.index + 1;
        if(newIndex >= props.gifs.length){
            newIndex = 0;
        }
        
        const newGif = props.gifs[newIndex];
        const result: GifIndex = {
            gif: newGif,
            index: newIndex,
            handle: null,
        }

        result.handle = setInterval(() => {            
            setGif(result);
        }, current.gif.lengthInMillis ?? 1000);

        return result;
    }

    useEffect(() => {
        if(gif.handle) {
            clearInterval(gif.handle);
        }
        
        nextGif(gif);
 
    }, [gif, props.gifs]);

    return (
        <img src={gif.gif.url} alt={gif.gif.name} />
    );
}