// Function to calculate daily caloric needs based on user inputs
function calculateCalories(weight, height, age, targetWeight, gender) {
    // Mifflin-St Jeor Equation for BMR
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Mifflin-St Jeor for men
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161; // Mifflin-St Jeor for women
    }

    // Activity multiplier (1.2 for sedentary, up to 1.9 for very active)
    const activityLevel = 1.375; // Moderately active (example)
    const dailyCalories = Math.round(bmr * activityLevel);

    // Calculate target daily caloric intake for weight change
    const caloricAdjustment = targetWeight < weight ? -500 : 500; // 500 calorie deficit for loss, surplus for gain
    const targetDailyCalories = dailyCalories + caloricAdjustment;

    // Calculate the number of days to achieve the target weight
    const weightDifference = Math.abs(targetWeight - weight);
    const daysToAchieve = (weightDifference * 7700) / Math.abs(caloricAdjustment); // 7700 calories per kg of body fat

    // Recommended exercise hours per week (based on goals)
    let exerciseHoursPerWeek;
    if (targetWeight < weight) {
        exerciseHoursPerWeek = Math.round(5 + (weightDifference / 2)); // More hours for cutting
    } else if (targetWeight > weight) {
        exerciseHoursPerWeek = Math.round(3 + (weightDifference / 2)); // Moderate hours for bulking
    } else {
        exerciseHoursPerWeek = 2; // Maintenance
    }

    // Determine the exercise recommendations based on weight goals
    let exerciseRecommendations;
    if (targetWeight < weight) {
        exerciseRecommendations = 'Focus on cutting exercises like cardio, HIIT, and circuit training to reduce body fat.';
    } else if (targetWeight > weight) {
        exerciseRecommendations = 'Engage in bulking exercises like weightlifting, strength training, and resistance workouts.';
    } else {
        exerciseRecommendations = 'Incorporate a mix of activities including stretching, yoga, and moderate cardio for overall health.';
    }

    // Calculate percentage of calories for each nutrient based on age
    let nutrientPercentages;
    if (age < 30) {
        nutrientPercentages = {
            carbohydrates: 50,
            protein: 20,
            fat: 30,
        };
    } else if (age < 50) {
        nutrientPercentages = {
            carbohydrates: 45,
            protein: 25,
            fat: 30,
        };
    } else {
        nutrientPercentages = {
            carbohydrates: 40,
            protein: 30,
            fat: 30,
        };
    }

    return { targetDailyCalories, daysToAchieve, exerciseHoursPerWeek, nutrientPercentages, exerciseRecommendations };
}

// Event listener for form submission
document.getElementById('calorie-calculator-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get user inputs
    const currentWeight = parseFloat(document.getElementById('current-weight-input').value);
    const targetWeight = parseFloat(document.getElementById('target-weight-input').value);
    const height = parseFloat(document.getElementById('height-input').value);
    const age = parseInt(document.getElementById('age-input').value);
    const gender = document.querySelector('input[name="gender"]:checked').value; // Get selected gender

    // Validate inputs
    if (isNaN(currentWeight) || isNaN(targetWeight) || isNaN(height) || isNaN(age)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    // Calculate calories and other metrics
    const { targetDailyCalories, daysToAchieve, exerciseHoursPerWeek, nutrientPercentages, exerciseRecommendations } =
        calculateCalories(currentWeight, height, age, targetWeight, gender);

    // Display results
    document.getElementById('result').innerHTML = `
<ul>
    <li><strong>Daily Caloric Requirement:</strong> ${targetDailyCalories} calories</li>
    <li><strong>Number of days to achieve target weight:</strong> ${Math.round(daysToAchieve)} days</li>
    <li><strong>Recommended hours of exercise per week:</strong> ${exerciseHoursPerWeek} hours</li>
    <li><strong>Caloric Composition for Each Nutrient:</strong> You should aim for a daily intake consisting of <strong>${nutrientPercentages.carbohydrates}%</strong> carbohydrates, <strong>${nutrientPercentages.protein}%</strong> protein, and <strong>${nutrientPercentages.fat}%</strong> fat.</li>
    <li><strong>Exercise Recommendations:</strong> ${exerciseRecommendations}</li>
</ul>
`;
});
