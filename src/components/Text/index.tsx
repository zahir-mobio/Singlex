import React from "react";

const variantClasses = {
  h1: "font-black sm:text-[36px] md:text-[38px] text-[40px]",
  h2: "font-black sm:text-[32px] md:text-[34px] text-[36px]",
  h3: "font-black sm:text-[31px] md:text-[33px] text-[35px]",
  h4: "font-black sm:text-[26px] md:text-[28px] text-[30px]",
  h5: "font-black sm:text-[25px] md:text-[27px] text-[29px]",
  h6: "text-[18px]",
  body1: "text-[17px]",
  body2: "text-[16px]",
  body3: "text-[14px]",
} as const;

export type TextProps = Partial<{
  className: string;
  variant: keyof typeof variantClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className,
  variant,
  as,
  ...restProps
}) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
