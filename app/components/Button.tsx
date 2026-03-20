interface ButtonProps{
    icon?: any;
}

export default function CircleBtn({ icon }: ButtonProps) {
  return (
    <button
      className="
        w-10 h-10
        rounded-full
        bg-black/60
        border border-gray-400
        flex items-center justify-center
        hover:bg-white hover:text-black
        transition
      "
    >
      {icon}
    </button>
  );
}