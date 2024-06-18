import { Watch } from "react-loader-spinner";

function Loading() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col gap-4 place-content-center items-center">
      <Watch
        visible={true}
        height="80"
        width="80"
        radius="48"
        color="#2D6BDE"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <p className="capitalize">loading please wait...</p>
    </div>
  );
}
export default Loading;
