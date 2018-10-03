import { getCurrentRoute } from 'framework7-redux';

export const getRouteInfo = (state) => {
    const currentUrl = getCurrentRoute(state);
    const parsedUrl = new URL(`http://test${currentUrl}`);
    const query = {};

    parsedUrl.searchParams.forEach((value, key) => {
        query[key] = value;
    });

    return {
        url: currentUrl,
        path: parsedUrl.pathname,
        hash: parsedUrl.hash,
        query
    };
};