import React, { useState } from 'react'

const App = () => {
  const [activeTab, setActiveTab] = useState('Overview')

  const stats = [
    { title: 'Total Revenue', value: '$45,231.89', change: '+20.1%', isPos: true, icon: '💰' },
    { title: 'Subscriptions', value: '+2,350', change: '+180.1%', isPos: true, icon: '👥' },
    { title: 'Sales Volume', value: '12,234', change: '-4.2%', isPos: false, icon: '⚡' },
    { title: 'Active Now', value: '573', change: '+201 online', isPos: true, icon: '🔥' },
  ]

  const recentActivity = [
    { name: 'Olivia Martin', email: 'olivia@email.com', amount: '+$1,999.00', status: 'Completed', avatar: 'https://i.pravatar.cc/150?img=32' },
    { name: 'Jackson Lee', email: 'jackson@email.com', amount: '+$39.00', status: 'Pending', avatar: 'https://i.pravatar.cc/150?img=12' },
    { name: 'Isabella Nguyen', email: 'isabella@email.com', amount: '+$299.00', status: 'Completed', avatar: 'https://i.pravatar.cc/150?img=47' },
    { name: 'William Kim', email: 'will@email.com', amount: '+$99.00', status: 'Failed', avatar: 'https://i.pravatar.cc/150?img=11' },
  ]

  return (
    <div className="flex h-screen bg-slate-900 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-950/60 backdrop-blur-xl border-r border-slate-800 flex flex-col justify-between p-5 hidden md:flex">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 px-3 py-2 mb-8">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
              ⚡
            </div>
            <span className="font-bold text-lg tracking-wide text-white">ApexDash</span>
          </div>

          {/* Nav Items */}
          <nav className="space-y-1.5">
            {['Overview', 'Analytics', 'Customers', 'Settings'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                  activeTab === item
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <span>{item}</span>
                {activeTab === item && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>}
              </button>
            ))}
          </nav>
        </div>

        {/* User Card inside Sidebar */}
        <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800 flex items-center gap-3">
          <img src="https://i.pravatar.cc/150?img=68" alt="User" className="w-10 h-10 rounded-full ring-2 ring-indigo-500/50" />
          <div className="overflow-hidden">
            <p className="text-sm font-semibold text-white truncate">Alex Morgan</p>
            <p className="text-xs text-slate-400 truncate">Pro Account</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden bg-slate-900">
        {/* Navbar */}
        <header className="bg-slate-950/40 backdrop-blur-md border-b border-slate-800/80 px-8 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">{activeTab}</h1>
            <p className="text-xs text-slate-400 mt-0.5">Here is what is happening with your projects today.</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-slate-800/60 border border-slate-700/60 text-sm text-slate-200 placeholder-slate-400 rounded-xl px-4 py-2 pl-9 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 w-48 sm:w-64 transition-all"
              />
              <span className="absolute left-3 top-2.5 text-slate-400 text-xs">🔍</span>
            </div>
            <button className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:bg-slate-800 transition">
              🔔
            </button>
          </div>
        </header>

        {/* Dashboard Body */}
        <main className="flex-1 overflow-y-auto p-8 space-y-8">
          {/* Top Metric Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-slate-950/50 backdrop-blur-md border border-slate-800/80 p-5 rounded-2xl hover:border-slate-700 transition-all duration-200 group relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{stat.title}</span>
                  <span className="text-lg p-2 rounded-xl bg-slate-900 border border-slate-800">{stat.icon}</span>
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <span className="text-2xl font-bold text-white tracking-tight">{stat.value}</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                    stat.isPos 
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                      : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity Table */}
          <div className="bg-slate-950/50 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">Recent Transactions</h3>
                <p className="text-xs text-slate-400">Latest successful payments across all channels.</p>
              </div>
              <button className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition">View All →</button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    <th className="pb-3 pl-2">Customer</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3 text-right pr-2">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50 text-sm">
                  {recentActivity.map((user, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-3.5 pl-2 flex items-center gap-3">
                        <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover" />
                        <div>
                          <p className="font-semibold text-slate-200">{user.name}</p>
                          <p className="text-xs text-slate-400">{user.email}</p>
                        </div>
                      </td>
                      <td className="py-3.5">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                          user.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                          user.status === 'Pending' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                          'bg-rose-500/10 text-rose-400 border-rose-500/20'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-3.5 text-right pr-2 font-bold text-slate-100">{user.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App