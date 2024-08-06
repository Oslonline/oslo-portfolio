export default function MyWorld() {
  return (
    <section className="flex flex-col justify-center pb-40">
      <div className="flex w-full flex-col items-center gap-8 rounded-t-md p-4">
        <h3 className="text-center font-mono text-4xl font-semibold">My World</h3>
      </div>
      <div className="flex flex-col items-center justify-evenly gap-4 md:flex-row">
        <div className="group relative h-fit duration-150 hover:scale-105 md:-translate-y-28">
          <img className="w-64 rounded-md grayscale filter duration-200 group-hover:filter-none lg:w-72" src="/my-world/museum.webp" alt="" />
          <span className="absolute bottom-2 left-2 mr-2 rounded-md bg-gray-50 px-2 py-1 text-gray-700">
            <p className="text-sm">Visiting museums when i can to get some inspiration.</p>
          </span>
        </div>
        <div className="group relative h-fit duration-150 hover:scale-105 md:translate-y-48">
          <img className="h-72 rounded-md grayscale filter duration-200 group-hover:filter-none lg:h-80" src="/my-world/cat.webp" alt="" />
          <span className="absolute bottom-2 left-2 mr-2 rounded-md bg-gray-50 px-2 py-1 text-gray-700">
            <p className="text-sm">This is my cat, i love cats, who don't ?!</p>
          </span>
        </div>
        <div className="group relative h-fit duration-150 hover:scale-105">
          <img className="w-56 rounded-md grayscale filter duration-200 group-hover:filter-none lg:w-64" src="/my-world/lake.webp" alt="" />
          <span className="absolute bottom-2 left-2 mr-2 rounded-md bg-gray-50 px-2 py-1 text-gray-700">
            <p className="text-sm">If im not responding im maybe at the lake watching the sunset.</p>
          </span>
        </div>
      </div>
    </section>
  );
}
