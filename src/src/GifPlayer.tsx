import React, { useMemo, useState } from 'react';
import * as models from "./models";
import {GifContent} from "./GifContent";

interface GifPlayerProps {
    contentSource: models.ContentSource;
}

export const GifPlayer : React.FC<GifPlayerProps> = (props)=>{
     const [content,setContent] = useState<models.Gif[]>([]);

     useMemo(async () => {
        const c = await props.contentSource.getContent();
        setContent(c);
     },[props.contentSource]);
     
     return <GifContent gifs={content} />
}