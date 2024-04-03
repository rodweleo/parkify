import { redirect } from "react-router-dom";

export const rootLoader = () => {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return redirect("/auth/signin");
  }

  return { isLoggedIn };
};
