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

window.onload = function(){
	if(versionCompare(CURRENT_VERSION, ENGINTRON_VERSION)){
		var b = document.getElementsByTagName('body')[0];
		if(versionCompare(ENGINTRON_VERSION, '1.5.1')){
			var noticeAction = '<a style="color:#fff;font-weight:bold;" href="engintron.php?op=engintron_update">click here to update to the latest version</a>';
		} else {
			var noticeAction = 'update Engintron from the command-line as root user';
		}
		var notice = '<div style="font-size:12px;text-align:center;padding:10px;background:#00b243;color:#fff;opacity:0.9;position:absolute;top:0;left:0;right:0;border-bottom:2px solid #008d23;"><div style="width:92%;margin:auto;padding:0;">A newer version of Engintron (v'+CURRENT_VERSION+') is now available. Make sure you backup any custom rules in Nginx and '+noticeAction+'.<br />For more info check the <a style="color:#fff;font-weight:bold;" target="_blank" href="https://github.com/engintron/engintron#changelog">Engintron release changelog</a>.</div></div>';
		b.innerHTML += notice;
	}
}
