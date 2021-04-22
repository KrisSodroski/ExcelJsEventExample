import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TestModule } from './app/TestModule';
// import '@viewengine/browser-compatibility/src/assets/BrowserCompatibility.js';
import { environment } from './environments/environment';


if (environment.production)
{
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(TestModule)
  .catch(err => console.error(err));
