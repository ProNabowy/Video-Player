# Video Player Application

A modern React-based video player application for online courses with features like video playback, course materials, topics, and comments.

## Features

- **Video Playback**: Support for multiple video formats (MP4, YouTube, Vimeo)
- **Course Materials**: Display course information like duration, lessons, enrolled students, etc.
- **Topics**: Organized course content with expandable sections
- **Comments**: User comments with the ability to add new comments
- **Progress Tracking**: Tracks video progress and watched videos
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **React**: Frontend library for building user interfaces
- **React Router**: For navigation
- **Tailwind CSS**: For styling
- **React Player**: For video playback
- **Vite**: For fast development and building

## Project Structure

```
src/
├── assets/         # Static assets like icons and styles
├── components/     # Reusable components
│   └── VideoControl/  # Video player component
├── data/           # Application data
│   └── db.js       # Centralized data store
├── layouts/        # Layout components
│   └── Navbar/     # Navigation bar
├── pages/          # Page components
│   └── CourseDetails/  # Course details page
│       └── components/ # Course details components
│           ├── Comments/  # Comments section
│           ├── Materials/ # Course materials section
│           └── Topics/    # Course topics section
└── routes/         # Routing configuration
```

## Data Structure

The application uses a centralized data store in `src/data/db.js` with the following structure:

### Course Materials

```javascript
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
```

### Videos

```javascript
export const videos = [
  {
    id: 1,
    title: "Introduction to the Course",
    url: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    type: "mp4",
    duration: "10:00",
    thumbnail: "/images/course-cover.png",
  },
  // More videos...
];
```

### Topics

```javascript
export const topics = [
  {
    id: "1",
    week: "1-4",
    items: [
      { title: "Introduction", locked: true },
      { title: "Course Overview", locked: true },
      // More items...
    ],
  },
  // More topics...
];
```

### Comments

```javascript
export const defaultComments = [
  {
    id: 1,
    name: "Student Name Gose Here",
    date: "Oct 10,2021",
    text: "Lorem ipsum dolor sit amet consectetur...",
    avatar: "/images/user-1.webp",
  },
  // More comments...
];
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

   ```
   git clone https://github.com/ProNabowy/Video-Player
   ```

2. Navigate to the project directory

   ```
   cd video-player
   ```

3. Install dependencies

   ```
   npm install
   ```

4. Start the development server

   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Usage

### Video Playback

- Click on a video in the list to play it
- The player supports MP4, YouTube, and Vimeo videos
- Video progress is automatically saved
- Videos are marked as watched when 80% complete

### Course Materials

- View course information like duration, lessons, enrolled students, etc.

### Topics

- Click on a topic to expand/collapse it
- View locked and unlocked content
- Track your progress through the course

### Comments

- View existing comments
- Add a new comment by filling out the form
- Comments are saved to localStorage

## Building for Production

To build the application for production:

```
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
