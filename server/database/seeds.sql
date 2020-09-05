DROP TABLE IF EXISTS usertable;


CREATE TABLE usertable(
    id serial PRIMARY KEY,
    name_id int not null,
    username VARCHAR(20) NOT NULL,
    user_password VARCHAR(50),
    
);

INSERT INTO usertable (name_id, username, user_password) VALUES
    (5, 'Simon', 'enneneneenene');
   