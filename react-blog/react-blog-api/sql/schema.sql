CREATE DATABASE reactBlog;

/c reactblog

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(25),
    email VARCHAR(50)
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    users_id INT REFERENCES users(id),
    title VARCHAR(75),
    content TEXT
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    posts_id INT REFERENCES posts(id),
    users_id INT REFERENCES users(id),
    content TEXT
);

-- Query
-- name based on post
SELECT users.first_name
FROM posts INNER JOIN users
ON posts.users_id = users.id
WHERE posts.id = ${p_id}

-- comments based on post # and associated user per that post
-- turns out this may be too complicated to even need oops
SELECT comments.content, comments.id, posts.id, users.id
FROM comments INNER JOIN posts
ON comments.posts_id = posts.id INNER JOIN
users ON posts.users_id = users.id 
WHERE (comments.posts_id = ${p_id} AND comments.users_id = ${p_id};

-- all comments based on post #
SELECT comments.content
FROM comments INNER JOIN posts
ON comments.posts_id = posts.id
WHERE comments.posts_id = ${p_id}