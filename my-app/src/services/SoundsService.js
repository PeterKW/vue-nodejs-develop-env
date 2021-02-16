export async function getAllSounds() { //getAllForms

    const response = await fetch('/api/sounds');
    return await response.json();
}