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

INSERT INTO comments(posts_id, users_id, content)
VALUES (1, 1, 'I AM SERIOUS GUYS'),
(1, 1, 'I really am'),
(1, 2, 'wooooo'),
(1, 2, 'yeahhh'),
(1, 3, 'STEAK'),
(1, 3, 'WHISKEY'),
(2, 1, 'leslie post 2'),
(2, 2, 'other post 2'),
(2, 2, 'another post 2'),
(2, 3, 'pancakes'),
(2, 3, 'more cake'),
(3, 1, 'stress'),
(3, 2, 'say im better than you'),
(3, 2, 'guitar rift'),
(3, 3, 'cigar'),
(3, 3, 'gold')