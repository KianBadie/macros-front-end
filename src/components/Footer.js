import styles from './Footer.module.css';

function Footer(props) {
    return (
        <div className={styles.footer}>
            <p className={styles.text}>Food compisition data obtained from U.S. Department of Agriculture, Agricultural Research Service. FoodData Central, 2019. fdc.nal.usda.gov.</p>
        </div>
    );
}

export default Footer;