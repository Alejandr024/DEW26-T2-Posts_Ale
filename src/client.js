import User from "./user.js";

class Client extends User {
  constructor(name) {
    super(name);
    this.billing = 0;
  }
}

export { Client };
export default Client;
