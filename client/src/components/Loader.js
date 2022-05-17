import { useLayoutEffect } from "react";

function Loader() {
  useLayoutEffect(() => {
    const pageLoader = document.getElementById("pageLoader");

    const animation = pageLoader.animate(
      [
        { opacity: "1" },
        { opacity: "0", offset: 0.5 },
        { opacity: "0", offset: 1 },
      ],
      {
        duration: 2000,
        easing: "linear",
        iterations: 1,
        direction: "normal",
        fill: "forwards",
        delay: 1,
        endDelay: 0,
      }
    );

    animation.onfinish = () => (pageLoader.style.display = "none");
  }, []);

  return (
    <div className="loader" id="pageLoader">
      <div className="loader-inner">
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default Loader;
