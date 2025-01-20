import Header from "./components/Header.tsx";
import LogoSection from "./components/socialprofile.tsx"
import Feature from "./components/feature.tsx"
import Testomonial from "./components/testomonial.tsx"
import FAQSection from "./components/Faq.tsx";
import Footer from "./components/footer.tsx"
import CTASection from "./components/Ctasection.tsx";
import BlogPostsSection from "./components/Blog.tsx";
const App = () => {
  return (
      <div>
       <Header/>
       <LogoSection/>
       <Feature/>
       <Testomonial/>
       <FAQSection/>
       <BlogPostsSection/>
       <CTASection/>
       <Footer/>
      </div>
  );
};

export default App;
