import React from 'react';
import Greeting from './Greeting';
import CurrentTime from './CurrentTime';
import EventCard from './EventCard';

function App() {
  return (
    <div>
      <Greeting />
      <CurrentTime />
      <EventCard title="Концерт группы 'Би-2'" date="24 июня 2024" location="Москва, СК 'Олимпийский'" />
      <EventCard title="Выставка живописи" date="5 июля 2024" location="Санкт-Петербург, Эрмитаж" />
      <EventCard title="Фестиваль науки" date="12 августа 2024" location="Новосибирск, Экспоцентр" />
    </div>
  );
}

export default App;