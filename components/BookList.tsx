import Card from "@components/Card";
import { BASE_URL } from "@/apis";
import { IBookRes } from "@models/book.types";
import styles from "@styles/BookList.module.css";

interface Props {
  listName: string;
}

const getBookDetail = async (listName: string): Promise<IBookRes> => {
  return fetch(BASE_URL + `/list?name=${listName}`).then((res) => res.json());
};

const BookList = async ({ listName }: Props) => {
  const { results } = await getBookDetail(listName);

  return (
    <div className={styles.container}>
      <h2 className={styles.categoryName}>{results.list_name}</h2>
      <ul className={styles.cards}>
        {results.books.map((book, idx) => (
          <Card {...book} idx={idx} key={idx} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
