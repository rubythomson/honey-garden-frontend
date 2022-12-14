// import views
import homeView from './views/pages/home'
import fourOFourView from './views/pages/404'
import signinView from './views/pages/signin'
import signupView from './views/pages/signup'
import profileView from './views/pages/profile'
import guideView from './views/pages/guide'
import adultsView from './views/pages/adults'
import libraryView from './views/pages/library'
import roseView from './views/pages/rose'
import postView from './views/pages/post'
import browseView from './views/pages/browse'
import inboxView from './views/pages/inbox'
import beehiveView from './views/pages/beehive'
import readView from './views/pages/read'
import landingView from './views/pages/landing'
import searchGridView from './views/pages/search-grid'
import CreateReadingListView from './views/pages/create-reading-list'
import AddView from './views/pages/add'
import DraftsView from './views/pages/drafts'
import CurrentWorkView from './views/pages/current-work'
import SettingsView from './views/pages/profile-settings'
import LibraryReadingListsView from './views/pages/library-reading-lists'
import LibraryArchivedView from './views/pages/library-archived'
import RosePurchaseView from './views/pages/rose-purchase'
import RosePurchaseThankyouView from './views/pages/rose-purchase-thankyou'
import NewMessageView from './views/pages/new-message'

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
	'/404' : fourOFourView,
	'/signin': signinView,
	'/signup': signupView,
	'/profile': profileView,
	'/read': readView,
	'/search-grid': searchGridView,
	'/create-reading-list': CreateReadingListView,
	'/add': AddView,
	'/drafts': DraftsView,
	'/current-work': CurrentWorkView,
	'/profile-settings': SettingsView,
	'/library-reading-lists': LibraryReadingListsView,
	'/library-archived': LibraryArchivedView,
	'/rose-purchases': RosePurchaseView,
	'/rose-purchase-thankyou': RosePurchaseThankyouView,
	'/new-message': NewMessageView
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