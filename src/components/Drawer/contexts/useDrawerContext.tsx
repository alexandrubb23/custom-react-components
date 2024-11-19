import useRequiredContext from '../../../hooks/useRequiredContext';
import DrawerContext from './DrawerContext';

const useDrawerContext = () => useRequiredContext(DrawerContext);

export default useDrawerContext;
