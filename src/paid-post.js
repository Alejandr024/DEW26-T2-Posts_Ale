import Client from "./client.js";
import Post from "./post.js";

class PaidPost extends Post {
  price = 0;
  constructor(name, price) {
    super(name);
    this.price = price;
  }

  attach(client) {
    if (client instanceof Client) {
      super.attach(client);
    }
  }
}

export { PaidPost };
export default PaidPost;
