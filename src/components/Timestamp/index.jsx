import React from "react";
import { Text, Heading, Img } from "./..";

export default function Timestamp({ ...props }) {
  return (
    <div {...props}>
      <Img src="images/img_image.png" alt="image" className="w-[23%] md:h-auto sm:w-full object-cover rounded-[5px]" />
      <div className="flex flex-col items-start justify-start w-[50%] gap-[3px]">
        <Heading size="xs" as="h1" className="!text-black-900_02">
          Media - Introduction
        </Heading>
        <Text size="xs" as="p" className="!text-deep_orange-400">
          1:57
        </Text>
      </div>
    </div>
  );
}
