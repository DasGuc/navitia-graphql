import Transport from '../../Transport';

export default ({ curl }) => {
  return {
    region({ id }) {
      return curl(`/${id}`).then(({ regions: { [0]: region }}) => {
        return {
          ...region,
          ...Transport({ curl, region: id })
        }
      });
    }
  }
}