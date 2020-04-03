const db = require("./conn.js");

class Posts {
  constructor(id, title, content, first_name, users_id) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.first_name = first_name;
    this.users_id = users_id;
  }

  static async getAll() {
    try {
      const response = await db.any(
        `SELECT * 
        FROM posts;`
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async getById(p_id) {
    try {
      const response = await db.one(
        `SELECT * 
        FROM posts 
        WHERE id = ${p_id}`
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async getNameByPostId(p_id) {
    try {
      const response = await db.one(
        `SELECT users.first_name 
        FROM posts INNER JOIN users
        ON posts.user_id = users.id
        WHERE posts.id = ${p_id}`
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async getCommentByPost(p_id) {
    try {
    const response = await db.any(
      `SELECT comments.content
      FROM comments INNER JOIN posts
      ON comments.posts_id = posts.id
      WHERE comments.posts_id = ${p_id}`
    );
    return response;
    } catch (err) {
    return err.message;
    }
  }
}

module.exports = Posts;