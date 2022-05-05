import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  return (
    <div className="min-h-screen w-screen bg-[url('/src/images/bg.jpg')]">
    <Header/>
    <Banner/>
    <Categories/>
    <Faqs/>
    <Footer/>
    </div>
  );
}

export default App;
