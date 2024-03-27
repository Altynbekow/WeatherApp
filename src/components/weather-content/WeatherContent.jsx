import cls from './Weather-content.module.css';

const WeatherContent = ({children}) => {
    return (
        <div className={'container'}>
            <div className={cls.flex}>
                {children}
            </div>
        </div>
    );
};

export default WeatherContent;