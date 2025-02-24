import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRoutesConfig } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { ActivatedRouteSnapshot } from '@angular/router';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRoutesConfig(serverRoutes)
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);

export function getPrerenderParams(route: ActivatedRouteSnapshot) {
  const id = route.paramMap.get('id');
  return id ? [{ id }] : [];
}

export const serverApp = {
  routes: [
    {
      path: 'product/:id',
      getPrerenderParams: getPrerenderParams, // Add this line to define how to get the parameters for prerendering
      prerender: true, // Enable prerendering for this route
    }
  ]
};