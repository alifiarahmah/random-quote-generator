//generate random number trus jadi id arai
//ambil arai dari chrome.storage.sync

//jadiin innerHTML

//coba2 dulu
var quoteContent = [];
var quotePpl = [];

quoteContent[0] = "If you spend too much time thinking about a thing, you'll never get it done.";
quotePpl[0] = "Bruce Lee";
quoteContent[1] = "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.";
quotePpl[1] = "Barack Obama";
quoteContent[2] = "The way to get started is to quit talking and begin doing.";
quotePpl[2] = "Walt Disney";
quoteContent[3] = "Anyone who has never made a mistake has never tried anything new.";
quotePpl[3] = "Albert Einstein";
quoteContent[4] = "Remembering you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There's no reason not to follow your heart.";
quotePpl[4] = "Steve Jobs";
quoteContent[5] = "Success is a lousy teacher. It seduces smart people into thinking they can't lose.";
quotePpl[5] = "Bill Gates";
quoteContent[6] = "Glory lies in the attempt to reach one's goal and not in reaching it.";
quotePpl[6] = "Mahatma Ghandi";
quoteContent[7] = "Luck is only important in so far as getting the chance to sell yourself at the right moment. After that, you've got to have talent and know how to use it.";
quotePpl[7] = "Frank Sinatra";
quoteContent[8] = "The secret of getting ahead is getting started.";
quotePpl[8] = "Mark Twain";
quoteContent[9] = "You've gotta keep control of your time, and you can't unless you say no. You can't let people set your agenda in life.";
quotePpl[9] = "Warren Buffet";

//jadiin mereka bisa terkali 100
let randIndex = Math.floor(Math.random() * quoteContent.length);

//masukin ke innerHTML
console.log(randIndex);
document.getElementById("content").innerHTML = quoteContent[randIndex];
document.getElementById("ppl").innerHTML = quotePpl[randIndex];

document.getElementById("next").addEventListener('click', function(){
    let randIndex = Math.floor(Math.random() * quoteContent.length);
    document.getElementById("content").innerHTML = quoteContent[randIndex];
    document.getElementById("ppl").innerHTML = quotePpl[randIndex];
});
