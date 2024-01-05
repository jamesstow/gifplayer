import * as models from "./models";
export const ContentSource : models.ContentSource = {
    async getContent() : Promise<models.Gif[]> {        
        try{
            const result = await fetch("/content/gifs.json");
            const json = await result.json()
            const models = json as models.Gif[];
            return models;
        }
        catch(e){
            console.log(e);
            return [];
        }
    }
}