import Router from "./Router";

export function useParam(name) {

    const subscriptions = [];
    
    function get() {
        return new URLSearchParams(window.location.search).get(name);
    }

    function set(value, pathname = null) {
        const url = new URL(window.location);
        url.searchParams.set(name, value);
        url.pathname = pathname ?? url.pathname;
        window.history.pushState({}, '', url);

        for (const callback of subscriptions) {
            callback(value);
        }

        Router.route(url.pathname);
    }
    
    function subscribe(callback) {
        subscriptions.push(callback);
    }

    return {
        get,
        set,
        subscribe
    }
}