import { useParams } from 'react-router-dom';
import MedicDetails from '../components/medics-page/details/MedicDetails';

const MedicDetailsPage = () => {
  const { medicId } = useParams();
  return <MedicDetails medicId={medicId} />;
};
export default MedicDetailsPage;
