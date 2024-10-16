import styles from "../services/service.module.css";
import Link from 'next/link';


const ServicesPage = () => {
  return (
    <div className ={styles.container}>
      <h1>this is service page</h1>
      <ul>
      <li><Link href="/services/graphic-design">this is graphic designing</Link></li>
      </ul>
    </div>
  )
}

export default ServicesPage;
