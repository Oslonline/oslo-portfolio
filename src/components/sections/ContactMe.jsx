export default function Socials() {
  return (
    <section className="flex w-full justify-center py-20">
      <div className="flex flex-col items-center gap-8">
        <p className="font-mono text-4xl font-semibold">Socials & Contact</p>
        <div className="flex gap-4 text-sm md:gap-8 md:text-base lg:gap-14">
          <a className="group flex h-fit flex-col items-center gap-2 rounded-md bg-gray-50 p-2 shadow-sm duration-150 hover:shadow-md md:hover:scale-105" href="https://github.com/Oslonline">
            <svg className="h-12 fill-black md:h-14" viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg">
              <path d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5" />
            </svg>
            <p className="rounded-md bg-gray-200 px-2 py-0.5 text-gray-700">@oslonline</p>
          </a>
          <a
            className="group flex translate-y-10 flex-col items-center gap-2 rounded-md bg-gray-50 p-2 shadow-sm duration-150 hover:shadow-md md:translate-y-5 md:hover:scale-105"
            href="mailto:oslo418@proton.me"
          >
            <svg className="stroke-[1.5] h-16 stroke-black md:h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="rounded-md bg-gray-200 px-2 py-0.5 text-gray-700">oslo418@proton.me</p>
          </a>
          <a className="group flex h-fit flex-col items-center gap-2 rounded-md bg-gray-50 p-2 shadow-sm duration-150 hover:shadow-md md:hover:scale-105" href="https://x.com/Oslo418">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className="h-12 fill-black md:h-14">
              <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z" />
            </svg>
            <p className="rounded-md bg-gray-200 px-2 py-0.5 text-gray-700">@Oslo418</p>
          </a>
        </div>
      </div>
    </section>
  );
}
