import "./TextInput.scss";

export const TextInput = ({placeholder, value, name, label}) => {
  return (
    <div className="input-wrapper">
        <label>{label}</label>
        <input type="text" placeholder={placeholder} value={value} name={name}/>
    </div>
  )
}