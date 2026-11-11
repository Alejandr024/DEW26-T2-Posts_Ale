import User from "./user.js";
import PaidPost from "./paid-post.js";

class Client extends User {
  billing = 0;

  constructor(name) {
    super(name);
  }

  notify(post) {
    let message = super.notify(post);
    if (post instanceof PaidPost) {
      this.billing = Math.round((this.billing + post.price) * 100) / 100;
    }
    return message;
  }
}

export { Client };
export default Client;
