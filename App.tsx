import React, { useState } from 'react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, ComposedChart
} from 'recharts';
import {
  LayoutDashboard,
  Users,
  Settings,
  Package,
  Headphones,
  Menu,
  ChevronRight,
  TrendingUp,
  AlertCircle,
  Phone,
  Radio,
  Satellite
} from 'lucide-react';
import {
  dailyAvgNewUsers,
  annualTotalNewUsers,
  monthlyNewUsers,
  monthlyReAuth,
  chipInventory,
  callVolume,
  beidouIssues,
  baseStationIssues
} from './constants';
import { ReportSection } from './types';

// --- Shared Components ---

const Card: React.FC<{ title: string; subtitle?: string; children: React.ReactNode; analysis?: string }> = ({ title, subtitle, children, analysis }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full">
    <div className="p-6 border-b border-slate-50">
      <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
        <div className="w-1 h-6 bg-red-500 rounded-full"></div>
        {title}
      </h3>
      {subtitle && <p className="text-sm text-slate-500 mt-1 ml-3">{subtitle}</p>}
    </div>
    <div className="p-6 flex-grow min-h-[300px]">
      {children}
    </div>
    {analysis && (
      <div className="bg-slate-50 p-4 border-t border-slate-100 text-sm text-slate-600">
        <span className="font-semibold text-red-600 mr-2">数据分析:</span>
        {analysis}
      </div>
    )}
  </div>
);

const SectionHeader: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="mb-8">
    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">{title}</h1>
    <p className="mt-2 text-lg text-slate-600">{description}</p>
    <div className="mt-4 h-1 w-20 bg-gradient-to-r from-red-500 to-red-300 rounded-full"></div>
  </div>
);

// --- Sections ---

const HomeSection = () => (
  <div className="space-y-6">
    <SectionHeader 
      title="2025年直播卫星业务报告" 
      description="关于'户户通'直播卫星服务的用户增长、运营指标、库存状态和服务质量的执行摘要。" 
    />
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { label: '2025年新增用户', value: '181.11 万', icon: Users, color: 'text-blue-600', trend: '+1.0%' },
        { label: '日均新增用户峰值', value: '11.46 万', sub: '(2016 历史峰值)', icon: TrendingUp, color: 'text-red-600', trend: '历史数据' },
        { label: '月均二次授权', value: '~45 万', icon: Settings, color: 'text-orange-600', trend: '平稳' },
        { label: '客服来电量', value: '16.20 万', sub: '(24年1月 峰值)', icon: Phone, color: 'text-green-600', trend: '季节性波动' },
      ].map((stat, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
              {stat.sub && <p className="text-xs text-slate-400 mt-1">{stat.sub}</p>}
            </div>
            <div className={`p-3 rounded-lg bg-slate-50 ${stat.color}`}>
              <stat.icon size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-slate-600 font-medium">{stat.trend}</span>
          </div>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card title="业务发展趋势" analysis="在经历了2016年的高峰下滑后，用户获取规模趋于稳定，并从2022年起显示出微弱增长趋势，2025年年新增用户达到181.11万。">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={annualTotalNewUsers}>
            <defs>
              <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} label={{ value: '用户数 (万)', angle: -90, position: 'insideLeft', fill: '#94a3b8' }} />
            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
            <Area type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorUsers)" name="新增用户 (万)" />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 text-white flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-4">核心洞察</h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="bg-red-500 p-1 rounded mt-1"><ChevronRight size={16} /></div>
            <p><span className="font-bold text-red-400">复苏迹象:</span> 用户增长已从2022年的低谷（148.21万）中恢复。</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="bg-red-500 p-1 rounded mt-1"><ChevronRight size={16} /></div>
            <p><span className="font-bold text-red-400">季节效应:</span> 每年1月和2月是各项运营指标（开户、二次授权、话务量）的显著高峰期。</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="bg-red-500 p-1 rounded mt-1"><ChevronRight size={16} /></div>
            <p><span className="font-bold text-red-400">库存波动:</span> 芯片与机顶盒库存波动剧烈，预计2025年底将出现备货高峰。</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const UserDevSection = () => (
  <div className="space-y-6">
    <SectionHeader 
      title="用户发展概况" 
      description="新增用户获取趋势分析，包括日均开户数及2024-2025年的月度对比。" 
    />
    
    <Card title="2012-2025年 日均新增用户" analysis="2015-2017年为高速增长的黄金期，2016年达到日均11.46万的峰值。近年市场已进入'长尾'稳定期，日均新增维持在0.5万左右。">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dailyAvgNewUsers}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
          <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
          <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
          <Bar dataKey="value" fill="#f97316" radius={[4, 4, 0, 0]} name="日均新增 (万)" />
        </BarChart>
      </ResponsiveContainer>
    </Card>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card title="月度新增用户对比 (2024 vs 2025)" analysis="2025年（橙色）1月开局强劲（24.52万），优于2024年同期，但在第一季度后期及第二季度回落至2024年水平以下。">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyNewUsers}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
            <Legend verticalAlign="top" height={36}/>
            <Line type="monotone" dataKey="year2024" stroke="#1e40af" strokeWidth={2} dot={false} name="2024年" />
            <Line type="monotone" dataKey="year2025" stroke="#f97316" strokeWidth={2} dot={false} name="2025年" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
      
      <Card title="近5年总新增用户趋势" analysis="自2022年触底后稳步回升。市场年新增用户规模已在180万左右找到新的平衡点。">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={annualTotalNewUsers}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
            <YAxis domain={['dataMin - 20', 'dataMax + 20']} axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
            <Line type="monotone" dataKey="value" stroke="#ea580c" strokeWidth={3} dot={{r: 4, fill: '#ea580c', strokeWidth: 2, stroke: '#fff'}} name="年度总新增 (万)" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  </div>
);

