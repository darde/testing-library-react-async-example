export default jest.fn(async (term = 'beaches', page = 1) => {
  return Promise.resolve([{
    id: 1,
    alt_description: 'Photo of beach!!',
    urls: {
      thumb: 'http://beach.jpg',
    },
  }]);
});