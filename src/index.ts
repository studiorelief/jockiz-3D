import './index.css';

import { loadModelViewerScript } from '$utils/global/modalviewer';
window.Webflow ||= [];
window.Webflow.push(() => {
  loadModelViewerScript();
});
