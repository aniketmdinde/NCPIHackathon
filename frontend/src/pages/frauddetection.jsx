import { useState } from 'react';
import { Upload, AlertTriangle, CheckCircle } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

// Dummy data for analytics
const dummyTransactions = [
  { id: 1, amount: 5000, timestamp: '2024-03-15 10:30', isFraud: false, confidence: 0.92 },
  { id: 2, amount: 25000, timestamp: '2024-03-15 11:45', isFraud: true, confidence: 0.87 },
  { id: 3, amount: 1500, timestamp: '2024-03-15 12:15', isFraud: false, confidence: 0.95 },
  { id: 4, amount: 45000, timestamp: '2024-03-15 13:20', isFraud: true, confidence: 0.89 },
  { id: 5, amount: 3000, timestamp: '2024-03-15 14:10', isFraud: false, confidence: 0.91 }
];

const fraudStats = {
  totalTransactions: 5,
  fraudulentCount: 2,
  safeCount: 3,
  totalAmount: 79500,
  fraudAmount: 70000,
};

const FraudDetection = () => {
  const [file, setFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const analyzeFile = () => {
    setIsAnalyzing(true);
    // Simulate analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Upload Section */}
        <div className="bg-[#1a1a1a]/50 rounded-xl p-8 backdrop-blur-sm border border-white/10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">UPI Transaction Analysis</h1>
            <p className="text-gray-400">Upload your transaction data for fraud detection analysis</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-full max-w-md">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-gray-500 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-3 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">CSV file with transaction data</p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept=".csv"
                  onChange={handleFileUpload}
                />
              </label>
            </div>
            {file && (
              <button
                onClick={analyzeFile}
                disabled={isAnalyzing}
                className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze Transactions'}
              </button>
            )}
          </div>
        </div>

        {/* Results Section */}
        {showResults && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Summary Cards */}
            <div className="bg-[#1a1a1a]/50 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Analysis Summary</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-green-500/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-green-400">Safe Transactions</span>
                  </div>
                  <div className="text-2xl font-bold text-green-400">{fraudStats.safeCount}</div>
                </div>
                <div className="p-4 bg-red-500/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <span className="text-sm text-red-400">Fraudulent</span>
                  </div>
                  <div className="text-2xl font-bold text-red-400">{fraudStats.fraudulentCount}</div>
                </div>
              </div>
            </div>

            {/* Distribution Chart */}
            <div className="bg-[#1a1a1a]/50 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Transaction Distribution</h3>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Safe', value: fraudStats.safeCount },
                        { name: 'Fraudulent', value: fraudStats.fraudulentCount }
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      <Cell fill="#10B981" />
                      <Cell fill="#EF4444" />
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Transaction List */}
            <div className="md:col-span-2 bg-[#1a1a1a]/50 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Transaction Details</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-400">
                      <th className="p-2">Timestamp</th>
                      <th className="p-2">Amount</th>
                      <th className="p-2">Status</th>
                      <th className="p-2">Confidence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummyTransactions.map((tx) => (
                      <tr key={tx.id} className="border-t border-gray-800">
                        <td className="p-2">{tx.timestamp}</td>
                        <td className="p-2">₹{tx.amount.toLocaleString()}</td>
                        <td className="p-2">
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                              tx.isFraud
                                ? 'bg-red-500/10 text-red-400'
                                : 'bg-green-500/10 text-green-400'
                            }`}
                          >
                            {tx.isFraud ? 'Fraudulent' : 'Safe'}
                          </span>
                        </td>
                        <td className="p-2">{(tx.confidence * 100).toFixed(1)}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FraudDetection;
