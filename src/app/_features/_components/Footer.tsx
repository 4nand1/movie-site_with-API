// src/app/_components/Footer.tsx

export function Footer() {
  return (
    <footer className="mt-10 bg-[#2F2DFB] text-white">
      <div className="max-w-6xl mx-auto px-10 py-6 text-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-1">
          <p className="font-semibold">Movie Z</p>
          <p className="text-xs opacity-80">
            © 2024 Movie Z. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-xs opacity-90">
          <span>Contact: info@moviez.com</span>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Instagram</span>
          <span>Twitter</span>
          <span>YouTube</span>
        </div>
      </div>
    </footer>
  );
}
