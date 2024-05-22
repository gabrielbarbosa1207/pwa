var back_redirect_back_link = 'https://tracker.lendasbet.com/link?btag=51375640_295513';
history['pushState']({}, '', location['href']);
history['pushState']({}, '', location['href']);
window['onpopstate'] = function() {
setTimeout(function() {
	location['href'] = back_redirect_back_link
	}, 1)
}