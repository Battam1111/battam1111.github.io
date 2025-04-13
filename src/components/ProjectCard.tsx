interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    githubUrl?: string;
    demoUrl?: string;
  }
  
  export default function ProjectCard({
    title,
    description,
    tags,
    githubUrl,
    demoUrl,
  }: ProjectCardProps) {
    return (
      <div className="border p-6 rounded-xl shadow-sm bg-white space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4 pt-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              className="text-sm text-blue-600 underline hover:text-blue-800"
            >
              GitHub
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              className="text-sm text-green-600 underline hover:text-green-800"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    );
  }
  