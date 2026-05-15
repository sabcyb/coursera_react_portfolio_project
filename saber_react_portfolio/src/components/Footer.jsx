export default function Footer() {
  return (
    <footer className="w-full px-4 py-6 mt-10">
      <div className="mx-auto max-w-7xl text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Saber Ahmed. All rights reserved.
      </div>
    </footer>
  );
}