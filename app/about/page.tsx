import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>About Us</h1>
      <p>
        welcome to the official for The New York Times Best Seller list
        explorer.
      </p>
      <p>We hope you enjoy your stay!</p>
    </div>
  );
}
