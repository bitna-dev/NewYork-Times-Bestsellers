import CategoryList from "@components/CategoryList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <>
      <CategoryList />
    </>
  );
}
