// let x = 1;

// x = 10;

// console.log(true);

// const type = typeof 'dfsfsf';
// console.log(type);

// console.log(typeof true);
// console.log('Do');
// alert('dfdfdf');
// console.log('Posle');

// const shouldRenew = confirm('dfdfdf');
// console.log(shouldRenew);

// let quantity = prompt('dfdfdf');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// let varName;
// const name = confirm(varName);
// console.log(varName);
// console.log(typeof varName);
// console.log(name);
// console.log(typeof name);

// let elementWidht = '50px';
// elementWidht = Number.parseInt(elementWidht);
// console.log('elementWidht: ', elementWidht);

// let elementHeight = '200.43px';
// elementHeight =  Number.parseFloat(elementHeight);
// console.log('elementHeight: ', elementHeight);

// let salary = 1300.1654;
// salary = Number(salary.toFixed(2));
// console.log(salary);
// console.log(Number(salary.toFixed(2)));

// let quantity = '30';
// let value = 'Эту строку невозможно привести к числу';
// console.log(Number('5'));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number('sdfsdfsdf'));
// console.log(Number(value));
// console.log(Number(5/0));


// console.log(Math);
// const base = 2;
// const power = 5;

// const result = Math.pow(2, 3);

// console.log(result);
// console.log(Math.pow(base, power));

// console.log(2 ** 3);



// --------- задачка

// let base = prompt('Давай число');
// base = Number(base);
// console.log(base);

// let power = prompt('Укажи степень');
// power = Number(power);
// console.log(power);

// const result = base ** power;
// console.log(result);


// ---- ot 0 do 1
// console.log(Math.random());

// ---- ot _ do _
// const max = 50;
// const min = 30;

// const result = Math.round(Math.random() * (max - min) + min);
// console.log(Math.round(1.488));
// console.log(result);
// console.log(Math.random() * (50 - 30) + 30);



// ----просто пример на будущее
// const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) +min);

// const color = colors[index];

// console.log(color);

// document.body.style.backgroundColor = color;




// ----STRING-----

// const message = 'В этой строке 26 символов.';

// console.log(message.length);

// const firstName = 'dfdf';
// const lastName = 'asdasd';
// const fullName = firstName + ' ' + lastName;

// console.log(firstName + lastName + ' 987f');
// console.log(fullName);

// const room = 716;
// const type = 'VIP';

// const welcomeMsg = 'Гость ' + firstName + ' ' + lastName + ' поселяется в ' + type + ' номер ' + room;

// console.log(welcomeMsg);
// ----ниже читабельнее
// const orderMsg = `kjlkj dfdf ${5 + 5} dfldfkj oiuiu ${room}`;
// console.log(orderMsg);


// ---нормализация
// let brand = prompt('Введи бренд');
// brand = brand.toLowerCase();

// console.log(brand);

// let brand = 'SamSUng';
// console.log(brand[0]);
// console.log(brand.slice(1).toLowerCase());

// brand = brand[0] + brand.slice(1).toLowerCase();

// console.log(brand);




// const blacklistedWord1 = 'spam';
// const blacklistedWord2 = 'sales';

// const string1 = 'Dgfdsg sdfdf spam dsf IEORvdfd';
// const string2 = 'dfsdf SALES dfs sdf dd';
// const string3 = 'dfsdf Dfjdfh dkjfh';

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));

// const normalizedSrting2 = string2.toLowerCase();
// console.log(normalizedSrting2.includes(blacklistedWord2));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));



// ----ОПЕРАТОРЫ СРАВНЕНИЯ
// console.log(5 > 15);

// ---ПРИВЕДЕНИЕ типов к числу
// console.log('20' > 15);

// const isEqual = 5 == '5';
// console.log(isEqual);

// const isEqual2 = 5 === '5';
// console.log(isEqual2);

// ---ЛОГИЧЕСКИЕ операторы

// console.log(Boolean(0));

// console.log(5 && 6 && 6 && 'hello');

// console.log(5 || 7 || 10);

// console.log(!false);



// -------ЗАДАЧИ
// 1 (1-4)
// const x1 = 10;
// const x2 = 30;
// const number = 50;
// console.log(`Число ${number} попадает в отрезок до ${x1}?`, number < x1);

// console.log(`Число ${number} попадает в отрезок после ${x2}?`, number > x2);

// const result = number > x1 && number < x2;

// console.log(`Число ${number} попадает в отрезок от ${x1} и до ${x2}?`, result);

// const result2 = number < x1 || number > x2;
// console.log(`Число ${number} попадает в отрезок до ${x1} или больше ${x2}?`, result2);


// 2
// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Можно открыть чат?', canOpenChat);


// 3
// const subscription = 'pro';

// const canAccessContent = subscription === 'pro' || subscription === 'vip';

// console.log('Есть доступ к контенту?', canAccessContent);


// --------IF , тернарный
// const balance = 1000;
// let message;

// if(balance > 0) {
//     message = '+ balance';
// } else {
//     message = '- balance';
// }

// const mes = balance >= 0 ? '+ balance' : '- balance';

// console.log(mes);

// // ---Видимость
// if (true) {
//     const a = 5;
// }

// console.log(a);


// ---задача