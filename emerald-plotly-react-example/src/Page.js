import PlotContainer from "./components/PlotContainer";

function Page() {
  return (
    <div className="bg-gray-50 w-screen h-screen flex flex-col items-center">
      <header className="py-5 p-5 md:px-8 font-semibold text-gray-700 flex gap-2 items-center w-full">
        <a
          className="w-fit h-fit mt-1.5 hover:text-gray-700/90"
          href="https://github.com/emerald-geomodelling/emerald-json-editor-react-example"
          target="_"
        >
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a
          className="w-fit h-fit hover:text-gray-700/90"
          href="https://www.npmjs.com/package/emerald-json-editor-react"
          target="_"
        >
          emerald-plotly-react-example
        </a>
      </header>
      <main className="flex flex-wrap gap-10 mt-4 p-5 md:px-8 w-full">
        <PlotContainer />
      </main>
      <footer className="p-5 text-sm text-gray-500 flex mt-auto items-center gap-2">
        @ EMerald Geomodelling
      </footer>
    </div>
  );
}

export default Page;
