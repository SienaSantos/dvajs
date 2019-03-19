import Link from "umi/link";
import styles from "./index.css";

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page index hello</h1>
      <Link to="/users">Go to /users </Link>
    </div>
  );
}
