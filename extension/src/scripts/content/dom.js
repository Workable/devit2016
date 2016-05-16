function buildDOMContainer(id = 'container') {
  const host = document.createElement('div');
  host.setAttribute('id', id);
  document.body.appendChild(host);
  return host;
}

function buildShadowDOMContainer(id) {
  return buildDOMContainer(id).createShadowRoot()
}

export default { buildDOMContainer, buildShadowDOMContainer };
