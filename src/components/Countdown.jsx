import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/proposal.jpg';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-01T17:30:00"); // Set your target date here
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="text-4xl md:text-6xl text-white font-andada mx-2">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div
      className="relative lg:h-80 p-8 text-center flex items-center justify-center bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Ensures the full image is visible
        minHeight: '85vh', // Ensures the section covers the full viewport height
        paddingTop: '10%', // Adds some padding to maintain aspect ratio
        paddingBottom: '10%', // Adds some padding to maintain aspect ratio
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-wedding-white bg-opacity-50">
        <h2 className="text-8xl text-wedding-darkBrown font-parisienne mb-4 font-bold">Tiempo para el Gran Dia</h2>
        <div className="text-wedding-darkBrown">
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
      </div>
    </div>
  );
};

export default Countdown;
