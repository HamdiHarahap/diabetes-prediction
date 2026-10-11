import { Link } from 'react-router-dom';

const Button = (props) => {
  const {
    type = 'button',
    variant = 'primary',
    children,
    onClick = () => {},
    url,
  } = props;

  const variantType = {
    primary: 'bg-[#B4233C] text-white hover:bg-[#981B31]',
    secondary:
      'bg-white text-[#B4233C] border border-[#B4233C] hover:bg-[#B4233C] hover:text-white',
    none: 'block px-4 py-2.5 text-sm text-[#1F2937] hover:bg-[#FFF1F3] hover:text-[#B4233C] transition-colors duration-200',
  };

  const buttonClasses = `font-semibold w-full inline-block text-center px-4 py-2 text-sm rounded-md transition-all duration-200 cursor-pointer ${variantType[variant]}`;

  if (url && url.startsWith('#')) {
    return (
      <a href={url} onClick={onClick} className={buttonClasses}>
        {children}
      </a>
    );
  }

  if (url) {
    return (
      <Link to={url} onClick={onClick} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
