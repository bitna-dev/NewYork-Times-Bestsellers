import React from "react";
import styles from "@styles/Category.module.css";
import Link from "next/link";
import { Icategory } from "@models/category.types";

const Category = ({ title, id }: Icategory) => {
  return (
    <li className={styles.container}>
      <Link href={`/list/${id}`}>{title}</Link>
    </li>
  );
};

export default Category;
