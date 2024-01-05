import * as models from "./models";
export const MockContentSource : models.ContentSource = {
    async getContent() : Promise<models.Gif[]> {
        // const content : models.Content = {
        //     gifs:[{
        //         height:100,
        //         lengthInMillis: 2000,
        //         url: "test.gif",
        //         width: 100
        //     }]
        // };
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