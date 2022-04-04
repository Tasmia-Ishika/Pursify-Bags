import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    return (
        <div>
            <div>
                <h1 className='text-6xl text-red-900 mt-5  font-bold'>Sales and Statistics</h1>
            </div>
            <div className='grid grid-cols-2 mt-12 p-8'>
                <div>
                    <LineChart width={700} height={500} data={data}>
                        <Line type={"monotone"} dataKey={"investment"} stroke="#8884d8" ></Line>
                        <Line type={"monotone"} dataKey={"sell"}></Line>
                        <Line type={"monotone"} dataKey={"revenue"} stroke="#8884d8"></Line>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5"></CartesianGrid>
                        <XAxis dataKey={"month"}></XAxis>
                        <YAxis ></YAxis>
                        <Tooltip />
                    </LineChart>
                </div>
                <div>
                    <BarChart width={700} height={500} data={data} margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={"month"} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={"investment"} stackId="a" fill="#82ca9d" />
                        <Bar dataKey={"revenue"} stackId="a" fill="#8884d8" />
                    </BarChart>
                </div>
                <div className='mt-10'>
                    <AreaChart
                        width={700}
                        height={500}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="investment"
                            stackId="1"
                            stroke="#ffc658"
                            fill="#ffc658"
                        />
                        <Area
                            type="monotone"
                            dataKey="sell"
                            stackId="1"
                            stroke="#82ca9d"
                            fill="#82ca9d"
                        />
                        <Area
                            type="monotone"
                            dataKey="revenue"
                            stackId="1"
                            stroke="#8884d8"
                            fill="#8884d8"
                        />
                    </AreaChart>
                </div>
            </div>
            <div className=' mt-4'>
                <Link to="/blogs" className='bg-red-900 text-white font-bold p-3 rounded'>Go to Blogs</Link>
            </div>
        </div>
    );
};

export default Dashboard;