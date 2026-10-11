import Label from '../Input/Label';

const Select = (props) => {
  const {
    id,
    name,
    label,
    disabled = false,
    value = '',
    onChange = () => {},
    children,
  } = props;

  return (
    <div className="w-full">
      <Label name={id}>{label}</Label>
      <select
        id={id}
        name={name}
        disabled={disabled}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 text-sm text-[#1F2937] bg-white border border-[#D1D5DB] rounded-md outline-none transition-all duration-200 focus:border-[#B4233C] focus:ring-2 focus:ring-[#FCE7EB] disabled:bg-[#F3F4F6] disabled:text-[#9CA3AF] disabled:cursor-not-allowed"
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
