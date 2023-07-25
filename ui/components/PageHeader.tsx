import Image from "next/image";

export const PageHeader = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 py-4 items-center">
      <p className="text-center text-2xl text-primary">
        <Image
          className="inline-block pr-2"
          src="/logo.png"
          alt="Fuel Logo"
          width={34}
          height={40}
        />
        FuelGuard
      </p>
      <ul className="flex gap-6 md:ml-auto">
        <li>
          <a
            href="https://www.fuel.network/"
            target="_blank"
            rel="noreferrer"
            className="link-hover"
          >
            Fuel Network
          </a>
        </li>
        <li>
          <a
            href="https://fuellabs.github.io/block-explorer-v2/"
            target="_blank"
            rel="noreferrer"
            className="link-hover"
          >
            Fuel Block Explorer
          </a>
        </li>
        <li>
          <a
            href="https://forum.fuel.network/"
            target="_blank"
            rel="noreferrer"
            className="link-hover"
          >
            Fuel Forum
          </a>
        </li>
      </ul>
    </div>
  );
};
