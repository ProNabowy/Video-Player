// Course Materials Data
export const courseMaterials = {
  duration: "3 weeks",
  lessons: "8",
  enrolled: "65 students",
  language: "English",
  topics: "36",
  price: "80$",
  instructor: "Alex Snow",
  certificate: "Included",
};

// Videos Data
export const videos = [
  {
    id: 1,
    title: "Introduction to the Course",
    url: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    type: "mp4",
    duration: "10:00",
    thumbnail: "/images/course-cover.png",
  },
  {
    id: 2,
    title: "Advanced Storytelling Techniques",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    type: "youtube",
    duration: "15:00",
    thumbnail: "/images/course-cover.png",
  },
  {
    id: 3,
    title: "Character Development",
    url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    type: "mp4",
    duration: "12:00",
    thumbnail: "/images/course-cover.png",
  },
  {
    id: 4,
    title: "Plot Structure",
    url: "https://vimeo.com/824804225",
    type: "vimeo",
    duration: "08:00",
    thumbnail: "/images/course-cover.png",
  },
];

// Topics Data
export const topics = [
  {
    id: "1",
    week: "1-4",
    items: [
      { title: "Introduction", locked: true },
      { title: "Course Overview", locked: true },
      { title: "Course Overview", hasMetrics: true },
      { title: "Course Exercise / Reference Files", locked: true },
      {
        title: "Code Editor Installation (Optional if you have one)",
        locked: true,
      },
      { title: "Embedding PHP in HTML", locked: true },
    ],
  },
  {
    id: "2",
    week: "5-8",
    items: [
      { title: "Defining Functions", locked: true },
      { title: "Function Parameters", locked: true },
      { title: "Return Values From Functions", hasMetrics: true },
      { title: "Global Variable and Scope", locked: true },
      { title: "Newer Way of creating a Constant", locked: true },
      { title: "Constants", locked: true },
    ],
  },
  {
    id: "3",
    week: "5-8",
    items: [
      { title: "Defining Functions", locked: true },
      { title: "Function Parameters", locked: true },
      { title: "Return Values From Functions", hasMetrics: true },
      { title: "Global Variable and Scope", locked: true },
      { title: "Newer Way of creating a Constant", locked: true },
      { title: "Constants", locked: true },
    ],
  },
];

// Default Comments Data
export const defaultComments = [
  {
    id: 1,
    name: "Student Name Gose Here",
    date: "Oct 10,2021",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem facilis tempore reiciendis laboriosam voluptatum dicta expedita aliquam nesciunt vitae eius!",
    avatar: "/images/user-1.webp",
  },
  {
    id: 2,
    name: "Student Name Gose Here",
    date: "Oct 15,2021",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem facilis tempore reiciendis laboriosam voluptatum dicta expedita aliquam nesciunt vitae eius!",
    avatar: "/images/user-2.webp",
  },
  {
    id: 3,
    name: "Student Name Gose Here",
    date: "Oct 19,2021",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem facilis tempore reiciendis laboriosam voluptatum dicta expedita aliquam nesciunt vitae eius!",
    avatar: "/images/user-3.webp",
  },
];
