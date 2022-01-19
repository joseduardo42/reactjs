import { SigInButton } from '../SigInButton';
import styles from './styles.module.scss'
// uso de Link para a otimização da página utilizando SPA
import {ActiveLink} from "../ActiveLink";

export function Header() {
  //permite copiar estilização (ver no botão active)
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src={"/images/logo.svg"} alt="ig.news" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a> Posts</a>
          </ActiveLink>
        </nav>

        <SigInButton />
      </div>
    </header>
  );
}