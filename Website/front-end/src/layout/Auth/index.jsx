const AuthLayout = (props) => {
  const { title, description, children, footer } = props;

  return (
    <section className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-[#1F2937]">{title}</h1>

          <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
            {description}
          </p>
        </div>

        <div>{children}</div>

        <div className="mt-6 border-t border-[#F1F5F9] pt-5 text-center text-sm text-[#6B7280]">
          {footer}
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
