import { useState } from "react";
import { topics } from "../../../../data/db";

export default function Topics() {
  const [openSections, setOpenSections] = useState(["1", "2", "3"]);

  const toggle = (id) => {
    setOpenSections((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <main className="order-3 lg:row-span-3">
      <header className="mb-5 sm:mb-10">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-5">
          Topics for This Course
        </h2>
        <div className="relative">
          <div className="flex justify-center mb-4">
            <div className="w-10 h-10 border-3 border-progresslocborder rounded-full flex items-center justify-center text-progresstxt text-sm font-semibold relative">
              You
              <div className="absolute -bottom-[18px] flex items-center justify-center text-progresslocborder size-5">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.09496 6L7.20278 0.75H0.98713L4.09496 6Z"
                    fill="#C8C8C8"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="h-[5px] rounded-full bg-gray-200 overflow-hidden">
            <div
              className="h-full bg-successbgprogress rounded-full"
              style={{ width: "63%" }}
            ></div>
          </div>
          <div className="flex justify-center mt-2">
            <span className="text-progresstxt text-sm font-semibold">63%</span>
          </div>
        </div>
      </header>

      <section className="space-y-5">
        {topics.map((topic) => (
          <div key={topic.id} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggle(topic.id)}
              className="w-full px-5 py-4 text-left hover:bg-gray-50 focus:outline-none flex justify-between items-center"
            >
              <div>
                <h5 className="text-lg font-medium">Week {topic.week}</h5>
                <p className="text-gray-600 mb-0">
                  Advanced story telling techniques for writers: Personas,
                  Characters & Plots
                </p>
              </div>
              <div className="relative w-6 h-6">
                {/* Plus Circle */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`text-gray-500 absolute transition-all duration-300 ease-in-out w-6 h-6 ${
                    openSections.includes(topic.id)
                      ? "opacity-0 rotate-0"
                      : "rotate-180 scale-100"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0-1A6 6 0 1 1 8 2a6 6 0 0 1 0 12z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>

                {/* Dash Circle */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`text-gray-500 absolute transition-all duration-300 ease-in-out w-6 h-6 ${
                    openSections.includes(topic.id)
                      ? "opacity-100 rotate-0"
                      : "opacity-0 rotate-180"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0-1A6 6 0 1 1 8 2a6 6 0 0 1 0 12z" />
                  <path d="M5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 5 8z" />
                </svg>
              </div>
            </button>

            <div
              className={`border-t divide-y overflow-hidden transition-all duration-300 ease-in-out ${
                openSections.includes(topic.id)
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {topic.items.map((item, index) => (
                <div
                  key={index}
                  className="px-5 py-3 text-gray-600 flex justify-between items-center"
                >
                  <span className="flex items-center text-sm sm:text-base">
                    {/* File Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 4a.5.5 0 0 1 .5-.5h3.793a.5.5 0 0 1 .353.146l2.207 2.207a.5.5 0 0 1 .147.354V13.5a.5.5 0 0 1-.5.5H5.5A.5.5 0 0 1 5 13.5V4zm4.5.5V6h1.5L9.5 4.5z" />
                      <path d="M4.5 2A1.5 1.5 0 0 0 3 3.5v9A1.5 1.5 0 0 0 4.5 14h7a1.5 1.5 0 0 0 1.5-1.5v-6.379a1.5 1.5 0 0 0-.44-1.06l-2.621-2.621A1.5 1.5 0 0 0 9.379 2H4.5z" />
                    </svg>
                    {item.title}
                  </span>

                  {item.locked ? (
                    <span>
                      {/* Lock Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 ml-3"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a3 3 0 0 0-3 3v3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1V4a3 3 0 0 0-3-3zm-2 6V4a2 2 0 0 1 4 0v3H6z" />
                      </svg>
                    </span>
                  ) : item.hasMetrics ? (
                    <div className="flex space-x-2 flex-col gap-2">
                      <span className="bg-questionbage text-questionbagetxt px-2 py-1 text-xs text-nowrap">
                        0 QUESTION
                      </span>
                      <span className="bg-minutesbage text-minutesbagetxt px-2 py-1 text-xs text-nowrap">
                        10 MINUTES
                      </span>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
