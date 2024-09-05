AOS.init();


const eventDay = new Date("September 28, 2024 10:00:00"); // Corrigido para o formato de data correto
const eventTimeStamp = eventDay.getTime();


const countTime = setInterval(function() {
  const now = new Date();
  const todayTimeStamp = now.getTime();

  const timeDifference = eventTimeStamp - todayTimeStamp;

  
  const dayMs = 1000 * 60 * 60 * 24;
  const hourMs = 1000 * 60 * 60;
  const minuteMs = 1000 * 60;

  const countDaysTilEvent = Math.floor(timeDifference / dayMs);
  const hoursToEvent = Math.floor((timeDifference % dayMs) / hourMs);
  const minutesToEvent = Math.floor((timeDifference % hourMs) / minuteMs);
  const secondsToEvent = Math.floor((timeDifference % minuteMs) / 1000);

  
  document.getElementById('contador').innerHTML = `${countDaysTilEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s `;

  if (timeDifference < 0) {
    clearInterval(countTime);
    document.getElementById('contador').innerHTML = "O evento começou!";
  }


}, 1000);
