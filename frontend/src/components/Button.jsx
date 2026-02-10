const Button = ({
  as: Component = "button",
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}) => {
  const variants = {
    default: "bg-blue-500 text-white rounded-[8px]",
    outline: "border border-gray-500 text-blue-500",
  };

  const sizes = {
    sm: "px-3 py-1",
    md: "px-4 py-2",
  };

  return (
    <Component
      className={`rounded-md ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
