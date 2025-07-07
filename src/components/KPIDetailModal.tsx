
import React from 'react';
import { X, Database, Target, Globe, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface KPIDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  kpiType: 'assets' | 'sdgs' | 'domains' | 'datasets' | null;
}

/**
 * KPIDetailModal Component
 * 
 * Displays detailed information about specific KPIs when clicked.
 * Shows comprehensive breakdowns of data assets, SDGs, domains, and dataset types.
 */
const KPIDetailModal: React.FC<KPIDetailModalProps> = ({ isOpen, onClose, kpiType }) => {
  if (!isOpen || !kpiType) return null;

  // KPI data structure with detailed breakdowns
  const kpiData = {
    assets: {
      title: 'Total Data Assets Created',
      icon: Database,
      total: '80+',
      subtitle: 'Data Assets Spanning across:',
      items: [
        { label: '50+ Interactive Dashboards', description: 'Real-time data visualization and monitoring systems' },
        { label: '20+ Reports & Data Stories', description: 'Comprehensive analytical reports and narrative insights' },
        { label: '10+ Insight Blogs & Social Media Posts', description: 'Public communication and knowledge sharing content' }
      ]
    },
    sdgs: {
      title: 'SDGs Covered',
      icon: Target,
      total: '10+',
      subtitle: 'Sustainable Development Goals Addressed (UN SDG Framework):',
      items: [
        { label: 'SDG 1: No Poverty', description: 'Poverty reduction and livelihood enhancement initiatives' },
        { label: 'SDG 2: Zero Hunger', description: 'Food security and agricultural development programs' },
        { label: 'SDG 3: Good Health and Well-being', description: 'Healthcare access and wellness promotion' },
        { label: 'SDG 4: Quality Education', description: 'Educational infrastructure and learning outcomes' },
        { label: 'SDG 6: Clean Water and Sanitation', description: 'Water quality monitoring and sanitation systems' },
        { label: 'SDG 7: Affordable and Clean Energy', description: 'Energy access and renewable energy initiatives' },
        { label: 'SDG 8: Decent Work and Economic Growth', description: 'Employment generation and economic development' },
        { label: 'SDG 9: Industry, Innovation, and Infrastructure', description: 'Infrastructure development and innovation promotion' },
        { label: 'SDG 11: Sustainable Cities and Communities', description: 'Urban planning and community development' },
        { label: 'SDG 13: Climate Action', description: 'Climate change mitigation and adaptation measures' }
      ]
    },
    domains: {
      title: 'Domains Covered',
      icon: Globe,
      total: '12+',
      subtitle: 'Development Domains (Cross-sectoral Impact Areas):',
      items: [
        { label: 'Education', description: 'Learning outcomes, infrastructure, and access metrics' },
        { label: 'Health', description: 'Healthcare delivery, outcomes, and system performance' },
        { label: 'Water & Sanitation', description: 'WASH infrastructure and service delivery' },
        { label: 'Telecom & Digital Access', description: 'Digital connectivity and technology adoption' },
        { label: 'Environment & Climate', description: 'Environmental monitoring and climate resilience' },
        { label: 'Poverty & Livelihoods', description: 'Income generation and social protection systems' },
        { label: 'Energy Access', description: 'Power generation, distribution, and accessibility' },
        { label: 'Governance & Public Services', description: 'Service delivery and administrative efficiency' },
        { label: 'Agriculture & Food Security', description: 'Agricultural productivity and food systems' },
        { label: 'Economy & Financial Inclusion', description: 'Economic indicators and financial access' },
        { label: 'Innovation & Startups', description: 'Entrepreneurship and innovation ecosystems' },
        { label: 'Social Protection', description: 'Welfare schemes and social safety nets' }
      ]
    },
    datasets: {
      title: 'Dataset Types Handled',
      icon: FileText,
      total: '15+',
      subtitle: 'Dataset Types Processed & Visualized:',
      items: [
        { label: 'Survey Datasets (NFHS, UDISE+, NSS)', description: 'National and state-level household and facility surveys' },
        { label: 'Administrative Datasets (State MIS, Ministry Data)', description: 'Government administrative and management information systems' },
        { label: 'Open Government Data Portals (ODG, NITI Aayog, MoSPI)', description: 'Public datasets from government data portals' },
        { label: 'Financial & Economic Indicators', description: 'Economic performance and financial sector data' },
        { label: 'Water Quality Metrics', description: 'Environmental and water quality monitoring data' },
        { label: 'Social Media & Platform Metrics', description: 'Digital engagement and platform analytics' },
        { label: 'Custom Field Data (TNA surveys, Primary Studies)', description: 'Primary research and custom data collection initiatives' }
      ]
    }
  };

  const currentKPI = kpiData[kpiType];
  const IconComponent = currentKPI.icon;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-100">
                  {currentKPI.title}
                </h2>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-1">
                  {currentKPI.total}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-slate-500" />
            </button>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4">
              {currentKPI.subtitle}
            </h3>
            
            <div className="space-y-3">
              {currentKPI.items.map((item, index) => (
                <div 
                  key={index}
                  className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700"
                >
                  <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-1">
                    {item.label}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KPIDetailModal;
