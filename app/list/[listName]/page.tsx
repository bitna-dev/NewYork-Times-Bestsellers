import BookList from "@components/BookList";
import { Metadata } from "next";

interface Props {
  params: Promise<{ listName: string }>;
}

export const metadata: Metadata = {
  title: "Detail",
};

const Page = async ({ params }: Props) => {
  const { listName } = await params;
  return <BookList listName={listName} />;
};

export default Page;
