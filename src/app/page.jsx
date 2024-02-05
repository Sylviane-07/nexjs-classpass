import Link from "next/link";

export default function Home() {
  return (
    <div className="main">
      <article className="main-info-container">
        <h1>One app for all things fitness, wellness & beauty</h1>
        <p className="intro">
          ClassPass gives you worldwide access to thousands of top-rated gyms,
          fitness studios, salons and spas.
        </p>
        <div className="button-container">
          <button className="primary">Try for free</button>
          <button className="secondary">Tell me more about ClassPass</button>
        </div>
        <Link className="browse" href={"/search"}>Browse classes & appointments</Link>
        <p className="disclaimer">Offer is available to new trialers only. Spa and salons appointments are available after trial.</p>
      </article>
    </div>
  );
}
