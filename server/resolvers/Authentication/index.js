import Regions from '../Regions';
import Region from '../Regions/Region';
import { instance } from '../../utils/curl';

export default ({ token }) => {
  return {
    ...Regions({ curl: instance(token) }),
    ...Region({ curl: instance(token) })
  }
}