import { redirect } from "react-router-dom";

export const accountLoader = () => {
  const user = null;

  if (user === null) {
    return redirect("/");
  }
  return null;
};
