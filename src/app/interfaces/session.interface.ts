import { StoryInterface } from './story.interface';

export interface SessionInterface {
    name: string;
    numberOfVoters: number;
    storyList: StoryInterface[];
}
