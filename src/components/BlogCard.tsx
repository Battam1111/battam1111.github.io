interface BlogCardProps {
    title: string;
    date: string;
    summary: string;
    url: string;
    tags?: string[];
  }
  
  export default function BlogCard({
    title,
    date,
    summary,
    url,
    tags,
  }: BlogCardProps) {
    return (
      <div className="p-6 border rounded-xl bg-white space-y-4 shadow-sm">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-400">{date}</p>
        <p className="text-gray-700">{summary}</p>
        {tags && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <a
          href={url}
          target="_blank"
          className="inline-block mt-4 text-sm text-blue-600 hover:underline"
        >
          Read more →
        </a>
      </div>
    );
  }
  