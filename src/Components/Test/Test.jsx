import toast from "react-hot-toast";

export default function Test() {
  const notify = () => toast.success("Ahmed elsamman is amazing Devvolper ");
  return (
    <>
      <div className="w-50 m-5">
        <button className="btn btn-info" onClick={notify}>
          Make me a toast
        </button>
        {/* <Toaster /> */}
      </div>
    </>
  );
}
