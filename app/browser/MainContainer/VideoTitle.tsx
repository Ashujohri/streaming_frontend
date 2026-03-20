interface VideoTitleProps {
  title: string;
  overview: string;
}

export default function VideoTitle({ title, overview }: VideoTitleProps) {
  return (
    <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-24 text-white bg-gradient-to-r from-black via-black/70 to-transparent">
      {/* Movie Title */}
      <h1 className="text-5xl font-bold drop-shadow-lg">{title}</h1>

      {/* Overview */}
      <p className="py-6 text-lg w-1/3">{overview}</p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="bg-white text-black px-6 py-2 text-md font-semibold rounded-2xl hover:bg-white/80 transition duration-300">
          ▶ Play
        </button>

        <button className="bg-gray-500/70 text-white px-6 py-2 text-md font-semibold rounded-2xl hover:bg-gray-500/50 transition duration-300">
          ℹ More Info
        </button>
      </div>
    </div>
  );
}
