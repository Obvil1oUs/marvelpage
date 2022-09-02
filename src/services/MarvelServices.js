class MarvelServices {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=290e37aa0774986dcb66a244b31ff29c'

    getResources = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResources(`${this._apiBase}characters?limit=9&offset=155&${this._apiKey}`);
    }

    getCharacter = (id) => {
        return this.getResources(`${this._apiBase}characters/${id}?${this._apiKey}`)
    }
}

export default MarvelServices;