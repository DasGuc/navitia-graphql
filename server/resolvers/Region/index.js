import Transport from '../Transport';

export default ({ curl }) => {
  return {
    region({ name }) {
      return {
        name: curl(`/${name}`).then(res => res.name),
        ...Transport({ curl, region: name })
      }
    }
  }
}