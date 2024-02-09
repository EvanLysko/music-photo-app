

export default class SpotifyAPIController {
    
    clientId = '2a3f071700574bbc97e2194609824ef1';
    clientSecret = 'c541bab83822410b9938a7bfc85598cd';

    //todo add error handling

    public async getToken() {

        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa( this.clientId + ':' + this.clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    }
    
    public async getTrack (token : string, search : string){
        
        const result = await fetch('https://api.spotify.com/v1/search?q=' + search + '&type=track', {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data;
    }
}