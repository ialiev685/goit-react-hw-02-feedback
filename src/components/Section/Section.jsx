import "./Section.scss";

const Section = ({ title, children }) => {
  return (
    <section className="Section">
      <h2 className="Section__title">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
