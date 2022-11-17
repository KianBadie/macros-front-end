import Social from '../Social/Social';

import styles from './Footer.module.css';

import socials from '../../socials';

function Footer(props) {

    const socialLinks = socials.map(social => (
        <Social key={social.name} social={social}/>
    ));

    return (
        <div className={styles.footer}>
            <p className={styles.text}>Food compisition data obtained from U.S. Department of Agriculture, Agricultural Research Service. FoodData Central, 2019. fdc.nal.usda.gov.</p>
            <div className={styles.links}>
                {socialLinks}
            </div>
        </div>
    );
}

export default Footer;