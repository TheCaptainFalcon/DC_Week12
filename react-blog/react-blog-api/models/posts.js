  
const db = require("./conn.js");

class Posts {
  constructor(id, users_id, title, content) {
    this.id = id;
    this.users_id = users_id;
    this.title = title;
    this.content = content;
  }

  static async getAllPosts() {
    try {
      const response = await db.any(`select * from posts;`);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async getPostsById(post_id) {
    try {
      const response = await db.one(`select * from posts where id = ${post_id}`);
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Posts;