export default function Footer() {
  return (
    <footer className="w-full px-4 py-8 mt-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900 border-t border-slate-800 shadow-inner shadow-slate-950/20">
      <div className="mx-auto max-w-7xl text-center text-sm text-slate-400">
        &copy; {new Date().getFullYear()} Saber Ahmed. All rights reserved.
      </div>
    </footer>
  );
}