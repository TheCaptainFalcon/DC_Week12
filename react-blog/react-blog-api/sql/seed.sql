INSERT INTO users(first_name, email) 
VALUES ('Leslie', 'lknope@prs.gov'),
('Andy', 'adwyer@prs.gov'),
('Ron', 'rswanson@prs.gov');

INSERT INTO posts (users_id, title, content) 
VALUES (1,'ANNOUNCEMENT: Hosting for Lil Sebastion', 'Here are a list of items we need: food, drinks, tables, chairs, haystacks'),
(1, 'ANNOUNCEMENT: Hosting for Lil Sebastion [UPDATE]', 'We have 3 days left before the big event! We do however, still need CHAIRS'),

(2, 'my first POST WOW', 'heY CHeCk OuT mY NEw sHoE ShiNE sTatIoN'),
(2,'REEEEEEEEEEE', 'i like beef tornados'),

(3, 'Dear Canada...', 'YOU SUCK'),
(3, 'IMPORTANT: Why your Government matters', 'It doesn''t');
