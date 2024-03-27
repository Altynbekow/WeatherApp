import cls from './sideBar.module.css'
import logo from '../../assets/logo.svg'
import explor from '../../assets/Explore.svg'
import icon from '../../assets/Icon.svg'
import vector from '../../assets/Vector.svg'
import weather from '../../assets/weather.svg'

const SideBar = () => {
    return (
        <div className={cls.sideBar}>
            <img src={logo} alt=""/>
            <div className={'side'}>
                <img src={weather} alt=""/>
                weather
                <img src={explor} alt=""/>
                explore
                <img src={vector} alt=""/>
                cities
                <img src={icon} alt=""/>
                settings
            </div>
        </div>
    );
};

export default SideBar;