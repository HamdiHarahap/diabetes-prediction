import Input from './Input';
import Label from './Label';

const InputGroup = (props) => {
  const {
    label,
    id,
    name,
    type = 'text',
    disabled = false,
    placeholder,
    value = '',
    onChange = () => {},
  } = props;

  return (
    <div className="w-full">
      <Label name={id}>{label}</Label>

      <Input
        id={id}
        type={type}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputGroup;
