function InitialPage({ setCurrentPage }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="h-[700px] w-[400px] bg-[#5a82b4] rounded-lg shadow-[0px_3px_10px_rgba(0,0,0,0.3)]">
        <img className="mt-[85px] scale-125" src="/images/intro_text.png" />
        <div className="flex justify-center items-center mt-2">
          <img className="w-[80%]" src="/images/JUGGLER_2.gif" />
        </div>
        <div className="flex flex-col justify-center items-center mt-12">
          <a
            onClick={() => setCurrentPage("home")}
            className="p-2 bg-white w-[120px] rounded-4xl text-[#5a82b4] font-bold text-center cursor-pointer"
          >
            Play
          </a>
          <a className="mt-3 text-white underline text-sm font-semibold tracking-tighter cursor-pointer">
            Get the App
          </a>
        </div>
      </div>
    </div>
  );
}

export default InitialPage;
