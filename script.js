function simulateBus() {
    const userId = document.getElementById('userId').value;
    const message = document.getElementById('message').value;
    const computerCount = document.getElementById('computerCount').value;
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear previous output

    if (!userId || !message) {
        outputDiv.innerHTML = '<p class="text-red-500">Please enter your User ID and a message.</p>';
        return;
    }

    // Probability control: 80% chance that all computers work, 20% chance of error
    const errorProbability = Math.random();
    const errorComputer = errorProbability < 0.5 ? Math.floor(Math.random() * computerCount) : -1;
    let flowStopped = false;

    for (let i = 0; i < computerCount; i++) {
        const computerDiv = document.createElement('div');
        computerDiv.className = 'p-4 border rounded-lg shadow-md w-32 text-center';

        if (flowStopped) {
            computerDiv.textContent = `Computer ${i + 1}`;
            computerDiv.classList.add('bg-gray-300');
        } else if (i === errorComputer) {
            computerDiv.textContent = `Computer ${i + 1} (Error)`;
            computerDiv.classList.add('bg-red-500', 'text-white');
            flowStopped = true; // Stop the flow after the error
        } else {
            computerDiv.textContent = `Computer ${i + 1} (Working)`;
            computerDiv.classList.add('bg-green-500', 'text-white');
        }

        outputDiv.appendChild(computerDiv);
    }

    const messageDisplay = document.createElement('p');
    messageDisplay.className = 'mt-4 text-lg font-semibold text-blue-600';
    messageDisplay.textContent = `User ID: ${userId} - Message: ${message}`;
    outputDiv.appendChild(messageDisplay);

    const statusMessage = document.createElement('p');
    statusMessage.className = 'mt-2 text-lg font-semibold';

    if (errorComputer !== -1) {
        statusMessage.textContent = `Error detected in Computer ${errorComputer + 1}. Flow stopped!`;
        statusMessage.classList.add('text-red-600');
    } else {
        statusMessage.textContent = 'All computers are working correctly, Massage has been sent!';
        statusMessage.classList.add('text-green-600');
    }

    outputDiv.appendChild(statusMessage);
}
