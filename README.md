# AstroLink - A Twitter Clone

AstroLink is a social media web application inspired by Twitter, designed to connect astronomy enthusiasts. Users can register, log in, post updates, and interact with other users' posts.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Authentication: Register and log in with secure authentication.
- Post Tweets: Share updates with followers.
- View Timeline: See posts from other users.
- User Profiles: View and edit user profiles.
- Responsive Design: Accessible on both desktop and mobile devices.

## Installation

To get started with the AstroLink project, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/AstroLink.git
    cd AstroLink
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env.local` file in the root directory and add your environment variables. Refer to the `.env.example` file for the required variables.

4. Run the development server:

    ```bash
    npm run dev
    ```

Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

### Registration and Login

Users can register and log in to access the application's features.

### Timeline

View posts from users you follow on your timeline.

### User Profiles

View and edit your profile, and view other users' profiles.

### Posting

Share your thoughts and updates by posting tweets.

## Project Structure

```plaintext
AstroLink/
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── public/
│   ├── favicon.ico
│   ├── next.svg
│   └── vercel.svg
├── src/
│   ├── components/
│   │   └── layout/
│   │       ├── footer.tsx
│   │       ├── layout.tsx
│   │       └── navbar.tsx
│   ├── pages/
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx
│   │   ├── login.tsx
│   │   ├── register.tsx
│   │   └── protected/
│   │       ├── astros.tsx
│   │       └── profile.tsx
│   ├── styles/
│   │   └── globals.css
│   └── supabase/
│       ├── protectedRoutes.tsx
│       └── supabase.ts
