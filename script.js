// let obj=
// {
//     harry:98,
//     sharra:49,
//     querry:38,
// }

// for(i in obj)
//     {
//         console.log(i,"\t",obj[i]);
//     }

// for (let [key, value] of Object.entries(obj)) {
//     console.log(key + ": " + value);
// }

//Q2

// let num=0;
// while(num!=8)
//     {
//         num=prompt("Enter number 8");

//     }
//     let h1=document.querySelector('h1');
//     h1.classList.remove("hidden");
//     h1.classList.add("show");
    
//Q3

// let a,b,c,d,e=0;

// a=parseInt(prompt("Enter number one"));
// b=parseInt(prompt("Enter number two"));
// c=parseInt(prompt("Enter number three"));
// d=parseInt(prompt("Enter number four"));
// e=parseInt(prompt("Enter number five"));

// const mean = (a,b,c,d,e) =>
//     {
//        return (a+b+c+d+e)/5;
//     }
//     alert("Mean of numbers is "+ mean(a,b,c,d,e));


//Q4

// let name="zakriya";

// name=name.toUpperCase();
// console.log(name);
// name=name.toLowerCase();
// console.log(name);


//Q5

// let sen="Please give RS 1000";
// sen=sen.slice(14,19);
// console.log(sen);
// sen[3]="s";
// console.log(sen);



//Q6
// let marks=[23,45,67,89,false,"Not Present"];
// console.log(marks);

// for(let i=0;i<marks.length;i++)
//     {
//         console.log(i+1, "\t",marks[i]);
//     }

    // marks[4]=true;

    // for(let i=0;i<marks.length;i++)
    //     {
    //         console.log(i+1, "\t",marks[i]);
    //     }

        // for(let i=0;i<marks.length;i++)
        //     {
        //         console.log(i+1, "\t",marks[i]);
        //     }
    
    // let b=marks.toString();
    // console.log("\n",b);

    // let c=marks.join("_");
    // console.log(c, typeof(c));

    // let r=marks.unshift(23);
    // console.log(marks,r);

    // delete marks[2];
    // console.log(marks);

    // let a=[1,2,3];
    // let b=[4,5,6];

    // let new_arr=num.concat(num_more);

    // console.log(num);
    // console.log(num_more);
    // console.log(new_arr);
    // new_arr.sort();
    // console.log(new_arr);
   
    // let compare = (a,b)=>
    //     {
    //         console.log(a-b);
    //     }

    //     for(let i=0;i<a.length;i++)
    //         {
    //             compare(a[i],b[i]);
    //         }
        
 //const num=[1,2,3,4,5];
// num.splice(2,3,23,24);
// console.log(num);

// num.forEach((element =>
//     {
//         console.log(element*element);

//     }
// ))

// let name="Harry";
// let arr=Array.from(name);
//console.log(arr);

// for (let item in arr)
//     {
//         console.log(item);
//     }


// let arr=[1,2,3,4,5,6];
// let a=arr.map((value,index,array)=>
// {
//     console.log(value);
//     return value+1;
// })

// console.log(a);


// function getRandomInt(min, max) {
//     min = Math.ceil(min); // Round up to the next whole number
//     max = Math.floor(max); // Round down to the previous whole number
//     return Math.floor(Math.random() * (max - min + 1)) + min; // Generate the random integer
// }

// console.log(getRandomInt(1, 10)); // Output: A random integer between 1 and 10 (inclusive)



// let userNum=prompt("Enter your number");
// let randomNum=(getRandomInt(1, 10)); // Output: A random floating-point number between 1 and 10 (inclusive of 1, but not 10)

// let counter=0;
//     do
//     {
// if(randomNum<userNum)
//     {
//         alert("You have entered greater number. " + " Your number was " + userNum + " Random number was " + randomNum);
//         counter++;
//          userNum=prompt("Enter your number");
//          randomNum=(getRandomInt(1, 100)); // Output: A random floating-point number between 1 and 10 (inclusive of 1, but not 10)

//     }
//     else if(randomNum>userNum)
//     {
        
//         alert("You have entered lesser number " + "your number was " + userNum + " Random number was " + randomNum);
//         counter++;
//          userNum=prompt("Enter your number");
//          randomNum=(getRandomInt(1, 100)); // Output: A random floating-point number between 1 and 10 (inclusive of 1, but not 10)

//     }
//     else
//     {

//         alert("You have entered equall number");
//             counter++;
//         alert("Your number of guesses were " + counter);
//         counter=0;
//          userNum=prompt("Enter your number");
//          randomNum=(getRandomInt(1, 100)); // Output: A random floating-point number between 1 and 10 (inclusive of 1, but not 10)

//     }
// }while(randomNum!=userNum);


// let age=prompt("Enter you age");
// if(age>18)
//     {
//         let choice=confirm("Do you want to see on aur page");
//         if(choice)
//             {
//                document.write("You can drive")
//                document.body.style.backgroundColor="green";
//             }
//             else
//             {
//                 alert("You can drive");
//                 document.body.style.backgroundColor="green";
//             }
//     }

