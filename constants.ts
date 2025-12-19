import { AnnualDataPoint, MonthlyDataPoint, IssueDataPoint } from './types';

// Slide 4: 2012-2025 Annual Daily Avg New Users
export const dailyAvgNewUsers: AnnualDataPoint[] = [
  { year: '2012', value: 1.02 },
  { year: '2013', value: 2.18 },
  { year: '2014', value: 1.30 },
  { year: '2015', value: 7.27 },
  { year: '2016', value: 11.46 },
  { year: '2017', value: 6.74 },
  { year: '2018', value: 3.29 },
  { year: '2019', value: 1.34 },
  { year: '2020', value: 0.99 },
  { year: '2021', value: 0.48 },
  { year: '2022', value: 0.41 },
  { year: '2023', value: 0.45 },
  { year: '2024', value: 0.49 },
  { year: '2025', value: 0.50 },
];

// Slide 5: Last 5 Years Total New Users
export const annualTotalNewUsers: AnnualDataPoint[] = [
  { year: '2021', value: 176.72 },
  { year: '2022', value: 148.21 },
  { year: '2023', value: 163.36 },
  { year: '2024', value: 179.33 },
  { year: '2025', value: 181.11 },
];

// Slide 6: Monthly New Users (Comparison)
export const monthlyNewUsers: MonthlyDataPoint[] = [
  { month: '12月(上年)', year2024: 15.0, year2025: 16.0 }, // Approx start
  { month: '1月', year2024: 20.0, year2025: 24.52 },
  { month: '2月', year2024: 19.31, year2025: 12.5 },
  { month: '3月', year2024: 12.0, year2025: 11.8 },
  { month: '4月', year2024: 12.2, year2025: 11.5 },
  { month: '5月', year2024: 12.5, year2025: 11.01 },
  { month: '6月', year2024: 12.3, year2025: 11.2 },
  { month: '7月', year2024: 14.5, year2025: 13.0 },
  { month: '8月', year2024: 19.59, year2025: 13.5 },
  { month: '9月', year2024: 8.40, year2025: 15.73 },
  { month: '10月', year2024: 18.0, year2025: 15.8 },
  { month: '11月', year2024: 17.8, year2025: 16.0 },
];

// Slide 8: Re-authorization
export const monthlyReAuth: MonthlyDataPoint[] = [
  { month: '12月', year2024: 45.0, year2025: 55.0 },
  { month: '1月', year2024: 60.59, year2025: 100.66 },
  { month: '2月', year2024: 60.0, year2025: 33.96 },
  { month: '3月', year2024: 35.0, year2025: 34.0 },
  { month: '4月', year2024: 33.0, year2025: 33.5 },
  { month: '5月', year2024: 32.0, year2025: 35.0 },
  { month: '6月', year2024: 29.63, year2025: 36.0 },
  { month: '7月', year2024: 41.69, year2025: 42.0 },
  { month: '8月', year2024: 42.30, year2025: 40.0 },
  { month: '9月', year2024: 38.0, year2025: 41.0 },
  { month: '10月', year2024: 43.0, year2025: 41.5 },
  { month: '11月', year2024: 44.49, year2025: 42.0 },
];

// Slide 12: Chip Inventory Input
export const chipInventory: MonthlyDataPoint[] = [
  { month: '12月', year2024: 30.5, year2025: 29.0 },
  { month: '1月', year2024: 30.0, year2025: 25.0 }, // Peak approx
  { month: '2月', year2024: 8.0, year2025: 5.79 },
  { month: '3月', year2024: 7.8, year2025: 8.0 },
  { month: '4月', year2024: 7.5, year2025: 10.0 },
  { month: '5月', year2024: 5.62, year2025: 7.0 },
  { month: '6月', year2024: 7.0, year2025: 16.62 },
  { month: '7月', year2024: 25.81, year2025: 10.0 },
  { month: '8月', year2024: 16.0, year2025: 12.0 },
  { month: '9月', year2024: 18.0, year2025: 15.0 },
  { month: '10月', year2024: 12.0, year2025: 18.0 },
  { month: '11月', year2024: 8.0, year2025: 34.49 },
];

