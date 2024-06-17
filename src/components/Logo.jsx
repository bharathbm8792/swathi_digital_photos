import style from './Logo.module.css';

export default function Logo() {
    return (
        <div className={style.container}>
            <p className={style.main}>Swathi Digital Photos</p>
            <p className={style.not_main}>Specialist in Photography and Videography</p>
        </div>
    )
}
