import cls from './sideBar.module.css'
import logo from '../../assets/logo.svg'
import explor from '../../assets/explor.svg'
import icon from '../../assets/settings.svg'
import vector from '../../assets/cities.svg'
import weather from '../../assets/weather.svg'

const SideBar = () => {
    return (
        <div className={cls.sideBar}>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className={cls.menu}>
                <img className={cls.icmenu} src={weather} alt="" />
                <img className={cls.icmenu} src={explor} alt="" />
                <img className={cls.icmenu} src={vector} alt="" />
                <img className={cls.icmenu} src={icon} alt="" />
            </div>
        </div>
    );
};

export default SideBar;