import React, { useState } from "react";
import Card from "./Card";

const Foreground = () => {

    const ref = React.useRef(null);

  const data = [
    {
      desc: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      filesize: "4.3mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "A room without books is like a body without a soul.",
      filesize: ".8mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "blue" },
    },
    {
      desc: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
      filesize: "6mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
  ];
  return (
    <div ref={ref} className="fixed overflow-y-hidden overflow-x-hidden md:flex-row sm:flex-row top-0 left-0 z-[3] w-full h-full bg-sky-800/200 flex gap-8 flex-wrap p-6">
      {data.map((item, index) => (
        <Card data={item} key={index} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
