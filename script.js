const input = document.querySelector("input"),
voiceList = document.querySelector("select"),
speechBtn = document.querySelector(".say");
checkBtn = document.querySelector(".check");

arr = [
    "act",
    "aid",
    "hurt",
    "way",
    "close",
    "flu",
    "crop",
    "gap",
    "warn",
    "fire",
    "task",
    "topic",
    "beg",
    "gift",
    "pay",
    "mind",
    "bring",
    "carol",
    "host",
    "adult",
    "care",
    "merit",
    "Smart",
    "actor",
    "talent",
    "upset",
    "awful",
    "law",
    "liar",
    "loss",
    "healthy",
    "respond",
    "Perform",
    "injured",
    "illness",
    "emergency",
    "service",
    "action",
    "react",
    "infection",
    "infectious",
    "pain",
    "severe",
    "technique",
    "resilience",
    "area",
    "cough",
    "stay",
    "injure",
    "brilliant",
    "Sound",
    "Fantastic",
    "bleed",
    "reply",
    "immediately",
    "surface",
    "chest",
    "press",
    "breathe",
    "instruction",
    "collaboration",
    "quantity",
    "celebration",
    "celebrity",
    "occasion",
    "serve",
    "tradition",
    "delicious",
    "customer",
    "survive",
    "native",
    "tasty",
    "snacks",
    "grill",
    "extract",
    "pumpkin",
    "pie",
    "festival",
    "rare",
    "recipe",
    "inheritance",
    "deceive",
    "exist",
    "questionnaire",
    "respect",
    "rude",
    "agriculture",
    "Innovation",
    "livestock",
    "production",
    "Sustainable",
    "variety",
    "source",
    "huge",
    "population",
    "separate",
    "invest",
    "continent",
    "Efficiently",
    "evidence",
    "conclude",
    "Factual",
    "vehicle",
    "create",
    "united",
    "nation",
    "result",
    "space",
    "solution",
    "involve",
    "laboratory",
    "difference",
    "organization",
    "chemical",
    "remove",
    "insect",
    "Behave",
    "destroy",
    "decade",
    "weed",
    "essay",
    "disguise",
    "abbreviation",
    "laugh",
    "laughter",
    "argue",
    "frown",
    "confused",
    "mansion",
    "suitable",
    "linguist",
    "innovator",
    "basic",
    "request",
    "encourage",
    "demerit",
    "pretend",
    "reward",
    "debate",
    "research",
    "avoid",
    "experience",
    "knowledge",
    "reliable",
    "consult",
    "resource",
    "locate",
    "journalist",
    "publish",
    "influence",
    "Fake",
    "Spread",
    "excuse",
    "banner",
    "sponsor",
    "target",
    "view",
    "comment",
    "specific",
    "social",
    "register",
    "represent",
    "foggy",
    "mean",
    "pile",
    "sigh",
    "nephew",
    "christmas",
    "character",
    "invite",
    "logical",
    "plenty",
    "mistake",
    "treat",
    "shout",
    "assistant",
    "Ignore",
    "determination",
    "encouragement",
    "independent",
    "struggle",
    "maid",
    "airport",
    "experience",
    "support",
    "drought",
    "stressful",
    "confident",
    "difference",
    "volunteer",
    "temporary",
    "expansion",
    "transport",
    "system",
    "connect",
    "consider",
    "current",
    "issue",
    "satisfactory",
    "precise",
    "schedule",
    "discussion",
    "debate",
    "suburb",
    "tunnel",
    "biodiversity",
    "native",
    "inhabitant",
    "preserve",
    "scholarship",
    "species",
    "monitor",
    "community",
    "amount",
    "souvenir",
    "benefit",
    "valuable",
    "waste",
    "recycling",
    "inhabit",
    "expedition",
    "digital",
    "generation",
    "editor",
    "interview",
    "photographer",
    "broadcast",
    "investigator",
    "foreign",
    "source",
    "channel",
    "correspondent",
    "Word",
    "headline",
    "journalist",
    "scene",
    "achieve",
    "select",
    "professional",
    "remarkable",
    "judge",
    "sense",
    "animation",
    "tragedy",
    "horrify",
    "musician",
    "brilliant",
    "constant",
    "imagine",
    "incredible",
    "unkind",
    "hilarious",
    "cheerful",
    "demonstrate",
    "survive",
    "scenery",
    "documentary",
    "critic",
    "neighbourhood",
    "accessory",
    "achievable",
    "crawl",
    "entrepreneur",
    "motivation",
    "measurable",
    "objective",
    "outfit",
    "profit",
    "recipe",
    "relevant",
    "resign",
    "stretcher",
    "treason",
    "trick",
    "magnificent",
    "competition",
    "device",
    "donate",
    "expand",
    "global",
    "gate",
    "grant",
    "deeds",
    "chaste",
    "pious",
    "chance",
    "observe",
    "namely",
    "abstention",
    "faithful",
    "abstain",
    "vitalize",
    "displeases",
    "meeting",
    "compulsory",
    "spiritually",
    "resurrection",
    "intention",
    "century",
    "recitation",
    "hopeful",
    "reveal",
    "adhere",
    "mediate",
    "neonatal",
    "altogether",
    "luminous",
    "revelation",
    "brotherhood",
    "sympathize",
    "pilgrimage",
    "manifest",
    "member",
    "witness",
    "humility",
    "sacrifice",
    "overcrowded",
    "earnest",
    "disbelief",
    "belief",
    "contradictory",
    "confirm",
    "assert",
    "distinction",
    "truth",
    "consequent",
    "preach",
    "accordingly",
    "wisdom",
    "fanaticism",
    "tolerance",
    "justice",
    "freedom",
    "objective",
    "circle",
    "equality",
    "moderation",
    "followers",
    "fraternity",
    "dignity",
    "unique",
    "guidance",
    "vocation",
    "persuasion",
    "evidence",
    "contents",
    "conviction",
    "traditional",
    "embrace"]
    
    arr.map(name => name.toLowerCase())

