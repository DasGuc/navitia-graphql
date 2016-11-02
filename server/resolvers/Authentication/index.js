import Region from '../Region';
import { instance } from '../../utils/curl';

export default ({ token }) => {
  return {
    ...Region({ curl: instance(token) })
  }
}