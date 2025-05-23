import React from "react";

export default function NewsLetterImage() {
  return (
    <div className="w-full lg:w-1/2 h-[300px] lg:h-[1000px]">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="//images.ctfassets.net/8cd2csgvqd3m/65YkBTlG2TE5Iz1jeoqSuB/73d67a0ebbc35fda129c6affca2bca7d/BeoplayH100_ProductHeader_Mobile.jpg?q=90&fm=webp&w=1440 1440w"
        />
        <source
          media="(min-width: 768px)"
          srcSet="//images.ctfassets.net/8cd2csgvqd3m/65YkBTlG2TE5Iz1jeoqSuB/73d67a0ebbc35fda129c6affca2bca7d/BeoplayH100_ProductHeader_Mobile.jpg?q=90&fm=webp&w=1024 1024w"
        />
        <img
          src="//images.ctfassets.net/8cd2csgvqd3m/65YkBTlG2TE5Iz1jeoqSuB/73d67a0ebbc35fda129c6affca2bca7d/BeoplayH100_ProductHeader_Mobile.jpg?q=90&fm=webp&w=375"
          alt="Beoplay H100 apricot on woman"
          className="w-full h-full object-cover"
        />
      </picture>
    </div>
  );
}
