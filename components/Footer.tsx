import Image from "next/image";

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">Create by Januar.</p>
      <Image
        src="./logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      <div className="flex items-center gap-6">
        <a href="" target="_blank" rel="noopener noreferrer">
          <Image
            src="./tiktok.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"
          />
        </a>
        <a href="https://instagram.com/januaradhin" target="_blank" rel="noopener noreferrer">
          <Image
            src="./instagram.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"
          />
        </a>
        <a href="https://github.com/januaradhiN77/anime-movie" target="_blank" rel="noopener noreferrer">
          <Image
            src="data:image/png;base64,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"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
