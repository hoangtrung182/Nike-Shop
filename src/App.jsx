import { Hero, CustomerReviews, Footer, PopularProducts, Service, SpecialOffer, Subcribe, SuperQuality } from "./sections";
import Nav from "./components/Nav";


const App = () => {
  return (
    <main className="relative px-4">
      <Nav />
      <section className="xl:padding-1">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding bg-pale-blue">
        <SuperQuality />
      </section>
      <section className="padding">
        <Service />
      </section>
      <section className="padding bg-pale-blue">
        <SpecialOffer />
      </section>
      <section className="padding-x py-10">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full bg-pale-blue">
        <Subcribe />
      </section>
      <section className="padding-x padding-t bg-black pb-8">
        <Footer />
      </section>
    </main>
  )
}

export default App;