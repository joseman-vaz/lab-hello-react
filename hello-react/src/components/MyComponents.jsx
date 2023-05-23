export function Title() {
  return <h1 className="title-text">Say hello to ReactJS</h1>;
}

export function SampleText() {
  return (
    <h3 className="sampleText">
      You will learn how to use the most popular frontend library, and become a
      super Ninja Developer.
    </h3>
  );
}

export function Button() {
  return (
    <button className="button">
      <h4>Awesome!</h4>
    </button>
  );
}

export function ImageTexts(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}
