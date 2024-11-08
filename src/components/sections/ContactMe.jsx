export default function Socials() {
  return (
    <section className="flex w-full justify-center py-20">
      <div className="flex flex-col items-center gap-8">
        <p className="font-mono text-4xl font-semibold">Socials & Contact</p>
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <a className="group" href="https://github.com/Oslonline">
              <svg className="h-12 fill-black duration-100 group-hover:fill-gray-900 md:h-14" viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg">
                <path d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5" />
              </svg>
            </a>
            <a className="group" href="https://x.com/Oslo418">
              <svg className="h-12 fill-black duration-100 group-hover:fill-gray-900 md:h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z" />
              </svg>
            </a>
          </div>
          <p className="rounded-md bg-gray-50 px-2 py-0.5 text-gray-700 shadow-sm">oslo418@proton.me</p>
        </div>
      </div>
    </section>
  );
}
