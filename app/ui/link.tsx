import clsx from "clsx";
import Link from "next/link";
import { GlowEffect } from "@/app/ui/glow-effect";

export function ButtonLink({
  className,
  href,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & { href: string }) {
  const isExternal = href.startsWith("https");

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <GlowEffect
          colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
          mode="colorShift"
          blur="soft"
          duration={6}
          scale={0.9}
        />
        {isExternal ? (
          <a
            {...props}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(className, "btn relative z-20 px-9")}
          />
        ) : (
          <Link
            {...props}
            href={href}
            className={clsx(className, "btn relative z-20 px-9")}
          />
        )}
      </div>
    </div>
  );
}
