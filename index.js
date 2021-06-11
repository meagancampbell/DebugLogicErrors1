// Run this sample code as-is and examine the output. 
// Should the shuttle have launched? 
// Did it?
// Do not worry about fixing the code yet, we will do that in the next series of exercises.

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

 if (fuelLevel >= 20000) {
  console.log('Fuel level cleared.');
  launchReady = true;
   } else {
    console.log('WARNING: Insufficient fuel!');
  launchReady = false;
}
console.log("launchReady =", launchReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   crewReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   crewReady = false;
}

console.log("crewReady = ", crewReady);


if (launchReady) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}


// The issue is with the launchReady value being assigned and reassigned based on different checks. One way to fix the logic error is to use two different variables to store the results of checking the fuel readiness (lines 6-13) and checking the crew and computer readiness (lines 15-22).

// Update your code to do this. Verify that your change works by updating the console.log statements.

