import Lines from '../Lines';
import Line from '../Lines/Line';

const transportObject = (infos) => {
  return {
    ...Lines(infos),
    ...Line(infos)
  }
}

export default (infos) => {
  return {
    train: transportObject({ ...infos, type: 'train' }),
    localTrain: transportObject({ ...infos, type: 'localTrain' }),
    metro: transportObject({ ...infos, type: 'metro' }),
    bus: transportObject({ ...infos, type: 'bus' })
  }
}