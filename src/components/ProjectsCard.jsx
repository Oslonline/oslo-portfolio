const ProjectCard = ({ p }) => {
  const getBadgeStyle = (type) => {
    switch (type) {
      case "Website":
        return "bg-blue-100 text-blue-800";
      case "Design":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <a href={p.link} className="group relative flex flex-col gap-2 self-start rounded-md bg-gray-50 p-4 shadow-sm duration-200 md:hover:scale-[1.02]">
      <div className="relative h-28 w-full rounded-t-md bg-cover bg-center bg-no-repeat md:grayscale filter duration-200 group-hover:filter-none" style={{ backgroundImage: `url(${p.card_img_src})` }}>
        <span className={`absolute right-2 top-2 text-sm rounded-full px-1.5 py-[1px] ${getBadgeStyle(p.type)}`}>{p.type}</span>
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-bold">{p.title}</p>
        <p className="line-clamp-2">{p.short_desc}</p>
        <ul className="flex gap-2 pt-2 flex-wrap">
          {p.stacks.map((stack, index) => (
            <li key={index} className="dark:bg-gray-150 w-fit select-none rounded-full bg-gray-200 px-2 py-0.5 text-sm text-gray-600">
              {stack}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ProjectCard;
