/* === Helpers === */

/**
 * Simply compares two string version values.
 *
 * Example:
 * versionCompare('1.1', '1.2') => -1
 * versionCompare('1.1', '1.1') =>  0
 * versionCompare('1.2', '1.1') =>  1
 * versionCompare('2.23.3', '2.22.3') => 1
 *
 * Returns:
 * -1 = left is LOWER than right
 *  0 = they are equal
 *  1 = left is GREATER = right is LOWER
 *  And FALSE if one of input versions are not valid
 *
 * @function
 * @param {String} left  Version #1
 * @param {String} right Version #2
 * @return {Integer|Boolean}
 * @author Alexey Bass (albass)
 * @since 2011-07-14
 */
versionCompare = function(left, right) {
    if (typeof left + typeof right != 'stringstring')
        return false;

    var a = left.split('.')
    ,   b = right.split('.')
    ,   i = 0, len = Math.max(a.length, b.length);

    for (; i < len; i++) {
        if ((a[i] && !b[i] && parseInt(a[i]) > 0) || (parseInt(a[i]) > parseInt(b[i]))) {
            return 1;
        } else if ((b[i] && !a[i] && parseInt(b[i]) > 0) || (parseInt(a[i]) < parseInt(b[i]))) {
            return -1;
        }
    }

    return 0;
}

/* === Engintron for cPanel/WHM === */

var CURRENT_VERSION = '1.6.0';

if(versionCompare(CURRENT_VERSION, ENGINTRON_VERSION)){
	var b = document.getElementsByTagName('body')[0];
	var notice = document.createElement("div");
	notice.setAttribute('style', 'font-size:14px;text-align:center;padding:10px;background:#00b243;color:#fff;opacity:0.9;position:absolute;top:0;left:0;right:0;border:2px solid #008d23;');
	notice.innerHTML = '<div style="">A newer version of Engintron (v'+CURRENT_VERSION+') is now available.<br /><br />Make sure you backup any custom settings and ';
	if(versionCompare(ENGINTRON_VERSION, '1.5.2')){
		notice.innerHTML += '<a style="color:#fff;font-weight:bold;" href="engintron.php?op=engintron_update">click here to update to the latest version</a>.';
	} else {
		notice.innerHTML += 'update Engintron from the command-line as root user.';
	}
	notice.innerHTML += '<br /><br />For more info check the <a style="color:#fff;font-weight:bold;" target="_blank" href="https://github.com/engintron/engintron#changelog">Engintron release changelog</a>.</div>';
	window.onload = function(){
		b.appendChild(notice);
	}
}
