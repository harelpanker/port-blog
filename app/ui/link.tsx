import clsx from "clsx";
import Link from "next/link";
import { GlowEffect } from "@/app/ui/glow-effect";

export function ButtonLink({
  className,
  href,
  showGlow = true,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  href: string;
  showGlow?: boolean;
}) {
  const isExternal = href.startsWith("https");

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        {showGlow ? (
          <GlowEffect
            colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
            mode="colorShift"
            blur="soft"
            duration={6}
            scale={0.9}
          />
        ) : null}
        {isExternal ? (
          <a
            {...props}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              className,
              "btn relative z-20 px-8 lg:py-5 lg:text-lg"
            )}
          />
        ) : (
          <Link
            {...props}
            href={href}
            className={clsx(
              className,
              "btn relative z-20 px-8 lg:py-5 lg:text-lg"
            )}
          />
        )}
      </div>
    </div>
  );
}
