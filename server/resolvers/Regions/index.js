import Transport from '../Transport';

export default ({ curl }) => {
  return {
    regions: curl().then(result => {
        return result.regions.map(region => {
          return {
            id: region.id,
            name: region.name,
            status: region.status,
            ...Transport({ curl, region: region.id })
          }
        });
      })
  }
}