class ProductSevice {
  static async doLogin (userObj) {
    try {
      let username = userObj.username;
      // let password = userObj.password;
      const response = await fetch (
        'https://xebiascart.herokuapp.com/users?username=' + username,
        {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'include',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );
      return response;
    } catch (err) {
      console.log (err);
      throw err;
    }
  }
}
export default ProductSevice;
