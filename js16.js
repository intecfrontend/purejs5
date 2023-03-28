checkSpeed(120);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) {
    console.log('OK');
  }
  else {
    let points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) console.log('rijbewijs kwijt');
    else
      console.log('Points', points);
  }
}
