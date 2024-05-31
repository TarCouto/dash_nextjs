'use client'

import { SettingsTabs } from "@/components/Settings";
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const tabItems = [
    { value: 'week-summary', title: 'Resumo da Semana', content: <WeekSummary /> },
    { value: 'month-summary', title: 'Resumo do Mês', content: <MonthSummary /> },
    { value: 'recent-months-summary', title: 'Resumo dos Últimos Meses', content: <RecentMonthsSummary /> },
    { value: 'annual-comparison', title: 'Comparação Anual', content: <AnnualComparison /> },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 mt-7">Dashboard</h1>
      <SettingsTabs tabItems={tabItems} />
    </div>
  )
}

function WeekSummary() {
  const dayData = {
    labels: ['Samsung', 'LG', 'Outras'],
    datasets: [
      {
        label: 'Samsung',
        data: [1],
        backgroundColor: '#3B82F6',
      },
      {
        label: 'LG',
        data: [0],
        backgroundColor: '#EF4444',
      },
      {
        label: 'Outras',
        data: [0, 0, 0],
        backgroundColor: '#FBBF24',
      },
    ],
  };

  const weekData = {
    labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    datasets: [
      {
        label: 'Samsung',
        data: [0, 0, 1, 0, 0, 0, 0],
        backgroundColor: '#3B82F6',
      },
      {
        label: 'LG',
        data: [0, 0, 0, 0, 0, 0, 0],
        backgroundColor: '#EF4444',
      },
      {
        label: 'Outras',
        data: [0, 0, 0, 0, 0, 0, 0],
        backgroundColor: '#FBBF24',
      },
    ],
  };

  const chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Agendamentos',
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 30,
      },
    },
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 mt-8">Hoje</h2>
      <div className="flex gap-4 mb-6">
        <div className="bg-violet-500 rounded-lg p-4 w-72 text-center shadow-lg">
          <div className="text-3xl font-bold mb-2">0</div>
          <h3 className="text-lg">Agendamentos do Dia</h3>
          <div className="text-sm text-gray-100 mt-2">Dia anterior: 0</div>
        </div>
        <div className="bg-violet-500 rounded-lg p-4 w-72 text-center shadow-lg">
          <div className="text-3xl font-bold mb-2">1</div>
          <h3 className="text-lg">Agendamentos da Semana</h3>
          <div className="text-sm text-gray-100 mt-2">Semana anterior: 0</div>
        </div>
        <div className="bg-violet-500 rounded-lg p-4 w-72 text-center shadow-lg">
          <div className="text-3xl font-bold mb-2">0</div>
          <h3 className="text-lg">Serviços do Dia</h3>
          <div className="text-sm text-gray-100 mt-2">Dia anterior: 0</div>
        </div>
        <div className="bg-violet-500 rounded-lg p-4 w-72 text-center shadow-lg">
          <div className="text-3xl font-bold mb-2">1</div>
          <h3 className="text-lg">Serviços da Semana</h3>
          <div className="text-sm text-gray-100 mt-2">Semana anterior: 0</div>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-4">Conversão nos últimos dias</h2>
      <div className="flex gap-6 h-full">
        <div className="flex-1 h-96 shadow-lg rounded-lg p-4 bg-white">
          <h3 className="text-lg font-semibold mb-2 text-black">Agendamentos do Dia (por marca)</h3>
          <div className="relative h-full">
            <Bar data={dayData} options={chartOptions} />
          </div>
        </div>
        <div className="flex-1 h-96 shadow-lg rounded-lg p-4 bg-white ">
          <h3 className="text-lg font-semibold mb-2 text-black">Agendamentos dos Últimos 7 Dias (por marca)</h3>
          <div className="relative h-full">
            <Bar data={weekData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MonthSummary() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 mt-8">Resumo do Mês</h2>
      <div className="bg-violet-500 rounded-lg p-4 w-full text-left shadow-lg">
        <div className="text-3xl font-bold mb-2 text-white">1</div>
        <h3 className="text-lg text-white">Agendamentos do Mês</h3>
        
        <div className="text-sm text-gray-300">
        <hr className="my-2 border-white bg-violet-500" />
          Mês anterior: 1</div>
      </div>
    </div>
  );
}

function RecentMonthsSummary() {
  const recentMonthsData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [
      {
        label: 'Samsung',
        data: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: '#3B82F6',
      },
      {
        label: 'LG',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: '#EF4444',
      },
      {
        label: 'Outras',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: '#FBBF24',
      },
    ],
  };

  const chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Agendamentos nos Últimos 12 meses de 2024',
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 30,
      },
    },
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 mt-8">Conversão nos últimos meses</h2>
      <div className="flex gap-6">
        <div className="flex-1 h-96 shadow-lg rounded-lg p-4 bg-white">
          <h3 className="text-lg font-semibold mb-2 text-black">Agendamentos nos Últimos 12 meses de 2024 (por marca)</h3>
          <div className="relative h-full">
            <Bar data={recentMonthsData} options={chartOptions} />
          </div>
        </div>
        <div className="flex-1 h-96 shadow-lg rounded-lg p-4 bg-white">
          <h3 className="text-lg font-semibold mb-2 text-black">Agendamentos nos Últimos 12 meses de 2024</h3>
          <div className="relative h-full">
            <Bar data={{
              labels: recentMonthsData.labels,
              datasets: [
                {
                  label: 'Agendamentos',
                  data: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                  backgroundColor: '#F97316',
                },
              ],
            }} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}


function AnnualComparison() {
  const annualComparisonData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [
      {
        label: '2023',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: '#F97316',
      },
      {
        label: '2024',
        data: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: '#FBBF24',
      },
    ],
  };

  const chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Agendamentos nos Últimos 12 meses de 2024-2023',
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 30,
      },
    },
  };

  return (
    <div className="relative h-128">
      <h2 className="text-xl font-semibold mb-4 mt-8">Comparação em relação ao ano anterior (2023)</h2>
      <div className="shadow-lg rounded-lg p-4 bg-white">
        <h3 className="text-lg font-semibold mb-2 text-black">Agendamentos nos Últimos 12 meses de 2024-2023</h3>
        <div className="relative" style={{ height: '700px' }}> {/* Ajuste a altura conforme necessário */}
          <Bar data={annualComparisonData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}
