import { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { videos } from "../../data/db";
import { FaceBook, LinkedIn, Twitter, Youtube } from "../../assets/icons";

export default function VideoControl() {
  const playerRef = useRef(null);

  const [currentVideoId, setCurrentVideoId] = useState(() => {
    try {
      const savedId = localStorage.getItem("currentVideoId");
      return savedId ? parseInt(savedId) : videos[0].id;
    } catch {
      return videos[0].id;
    }
  });

  const currentVideo =
    videos.find((video) => video.id === currentVideoId) || videos[0];

  const [watchedVideos, setWatchedVideos] = useState(() => {
    try {
      const saved = localStorage.getItem("watchedVideos");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [videoProgress, setVideoProgress] = useState(() => {
    try {
      const saved = localStorage.getItem("videoProgress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    localStorage.setItem("currentVideoId", currentVideoId.toString());
  }, [currentVideoId]);

  useEffect(() => {
    localStorage.setItem("watchedVideos", JSON.stringify(watchedVideos));
  }, [watchedVideos]);

  useEffect(() => {
    localStorage.setItem("videoProgress", JSON.stringify(videoProgress));
  }, [videoProgress]);

  useEffect(() => {
    if (ready && playerRef.current) {
      const savedProgress = videoProgress[currentVideoId];
      const duration = playerRef.current.getDuration();

      if (
        savedProgress &&
        savedProgress.playedSeconds > 0 &&
        savedProgress.playedSeconds < duration - 2
      ) {
        try {
          playerRef.current.seekTo(savedProgress.playedSeconds, "seconds");
        } catch (err) {
          console.error("Error seeking to position:", err);
        }
      }
    }
  }, [ready, currentVideoId]);

  const handleProgress = ({ played, playedSeconds }) => {
    setVideoProgress((prev) => ({
      ...prev,
      [currentVideoId]: { played, playedSeconds },
    }));

    if (played > 0.8 && !watchedVideos[currentVideoId]) {
      setWatchedVideos((prev) => ({
        ...prev,
        [currentVideoId]: true,
      }));
    }
  };

  const handleVideoEnd = () => {
    setWatchedVideos((prev) => ({
      ...prev,
      [currentVideoId]: true,
    }));
  };

  const handleVideoChange = (videoId) => {
    setCurrentVideoId(videoId);
    setError(null);
    setLoading(true);
    setReady(false);
  };

  const handleReady = () => {
    setTimeout(() => {
      setLoading(false);
      setError(null);
      setReady(true);
    }, 500); // Delay to ensure player is really ready
  };

  const handleError = (e) => {
    console.error("Video playback error:", e);
    setError("There was an error playing this video. Please try another one.");
    setLoading(false);
  };

  const handleBuffer = () => {};
  const handleBufferEnd = () => setLoading(false);

  const getFormatBadgeColor = (type) => {
    switch (type) {
      case "youtube":
        return "bg-red-500";
      case "vimeo":
        return "bg-blue-500";
      default:
        return "bg-blue-600";
    }
  };

  return (
    <main className="order-1 bg-bg">
      <div className="video-player-container">
        <div className="video-player">
          {error ? (
            <div className="video-error">
              <p>{error}</p>
              <button
                className="px-4 py-2 bg-white text-black rounded-md mt-3 hover:bg-gray-100 transition-colors"
                onClick={() => handleVideoChange(videos[0].id)}
              >
                Try First Video
              </button>
            </div>
          ) : (
            <>
              {loading && (
                <div className="video-loading">
                  <div
                    className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}
              <ReactPlayer
                ref={playerRef}
                url={currentVideo.url}
                width="100%"
                height="100%"
                controls
                playing={false}
                onProgress={handleProgress}
                onEnded={handleVideoEnd}
                onReady={handleReady}
                onError={handleError}
                onBuffer={handleBuffer}
                onBufferEnd={handleBufferEnd}
                progressInterval={1000}
                config={{
                  file: {
                    attributes: {
                      poster: currentVideo.thumbnail,
                    },
                  },
                  youtube: {
                    playerVars: {
                      modestbranding: 1,
                      rel: 0,
                    },
                  },
                  vimeo: {
                    playerOptions: {
                      responsive: true,
                    },
                  },
                }}
              />
            </>
          )}
        </div>

        <div className="video-list mt-4">
          <h4 className="text-xl font-semibold mb-3">Course Videos</h4>
          <div className="divide-y divide-gray-200">
            {videos.map((video) => (
              <div
                key={video.id}
                className={`video-item ${
                  currentVideoId === video.id ? "active" : ""
                } p-3 cursor-pointer`}
                onClick={() => handleVideoChange(video.id)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span>{video.title}</span>
                    <span
                      className={`ml-2 px-2 py-1 text-xs text-white rounded ${getFormatBadgeColor(
                        video.type
                      )}`}
                    >
                      {video.type.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center">
                    {watchedVideos[video.id] && (
                      <span className="text-green-500 mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 11.03a.75.75 0 0 0 1.08 0l4.992-4.992a.75.75 0 0 0-1.08-1.08L7.5 9.439 5.53 7.47a.75.75 0 0 0-1.06 1.06l2.5 2.5z" />
                        </svg>
                      </span>
                    )}
                    <span className="text-gray-500">{video.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center flex-col sm:flex-row my-3">
            <section className="[&_svg]:w-[16px]">
              <button className="w-10 h-10 rounded-full border border-border hover:bg-gray-100 flex items-center justify-center mr-4 inline-flex">
                <FaceBook className="!w-[10px]" />
              </button>
              <button className="w-10 h-10 rounded-full border border-border hover:bg-gray-100 flex items-center justify-center mr-4 inline-flex">
                <Twitter />
              </button>
              <button className="w-10 h-10 rounded-full border border-border hover:bg-gray-100 flex items-center justify-center mr-4 inline-flex">
                <LinkedIn />
              </button>
              <button className="w-10 h-10 rounded-full border border-border hover:bg-gray-100 flex items-center justify-center mr-4 inline-flex">
                <Youtube />
              </button>
            </section>
            <div className="mt-3 text-right">
              <button
                className="px-3 py-1 text-sm border border-red-500 text-red-500 rounded hover:bg-red-50 transition-colors"
                onClick={() => {
                  localStorage.removeItem("videoProgress");
                  localStorage.removeItem("watchedVideos");
                  localStorage.removeItem("currentVideoId");
                  window.location.reload();
                }}
              >
                Reset Progress
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
