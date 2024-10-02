// Array of steps with images and instructions
const steps = [
    { name: "Pranamasana (Prayer Pose)", img: "./assets/surya-namaskar/sn-1.png", instruction: "Stand straight, palms together in front of the chest." },
    { name: "Hasta Uttanasana (Raised Arms Pose)", img: "./assets/surya-namaskar/sn-2.png", instruction: "Raise your arms above your head and bend backward slightly." },
    { name: "Uttanasana (Standing Forward Bend)", img: "./assets/surya-namaskar/sn-3.png", instruction: "Bend forward, placing your hands beside your feet." },
    { name: "Ashwa Sanchalanasana (Equestrian Pose)", img: "./assets/surya-namaskar/sn-4.png", instruction: "Step your right leg back, keeping your left foot between your hands." },
    { name: "Dandasana (Stick Pose)", img: "./assets/surya-namaskar/sn-5.png", instruction: "Step the left leg back and bring your body in a straight line." },
    { name: "Ashtanga Namaskara (Eight-Limbed Pose)", img: "./assets/surya-namaskar/sn-6.png", instruction: "Lower your knees, chest, and chin to the floor." },
    { name: "Bhujangasana (Cobra Pose)", img: "./assets/surya-namaskar/sn-7.png", instruction: "Lift your chest forward and up into a gentle backbend." },
    { name: "Adho Mukha Svanasana (Downward-Facing Dog Pose)", img: "./assets/surya-namaskar/sn-8.png", instruction: "Lift your hips up and back into an inverted V position." },
    { name: "Ashwa Sanchalanasana", img: "./assets/surya-namaskar/sn-9.png", instruction: "Step your right foot forward between your hands." },
    { name: "Uttanasana", img: "./assets/surya-namaskar/sn-10.png", instruction: "Step the left foot forward and bend over your legs." },
    { name: "Hasta Uttanasana", img: "./assets/surya-namaskar/sn-11.png", instruction: "Raise your arms and bend backward slightly." },
    { name: "Pranamasana", img: "./assets/surya-namaskar/sn-12.png", instruction: "Stand straight and bring your palms together." }
];

let currentStepIndex = 0;  // Keep track of the current step
let isPlaying = false;  // Keep track of whether the session is active
let timeoutID;  // To store the timeout so we can stop it

// Get references to the elements
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const currentStepElement = document.getElementById('current-step');
const currentStepImg = document.getElementById('current-step-img');

// Function to start the follow-along session
function startSuryaNamaskar() {
    currentStepIndex = 0;
    isPlaying = true;
    showNextStep();
}

// Function to stop the session
function stopSuryaNamaskar() {
    isPlaying = false;
    clearTimeout(timeoutID);  // Stop the timeout
    currentStepElement.querySelector('h3').textContent = "Session stopped.";
    currentStepElement.querySelector('p').textContent = "";
    currentStepImg.src = "./assets/surya-namaskar/surya-namaskar.jpg";  // Clear the image
}

// Function to display the next step
function showNextStep() {
    if (isPlaying && currentStepIndex < steps.length) {
        const step = steps[currentStepIndex];
        currentStepElement.querySelector('h3').textContent = step.name;
        currentStepElement.querySelector('p').textContent = step.instruction;
        currentStepImg.src = step.img;
        
        // Voice narration
        speak(step.instruction);
        
        currentStepIndex++;
        // Set a 10-second pause before showing the next step
        timeoutID = setTimeout(showNextStep, 10000);
    } else if (currentStepIndex >= steps.length) {
        isPlaying = false;
        currentStepElement.querySelector('h3').textContent = "Session completed!";
        currentStepElement.querySelector('p').textContent = "";
        currentStepImg.src = "";  // Clear the image
    }
}

// Function to speak the instructions
function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
}

// Event listeners to start and stop the follow-along session
startBtn.addEventListener('click', startSuryaNamaskar);
stopBtn.addEventListener('click', stopSuryaNamaskar);
