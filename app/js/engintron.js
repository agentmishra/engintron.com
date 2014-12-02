

function confirm(id) {
	if(confirm('Are you sure?')) {
		document.getElementById(id).submit();
	}
	return false;
}
function clog() {
	document.getElementById('log').submit();
}
