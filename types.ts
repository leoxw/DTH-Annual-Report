export interface AnnualDataPoint {
  year: string;
  value: number;
}

export interface MonthlyDataPoint {
  month: string;
  year2024: number;
  year2025: number;
}

export interface IssueDataPoint {
  date: string;
  [key: string]: string | number;
}

export interface SectionProps {
  isActive: boolean;
}

export enum ReportSection {
  HOME = 'home',
  USER_DEV = 'user_dev',
  USER_OPS = 'user_ops',
  INVENTORY = 'inventory',
  AFTERSALES = 'aftersales',
}