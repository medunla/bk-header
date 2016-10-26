/* Require jQuery */
$(function () {

	/* Burger */
	$( '.action-toggle-burger' ).click(function (ev) {
		ev.preventDefault();
		$( '.bk-effect-open' ).toggleClass( 'open' );
	});
	/* Navigation Mobile Level2 */
	$( '.bk-navigation-mobile .menu-item-has-children .icon' ).click(function () {
		$(this).parents().toggleClass( 'open' );
	});
});