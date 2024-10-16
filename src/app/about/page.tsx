import styles from "../about/about.module.css"
import Link from 'next/link';


const AboutPage = () => {
  return (
    <div className= {styles.container}>
      <h1 className={styles.header}>this is about page</h1>
    </div>
  )
}

export default AboutPage;
