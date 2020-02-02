export default {
  get: jest.fn(() => Promise.resolve({
    data: { results: [{
      id: 1,
      alt_description: 'Photo of beach',
      urls: {
        thumb: 'http://beach.jpg',
      },
    }] } 
  })),
}