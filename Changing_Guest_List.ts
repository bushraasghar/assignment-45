let Guest_List :string[] = ['sana', 'umaima', 'mahnoor'];

for (let i = 0; i < Guest_List.length; i++) {

    console.log('Dear Ms. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThanks!\n\n');

}


let absent_Guest :string = 'sana' ;

let new_Guest :string = 'yamna' ;

Guest_List[0] = new_Guest ;

for (let i = 0; i < Guest_List.length; i++) {

    console.log('Dear Ms. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThanks!\n\n');

}

console.log(`Ms.  ${absent_Guest} is not coming to the party.`)