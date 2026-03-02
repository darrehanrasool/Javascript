// Coding Challenge #2 With AI Written by ChatGPT
/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, 
you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)
TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/
function analyzeWorkWeek(dailyHours) {
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  // validate that the input array has exactly 7 elements
  //.toFixed() builtin funtion return type string
  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    console.warn('Input must be an array of exactly 7 daily work hours.');
    return -1;
  } else {
    // Calculate total hours worked
    const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);
    // Calculate average daily hours, rounded to one decimal place
    const averageHours =
      Math.round((totalHours / dailyHours.length) * 100) / 100;
    // const averageHours = Number((totalHours / dailyHours.length).toFixed(2));
    // Find the day with the most hours worked via built in funtion and spread operator
    const maxHours = Math.max(...dailyHours);
    const maxDayIndex = dailyHours.indexOf(maxHours);
    const maxDay = daysOfWeek[maxDayIndex]; // Convert index to day name
    // Count the number of days worked
    const daysWorked = dailyHours.filter(hours => hours > 0).length;
    // Check if the week was full-time (35 hours or more)
    const isFullTime = totalHours >= 35;
    // Return the result in the form of javascript variable object
    return {
      totalHours,
      averageHours,
      maxDay,
      daysWorked,
      isFullTime,
    };
  }
}
const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 5, 0];
const analysis = analyzeWorkWeek(weeklyHours);
console.log(analysis);
const weeklyHours2 = [7.5, 8, 6.5, 0, 8.5];
const analysis2 = analyzeWorkWeek(weeklyHours2);
console.log(analysis2);
