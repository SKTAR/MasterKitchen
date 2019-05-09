// import { Injectable } from "@angular/core";


// @Injectable({
//     providedIn: 'root'
//   })
// export class DataService {
//     getItems(): Array<Item> {
//         return [{
//             id: 1,
//             name: "Manila Ultimate Tombstone Burger",
//             cover: "~/assets/images/food/burger640.jpg",
//             images: [
//                 "~/assets/images/food/burger/burger1.jpg",
//                 "~/assets/images/food/burger/burger2.jpg",
//                 "~/assets/images/food/burger/burger3.jpg",
//                 "~/assets/images/food/burger/burger4.jpg",
//                 "~/assets/images/food/burger/burger5.jpg",
//                 "~/assets/images/food/burger/burger6.jpg"
//             ],
//             category: "Burger",
//             categoryTag: "#2D9CDB",
//             price: "300.00",
//             likes: 987,
//             isLike: false,
//             isFavorite: true,
//             comments: 13,
//             rating: "4.5",
//             description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
// 				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
// 				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!
// 				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
// 				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!`
//         },
//         {
//             id: 2,
//             name: "Quezon Chocolate Marble Pancake",
//             cover: "~/assets/images/food/pancake640.jpg",
//             images: [
//                 "~/assets/images/food/pancake/pancake1.jpg",
//                 "~/assets/images/food/pancake/pancake2.jpg",
//                 "~/assets/images/food/pancake/pancake3.jpg",
//                 "~/assets/images/food/pancake/pancake4.jpg",
//                 "~/assets/images/food/pancake/pancake5.jpg",
//                 "~/assets/images/food/pancake/pancake6.jpg"
//             ],
//             category: "Pancake",
//             categoryTag: "#e4ce0d",
//             price: "230.00",
//             likes: 891,
//             isLike: true,
//             isFavorite: true,
//             comments: 7,
//             rating: "4.0",
//             description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
// 				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
// 				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!
// 				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
// 				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!`
//         },
//         {
//             id: 3,
//             name: "Binondo Black Forest Cake",
//             cover: "~/assets/images/food/cake640.jpg",
//             images: [
//                 "~/assets/images/food/cake/cake1.jpg",
//                 "~/assets/images/food/cake/cake2.jpg",
//                 "~/assets/images/food/cake/cake3.jpg",
//                 "~/assets/images/food/cake/cake4.jpg"
//             ],
//             category: "Cake",
//             categoryTag: "#27AE60",
//             price: "300.00",
//             likes: 730,
//             isLike: true,
//             isFavorite: true,
//             comments: 11,
//             rating: "4.0",
//             description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
// 				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
// 				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!
// 				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
// 				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!`
//         }];
//     }

//     getCategories(): Array<Category> {
//         return [
//             {
//                 cover: "~/assets/images/food/burger640.jpg",
//                 category: "BURGER",
//                 count: "13",
//             },
//             {
//                 cover: "~/assets/images/food/pancake640.jpg",
//                 category: "PANCAKE",
//                 count: "5",
//             },
//             {
//                 cover: "~/assets/images/food/cake640.jpg",
//                 category: "CAKE",
//                 count: "9",
//             },
//             {
//                 cover: "~/assets/images/food/beer640.jpg",
//                 category: "BEER",
//                 count: "7",
//             }
//         ];
//     }
// }