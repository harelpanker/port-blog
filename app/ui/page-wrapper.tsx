import { Children } from "@/app/types/children";

export default function PageWrapper({ children }: Children) {
  return (
    <div className="min-h-dvh flex w-full flex-col justify-between overflow-clip">
      {children}
    </div>
  );
}
