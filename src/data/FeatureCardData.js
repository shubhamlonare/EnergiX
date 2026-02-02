import PeopleIcon from '@mui/icons-material/People';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import DescriptionIcon from '@mui/icons-material/Description';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';


let Card = [
    {id: 1, name: "Consumer Management", description: "Efficiently manage consumer profiles, meter assignments, and account details in one centralized system.", icon: PeopleIcon },
    {id: 2, name: "Smart Meter Readings", description: "Track real-time meter readings with automated data collection and validation for accurate consumption monitoring.", icon: MonitorHeartIcon},
    {id: 3, name: "Automated Billing", description: "Generate accurate bills automatically based on consumption data with customizable billing cycles and rates.", icon: DescriptionIcon},
    {id: 4, name: "Online Payments", description: "Accept payments securely through multiple payment methods with instant confirmation and receipt generation.", icon: CreditCardIcon},
    {id: 5, name: "Reports & Analytics", description: "Gain insights with comprehensive reports, consumption trends, and revenue analytics dashboards.", icon: AnalyticsIcon},
    {id: 6, name: "Real-Time Monitoring", description: "Monitor system performance, consumer activity, and energy consumption patterns in real-time.", icon: ElectricBoltIcon}
];

export default Card;