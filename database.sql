CREATE DATABASE compro_onboarding;

CREATE TABLE onboarding_tasks(
  id SERIAL PRIMARY KEY,
  module VARCHAR(255) NOT NULL,
  contents VARCHAR(255) NOT NULL,
  duration INT NOT NULL,
  finished BOOLEAN DEFAULT false
);

INSERT INTO onboarding_tasks (module,contents,duration)
VALUES('HTML', 'HTML Semantics, forms', 1);