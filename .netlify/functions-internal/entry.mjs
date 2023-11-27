import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_977f2e8e.mjs';

const _page0  = () => import('./chunks/generic_cbc69e99.mjs');
const _page1  = () => import('./chunks/index_ce6e7e79.mjs');
const _page2  = () => import('./chunks/folio-1_37d33039.mjs');
const _page3  = () => import('./chunks/folio-2_18e25163.mjs');
const _page4  = () => import('./chunks/folio-3_794346a1.mjs');
const _page5  = () => import('./chunks/about_37034a04.mjs');
const _page6  = () => import('./chunks/post-1_3268e10d.mjs');
const _page7  = () => import('./chunks/post-2_ddec87bb.mjs');
const _page8  = () => import('./chunks/post-3_ce03d053.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/portfolio/folio-1.html", _page2],["src/pages/portfolio/folio-2.html", _page3],["src/pages/portfolio/folio-3.html", _page4],["src/pages/about.astro", _page5],["src/pages/blog/post-1.md", _page6],["src/pages/blog/post-2.md", _page7],["src/pages/blog/post-3.md", _page8]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
