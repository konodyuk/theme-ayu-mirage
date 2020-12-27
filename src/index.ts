import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for konodyuk/theme-ayu-mirage
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@konodyuk/theme-ayu-mirage:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@konodyuk/theme-ayu-mirage/index.css';

    manager.register({
      name: 'theme-ayu-mirage',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
