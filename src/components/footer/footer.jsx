//ce composant affichera le footer de l'application
import Styles from './footer.module.css';
export const Footer = () => {
    return (
        <footer>
            <code className={Styles.footer}>Tu as éliminé x tâche"s"</code>
        </footer>
    );
}