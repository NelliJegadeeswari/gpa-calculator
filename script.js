function addSubject() {
    const container = document.getElementById('subjects-container');
    const subjectDiv = document.createElement('div');
    subjectDiv.classList.add('subject');
    subjectDiv.innerHTML = `
        <input type="text" placeholder="Subject Name" class="subject-name" required />
        <input type="number" placeholder="Credit Hours (e.g. 3)" class="credit-hours" required min="1" />
        <input type="text" placeholder="Grade (A/B/C/D/F)" class="grade" required maxlength="2"/>
    `;
    container.appendChild(subjectDiv);
}

document.getElementById('gpa-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const subjects = document.querySelectorAll('.subject');
    let totalCredits = 0;
    let totalPoints = 0;

    subjects.forEach(sub => {
        const credit = parseFloat(sub.querySelector('.credit-hours').value);
        const grade = sub.querySelector('.grade').value.toUpperCase();

        let gradePoint = 0;
        if (grade === 'A') gradePoint = 4;
        else if (grade === 'B') gradePoint = 3;
        else if (grade === 'C') gradePoint = 2;
        else if (grade === 'D') gradePoint = 1;
        else if (grade === 'F') gradePoint = 0;
        else gradePoint = 0;

        totalCredits += credit;
        totalPoints += (gradePoint * credit);
    });

    const gpa = (totalPoints / totalCredits).toFixed(2);
    document.getElementById('result').innerText = `Your GPA is: ${gpa}`;
});