const UserOpsSection = () => (
  <div className="space-y-6">
    <SectionHeader 
      title="用户运营与活跃度" 
      description="追踪用户二次授权、销户及设备移机等关键运营指标。" 
    />

    <Card title="月度二次授权量" analysis="2025年1月二次授权量出现爆发式增长（100.66万），较前一年峰值几近翻倍，表明存在重大的季节性激活事件或政策性调整。">
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={monthlyReAuth}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
          <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
          <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
          <Legend verticalAlign="top" height={36}/>
          <Line type="monotone" dataKey="year2024" stroke="#1e40af" strokeWidth={2} dot={false} name="2024年" />
          <Line type="monotone" dataKey="year2025" stroke="#f97316" strokeWidth={2} dot={{r: 4}} name="2025年" />
        </LineChart>
      </ResponsiveContainer>
    </Card>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-xl border border-slate-100">
        <h4 className="font-semibold text-slate-700 mb-2">二次授权峰值</h4>
        <div className="text-3xl font-bold text-red-500">100.66 万</div>
        <p className="text-sm text-slate-500">2025年1月</p>
      </div>
      <div className="bg-white p-6 rounded-xl border border-slate-100">
        <h4 className="font-semibold text-slate-700 mb-2">月均销户量</h4>
        <div className="text-3xl font-bold text-blue-600">~6,000</div>
        <p className="text-sm text-slate-500">月均估算</p>
      </div>
      <div className="bg-white p-6 rounded-xl border border-slate-100">
        <h4 className="font-semibold text-slate-700 mb-2">移机趋势</h4>
        <div className="text-3xl font-bold text-orange-500">下降</div>
        <p className="text-sm text-slate-500">2024 至 2025</p>
      </div>
    </div>
  </div>
);

const InventorySection = () => (
  <div className="space-y-6">
    <SectionHeader 
      title="设备与库存管理" 
      description="主芯片与高清机顶盒的库存水位监控，反映供应链流动性。" 
    />
    
    <Card title="主芯片月度入库量" analysis="供应波动较大。虽然2025年中期（5月）入库量较低（5.62万），但预计11月将迎来大幅备货（34.49万），显示出明显的年底备货策略。">
       <ResponsiveContainer width="100%" height={350}>
        <LineChart data={chipInventory}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
          <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
          <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
          <Legend verticalAlign="top" height={36}/>
          <Line type="monotone" dataKey="year2024" stroke="#0f766e" strokeWidth={2} dot={false} name="2024年芯片" />
          <Line type="monotone" dataKey="year2025" stroke="#f97316" strokeWidth={2} dot={{r: 4}} name="2025年芯片" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  </div>
);

