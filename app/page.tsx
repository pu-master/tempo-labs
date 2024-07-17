import { getTopStories } from "./actions";
import Story from "./Story";
import { StoryType } from "./types";

export default async function Home() {
  let topStories: StoryType[];

  try {
    topStories = await getTopStories();
  } catch {
    return <>Failed to fetch stories.</>;
  }
  
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold">Top Stories</h1>
      <div className="mt-4 flex flex-col gap-y-4">
        { 
          topStories.map(story => (
            <Story key={story.id} data={story} />
          ))
        }
      </div>
    </main>
  );
}
