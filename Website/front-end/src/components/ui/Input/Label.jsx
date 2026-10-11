const Label = (props) => {
  const { name, children } = props;

  return (
    <label
      htmlFor={name}
      className="block mb-2 text-sm font-medium text-[#1F2937]"
    >
      {children}
    </label>
  );
};

export default Label;
