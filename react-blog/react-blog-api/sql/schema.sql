CREATE DATABASE reactBlog;

/c DATABASE reactBlog

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