function gradingStudents(grades) {
    let finalScore = []
    for (let score of grades) {
        if (score < 38) {
            finalScore.push(score)
        } else if ((score + 1) % 5 === 0) {
            finalScore.push(score + 1)
        } else if ((score + 2) % 5 === 0) {
            finalScore.push(score + 2)
        } else {
            finalScore.push(score)
        }
    }
    return finalScore;
}

module.exports = gradingStudents;