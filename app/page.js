import styles from './page.module.css';
import Navbar from './components/Navbar';
import Sider from './components/Sider';
import Content from './components/Content';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.global}>
        <div className={styles.header}>
          <Navbar />
        </div>

        <div className={styles.body}>
          <Content />

          <Sider />
        </div>
      </div>
      <Footer />
    </main>
  )
}