import logo from './logo.svg';
import './App.css';
import About from './components/About';


function App() {
  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto md:w-[70%]">
        <header
          className="
            absolute w-[90%] h-16 mx-auto
            md:w-[70%]
            flex
            flex-row
          "
        >
          </header>
      </div>
      <main className="flex flex-col gap-6">
          
          <About />
          
        </main>
      </div>
  );
}

export default App;
