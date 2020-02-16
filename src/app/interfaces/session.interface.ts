import { StoryInterface } from './story.interface';

export interface SessionInterface {
    _id: string;
    name: string;
    numberOfVoters: number;
    storyList: StoryInterface[];
}
