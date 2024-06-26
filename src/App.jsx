import Header from "./components/Header";
import JobDescription from "./components/JobDescription";
import JobsTabHeader from "./components/JobsTabHeader";

function App() {
  // No joke, UI is a function of state which is nothing but data. So, I need full info to make it work properly.

  return (
    <div className="font-[poppins] overflow-hidden w-full h-screen">
      <Header />
      <JobsTabHeader />
      <JobDescription />
    </div>
  );
}
export default App;
