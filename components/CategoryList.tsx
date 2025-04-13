import { BASE_URL } from "@/apis";
import { IBestsellerRes } from "@models/category.types";
import Category from "@components/Category";
import styles from "@styles/CategoryList.module.css";

const getCategories = async (): Promise<IBestsellerRes> => {
  return fetch(BASE_URL + "/lists").then((res) => res.json());
};

const CategoryList = async () => {
  const { results: categories } = await getCategories();
  const montlyList = categories.filter(
    (category) => category.updated === "MONTHLY"
  );
  const weeklyList = categories.filter(
    (category) => category.updated === "WEEKLY"
  );

  return (
    <>
      <div className={styles.updates}>
        <h2>Monthly Updates</h2>
        <ul className={styles.categories}>
          {montlyList.map((category, idx) => (
            <Category
              key={idx}
              title={category.list_name}
              id={category.list_name_encoded}
            />
          ))}
        </ul>
      </div>
      <div className={styles.updates}>
        <h2>Weekly Updates</h2>
        <ul className={styles.categories}>
          {weeklyList.map((category, idx) => (
            <Category
              key={idx}
              title={category.list_name}
              id={category.list_name_encoded}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoryList;
