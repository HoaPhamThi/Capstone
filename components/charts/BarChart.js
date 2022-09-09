import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { authHelper, apiHelper } from '@utils/helpers';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { fetchChartBarData } from '@redux/actions';

const BarCharts = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { classID, subjectID } = router.query;
    const [chartData, setChartData] = useState([]);

    useEffect(async () => {
        dispatch(
            await fetchChartBarData({ classID: classID, subjectID: subjectID }, (data) => {
                const lastSlot = data?.data;
                console.log('lastSlot', lastSlot);
                const presentStudent = lastSlot?.map((item) => item?.totalPresent);
                console.log('presentStudent', presentStudent);
                setChartData(presentStudent);
            }),
        );
    }, []);

    const labels = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
    ];
    console.log('chartData', chartData);

    return (
        <div>
            <div className="content-body">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="chart-bar">
                                <Bar
                                    data={{
                                        labels: labels,
                                        datasets: [
                                            {
                                                label: 'Attendance',
                                                data: chartData,
                                                backgroundColor: [
                                                    'rgba(255, 99, 132, 0.2)',
                                                    'rgba(54, 162, 235, 0.2)',
                                                    'rgba(255, 206, 86, 0.2)',
                                                    'rgba(75, 192, 192, 0.2)',
                                                    'rgba(153, 102, 255, 0.2)',
                                                ],
                                                borderColor: [
                                                    'rgba(255,99,132,1)',
                                                    'rgba(54, 162, 235, 1)',
                                                    'rgba(255, 206, 86, 1)',
                                                    'rgba(75, 192, 192, 1)',
                                                    'rgba(153, 102, 255, 1)',
                                                ],
                                                borderWidth: 1,
                                            },
                                        ],
                                    }}
                                    height={500}
                                    width={500}
                                    options={{
                                        maintainAspectRatio: false,
                                        scales: {
                                            y: {
                                                beginAtZero: true,
                                                max: 20,
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BarCharts;
