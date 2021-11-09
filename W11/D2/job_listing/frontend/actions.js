export const SWITCH_LOCATION = "SWITCH_LOCATION";

export const selectLocation = (city, jobs) => ({
  type: SWITCH_LOCATION,
  city,
  jobs
});







//  Let's define and export a selectLocation function that takes as arguments a city string and a jobs array. It returns an action (i.e. a POJO, plain old javascript object) with the following keys and values:

// type: "SWITCH_LOCATION"
// city
// jobs
// Set it temporarily on the window(window.selectLocation = selectLocation) and make sure it's working properly in the console before moving on.