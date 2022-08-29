import styles from './SectionTitle.module.css';

function SectionTitle(props) {
    return (
        <h2 className={styles.title}>{props.title}</h2>
    );
    
}

export default SectionTitle;