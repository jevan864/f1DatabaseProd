import React from "react";
import { clsx } from "clsx";

const openClassNames = {
  right: "translate-x-0",
  left: "translate-x-0",
  top: "translate-y-0",
  bottom: "translate-y-0"
};

const closeClassNames = {
  right: "translate-x-full",
  left: "-translate-x-full",
  top: "-translate-y-full",
  bottom: "translate-y-full"
};

const classNames = {
  right: "inset-y-0 right-0",
  left: "inset-y-0 left-0",
  top: "inset-x-0 top-0",
  bottom: "inset-x-0 bottom-0"
};

const RightDrawer = (props) => {
  return (
    <div
      className="relative z-10 bg-black text-white"
      aria-labelledby="slide-over"
      role="dialog"
      aria-modal="true"
      onClick={() => props.update(!open)}
    >
      <div
        className={clsx(
          "fixed inset-0 bg-gray-500 bg-opacity-75 transition-all",
          {
            "opacity-100 duration-500 ease-in-out visible": props.open
          },
          { "opacity-0 duration-500 ease-in-out invisible": !props.open }
        )}
      ></div>
      <div className={clsx({ "fixed inset-0 overflow-hidden": props.open })}>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={clsx(
              "pointer-events-none fixed max-w-full",
              "inset-y-0 right-0"
            )}
          >
            <div
              className={clsx(
                "pointer-events-auto relative w-full h-full transform transition ease-in-out duration-500",
                { ["translate-x-full"]: !props.open },
                { ["translate-x-0"]: props.open }
              )}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
              }}
            >
              <div
                className={clsx(
                  "flex flex-col h-full overflow-y-scroll bg-black text-white p-20 shadow-xl bg-black rounded-lg"
                )}
              >
                {props.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightDrawer;
