import { TYPES } from '../../utils/types';

export default ({ curl, type, region }) => {
  return {
    lines({ page: start_page, count }) {
      start_page = start_page || 1;
      count = count || 25;

      return curl(`/${region}/commercial_modes/commercial_mode:${TYPES[type]}/lines`, {
          start_page: start_page - 1,
          count
        }).then(results => {
          return {
            page: results.pagination.start_page,
            pages: Math.ceil(results.pagination.total_result / results.pagination.items_per_page),
            total: results.pagination.total_result,
            count: results.pagination.items_on_page,
            lines: results.lines || []
          }
        })
    }
  }
}