import cls from './WeatherWeek.module.css'
import {days} from '../../../constants'

const WeatherWeek = () => {
    return (
        <div className={cls.felx}>
            {days.map(day  =>{
                return <div key={day}>
            <h4>{day.toUpperCase()}</h4>
        </div>
            })}

        </div>
    );
};

export default WeatherWeek;