import siteMetadata from 'lib/sitemetadata';
import React, { FunctionComponent } from 'react';

interface IHeaderProps {}

const Header: FunctionComponent<IHeaderProps> = (): JSX.Element => {
  return (
    <header className="flex min-h-[40vh] flex-col items-center justify-center gap-6 bg-primary-900 py-20">
      <h1 className="break-words bg-gradient-to-r from-yellow-500 to-teal-400 bg-clip-text p-2 text-center text-5xl font-extrabold leading-tight tracking-tighter text-transparent sm:leading-10 xl:text-6xl">
        {siteMetadata.title}
      </h1>
      <p className="text-xl font-bold text-gray-200">
        {siteMetadata.description}
      </p>
    </header>
  );
};

export default Header;