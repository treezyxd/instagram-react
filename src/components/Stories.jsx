export default function Stories() {
  const arrStories = [
    <>
      <div className="imagem">
        <img src="assets/img/9gag.svg" alt="9gag" />
      </div>
      <div className="usuario">9gag</div>
    </>,
    <>
      <div className="imagem">
        <img src="assets/img/meowed.svg" alt="meowed" />
      </div>
      <div className="usuario">meowed</div>
    </>,
    <>
      <div className="imagem">
        <img src="assets/img/barked.svg" alt="barked" />
      </div>
      <div className="usuario">barked</div>
    </>,
    <>
      <div className="imagem">
        <img
          src="assets/img/nathanwpylestrangeplanet.svg"
          alt="nathanwpylestrangeplanet"
        />
      </div>
      <div className="usuario">nathanwpylestrangeplanet</div>
    </>,
    <>
      <div className="imagem">
        <img src="assets/img/wawawicomics.svg" alt="wawawicomics" />
      </div>
      <div className="usuario">wawawicomics</div>
    </>,
    <>
      <div className="imagem">
        <img src="assets/img/respondeai.svg" alt="respondeai" />
      </div>
      <div className="usuario">respondeai</div>
    </>,
    <>
      <div className="imagem">
        <img src="assets/img/filomoderna.svg" alt="filomoderna" />
      </div>
      <div className="usuario">filomoderna</div>
    </>,
    <>
      <div className="imagem">
        <img src="assets/img/memeriagourmet.svg" alt="memeriagourmet" />
      </div>
      <div className="usuario">memeriagourmet</div>
    </>,
  ];

  return (
    <div className="stories">
      {arrStories.map((item, index) => (
        <div className="story" key={index}>
          {item}
        </div>
      ))}
      ;
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
