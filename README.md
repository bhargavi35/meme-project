# MemeVerse - The Ultimate Meme Hub

MemeVerse is a multi-page, interactive website where users can explore, upload, and engage with memes. Built with Next.js and Tailwind CSS, it provides a modern, responsive, and fun experience for meme enthusiasts.

## Features

*   **Trending Memes (Homepage):** Dynamically displays trending memes fetched from the Imgflip API.
*   **Meme Explorer:** Browse memes, filter by category (Trending, New, Classic - *implementation in progress*), and search.
*   **Meme Upload:** Upload your own meme images and add witty captions. (*AI-based caption generation and image hosting integration in progress*)
*   **Meme Details:** View detailed information about a meme, like it, and add comments.
*   **User Profiles:** See user-uploaded memes and edit profile information. (*Persistence and user authentication to be implemented.*)
*   **Leaderboard:** View the top 10 most liked memes and user rankings. (*Data source needs to be connected.*)
*   **Dark Mode:** Toggle between light and dark themes for comfortable browsing.
*   **Responsive Design:** Enjoy MemeVerse on any device, from desktops to smartphones.

## Tech Stack

*   **Frontend:** Next.js (React), Tailwind CSS, Framer Motion
*   **API:** Imgflip API (for meme data), (*ImgBB or similar for image hosting - to be integrated*), (*AI caption generation API - to be integrated*)
*   **State Management:** React's `useState` and `useEffect` hooks.
*   **Local Storage:** Used for storing likes and comments.
*   **Deployment:** Vercel or Netlify.

## Setup

1.  **Clone the repository:**
    ```
    git clone [your repository link here]
    ```
2.  **Install dependencies:**
    ```
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
3.  **Set up environment variables:**
    *   Create a `.env.local` file.
    *   Add your ImgBB API key:

        ```
        NEXT_PUBLIC_IMGBB_API_KEY=YOUR_IMGBB_API_KEY
        ```

4.  **Run the development server:**
    ```
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Known Issues and Future Improvements

*   **Filtering and Searching in Meme Explorer:** The Imgflip API doesn't natively support filtering or searching. A different meme API or client-side filtering is needed for complete implementation.
*   **AI Caption Generation and Image Hosting:** Integration with a real AI caption generation API and image hosting service (like ImgBB) are planned.
*   **User Authentication and Persistence:** Implementing user accounts, persistent data storage (database), and authentication.
*   **Leaderboard Data:** Connecting the leaderboard to a dynamic data source (database) to accurately reflect meme popularity and user engagement.
*   **Responsiveness:** Further optimization and testing across different devices and screen sizes.

### Contributors**

👨‍💻 **Bhargavi Chella** – _Full Stack Developer_  
📩 Email: chellabhargavi2002@gmail.com  
📌 LinkedIn: [https://www.linkedin.com/in/bhargavichella/] 
📌 Portfolio: [https://bhargavi35-portfolio.vercel.app/]

