import React, { useState } from "react";
import Image from "next/image";
import { FaCamera } from "react-icons/fa";
import ContextMenu from "./ContextMenu.jsx";

function Avatar({ type, image, setImage }) {
  const [hover, sethover] = useState(false);
  const [isContextMenuAvailable, setIsContextMenuAvailable] = useState(false);
  const [contextMenuCordinates, setContextMenuCordinates] = useState({
    x: 0,
    y: 0,
  });
  const showContextMenu = (e) => {
    e.preventDefault();
    setIsContextMenuAvailable(true);
    setContextMenuCordinates({ x: e.pageX, y: e.pageY });
    console.log(image);
  };

  const contextMenuOptions = [{ name: "Take Photo", callback: () => {} }];
  return (
    <>
      <div className="flex items-center justify-center">
        {type === "sm" && (
          <div className="relative h-10 w-10">
            <Image src={image} alt="avatar" className="rounded-full" fill />
          </div>
        )}
        {type === "lg" && (
          <div className="relative h-14 w-14">
            <Image src={image} alt="avatar" className="rounded-full" fill />
          </div>
        )}
        {type === "xl" && (
          <div
            className="relative curson-pointer z-0"
            onMouseEnter={() => sethover(true)}
            onMouseLeave={() => sethover(false)}
          >
            <div
              className={`bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2${
                hover ? "visible" : "hidden"
              }`}
              onClick={(e) => showContextMenu(e)}
            >
              <FaCamera
                className="text-2xl"
                id="context-opener"
                onClick={(e) => showContextMenu(e)}
              />
              <span onClick={(e) => showContextMenu(e)} id="context-opener">
                Change <br /> Profile <br />
                Photo
              </span>
            </div>
            <div className="flex items-center justify-center h-60 w-30">
              <Image src={image} alt="avatar" className="rounded-full" fill />
            </div>
          </div>
        )}
      </div>
      {isContextMenuAvailable && (
        <ContextMenu
          options={contextMenuOptions}
          cordinates={contextMenuCordinates}
          contextMenu={isContextMenuAvailable}
          setContextMenu={setIsContextMenuAvailable}
        ></ContextMenu>
      )}
    </>
  );
}

export default Avatar;
