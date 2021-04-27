const totalSum = () => {
	let result = +$('.sum-value').html() + +$('.sum-cost').html() + +$('.sum-tax').html();
	$('.sum-total').html(result);
}

const valueSum = () => {
	let sum = 0;
	$('.subtotal').each(function() {
		sum += +$(this).html();
	})
	$('.sum-value').html(sum);
}

$('.info__close').on('click', function() {
	$(this).closest('.info__item').remove();
	valueSum();
	totalSum();
})

$('.qty').on('change', function() {
	let $price = $(this).closest('.info__block').find('.price').html();
	let $qty = $(this).val();
	$(this).closest('.info__block').find('.subtotal').html($price * $qty);
	valueSum();
	totalSum();
})