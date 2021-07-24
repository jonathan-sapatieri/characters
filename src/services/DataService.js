import Axios from 'axios';

class DataService {
  constructor() {
    this.baseURL = `https://kitsu.io/api/edge`;
  }

  async getData(url) {
    return await (await Axios.get(url)).data;
  }

  async getFilteredData(category, filter, term, pageLimit = 10) {
    console.log(term);
    const urlFilter = filter && term ? `filter[${filter}]=${term}` : '';
    const urlPageLimit = `page[limit]=${pageLimit}`;
    const url = `${this.baseURL}/${category}?${urlFilter}&${urlPageLimit}`;
    console.log('REQUEST: ' + url);
    return await (await Axios.get(url)).data;
  }

  async getMedias(mediaCharacterUrl) {
    const mediasCharacter = await (await Axios.get(mediaCharacterUrl)).data;
    const mediasCharacterUrls = mediasCharacter.data.map(
      (media) => media.relationships.media.links.related
    );
    return await Promise.all(
      mediasCharacterUrls.map(async (mediaUrl) => {
        return await (await this.getData(mediaUrl)).data;
      })
    );
  }
}

export default new DataService();