const AfterSalesSection = () => (
  <div className="space-y-6">
    <SectionHeader 
      title="售后服务与质量" 
      description="客服话务量、人工智能接通率及北斗/基站设备技术故障追踪分析。" 
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card title="月度话务量趋势" analysis="话务量与每年1月的新增用户及二次授权高峰高度正相关（峰值16.20万）。第一季度的人力资源保障至关重要。">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={callVolume}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
            <Legend verticalAlign="top" height={36}/>
            <Line type="monotone" dataKey="year2024" stroke="#1e40af" strokeWidth={2} name="2024年话务量" />
            <Line type="monotone" dataKey="year2025" stroke="#f97316" strokeWidth={2} name="2025年话务量" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
      
       <Card title="北斗设备主要技术故障" analysis="E140故障（蓝线）最为普遍，于24年2月达到峰值（2038起）。E126（橙线）紧随其后，趋势相似但量级较小。">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={beidouIssues}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} interval={2} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
            <Legend wrapperStyle={{fontSize: '12px'}}/>
            <Line type="monotone" dataKey="E140" stroke="#1e40af" dot={false} strokeWidth={2} name="E140 故障" />
            <Line type="monotone" dataKey="E126" stroke="#f97316" dot={false} strokeWidth={2} name="E126 故障" />
            <Line type="monotone" dataKey="E125" stroke="#10b981" dot={false} name="E125 故障" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>

    <Card title="基站设备故障分析" analysis="E04（未授权）是造成服务中断的主要原因，在24年初和25年初均出现了数万级的爆发（2.71万/2.34万），呈现明显的周期性特征。">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={baseStationIssues}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
            <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
            <Legend />
            <Bar dataKey="E04" fill="#0369a1" name="E04 未授权" />
            <Bar dataKey="NoLoc" fill="#f97316" name="无定位信息" />
            <Bar dataKey="Signal" fill="#22c55e" name="信号丢失" />
          </BarChart>
        </ResponsiveContainer>
    </Card>
  </div>
);

// --- Main Layout ---

const SidebarItem = ({ icon: Icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
      active 
        ? 'bg-red-50 text-red-600 font-semibold shadow-sm' 
        : 'text-slate-600 hover:bg-white hover:text-slate-900'
    }`}
  >
    <Icon size={20} className={active ? 'text-red-600' : 'text-slate-400'} />
    <span>{label}</span>
    {active && <ChevronRight size={16} className="ml-auto" />}
  </button>
);

export default function App() {
  const [activeSection, setActiveSection] = useState<ReportSection>(ReportSection.HOME);

  const renderSection = () => {
    switch (activeSection) {
      case ReportSection.HOME: return <HomeSection />;
      case ReportSection.USER_DEV: return <UserDevSection />;
      case ReportSection.USER_OPS: return <UserOpsSection />;
      case ReportSection.INVENTORY: return <InventorySection />;
      case ReportSection.AFTERSALES: return <AfterSalesSection />;
      default: return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 fixed h-full z-10 hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white">
            <Satellite size={20} />
          </div>
          <div>
            <h1 className="font-bold text-slate-900 leading-tight">直播卫星业务</h1>
            <p className="text-xs text-slate-500">2025年度报告</p>
          </div>
        </div>
        
        <nav className="p-4 space-y-2 flex-grow">
          <SidebarItem 
            icon={LayoutDashboard} 
            label="总览" 
            active={activeSection === ReportSection.HOME} 
            onClick={() => setActiveSection(ReportSection.HOME)} 
          />
          <div className="pt-4 pb-2 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            报表分类
          </div>
          <SidebarItem 
            icon={TrendingUp} 
            label="用户发展" 
            active={activeSection === ReportSection.USER_DEV} 
            onClick={() => setActiveSection(ReportSection.USER_DEV)} 
          />
          <SidebarItem 
            icon={Settings} 
            label="运营监控" 
            active={activeSection === ReportSection.USER_OPS} 
            onClick={() => setActiveSection(ReportSection.USER_OPS)} 
          />
          <SidebarItem 
            icon={Package} 
            label="库存管理" 
            active={activeSection === ReportSection.INVENTORY} 
            onClick={() => setActiveSection(ReportSection.INVENTORY)} 
          />
          <SidebarItem 
            icon={Headphones} 
            label="售后服务" 
            active={activeSection === ReportSection.AFTERSALES} 
            onClick={() => setActiveSection(ReportSection.AFTERSALES)} 
          />
        </nav>

        <div className="p-4 border-t border-slate-100">
          <div className="bg-red-50 rounded-lg p-4 text-center">
            <p className="text-xs text-red-600 font-semibold mb-1">国家广播电视总局</p>
            <p className="text-[10px] text-red-400">2025年12月发布</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-4 md:p-8 overflow-y-auto">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between mb-6 bg-white p-4 rounded-xl shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white">
              <Satellite size={20} />
            </div>
            <span className="font-bold text-slate-900">直播卫星 2025</span>
          </div>
          <button className="text-slate-500"><Menu /></button>
        </div>

        {renderSection()}

        <footer className="mt-12 pt-6 border-t border-slate-200 text-center text-slate-400 text-sm">
          <p>© 2025 国家广播电视总局 - 卫星直播管理中心</p>
        </footer>
      </main>
    </div>
  );
}