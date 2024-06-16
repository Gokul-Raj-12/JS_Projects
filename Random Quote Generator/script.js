const quotes = [
    "It Doesn't Matter How Strong The Opposition Is. It Doesn't Matter How Fearsome The World Is, It Doesn't Matter How Cruel The World Is. Fight!",
    "If There Are Humans Who Can Bring About Change, They're Those Who Are Capable Of Abandoning Everything. People Who, When Required To Surpass Even Monsters, Are Capable Of Tossing Aside Their Very Humanity.",
    "I Don't Like The Terms 'Good Person' or 'Bad Person.' It Is Impossible To Be Entirely Good To Everyone. To Some, You Are A Good Person, While To Others, You Are A Bad Person.",
    "As Long As We Continue To Fight, We Are Not Defeated!",
    "If You Win, You Live. If You Lose, You Die. If You Don't Fight, You Can't Win!",
    "You Understand, Don’t You? One Day Or Another, Everyone You Care About Eventually Dies. It’s Something We Simply Can’t Accept. It’s A Realization That Could Drive You Insane.",
    "Everyone Had To Be Drunk On Somethin’ To Keep Pushing On … Everyone Was A Slave To Somethin’.",
    "This World Is Cruel, And It’s Also Very Beautiful.",
    "No One Knows What The Outcome Will Be. So, Choose Whatever You'll Regret The Least.",
    "If someone is willing to take my freedom, I won’t hesitate to take theirs.",
    "We’re born free. All of us. Free.",
    "You have the freedom to defend the world’s freedom and I have the freedom to continue moving forward.",
    "You were ignorant children. And all of that was beaten into you by ignorant adults. What could you have done to fight back against that?",
    "Keep moving forward. Even if you die. Even after you die."
];


const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {

if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear()
}

while(true) {
    const randomIdx = Math.floor(Math.random()  *quotes.length)

    if (usedIndexes.has(randomIdx)) continue

    const quote = quotes[randomIdx]
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx)
    break
}

}

