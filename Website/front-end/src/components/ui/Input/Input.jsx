const Input = (props) => {
  const {
    id,
    type = 'text',
    name,
    disabled = false,
    placeholder,
    value = '',
    onChange = () => {},
  } = props;

  return (
    <input
      id={id}
      type={type}
      name={name}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className="w-full px-4 py-2 text-sm text-[#1F2937] bg-white border border-[#D1D5DB] rounded-md placeholder:text-[#9CA3AF] outline-none transition-all duration-200 focus:border-[#B4233C] focus:ring-2 focus:ring-[#FCE7EB] disabled:bg-[ disabled:text-[#9CA3AF] disabled:cursor-not-allowed"
    />
  );
};

export default Input;