// Slide 16: Call Volume
export const callVolume: MonthlyDataPoint[] = [
  { month: '12月', year2024: 10.0, year2025: 6.0 },
  { month: '1月', year2024: 16.20, year2025: 8.56 },
  { month: '2月', year2024: 12.0, year2025: 5.0 },
  { month: '3月', year2024: 3.81, year2025: 4.0 },
  { month: '4月', year2024: 4.5, year2025: 4.5 },
  { month: '5月', year2024: 4.8, year2025: 5.73 },
  { month: '6月', year2024: 5.5, year2025: 4.58 },
  { month: '7月', year2024: 6.97, year2025: 6.0 },
  { month: '8月', year2024: 6.5, year2025: 6.1 },
  { month: '9月', year2024: 5.0, year2025: 6.2 },
  { month: '10月', year2024: 6.0, year2025: 6.12 },
  { month: '11月', year2024: 5.5, year2025: 5.0 },
];

// Slide 19: Beidou Issues (Approximation of the line chart trends)
export const beidouIssues: IssueDataPoint[] = [
  { date: '23年11月', E140: 1100, E126: 700, E125: 150, T08: 120, T01: 100 },
  { date: '23年12月', E140: 1250, E126: 750, E125: 180, T08: 130, T01: 90 },
  { date: '24年1月', E140: 1450, E126: 950, E125: 250, T08: 200, T01: 120 },
  { date: '24年2月', E140: 2038, E126: 1100, E125: 800, T08: 280, T01: 220 }, // Peak
  { date: '24年3月', E140: 800, E126: 550, E125: 250, T08: 150, T01: 100 },
  { date: '24年4月', E140: 850, E126: 560, E125: 350, T08: 160, T01: 110 },
  { date: '24年5月', E140: 920, E126: 650, E125: 250, T08: 140, T01: 100 },
  { date: '24年6月', E140: 800, E126: 620, E125: 220, T08: 130, T01: 100 },
  { date: '24年7月', E140: 900, E126: 780, E125: 320, T08: 140, T01: 120 },
  { date: '24年8月', E140: 950, E126: 760, E125: 250, T08: 180, T01: 160 },
  { date: '24年9月', E140: 750, E126: 700, E125: 240, T08: 150, T01: 120 },
  { date: '24年10月', E140: 1020, E126: 550, E125: 280, T08: 140, T01: 120 },
  { date: '24年11月', E140: 750, E126: 480, E125: 250, T08: 140, T01: 100 },
  { date: '24年12月', E140: 1250, E126: 750, E125: 180, T08: 120, T01: 100 },
  { date: '25年1月', E140: 1405, E126: 950, E125: 250, T08: 180, T01: 150 },
  { date: '25年2月', E140: 1000, E126: 550, E125: 250, T08: 220, T01: 100 },
  { date: '25年10月', E140: 1319, E126: 650, E125: 550, T08: 400, T01: 450 }, // End spike
];

// Base station issues
export const baseStationIssues: IssueDataPoint[] = [
  { date: '24年1月', E04: 15000, NoLoc: 5000, Signal: 3000, Change: 4000, Card: 2000 },
  { date: '24年2月', E04: 27100, NoLoc: 4000, Signal: 5000, Change: 4000, Card: 2000 }, // 2.71 Wan
  { date: '24年3月', E04: 10000, NoLoc: 3000, Signal: 2000, Change: 2000, Card: 1000 },
  { date: '24年8月', E04: 9900, NoLoc: 3000, Signal: 4000, Change: 3500, Card: 1500 }, // 0.99 Wan
  { date: '25年1月', E04: 23400, NoLoc: 6000, Signal: 4000, Change: 5000, Card: 3000 }, // 2.34 Wan
  { date: '25年5月', E04: 11100, NoLoc: 7000, Signal: 4000, Change: 2000, Card: 1000 }, // 1.11 Wan
];