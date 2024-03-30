import cls from './Weather-info.module.css'
import WeatherWeek from "./WeatherWeek/WeatherWeek.jsx";

const WeatherInfo = () => {
    return (
        <div className={cls.info__wrap}>
            <WeatherWeek/>
        </div>
    );
};

export default WeatherInfo;