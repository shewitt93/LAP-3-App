DROP TABLE IF EXISTS activities;
DROP TABLE IF EXISTS users;


CREATE TABLE users
(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(20) NOT NULL,
    email VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL,
    UNIQUE (email)

);

INSERT INTO users
    (name, email, password)
VALUES
    ('dog', 'dog@gmail.com', '$2b$10$hlE6eRv//VgUa7lIREtUbuRvyq8pqCr7Cu3mVtv757M4mcwHMKTT2'),
    ('cat', 'cat@gmail.com', '$2b$10$sMq2GR7ZERkJ/mEl0v/8sOy4Os0d1kLOkg6abEr0X4.HHYTBYZ8e6'),
    ('fox', 'fox@gmail.com', '$2b$10$hgI8NZMUzBINthsYgOUonOVbChinQ1Mm5DuqUaJa6MNuyfGGv0Xla'),
    ('lion', 'lion@gmail.com', '$2b$10$IOuxoVlzEerz27BDlsNwGOBt93zKhQ50w2arVgzGB5PSFLGnLE74u')
;




CREATE TABLE activities
(
    id serial PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    description VARCHAR(500),
    frequency int,
    streak int,
    latest_date date NOT NULL,
    name_id int REFERENCES users (id)
);

INSERT INTO activities
    (name, description, streak, latest_date, name_id)
VALUES
    ('Water', 'Drink 10 glasses per day', 6, '2020-09-09', 1),
    ('Sleep', 'Sleep 8 hours a night', 8, '2020-09-09', 2),
    ('Exercise', 'Exercise 60 mins per day', 0, '2020-09-09', 3),
    ('Food', 'Eat 5 fruits and veg per day', 60, '2020-09-09', 4),
    ('Water', 'Drink 10 glasses per day', 6, '2020-09-08', 4),
    ('Sleep', 'Sleep 8 hours a night', 8, '2020-09-18', 3),
    ('Exercise', 'Exercise 60 mins per day', 0, '2020-09-08', 2),
    ('Food', 'Eat 5 fruits and veg per day', 60, '2020-09-08', 1)
   ; 