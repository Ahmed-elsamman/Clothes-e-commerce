import { ThreeCircles } from "react-loader-spinner";

export default function Loader() {
  return (
    <>
      <div className=" vh-100 mt-5 ">
        <ThreeCircles
          visible={true}
          height="150"
          width="150"
          color="#4fa94d"
          ariaLabel="three-circles-loading"
          wrapperStyle={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          wrapperClass=""
        />
      </div>
    </>
  );
}
