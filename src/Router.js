// import views
import homeView from './views/pages/home'
import fourOFourView from './views/pages/404'
import signinView from './views/pages/signin'
import signupView from './views/pages/signup'
import profileView from './views/pages/profile'
import editProfileView from './views/pages/editProfile'
import guideView from './views/pages/guide'
import adultsView from './views/pages/adults'
import libraryView from './views/pages/library'
import roseView from './views/pages/rose'
import postView from './views/pages/post'
import browseView from './views/pages/browse'
import inboxView from './views/pages/inbox'
import supportView from './views/pages/support'
import beehiveView from './views/pages/beehive'
import readView from './views/pages/read'
import landingView from './views/pages/landing'
import searchGridView from './views/pages/search-grid'

// define routes
const routes = {
	'/': homeView,	
	'/beehive': beehiveView,
	'/landing':	landingView,
	'/guide': guideView,
	'/adults': adultsView,
	'/library': libraryView,
	'/rose': roseView,
	'/post': postView,
	'/browse': browseView,
	'/inbox': inboxView,
	'/support': supportView,
	'/404' : fourOFourView,
	'/signin': signinView,
	'/signup': signupView,
	'/profile': profileView,
	'/editProfile': editProfileView,
	'/read': readView,
	'/search-grid': searchGridView
}

class Router {
	constructor(){
		this.routes = routes
	}
	
	init(){
		// initial call
		this.route(window.location.pathname)

		// on back/forward
		window.addEventListener('popstate', () => {
			this.route(window.location.pathname)
		})
	}
	
	route(fullPathname){
		// extract path without params
		const pathname = fullPathname.split('?')[0]
		const route = this.routes[pathname]
		// console.log('looking up', fullPathname, Object.keys(this.routes));
		
		if(route){
			// if route exists, run init() of the view
			this.routes[window.location.pathname].init()
		}else{			
			// show 404 view instead
			this.routes['404'].init()			
		}
	}

	gotoRoute(pathname){
		window.history.pushState({}, pathname, window.location.origin + pathname);
		this.route(pathname)
	}	
}

// create appRouter instance and export
const AppRouter = new Router()
export default AppRouter


// programmatically load any route
export function gotoRoute(pathname){
	AppRouter.gotoRoute(pathname)
}


// allows anchor <a> links to load routes
export function anchorRoute(e){
	e.preventDefault()	
	const pathname = e.target.closest('a').pathname
	AppRouter.gotoRoute(pathname)
}