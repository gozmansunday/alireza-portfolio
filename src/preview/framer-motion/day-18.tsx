"use client";

import React, { useRef } from "react";
import {
  type MotionValue,
  useMotionValue,
  motion,
  useTransform,
  useSpring,
} from "framer-motion";

import { useFullscreen } from "@mantine/hooks";

const initialValues = [
  {
    name: "finder",
    url: "https://cdn.jim-nielsen.com/macos/256/finder-2021-09-10.png?rf=1024",
  },
  {
    name: "siri",
    url: "https://cdn.jim-nielsen.com/macos/256/siri-2021-09-10.png?rf=1024",
  },
  {
    name: "keynote",
    url: "https://cdn.jim-nielsen.com/macos/256/keynote-2021-11-15.png?rf=1024",
  },
  {
    name: "source-files-git-storage",
    url: "https://cdn.jim-nielsen.com/macos/256/source-files-git-storage-2023-11-21.png?rf=1024",
  },
  {
    name: "simulator",
    url: "https://cdn.jim-nielsen.com/macos/256/simulator-2022-11-09.png?rf=1024",
  },
  {
    name: "raycast",
    url: "https://cdn.jim-nielsen.com/macos/256/raycast-2023-02-14.png?rf=1024",
  },
  {
    name: "taska-for-github-gitlab-issues",
    url: "https://cdn.jim-nielsen.com/macos/256/taska-for-github-gitlab-issues-2024-04-24.png?rf=1024",
  },
  {
    name: "folder-colorizer-pro",
    url: "https://cdn.jim-nielsen.com/macos/256/folder-colorizer-pro-2023-11-02.png?rf=1024",
  },
  {
    name: "telegram",
    url: "https://cdn.jim-nielsen.com/macos/256/telegram-2021-07-12.png?rf=1024",
  },
  {
    name: "preview",
    url: "https://cdn.jim-nielsen.com/macos/256/preview-2021-05-28.png?rf=1024",
  },
  {
    name: "github-desktop",
    url: "https://cdn.jim-nielsen.com/macos/256/github-desktop-2021-05-20.png?rf=1024",
  },
  {
    name: "figma",
    url: "https://cdn.jim-nielsen.com/macos/256/figma-2021-05-05.png?rf=1024",
  },
];

export default function Day18() {
  const mouseX = useMotionValue(Infinity);

  const { toggle, fullscreen } = useFullscreen();

  return fullscreen ? (
    <div className="isolate z-50">
      <img
        src="https://preview.redd.it/which-do-you-prefer-macos-or-windows-11-wallpapers-v0-d4d201nxe1sa1.jpg?width=2880&format=pjpg&auto=webp&s=21d9bc5db16537a34c906e30fd0dafec04707fc7"
        className="fixed left-0 top-0 -z-10 h-full w-full object-cover"
      />

      <div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="fixed bottom-8 left-1/2 flex h-[65px] -translate-x-1/2 items-end gap-2 rounded-3xl border border-white/20 bg-black/20 px-2 pb-[8px] backdrop-blur"
      >
        {initialValues.map((value, index) => (
          <EachIcon key={index} mouseX={mouseX} value={value} />
        ))}
      </div>
    </div>
  ) : (
    <button
      className="h-8 rounded-md bg-foreground px-4 text-background"
      onClick={toggle}
    >
      See the design in full screen
    </button>
  );
}

function EachIcon({
  mouseX,
  value,
}: {
  mouseX: MotionValue;
  value: { name: string; url: string };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseX, (val) => {
    const obj = ref.current?.getBoundingClientRect() || { x: 0, width: 0 };

    return val - obj.x - obj.width / 2;
  });
  const widthSync = useTransform(distance, [-200, 0, 200], [48, 80, 48]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 300,
    damping: 15,
  });

  return (
    <motion.div
      ref={ref}
      className="group flex aspect-square w-12 flex-col items-center rounded-xl"
      style={{ width }}
    >
      <div className="pointer-events-none absolute top-0 isolate flex -translate-y-16 justify-center rounded-lg border border-[#6e6867] bg-[#2C2625] px-3 py-1 text-sm font-light capitalize text-white opacity-0 group-hover:opacity-100">
        {value.name.replaceAll("-", " ")}
        <div className="absolute bottom-0 -z-10 aspect-square w-[10px] translate-y-[5.7px] rotate-45 border-b border-r border-[#6e6867] bg-[#2C2625]"></div>
      </div>
      <img src={value.url} className="h-full w-full object-cover" />
    </motion.div>
  );
}
