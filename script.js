function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    if (dobInput) {
        const dob = new Date(dobInput);
        const today = new Date();
        
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        const dayDiff = today.getDate() - dob.getDate();
        
        // Adjust age if the current month and day are before the birthday month and day
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }
        
        document.getElementById('result').innerText = `Your age is ${age} years old.`;
    } else {
        document.getElementById('result').innerText = alert('Please select your date of birth.');
    }
}