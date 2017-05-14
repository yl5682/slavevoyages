export function initialize(application) {
  application.inject('route', 'voyagesSearch', 'service:voyages-search');
  application.inject('controller', 'voyagesSearch', 'service:voyages-search');

  // application.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'voyages-search',
  initialize
};
