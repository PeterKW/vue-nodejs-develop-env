export async function getAllPictures() { //getAllForms

    const response = await fetch('/api/pictures');
    return await response.json();
}