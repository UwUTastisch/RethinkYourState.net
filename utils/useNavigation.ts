type Where = "home" | "app";

export type Navigation = {
  name: string;
  to: string;
  icon: string;
};

export function getNavigation(where: Where): Record<string, Navigation> | [] {
  switch (where) {
    case "home":
      return {
        home: {
          name: "Home",
          to: "/",
          icon: "i-lucide-home",
        },
        about: {
          name: "Register",
          to: "/register",
          icon: "i-lucide-user",
        },
      };
    default:
      return [];
  }
}
