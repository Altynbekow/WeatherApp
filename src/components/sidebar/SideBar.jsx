import cls from './sideBar.module.css'
import logo from '../../assets/logo.svg'
import explor from '../../assets/Explore.svg'
import icon from '../../assets/Icon.svg'
import vector from '../../assets/Vector.svg'
import weather from '../../assets/weather.svg'

const SideBar = () => {
    return (
        <div className={cls.sideBar}>
            <div className={cls.side__top}>
                <img src={logo} alt=""/>
            </div>
            <div className={cls.side__nav}>
                <img src={weather} alt=""/>
                <p>weather</p>
            </div>
            <div className={cls.side__explor}>
                <img className={cls.side__explor} src={explor} alt=""/>
                <p className={cls.side__explori}>explore</p>
            </div>
            <div className={cls.side}>
                <img className={cls.side__explor} src={vector} alt=""/>
                <p className={cls.side__explori}>cities</p>
            </div>
            <div className={cls.side}>
                <img className={cls.side__explor} src={icon} alt=""/>
                <p className={cls.side__explori}>settings</p>
            </div>
        </div>
    );
};

export default SideBar;