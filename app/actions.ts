"use server";

import { StoryType } from "./types";

const API_ENDPOINT = 'https://hacker-news.firebaseio.com/v0';

const getStory = async (id: number): Promise<StoryType> => {
    const response = await fetch(`${API_ENDPOINT}/item/${id}.json?print=pretty`);
    return response.json();
}

export const getTopStories = async () => {
    const response = await fetch(`${API_ENDPOINT}/topstories.json?print=pretty`);
    const storyIDs: number[] = await response.json();
    return Promise.all(storyIDs.map(getStory))
}
