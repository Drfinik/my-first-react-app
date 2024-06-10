import React from 'react';

function Greeting() {
  const hours = new Date().getHours();
  let greeting;
  if (hours < 12) {
    greeting = 'Доброе утро';
  } else if (hours < 18) {
    greeting = 'Добрый день';
  } else {
    greeting = 'Добрый вечер';
  }

  return <h1>{greeting}!</h1>;
}

export default Greeting;