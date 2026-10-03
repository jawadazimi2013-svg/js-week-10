// Calculate the highest, lowest, and average grade
function getClassStats(grades) {
  let highest = grades[0];
  let lowest = grades[0];
  let total = 0;
  // Loop through all grades using one for...of loop
  for (const grade of grades) {
    if (grade > highest) {
      highest = grade;
    }
    if (grade < lowest) {
      lowest = grade;
    }
    total += grade;
  }
  const average = total / grades.length;
  return {
    highest: highest,
    lowest: lowest,
    average: average,
  };
}
// Test the function
const grades = [88, 95, 72, 91, 65];
const result = getClassStats(grades);
console.log(result);
