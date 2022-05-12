/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'lawicons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'lawicons-lawicon-divorce': '&#xe904;',
		'lawicons-lawicon-book': '&#xe900;',
		'lawicons-lawicon-paper': '&#xe901;',
		'lawicons-lawicon-finance': '&#xe902;',
		'lawicons-lawicon-people': '&#xe903;',
		'lawicons-lawicon-scale': '&#xe90d;',
		'lawicons-lawicon-stamp': '&#xe90e;',
		'lawicons-lawicon-hammer': '&#xe90f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/lawicons-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
