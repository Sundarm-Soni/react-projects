import useWindowResize from "./window-resize-hook";

const UseWindowResizeHookTest = () => {
  const windowResize = useWindowResize();
  const { width, height } = windowResize;
  return (
    <div>
      <h1>Window resize hook</h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  );
};

export default UseWindowResizeHookTest;