//     else if(age<0)
//     {
//         console.error("First born lamdy");
//         document.body.style.backgroundColor="black";
//     }
//     else
//     {
//         document.body.style.backgroundColor="red";
//         alert("You can't drive");
       
//     }


// let b=document.body
// console.log("First child of b is ", b.firstChild);
// console.log("First Element child of b is ", b.firstElementChild);
// console.log("Last Element child of b is ", b.nextElementSibling);
// console.log("Second1 Element child of b is ", b.childNodes[0]);
// console.log("Second2 Element child of b is ", b.childNodes[1]);
// console.log("Second3 Element child of b is ", b.childNodes[2]);

// const changeBodyColor = ()=>
//     {
//         document.body.firstElementChild.style.background="Red";
//         document.body.secondElementChild.style.background="black";
//         document.body.secondElementChild.style.background="blue";
//     }

//     changeBodyColor()

// let tag=document.getElementById("container");
// let text=tag.innerHTML
// let paraText=document.getElementsByTagName("p");

// let jokes = [
//     "Why do birds fly south in the winter? It’s faster than walking!",
//     "What did the lava say to his girlfriend? 'I lava you!'",
//     "Why did the student eat his homework? Because the teacher told him it was a piece of cake.",
//     "What did Yoda say when he saw himself in 4k? HDMI.",
//     "Which superhero hits home runs? Batman!",
//     "What’s Thanos’ favorite app on his phone? Snapchat.",
//     "Sandy’s mum has four kids; North, West, East. What is the name of the fourth child? Sandy, obviously!",
//     "What is a room with no walls? A mushroom.",
//     "Why did the blue jay get in trouble at school? For tweeting on a test!",
//     "What social events do spiders love to attend? Webbings.",
//     "What did one pickle say to the other? Dill with it."
//   ];
  
//   let randomDigit = Math.floor(Math.random() * 10);
// console.log(randomDigit);
//   let joke =jokes[randomDigit];


//   tag.innerHTML=joke;


// let btn1=document.getElementById("btn1");
// let btn2=document.getElementById("btn2");
// let btn3=document.getElementById("btn3");

// btn1.onclick = function() {
    
//     let x=document.getElementById("container");
//     x.innerHTML="<a href='https://www.geeksforgeeks.org/'>https://www.geeksforgeeks.org/</a>";
// }

// btn2.onclick = function() {
//     let x=document.getElementById("container");
//     x.innerHTML="<a href='https://www.youtube.com'>www.youtube.com</a>";
    
    
// }

// btn3.onclick = function() {
//     let x=document.getElementById("container");
//     x.innerHTML="<a href='https://www.instagram.com'>www.instagram.com</a>";
    
    
// }

// setTimeout(btn1.onclick(), 3000);


// setInterval(setTimeout(btn1.onclick(), 4000), 3000);




// let div2=document.getElementById("container2");
// let counter=0;
// div2.onclick = function ()
// {
//     if(counter%2===0)
//         {
//             console.log("Clicked");
//             div2.classList.remove('hide');
//             div2.classList.add('show');
//            console.log(div2.classList)
//            counter++;
//         }
//         else
//         {
//             console.log("Clicked");
//             div2.classList.remove('show');
//             div2.classList.add('hide');
//            console.log(div2.classList);
//            counter++;
//         }
  
// } 


// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('Initializing Hack Program....');
//       }, 2000);

//     });

//   }
//   function resolveAfter4Seconds() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Hacking Moiz\'s username....");
//       }, 4000);

//     });
// }

//     function resolveAfter5Seconds() {
//         return new Promise((resolve) => {
//           setTimeout(() => {
//             resolve('UserName found moiz5678....');
//           }, 4000);
    
//         });
//     }
    
//     function resolveAfter7Seconds() {
//         return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Connecting to Facebook....');
//         }, 4000);
    
//         });
    
//     }
  
//   async function asyncCall() 
//   {
//     console.log('Loading.....');
//     const result1 = await resolveAfter2Seconds();
//     let div =document.createElement('div');
//     div.className="alert";
//     div.innerHTML=`<span>${result1}<span><br>`
//     document.body.appendChild(div);
//     console.log(result1);
//     const result2 = await resolveAfter4Seconds();
//     div.insertAdjacentHTML('beforeend',`<span>${result2}<span><br>`)
//     console.log(result2);
//     const result3 = await resolveAfter5Seconds();
//     div.insertAdjacentHTML('beforeend',`<span>${result3}<span><br>`)
//     console.log(result3);
//     const result4 = await resolveAfter7Seconds();
//     div.insertAdjacentHTML('beforeend',`<span>${result4}<span><br>`)
//     console.log(result4);
//   }
  
//   asyncCall();


  // Call the fetchData function to fetch and display the data
  
  // let p = fetch("https://goweather.herokuapp.com/weather/Ny")
  // p.then((response) => {
  //   console.log(response.status)
  //   console.log(response.ok)
  //   return response.json()
  // }).then((value2) => {
  //   console.log(value2)
  //   // Align text
  //   console.log(value2.temperature)
  //   console.log(value2.wind)
  //   console.log(value2.description)
  // })



  // fetchData();
  