import "./SectionDivider.scss";

export const SectionDivider = (props) => {

  return <div className="section-divider">
    <hr />
    <div className="title">{props.title}</div>
  </div>;
};
