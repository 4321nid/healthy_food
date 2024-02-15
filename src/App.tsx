import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Testimonial from "./components/Testimonial/Testimonial";
import AboutUs from "./components/AboutUS/AboutUs";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Banner from "./components/Banner/Banner";

function App() {
  const handleSubmit = (email: string) => {
    // Здесь вы можете выполнить логику отправки электронной почты
    console.log("Отправлен email:", email);
  };
  return (
    <div className="container">
      <Header />
      <Banner />
      <Features />
      <AboutUs />
      <Menu />
      <Testimonial />
      <Contact onSubmit={(email: string) => handleSubmit(email)} />
    </div>
  );
}

export default App;
