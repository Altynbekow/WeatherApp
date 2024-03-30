import {LineChart, Line, Tooltip, XAxis, YAxis} from 'recharts';

const data =[
    {
        name: '11.7km/h\n' +
            'Now',
        weather: 26
    },
    {
        name: '9.3km/h\n' +
            '22:00',
        weather: 26
    },
    {
        name: '12km/h\n' +
            '00:00',
        weather: 22
    },
    {
        name: '15km/h\n' +
        '2:00',
        weather: 16
    },
    {
        name: '15km/h\n' +
            '4:00',
        weather: 20
    },
    {
        name: '15km/h\n'+'6:00',
        weather: 22
    },
    {
        name: '15km/h\n'+'8:00',
        weather: 16
    },
]




const WeatherChart = () => {
    return (
        <div >
            <LineChart margin={{top:80}} width={850} height={180} data={data}>
                <Line  type="monotone" dataKey="weather" stroke="#FFC355" />
                <Tooltip />
                <XAxis style={{fontSize:10}} dataKey="name"   />
                <YAxis style={{display:"none"}} />
            </LineChart>
        </div>
    );
};

export default WeatherChart;