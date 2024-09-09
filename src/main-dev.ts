import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { environment } from './environments/environment';

async function prepareApp() {
  if (environment.production === false) {
    const { MockServiceWorker } = await import(
      './core/devtools/mock-server/browser'
    );
    return MockServiceWorker.start();
  }

  return Promise.resolve();
}

prepareApp().then(() => {
  bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err)
  );
});
