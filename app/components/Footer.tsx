export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-10 py-16 text-sm">
      <div className="max-w-5xl mx-auto space-y-8">
        <p>Questions? Call 000-800-919-1694</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "FAQ",
            "Help Center",
            "Account",
            "Media Center",
            "Investor Relations",
            "Jobs",
            "Ways to Watch",
            "Terms of Use",
            "Privacy",
            "Cookie Preferences",
            "Corporate Information",
            "Contact Us",
          ].map((item) => (
            <p key={item} className="hover:underline cursor-pointer">
              {item}
            </p>
          ))}
        </div>

        <button className="border px-4 py-1">English</button>

        <p>Netflix Clone © 2026</p>
      </div>
    </footer>
  );
}
