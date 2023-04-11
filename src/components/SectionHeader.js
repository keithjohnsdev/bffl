import "./SectionHeader.scss";

export const SectionHeader = (props) => {
  if (props.textLine3) {
    return (
      <div className="section-header mobile">
        <h1 className="header black">
          {props.textLine1} <br /> {props.textLine2} <br /> {props.textLine3}
        </h1>
        <h1 className="header white">
          {props.textLine1} <br /> {props.textLine2} <br /> {props.textLine3}
        </h1>
        <h1 className="header blue">
          {props.textLine1} <br /> {props.textLine2} <br /> {props.textLine3}
        </h1>
      </div>
    );
  } else {
    return (
      <div className="section-header">
        <h1 className="header black">
          {props.textLine1} <br /> {props.textLine2}
        </h1>
        <h1 className="header white">
          {props.textLine1} <br /> {props.textLine2}
        </h1>
        <h1 className="header blue">
          {props.textLine1} <br /> {props.textLine2}
        </h1>
      </div>
    );
  }
};
