import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
    {
        name: '10',
        uv: 4000,
        purchase: 2400,
        amt: 2400,
    },
    {
        name: '11',
        uv: 3000,
        purchase: 1398,
        amt: 2210,
    },
    {
        name: '12',
        uv: 2000,
        purchase: 9800,
        amt: 2290,
    },
    {
        name: '13',
        uv: 2780,
        purchase: 3908,
        amt: 2000,
    },
    {
        name: '14',
        uv: 1890,
        purchase: 4800,
        amt: 2181,
    },
    {
        name: '15',
        uv: 2390,
        purchase: 3800,
        amt: 2500,
    },
    {
        name: '16',
        uv: 3490,
        purchase: 4300,
        amt: 2100,
    },
    {
        name: '17',
        uv: 3490,
        purchase: 4300,
        amt: 2100,
    },
    {
        name: '18',
        uv: 2500,
        purchase: 4300,
        amt: 2100,
    },
    {
        name: '19',
        uv: 3490,
        purchase: 4300,
        amt: 2100,

    },
    {
        name: '20',
        uv: 3490,
        purchase: 5000,
        amt: 2100,

    },
];

// const getPath = (x, y, width, height) => {
//   return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
//   ${x + width / 2}, ${y}
//   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
//   Z`;
// };

// const TriangleBar = (props) => {
//   const { fill, x, y, width, height } = props;

//   return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
// };
const Columns = () => {
    return (
        <div className='rounded-xl p-4 bg-red-500 h-[5px]'></div>
    )
}

export function ThreeBar() {
    return (
        // <div className="w-100 min-h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    left: 0,
                    bottom: 30,
                }}
                padding={{
                    top: 10,
                    bottom: 10
                }}
            >
                <YAxis />
                <XAxis dataKey="name" />
                <Tooltip />
                <Legend wrapperStyle={{top: 0, left: 0}} margin={50} layout="horizontal" verticalAlign="top" align="left" />
                <Bar style={{ stroke: '#fff', strokeWidth: 2 }} barSize={20} radius={[25, 25, 25, 25]} dataKey="purchase" stackId="a" fill="#4339F2" />
                <Bar style={{ stroke: '#fff', strokeWidth: 2 }} barSize={20} radius={[25, 25, 25, 25]} dataKey="uv" stackId="a" fill="#FFB200" />
                <Bar style={{ stroke: '#fff', strokeWidth: 2 }} barSize={20} radius={[25, 25, 25, 25]} dataKey="amt" stackId="a" fill="#FF3A29" />

            </BarChart>
        </ResponsiveContainer>
        // </div>
    );
}

