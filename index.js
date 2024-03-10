// Задание 1

// function celcium(n){
//     let F = (n * 9 / 5) + 32; 
//     return F
// }

// const n = prompt('введите градусы в цельсиях')

// alert(celcium(n))







// ===================================










// Задание 2

// function validator(n){
//     switch (true) {
//         case n > 0:
//             alert("Вы ввели положительное число")
//             break;
//         case n < 0:
//             alert("Вы ввели отрицательное число")
//             break;
//         case n == 0:
//             alert("Вы ввели ноль")
//             break;
//         case (isNaN(n)):
//             alert("Вы ввели не число")
//             break;
//         case n === null:
//             alert("Вы нажали 'Отмена'")
//             break;    
//         default:
//             break;
//     }
// }

// const n = prompt("введите число")
// validator(n)







// ====================================================








// Задание 3

// function multiply(a,b){
//     const ttt = a * b
//     return ttt

// }

// let a = prompt('первое число :')
// while(a === null || a === '' || (isNaN(a))){
//     c = prompt('первое число :')
//     a = c
// }

// let b = prompt('второе число :')
// while(b === null || b === '' || (isNaN(b))){
//     d = prompt('второе число :')
//     b = d
// }
// alert(`${'произведение двух чисел :'} ${multiply(parseInt(a),parseInt(b))}`)







// ================================================================================










// Задание 4

// function power(a,b){
//     let newVariable = 1
//     if (b === null || b === '' || (isNaN(b))){
//         return a * a
//     }
//     while(b != 0){
//         newVariable *= a
//         b -= 1
//     }

//     return newVariable
// }


// const a = prompt('введите число :')
// const b = prompt('введите в какую степень хотите возвести данное число :')

// alert(power(a,b))








// =====================================================================================






// Задание 5

// function countChars(a,b){
//     let counter = 0
//     for (let symbol = 0;symbol < b.length;symbol++){
//         if(b[symbol] == a){
//             counter++
//         }
//     }
//     return counter
// }

// const a = prompt("введи символ которую надо искать :")
// const b = prompt("введи строку по которой будет проведена проверка :")

// alert(countChars(a,b))








// ============================================================================





// Задание 6


// function averageAriphmetic(a){
//     let sum = 0
//     for (let i = 0;i < a.length;i++){
//         sum += a[i]
//     }
//     return sum/a.length
// }

// var southData = [13, 15, 19, 26, 21, 22, 23];
// var westData = [15, 14, 16, 18, 17, 24, 25];
// var eastData = [20, 17, 19, 15, 24, 25, 26];
// var northData = [19, 18, 23, 20, 23, 19, 31];


// console.log(averageAriphmetic(southData))
// console.log(averageAriphmetic(westData))
// console.log(averageAriphmetic(eastData))
// console.log(averageAriphmetic(northData))


// // дополнительно этой задаче ->

// function randomCelcium(b){
//     for(let t = 0;t < 7;t++){
//         b.push(Math.floor(Math.random()*12)+13)
//     }
// }

// randomCelcium(southData);
// randomCelcium(westData);
// randomCelcium(eastData);
// randomCelcium(northData);

// console.log(southData);
// console.log(westData);
// console.log(eastData);
// console.log(northData);


// console.log(averageAriphmetic(southData))
// console.log(averageAriphmetic(westData))
// console.log(averageAriphmetic(eastData))
// console.log(averageAriphmetic(northData))




// ====================================================================






// Задание 7


// function palyndrom(a){
//     let boolean = false
    
//     for(let i = 0;i < Math.floor(a.length / 2);i++){
//         if (a[i] == a[a.length - 1 - i]){
//             boolean = true
//         }
//         else{
//             boolean = false 
//             break
//         }
//     }

//     if (boolean == true){
//         return "Заданная строка является палиндромом"
//     }
//     else{
//         return "Заданная строка не является палиндромом"
//     }
// }

// const a = prompt('введите строку на проверку :')

// alert(palyndrom(a))




// ==============================================================================










// Задание 8

// function randomPassword(n){
//     const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let password = ""
//     for (let i = 0;i < n;i++){
//         let randomIndex = Math.floor(Math.random () * charset.length)
//         password += charset[randomIndex] 
//     }

//     return password
// }

// const n = prompt('какой длины должен быть ваш случайный пароль?')

// alert(randomPassword(n))








// ====================================================================================






// Задание 9

//1.нахождение факториала при помощи цикла

// function factorial(n){
//     let count = 1 
//     while(n > 0){
//         count *= n
//         n -= 1
//     }

//     return count
// }

// let n = prompt("введите число:")

// alert(factorial(n))


//2.нахождение факториала при помощи рекурсии

// function factorial(n){
//     if (n == 0 || n == 1){
//         return 1
//     }
//     else{
//         return n * factorial(n-1)
//     }
// }

// const n = prompt("введите число:")

// alert(factorial(n))