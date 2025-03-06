import Styles from './header.module.css';
import reactLogo from '../../assets/react.svg';

export const Header = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.titleContainer}>
                <img src={reactLogo} alt="logo" width={50} height={50}/>
                <div>
                    <h1>Taskflow</h1>
                    <div className='color-gray'>
                        <code>Eliminez le chaos, suivez le flux</code>
                    </div>
                </div>
            </div>
            <code className='color-pimary'>
                v.1.0
            </code>
        </div>
    )
}