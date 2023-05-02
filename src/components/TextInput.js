import "./TextInput.scss";

export const TextInput = ({ classes, label, type, placeholder, value, name, onChange}) => {
  return (
    <div className={`input-wrapper ${classes}`}>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} value={value} name={name} onChange={onChange}/>
    </div>
  )
}