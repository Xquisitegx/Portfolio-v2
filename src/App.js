import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Danny Nguyen",
    location: "Toronto, Ontario, Canada",
    email: "khng0624@gmail.com",
    availability: "Open for work",
    brand:
      "With my 3 years of knoweldge on coding softwares and applications at my time at George Brown College, I'm ready to display the knowledge that I've gained!",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
