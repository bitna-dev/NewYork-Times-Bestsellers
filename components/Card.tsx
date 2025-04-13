import Link from "next/link";
import styles from "@styles/Card.module.css";
import { IBook } from "@models/book.types";

interface CardProps extends IBook {
  idx: number;
}
const Card = ({ title, author, amazon_product_url, book_image }: CardProps) => {
  return (
    <li className={styles.container}>
      <img src={book_image} alt={title} />
      <div>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.author}>{`${author}`}</span>
      </div>
      <Link href={amazon_product_url} className={styles.purchaseLink}>
        Buy Now
      </Link>
    </li>
  );
};

export default Card;
