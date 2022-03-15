import { Field, Label, Control, Input } from 'rbx'
const NMFDCheckbox = ({name,label,placeholder,onChange,value,required}) => {
    const inputlable = (typeof label != "string") ? placeholder : label;
    return (
            <Field>
                <Label className="checkbox" htmlFor={name}>
                    <Control className='has-text-centered'>
                        <input
                            name={name}
                            id={name}
                            type="checkbox"
                            placeholder={placeholder}
                            onChange={onChange}
                            value={value}
                            required={required} />
                        &nbsp;&nbsp;{inputlable}
                    </Control>
                </Label>
            </Field>
    );
}

export default NMFDCheckbox