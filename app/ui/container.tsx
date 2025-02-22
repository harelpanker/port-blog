import clsx from "clsx";

export default function Container({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={clsx(className, "container relative z-20 mx-auto")}
    >
      {children}
    </div>
  );
}
