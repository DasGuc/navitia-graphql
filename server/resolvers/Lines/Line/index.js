export default ({ curl, region }) => {
  return {
    line({ id }) {
      return curl(`/${region}/lines/line:${id}`).then(({ lines: { [0]: line} }) => line);
    }
  }
}