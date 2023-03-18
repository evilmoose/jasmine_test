
it('should calculate the monthly rate correctly', function () {
  // ...
  const Values = { AMOUNT: 10000, YEARS: 10, RATE: 4.5 };
  expect( calculateMonthlyPayment( Values ) ).toEqual( '103.64' );
});


it("should return a result with 2 decimal places", function() {
  // ..
  const Values = { AMOUNT: 15555, YEARS: 15, RATE: 3.3 };
  expected( calculateMonthlyPayment( Values ) ).toEqual( '109.68' );
});

/// etc
