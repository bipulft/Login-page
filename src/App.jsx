import Form from "./Components/LoginForm";

function LoginPage() {
  return (
    <>
    <div className="relative w-full h-screen bg-gray-200">
      <div className="hidden md:flex absolute w-1/2 h-full bg-skyblue left-0 top-0"></div>
      <div className="hidden md:flex absolute w-1/2 h-full bg-dark-blue right-0 top-0"></div>
        <div className="absolute inset-0 flex items-center justify-center mt-14 mb-14 ml-44 mr-44 bg-white rounded-5xl">
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <Form />
        </div>
        <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-skyblue rounded-tr-5xl rounded-br-5xl">
          {/* <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to bg-pink-500 rounded-full animate-bounce"></div> */}
          <div><img src="/Login-image.svg" alt="Your Image" className="object-cover w-full h-full"></img></div>
          <div className="rounded-br-5xl w-full h-1/2 absolute bottom-0"></div>
        </div>
      </div>
    </div>
    </>
  );
}

export default LoginPage;
