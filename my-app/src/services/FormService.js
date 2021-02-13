export async function getAllForms() {

    const response = await fetch('/api/forms');
    return await response.json();
}

export async function createForm(data) {
    const response = await fetch(`/api/form`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({form: data})
      })
    return await response.json();
}