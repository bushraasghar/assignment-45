 let Guest_List = ['sana', 'umaima', 'mahnoor'];
// for (let i = 0; i < Guest_List.length; i++) {
//     console.log('Dear Ms. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThanks!\n\n');
// }

let absent_Guest = 'sana';
let new_Guest = 'yamna';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Ms. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThanks!\n\n');
}
console.log(`Ms.  ${absent_Guest} is not coming to the party.`);

console.log('Good news! We arranged a big table so we are inviting 3 more guests.')

Guest_List.unshift('Hoor');
Guest_List.splice(2 , 0 , 'Bushra');
Guest_List.push('maham');

for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Ms. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThanks!\n\n');
}
