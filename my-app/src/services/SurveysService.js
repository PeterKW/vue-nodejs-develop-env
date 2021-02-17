export async function getAllSurveys() {

    const response = await fetch('/api/surveys');

    return await response.json();
}

export async function createSurvey(data) {
    const response = await fetch(`/api/survey`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({survey: data})
      })
    return await response.json();
}