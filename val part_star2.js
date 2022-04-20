const checkAge = function(age) {

    let age_2 = 18
    let age_3 = 60
    if (typeof(age) == 'string')
    {console.log('Oops! Try again.')}
    else {
    if (age<age_2)
    {console.log('You don’t have access cause your age is ' + age  + '. Access denied.')}
    if ((age >= age_2) && (age < age_3))
    {console.log('Welcome !')}
    if (age > age_3)
    {console.log('Keep calm and look Culture channel')}
    }}
    checkAge(17)
    checkAge(18)
    checkAge(61)   
    checkAge('het') 