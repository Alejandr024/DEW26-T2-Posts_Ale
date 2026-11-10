class User {
  name;

  constructor(name) {
    this.name = name;
  }

  read(text) {
    return `${this.name} is reading ${text}`;
  }

  notify(Post) {
    return `${this.name} is reading ${Post}`;
  }
}

export { User };
export default User;
