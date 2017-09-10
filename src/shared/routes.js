// @flow

export const HOME_PAGE_ROUTE = '/';
export const SUPER_SPORT_ROUTE = '/super-sport';
export const SPORT_TOURING_ROUTE = '/sport-touring';
export const TOURING_ROUTE = '/touring';
export const ADVENTURE_ROUTE = '/adventure';
export const STREET_ROUTE = '/street';
export const OFF_ROAD_ROUTE = '/off-road';
export const SCOOTER_ROUTE = '/scooter';
export const ATV_ROUTE = '/atv';
export const CUSTOM_ROUTE = '/custom';
export const V125CC_ROUTE = '/125cc';
export const LOGIN_ROUTE = '/login';
export const PROTECTED_ROUTE = '/protected';
export const ADMIN_ROUTE = '/admin';
export const HELLO_PAGE_ROUTE = '/hello';
export const HELLO_ASYNC_PAGE_ROUTE = '/hello-async';
export const NOT_FOUND_DEMO_PAGE_ROUTE = '/404';

export const helloEndpointRoute = (num: ?number) => `/ajax/hello/${num || ':num'}`;
