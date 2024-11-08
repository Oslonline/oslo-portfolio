export default function MyWorld() {
  return (
    <section className="flex flex-col justify-center md:pb-40">
      <div className="flex w-full flex-col items-center gap-8 rounded-t-md p-4 pb-8">
        <h3 className="text-center font-mono text-4xl font-semibold">My World</h3>
      </div>
      <div className="flex flex-col items-center justify-evenly gap-8 md:flex-row">
        <div className="group relative h-fit duration-150 md:-translate-y-28 md:hover:scale-105">
          <img className="w-64 rounded-md filter duration-200 group-hover:filter-none md:grayscale lg:w-72" src="/my-world/museum.webp" alt="" />
          <span className="absolute bottom-2 left-2 mr-2 rounded-md bg-gray-50 px-2 py-1 text-gray-700">
            <p className="text-xs md:text-sm">Whenever I can, I go to museums to get some inspiration.</p>
          </span>
        </div>
        <div className="group relative h-fit duration-150 md:translate-y-48 md:hover:scale-105">
          <img className="w-full max-w-lg rounded-md filter duration-200 group-hover:filter-none sm:max-h-72 md:grayscale lg:max-h-80" src="/my-world/cat.webp" alt="" />
          <span className="absolute bottom-2 left-2 mr-2 rounded-md bg-gray-50 px-2 py-1 text-gray-700">
            <p className="text-xs md:text-sm">This is my cat. I love cats, who doesn't?</p>
          </span>
        </div>
        <div className="group relative h-fit duration-150 md:hover:scale-105">
          <img className="w-56 rounded-md filter duration-200 group-hover:filter-none md:grayscale lg:w-64" src="/my-world/lake.webp" alt="" />
          <span className="absolute bottom-2 left-2 mr-2 rounded-md bg-gray-50 px-2 py-1 text-gray-700">
            <p className="text-xs md:text-sm">If I'm not responding, I might be at the lake watching the sunset.</p>
          </span>
        </div>
      </div>
    </section>
  );
}
