import { FC, PropsWithChildren } from "react";
import { NavigationBar } from "../../../features/navigation";
import AuthGuard from "@/features/guards/auth";

const AuthedLayout: FC<PropsWithChildren> = async (props) => {
  const { children } = props;

  return (
    <AuthGuard>
      <div className="flex min-h-screen flex-row">
        <NavigationBar />
        <div className="hidden md:block md:w-[82px]" />
        <div className="flex-1">
          <main className="relative min-h-screen w-full bg-stone-100 pt-16 dark:bg-stone-900 md:pt-0">
            {children}
          </main>
        </div>
      </div>
    </AuthGuard>
  );
};

export default AuthedLayout;
