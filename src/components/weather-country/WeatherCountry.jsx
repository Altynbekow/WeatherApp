import cls from './Wheather-country.module.css';

const WeatherCountry = () => {
    return (
        <div>
            <div className={cls.country__wrap}></div>
            <div className={cls.country__wrap}></div>
        </div>
    );
};

export default WeatherCountry;