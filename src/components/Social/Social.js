import styles from './Social.module.css';

function Social(props) {

    const social = props.social;

    return (
        <a href={social.link} target='_blank' rel='noreferrer'>
            <img className={styles.social} src={social.icon} alt={`${social.name} icon`}/>
        </a>
    );
}

export default Social;