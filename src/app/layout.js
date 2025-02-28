import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-black dark:bg-gray-900 dark:text-white">
        <nav className="p-4 flex justify-between bg-gray-200 dark:bg-gray-800">
          <a href="/" className="text-xl font-bold">MemeVerse</a>
          <a href="/upload" className="text-lg">Upload</a>
          <a href="/profile" className="text-lg">Profile</a>
          <a href="/leaderboard" className="text-lg">Leaderboard</a>
        </nav>
        {children}
      </body>
    </html>
  );

}
