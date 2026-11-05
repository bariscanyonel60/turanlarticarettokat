"use client";

import { MotionConfig } from "motion/react";
import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type MenuContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const MenuContext = createContext<MenuContextValue | null>(null);

export function useMenu() {
  const value = useContext(MenuContext);
  if (!value) {
    throw new Error("Menü durumu yalnızca site kabuğunda kullanılabilir.");
  }
  return value;
}

export function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [seenPath, setSeenPath] = useState(pathname);

  if (seenPath !== pathname) {
    setSeenPath(pathname);
    setOpen(false);
  }

  const value = useMemo(() => ({ open, setOpen }), [open]);

  return (
    <MenuContext.Provider value={value}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </MenuContext.Provider>
  );
}
