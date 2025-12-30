export default function Checkbox({item, idText, index}) {
  return (
    <div className="form-check">
        <input className="checkbox" id={idText + index} type="checkbox" value={item} />
        <label htmlFor={idText + index}>{item}</label>
    </div>
  )
}
