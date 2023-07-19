import { error } from '@sveltejs/kit';

export async function load({ fetch }) {

    const url = `https://julianhumm.com/api/projects.json`;
    const response = await fetch(url);

    if (!response.ok) throw error(500, "Server error")

    return await response.json()
}
