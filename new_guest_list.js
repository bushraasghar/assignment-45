"use strict";
let Guest_List = ['sana', 'umaima', 'mahnoor'];
// for (let i = 0; i < Guest_List.length; i++) {
//     console.log('Dear Ms. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThanks!\n\n');
// }
let absent_Guest = 'sana';
let new_Guest = 'yamna';
Guest_List[0] = new_Guest;
//for (let i = 0; i < Guest_List.length; i++) {
//  console.log('Dear Ms. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThanks!\n\n');
//}
//console.log(`Ms.  ${absent_Guest} is not coming to the party.`);
//console.log('Good news! We arranged a big table so we are inviting 3 more guests.')
Guest_List.unshift('Hoor');
Guest_List.splice(2, 0, 'Bushra');
Guest_List.push('maham');
//for (let i = 0; i < Guest_List.length; i++) {
//   console.log('Dear Ms. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThanks!\n\n');
//}
//console.log('\nSorry we cannot arranged a big table, only two people are invited.');
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    //console.log(`Sorry Ms. ${remove_Guest}, you are not invied for Dinner.  `)
}
//for (let i = 0; i < Guest_List.length; i++) {
//  console.log('Dear Ms. ' + Guest_List[i] + ',\n\nYor are still invited for Dinner.\n\nThanks!\n\n');
//}
Guest_List.splice(0, 2);
console.log(Guest_List);
//Exercise 19
//print a message indicating the number of people you are inviting to dinner.
console.log(`total number of guest are: ${Guest_List.length}`);
