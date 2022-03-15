import { Field, Label, Control, Input, Help } from 'rbx'
const NMFDInput = ({name,type,label,autoComplete,placeholder,onChange,value,required, helptext}) => {
    placeholder = required ? placeholder + "*" : placeholder;
    autoComplete ="new-"+autoComplete;
    return (
        <Field>
            <Label htmlFor={name}>{label}</Label>
            <Control className='has-text-centered'>
                <Input
                    className="is-large"
                    name={name}
                    id={name}
                    type={type}
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    required={required} />
            </Control>
            <Help className='input-help-text pl-3'>{helptext}</Help>
        </Field>
    );
}

export default NMFDInput