import client from './rest-client.js';

describe('client should', () => {
  test('return message when status code is 200', done => {
    global.fetch = jest.fn(() => 
      Promise.resolve({ status: 200, json: () => "hello" }))

    return client.getHelloMessage()
      .then(x => {
        expect(x).toBe("hello")
        done()
      })
  })

  test('return error when status code is not 200', done => {
    global.fetch = jest.fn(() => 
      Promise.resolve({ status: 400 }))

    return client.getHelloMessage()
      .catch(x => {
        expect(x).toEqual(new Error())
        done()
      })
  })
})
