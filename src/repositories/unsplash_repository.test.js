import mockAxios from 'axios';
import unsplash from './unsplash_repository';

describe('Unsplash Repository', () => {
  describe('when does a get request for unsplash repository', () => {
    let images;

    beforeEach(async () => {
      mockAxios.get.mockClear();
      images = await unsplash('beaches');
    });

    it('should call repository correctly', () => {
      const expectedResponse = [{
        id: 1,
        alt_description: 'Photo of beach',
        urls: {
          thumb: 'http://beach.jpg',
        },
      }];

      expect(mockAxios.get).toHaveBeenCalledTimes(1);
      expect(images).toEqual(expectedResponse);
    });

    it('should be called once', () => {
      expect(mockAxios.get).toHaveBeenCalledTimes(1);
    })

    it('should be called with correct parameters', () => {
      expect(mockAxios.get).toHaveBeenCalledWith(
        "https://api.unsplash.com/search/photos",
        {"params": {
          "client_id": process.env.REACT_APP_ACCESS_KEY,
          "query": "beaches"
        }});
    });
  })
})