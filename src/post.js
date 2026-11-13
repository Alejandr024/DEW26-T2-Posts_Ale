import User from "./user.js";

class Post {
  name = "";
  #number = 0;
  #subscribed = [];

  constructor(name) {
    this.name = name;
  }

  get summary() {
    return `${this.name} publication number ${this.#number}`;
  }

  getSubscribers() {
    if (this.#subscribed.length > 0) {
      return this.#subscribed.map((user) => user.name).join(",");
    } else {
      return "";
    }
  }

  attach(user) {
    if (!this.#subscribed.includes(user) && user instanceof User) {
      this.#subscribed.push(user);
    }
  }

  detach(user) {
    if (this.#subscribed.includes(user)) {
      let indice = this.#subscribed.indexOf(user);
      this.#subscribed.splice(indice, 1);
    }
  }

  publish() {
    this.#number++;
    if (this.#subscribed.length > 0) {
      return this.#subscribed.map((user) => user.notify(this));
    } else {
      return [];
    }
  }
}
export { Post };
export default Post;
