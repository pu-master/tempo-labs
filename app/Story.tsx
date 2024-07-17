import { StoryType } from "./types";

interface Props {
    data: StoryType;
}

export default function Story({ data }: Props) {
    return (
        <div className="flex flex-col gap-y-2">
            <h5 className="font-semibold text-lg">{data.title}</h5>
            <span>Published At: {new Date(data.time * 1000).toISOString()}</span>
            <a href={data.url} title={data.title} target="_blank">See</a>
        </div>
    );
}