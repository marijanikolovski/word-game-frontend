import HttpService from "./HttpService";

class GameService extends HttpService {
    wordsGame = async (term = "") => {
        let endpoint = `/words-game`;

        if (term) {
            endpoint += `/?term=${term}`;
        }
        const { data } = await this.client.get(endpoint);
        return data;
    };

}

export const gameService = new GameService();