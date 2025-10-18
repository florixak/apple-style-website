import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import ProductViewer from "@/components/product-viewer";
import Showcase from "@/components/showcase";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
    </main>
  );
}
