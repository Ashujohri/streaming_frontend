interface ProfileMenuProps {
  userIcon: string;
  onSignOut: () => void;
}
export default function ProfileMenu({ userIcon, onSignOut }: ProfileMenuProps) {
  return (
    <div className="group relative cursor-pointer">
      <img className="w-10 rounded" src={userIcon} alt="usericon" />

      <div className="absolute right-0 top-12 flex-col hidden group-hover:flex opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/90 px-6 py-3 rounded-md whitespace-nowrap text-white shadow-lg">
        <button className="hover:underline" onClick={onSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
}
