// inputs: String 
// Outputs: String
// write a function that iterates over the secret and the guess
function getHint(secret, guess) {
    
    let cows = 0;
    let bulls = 0;
    // Create a map to track the frequency of each character in both "guess" and "secret".
    let map = {};

   for (let i = 0; i < secret.length; i++) {
    // Iterate through both the secret and guess.
    const secretChar = secret.charAt(i);
    const guestChar = guess.charAt(i);
    
    // Same digit and position? Increment bull by one. 
    if (secretChar === guestChar) {
        bulls++;
    } else {
        // Same digit but different position? Increment cow by one. 
        if (map[secretChar] < 0) cows++;
        if (map[guestChar] > 0) cows++;

        // Increments OR decrements the count of the character, if it hasn't been encountered yet, set value to 0.
        map[secretChar] = parseInt(map[secretChar] || 0) + 1;
        map[guestChar] = parseInt(map[guestChar] || 0) - 1;
    }
   }
   console.log(map);
   
   console.log(`${bulls}A${cows}B`);
}

getHint("1123", "0111");