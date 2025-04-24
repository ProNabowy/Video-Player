import { Fragment, useState, useEffect } from "react";
import { defaultComments } from "../../../../data/db";

function Comments() {
  // State for comments
  const [comments, setComments] = useState(() => {
    try {
      const saved = localStorage.getItem("courseComments");
      return saved ? JSON.parse(saved) : defaultComments;
    } catch {
      return defaultComments;
    }
  });

  // State for new comment
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState(() => {
    try {
      return localStorage.getItem("userName") || "";
    } catch {
      return "";
    }
  });

  // Save comments to localStorage
  useEffect(() => {
    localStorage.setItem("courseComments", JSON.stringify(comments));
  }, [comments]);

  // Save username to localStorage
  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    // Get current date
    const now = new Date();
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = now.toLocaleDateString("en-US", options);

    // Create new comment
    const comment = {
      id: Date.now(),
      name: userName || "Anonymous",
      date: formattedDate,
      text: newComment,
      avatar: "/images/user-1.webp", // Default avatar
    };

    // Add to comments array
    setComments([...comments, comment]);

    // Clear input
    setNewComment("");
  };

  return (
    <main className="order-4 bg-bg pt-3 sm:pt-9">
      <h2 className="text-2xl sm:text-4xl font-semibold mb-3 sm:mb-8">
        Comments
      </h2>
      <div className="divide-y divide-gray-200">
        {comments.map((comment) => (
          <div key={comment.id} className="py-8">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/12 p-0">
                <div
                  className="w-[85px] h-[85px] rounded-full bg-cover bg-center mb-2 sm:mb-0"
                  style={{ backgroundImage: `url(${comment.avatar})` }}
                ></div>
              </div>
              <div className="sm:w-11/12 text-gray-600 sm:pl-5">
                <h5 className="text-xl font-medium">{comment.name}</h5>
                <h6 className="mt-3 text-base">{comment.date}</h6>
                <p className="mt-4 text-base">{comment.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <form className="mt-8" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full mb-3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-successbgbtn"
          placeholder="Your name (optional)"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <textarea
          className="w-full mb-4 p-6 border border-gray-300 rounded-md h-[180px] focus:outline-none focus:ring-2 focus:ring-successbgbtn shadow-md"
          placeholder="Write a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          type="submit"
          className="w-[200px] [&_svg]:w-[16px] [&_svg]:fill-white gap-2  h-[60px] bg-successbgbtn text-white font-semibold text-lg rounded-md flex items-center justify-center hover:bg-[#3aa58e] transition-colors"
        >
          Submit Review
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </button>
      </form>
    </main>
  );
}

export default Comments;
