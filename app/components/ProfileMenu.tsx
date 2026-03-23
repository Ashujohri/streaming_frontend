interface ProfileMenuProps {
  userIcon: string;
  onSignOut: () => void;
  open: boolean;
}
export default function ProfileMenu({
  userIcon,
  onSignOut,
  open,
}: ProfileMenuProps) {
  return (
    <div className="relative flex items-center">
      <img
        className="w-10 rounded cursor-pointer"
        src={userIcon}
        alt="usericon"
      />

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-black/90 px-6 py-3 rounded-md whitespace-nowrap text-white shadow-2xl animate-[fadeIn_.2s_ease]">
          <button className="hover:underline" onClick={onSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
