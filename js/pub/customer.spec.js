/*global pub, describe, it, beforeEach, expect */

describe('Customer', function () {
	'use strict';

	var customer,
		halfPint,
		pint,
		jug;

	beforeEach(function () {
		customer = new pub.Customer();
		halfPint = new pub.HalfPint();
		pint = new pub.Pint();
		jug = new pub.Jug();
	});

	it('Drinks, 1 fl. oz. is consumed', function () {
		customer.drink(halfPint);
		customer.drink(pint);
		customer.drink(jug);

		expect(halfPint.quantity).toEqual(9);
		expect(pint.quantity).toEqual(19);
		expect(jug.quantity).toEqual(59);
	});

	it('Quaffs, 4 fl. oz. are consumed', function () {
		customer.quaff(halfPint);
		customer.quaff(pint);
		customer.quaff(jug);

		expect(halfPint.quantity).toEqual(6);
		expect(pint.quantity).toEqual(16);
		expect(jug.quantity).toEqual(56);
	});

	it('Drinks and then downs in one, the remaining beer is consumed', function () {
		customer.drink(halfPint);
		customer.drink(pint);
		customer.drink(jug);

		customer.downInOne(halfPint);
		customer.downInOne(pint);
		customer.downInOne(jug);

		expect(halfPint.quantity).toEqual(0);
		expect(pint.quantity).toEqual(0);
		expect(jug.quantity).toEqual(0);
	});

	it('Cannot drink from a beer that has already been consumed', function () {
		customer.downInOne(halfPint);
		customer.downInOne(pint);
		customer.downInOne(jug);

		customer.drink(halfPint);
		customer.drink(pint);
		customer.drink(jug);

		expect(halfPint.quantity).toEqual(0);
		expect(pint.quantity).toEqual(0);
		expect(jug.quantity).toEqual(0);
	});

	it('Cannot quaff from a beer that has already been consumed', function () {
		customer.downInOne(halfPint);
		customer.downInOne(pint);
		customer.downInOne(jug);

		customer.quaff(halfPint);
		customer.quaff(pint);
		customer.quaff(jug);

		expect(halfPint.quantity).toEqual(0);
		expect(pint.quantity).toEqual(0);
		expect(jug.quantity).toEqual(0);
	});

});
