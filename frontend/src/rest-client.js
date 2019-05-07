export default {

  getHelloMessage: () => {
    return fetch('/api/hello')
      .then((response) => {
        if (response.status !== 200) {
          throw new Error();
        }

        return response.json()
      });
  }
}