let synth = speechSynthesis,
isSpeaking = true;

voices();

function voices(){
    for(let voice of synth.getVoices()){
        let selected = voice.name === "Google US English" ? "selected" : "";
        let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
        voiceList.insertAdjacentHTML("beforeend", option);
    }
}

synth.addEventListener("voiceschanged", voices);

function textToSpeech(text){
    let utterance = new SpeechSynthesisUtterance(text);
    for(let voice of synth.getVoices()){
        if(voice.name === voiceList.value){
            utterance.voice = voice;
        }
    }
    synth.speak(utterance);
}


speechBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    word = arr[Math.floor(Math.random() * arr.length)]
    textToSpeech(word)
})
checkBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    if(input.value != ""){
        if(input.value.toLowerCase() == word){
            alert("correct spelling")
        }
        else{
            alert("incorrect spelling")
            alert("correct spelling is : "+word)
        }
    }
    
})


// speechBtn.addEventListener("click", e =>{
//     e.preventDefault();
//     if(textarea.value !== ""){
//         if(!synth.speaking){
//             textToSpeech(textarea.value);
//         }
//         if(textarea.value.length > 80){
//             setInterval(()=>{
//                 if(!synth.speaking && !isSpeaking){
//                     isSpeaking = true;
//                     speechBtn.innerText = "Convert To Speech";
//                 }else{
//                 }
//             }, 500);
//             if(isSpeaking){
//                 synth.resume();
//                 isSpeaking = false;
//                 speechBtn.innerText = "Pause Speech";
//             }else{
//                 synth.pause();
//                 isSpeaking = true;
//                 speechBtn.innerText = "Resume Speech";
//             }
//         }else{
//             speechBtn.innerText = "Convert To Speech";
//         }
//     }
// });


