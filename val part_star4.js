

    var age = prompt("Enter your age:",'')
    let age_2 = 18
    let age_3 = 60
    if (age.slice(0,1)==' ' || age.length === 0) {
        alert('Oops! Try again.')}
        else {
   age = Number(age) 
    if ( isNaN(age) ) //if it's not a number
    {alert('Oops! Try again.')}
    
    else {
    if (age<age_2)
    {alert('You don`t have access cause your age is ' + age  + '. Access denied.')}
    if ((age >= age_2) && (age < age_3))
    {alert('Welcome !')}
    if (age > age_3)
    {alert('Keep calm and look Culture channel')}
    if (age == age_3) 
    {alert('Technical work')}
    }}