import React from "react";

function Services() {
  return (
    <section className="service">
      <div className="titre">
        <h2>Nos services</h2>
      </div>
      <div className="container">
        <ServiceItem title="Particulier" icon="fa-user" />
        <ServiceItem title="Professionnel" icon="fa-user-tie" />
        <ServiceItem title="Nos secrétaires" icon="fa-id-badge" />
      </div>
    </section>
  );
}

function ServiceItem({ title, icon }) {
  return (
    <div className="particulier">
      <h3>{title}</h3>
      <i className={`fas ${icon}`}></i>
      <button>Découvrir</button>
    </div>
  );
}

export default Services;
