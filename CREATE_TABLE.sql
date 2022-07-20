DROP TABLE IF EXISTS thought CASCADE;
CREATE TABLE thought (
  id SERIAL PRIMARY KEY,
  thought_datetime TIMESTAMP NOT NULL,
  situation CHARACTER VARYING,
  feeling CHARACTER VARYING,
  percent INTEGER,
  automatic_thinking CHARACTER VARYING,
  base CHARACTER VARYING,
  objection CHARACTER VARYING,
  new_thinking CHARACTER VARYING,
  new_feeling CHARACTER VARYING,
  new_percent INTEGER
);