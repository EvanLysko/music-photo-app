

export default class GoogleSearchAPIController {
    apiKey = 'AIzaSyBC2aCCxpPadjFGaV3NLuEqas4v4JhfhQo';
    searchEngineId = '2672850afb31b45ed';
        
    //todo add error handling

    public async getImages (search : string){
        
        const result = await fetch('https://www.googleapis.com/customsearch/v1?key=' + this.apiKey + '&cx=' + this.searchEngineId + '&q=' + search + '&searchType=image', {
            method: 'GET',
        });

        const data = await result.json();
        return data.items.map((image : any) => image.link.includes('.jpg') || image.link.includes('.png')? image.link : '');
    }
}