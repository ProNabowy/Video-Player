# Video Player Application Documentation

This document provides detailed information about the components, data flow, and functionality of the Video Player Application.

## Table of Contents

1. [Application Overview](#application-overview)
2. [Component Documentation](#component-documentation)
   - [VideoControl Component](#videocontrol-component)
   - [Materials Component](#materials-component)
   - [Topics Component](#topics-component)
   - [Comments Component](#comments-component)
3. [Data Management](#data-management)
4. [Routing](#routing)
5. [Styling](#styling)
6. [Local Storage Usage](#local-storage-usage)

## Application Overview

The Video Player Application is a React-based web application designed for online courses. It provides a comprehensive interface for video playback, course materials, topics, and user comments. The application is built with React, React Router, Tailwind CSS, and React Player.

## Component Documentation

### VideoControl Component

**Location:** `src/components/VideoControl/VideoControl.jsx`

**Purpose:** Manages video playback and provides a list of available videos.

**Key Features:**

- Supports multiple video formats (MP4, YouTube, Vimeo)
- Tracks video progress and saves it to localStorage
- Marks videos as watched when 80% complete
- Provides a list of available videos with status indicators

**State Management:**

- `currentVideoId`: Tracks the currently selected video
- `watchedVideos`: Tracks which videos have been watched
- `videoProgress`: Stores the progress of each video
- `error`: Handles video playback errors
- `loading`: Manages loading state
- `ready`: Tracks when the player is ready

**Key Functions:**

- `handleProgress`: Updates video progress and marks videos as watched
- `handleVideoEnd`: Marks a video as watched when it ends
- `handleVideoChange`: Changes the current video
- `handleReady`: Handles player ready state
- `handleError`: Handles video playback errors

### Materials Component

**Location:** `src/pages/CourseDetails/components/Materials/Materials.jsx`

**Purpose:** Displays course information such as duration, lessons, enrolled students, etc.

**Data Source:** `courseMaterials` from `src/data/db.js`

**Layout:**

- Two-column grid layout on larger screens
- Single column on mobile devices
- Displays course information in a clean, organized manner

### Topics Component

**Location:** `src/pages/CourseDetails/components/Topics/Topics.jsx`

**Purpose:** Displays course topics in an expandable/collapsible format.

**Data Source:** `topics` from `src/data/db.js`

**Key Features:**

- Expandable/collapsible sections for each week
- Visual indicators for locked and unlocked content
- Progress tracking
- Responsive design

**State Management:**

- `openSections`: Tracks which sections are expanded

**Key Functions:**

- `toggle`: Toggles the expanded state of a section

### Comments Component

**Location:** `src/pages/CourseDetails/components/Comments/Comments.jsx`

**Purpose:** Displays user comments and allows adding new comments.

**Data Source:** `defaultComments` from `src/data/db.js`

**Key Features:**

- Displays existing comments with user avatars
- Allows adding new comments
- Saves comments to localStorage
- Responsive design

**State Management:**

- `comments`: Stores all comments
- `newComment`: Tracks the text of a new comment
- `userName`: Tracks the name of the commenter

**Key Functions:**

- `handleSubmit`: Handles form submission for new comments

## Data Management

The application uses a centralized data store in `src/data/db.js` to manage all dummy data. This approach makes it easy to update data in one place and have it reflected throughout the application.

### Data Structure

The data is organized into four main sections:

1. **Course Materials:** Basic information about the course
2. **Videos:** List of available videos with metadata
3. **Topics:** Course content organized by weeks
4. **Comments:** User comments with metadata

## Routing

The application uses React Router for navigation. The routing configuration is defined in `src/routes/routes.jsx`.

**Current Routes:**

- `/`: Displays the CourseDetails page

## Styling

The application uses Tailwind CSS for styling. The Tailwind configuration is defined in `tailwind.config.js`.

**Key Customizations:**

- Custom colors for various UI elements
- Custom font family (League Spartan)
- Custom border width

## Local Storage Usage

The application uses localStorage to persist user data across sessions:

1. **Video Progress:**

   - `currentVideoId`: Stores the ID of the currently selected video
   - `watchedVideos`: Stores which videos have been watched
   - `videoProgress`: Stores the progress of each video

2. **Comments:**
   - `courseComments`: Stores all comments
   - `userName`: Stores the name of the commenter

This approach allows the application to maintain state across page refreshes and browser sessions.
