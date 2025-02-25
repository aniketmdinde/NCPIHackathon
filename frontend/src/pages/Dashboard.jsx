import { ChevronDown, TrendingUp, AlertTriangle, DollarSign, Shield } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const monthlyData = [
  { name: 'Apr', value: 45 },
  { name: 'May', value: 52 },
  { name: 'Jun', value: 48 },
  { name: 'Jul', value: 58 },
  { name: 'Aug', value: 63 },
  { name: 'Sep', value: 57 }
];

const yearlyData = [
  { name: '2022', cases: 980000, amount: 1058 },
  { name: '2023', cases: 1340000, amount: 1087 },
  { name: '2024', cases: 632000, amount: 485 }
];

const Dashboard = () => {
  return (
    <div className="bg-[#0A0A0A] text-white relative">
      {/* Landing Page Section */}
      <div className="min-h-screen relative overflow-hidden pt-16">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <video
            className="w-full h-full object-cover"
            src="/src/assests/bg.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ opacity: '0.6', pointerEvents: 'none' }}
          />
        </div>

        {/* Animated gradient background - with reduced opacity */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a,transparent_100%)] opacity-50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(29,78,216,0.15),transparent_100%)] opacity-50"></div>
        </div>

        {/* Main Content */}
        <main className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 z-20">
          {/* Decorative Elements */}
          <div className="absolute left-20 top-1/4 text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-sm">Cortex</span>
              <span className="text-sm text-gray-500">20.945</span>
            </div>
            <div className="ml-1 h-40 w-px bg-gradient-to-b from-blue-500/50 to-transparent"></div>
          </div>

          <div className="absolute right-20 top-1/4 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-sm">Quant</span>
              <span className="text-sm text-gray-500">2.945</span>
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            </div>
            <div className="ml-1 h-40 w-px bg-gradient-to-b from-blue-500/50 to-transparent"></div>
          </div>

          {/* Additional Decorative Elements */}
          <div className="absolute left-32 bottom-1/4 text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span className="text-sm">Aeif</span>
              <span className="text-sm text-gray-500">19.346</span>
            </div>
            <div className="ml-1 h-40 w-px bg-gradient-to-b from-purple-500/50 to-transparent"></div>
          </div>

          <div className="absolute right-32 bottom-1/4 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-sm">Meeton</span>
              <span className="text-sm text-gray-500">.440</span>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <div className="ml-1 h-40 w-px bg-gradient-to-b from-green-500/50 to-transparent"></div>
          </div>

          {/* Center Content */}
          <div className="text-center space-y-8 max-w-4xl relative z-10">
            <h1 className="text-7xl font-bold leading-tight tracking-tight">
              Stay Safe, Stay Secure <span className="text-gray-400"> <br />Your UPI, Our Priority</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Powered by AI & ML – Smart Fraud Detection for a Secure UPI Experience.
            </p>

            <div className="flex items-center justify-center gap-4 mt-12">
              <button className="px-8 py-3 rounded-full bg-[#1a1a1a] hover:bg-[#252525] transition-colors backdrop-blur-sm border border-white/10">
                Protection
              </button>
              <button className="px-8 py-3 rounded-full bg-white text-black hover:bg-gray-100 transition-colors">
                Discover More
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-8 flex items-center gap-2 text-gray-500">
            <ChevronDown className="w-4 h-4 animate-bounce" />
            <span className="text-sm">01/03 · Scroll for Insights</span>
          </div>

          {/* Partner Logos */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-12">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center">
                <img src="/logo1.svg" alt="Partner 1" className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center">
                <img src="/logo2.svg" alt="Partner 2" className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center">
                <img src="/logo3.svg" alt="Partner 3" className="w-4 h-4" />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Stats Section - ADJUSTED FOR VIEWPORT FIT */}
      <div className="relative pt-32 pb-24">
        {/* Background gradients matching landing page */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a,transparent_100%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(29,78,216,0.15),transparent_100%)]"></div>
        </div>

        <div className="relative w-full">
          <div className="max-w-6xl mx-auto px-4">
            {/* Section Header - More compact */}
            <div className="text-center mb-4">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Insights
              </h2>
              <p className="text-base text-gray-400 max-w-2xl mx-auto">
                Save your assets from fraud, powered by real-time analytics and AI
              </p>
            </div>

            {/* Stats Grid - Adjusted for vertical fit */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card 1 - Surge in Fraud Cases - More compact */}
              <div className="bg-[#1a1a1a]/50 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold mb-0">Surge in Fraud Cases</h3>
                    <p className="text-gray-400 text-xs">Financial Year 2023-24</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-red-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-red-400">85%</div>
                      <p className="text-gray-400 text-xs">Increase in UPI fraud cases</p>
                    </div>
                    <div className="flex space-x-4">
                      <div>
                        <div className="text-base font-semibold">1.34M</div>
                        <p className="text-xs text-gray-400">Reported Incidents</p>
                      </div>
                      <div>
                        <div className="text-base font-semibold">₹1,087 Cr</div>
                        <p className="text-xs text-gray-400">Total Losses</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-24">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={yearlyData}>
                        <defs>
                          <linearGradient id="colorCases" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2}/>
                            <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                        <XAxis dataKey="name" stroke="#666" axisLine={false} tickLine={false} />
                        <YAxis stroke="#666" axisLine={false} tickLine={false} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px' }}
                          labelStyle={{ color: '#fff' }}
                        />
                        <Area type="monotone" dataKey="cases" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorCases)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Card 2 - Current Year Stats - More compact */}
              <div className="bg-[#1a1a1a]/50 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold mb-0">Current Year Data</h3>
                    <p className="text-gray-400 text-xs">As of September 2024</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-yellow-400">6.32L</div>
                      <p className="text-gray-400 text-xs">Reported UPI Fraud Cases</p>
                    </div>
                    <div>
                      <div className="text-base font-semibold">₹485 Cr</div>
                      <p className="text-xs text-gray-400">Losses in 2024</p>
                    </div>
                  </div>
                  <div className="h-24">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                        <XAxis dataKey="name" stroke="#666" axisLine={false} tickLine={false} />
                        <YAxis stroke="#666" axisLine={false} tickLine={false} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px' }}
                          labelStyle={{ color: '#fff' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#eab308" 
                          strokeWidth={2} 
                          dot={{ fill: '#eab308', strokeWidth: 2 }}
                          activeDot={{ r: 6, fill: '#eab308' }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Card 3 - Cumulative Losses - More compact */}
              <div className="bg-[#1a1a1a]/50 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold mb-0">Cumulative Losses</h3>
                    <p className="text-gray-400 text-xs">Since FY 2022-23</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-blue-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-blue-400">₹2,145 Cr</div>
                      <p className="text-gray-400 text-xs">Total Financial Impact</p>
                    </div>
                    <div>
                      <div className="text-base font-semibold">2.7M</div>
                      <p className="text-xs text-gray-400">Total Cases</p>
                    </div>
                  </div>
                  <div className="h-24">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={yearlyData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                        <XAxis dataKey="name" stroke="#666" axisLine={false} tickLine={false} />
                        <YAxis stroke="#666" axisLine={false} tickLine={false} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px' }}
                          labelStyle={{ color: '#fff' }}
                        />
                        <Bar dataKey="amount" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Card 4 - Total Impact - More compact */}
              <div className="bg-[#1a1a1a]/50 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold mb-0">Total Impact</h3>
                    <p className="text-gray-400 text-xs">2022 - September 2024</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-purple-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-purple-400">33.32L</div>
                      <p className="text-gray-400 text-xs">Total Reported Cases</p>
                    </div>
                    <div>
                      <div className="text-base font-semibold">₹2,630 Cr</div>
                      <p className="text-xs text-gray-400">Total Losses</p>
                    </div>
                  </div>
                  <div className="h-24">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={yearlyData}>
                        <defs>
                          <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                        <XAxis dataKey="name" stroke="#666" axisLine={false} tickLine={false} />
                        <YAxis stroke="#666" axisLine={false} tickLine={false} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px' }}
                          labelStyle={{ color: '#fff' }}
                        />
                        <Area type="monotone" dataKey="amount" stroke="#a855f7" strokeWidth={2} fillOpacity={1} fill="url(#colorAmount)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;