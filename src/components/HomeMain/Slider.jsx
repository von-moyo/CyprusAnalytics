const Slider = ({ children, speed = 8000 }) => {
  return (
    <div className="inner outer">
      <div className="wrapper">
        <section
          className="skill-item grid grid2"
          style={{ "--speed": `${speed}ms` }}
        >
          {children}
        </section>
        <section
          className="skill-item grid"
          style={{ "--speed": `${speed}ms` }}
        >
          {children}
        </section>
        <section
          className="skill-item grid"
          style={{ "--speed": `${speed}ms` }}
        >
          {children}
        </section>
      </div>
    </div>
  );
};

export { Slider };
