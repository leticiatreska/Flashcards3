// ---------------- FLASHCARDS ----------------
const flashcards = [
{t:"Sustentabilidade",r:"Uso consciente dos recursos naturais."},
{t:"Reciclagem",r:"Reaproveitamento de materiais."},
{t:"Biodiversidade",r:"Variedade de seres vivos."},
{t:"Energia Solar",r:"Energia do sol."},
{t:"Compostagem",r:"Transformação de lixo orgânico em adubo."},
{t:"Aquecimento Global",r:"Aumento da temperatura da Terra."}
];

const flashContainer =
document.getElementById("flashcards");

let flashCount = 0;

flashcards.forEach((c,i)=>{

const div = document.createElement("div");
div.className="card";

div.innerHTML=`
<div class="inner">
<div class="front">${c.t}</div>
<div class="back">${c.r}</div>
</div>
`;

div.addEventListener("click",()=>{

div.classList.add("flip");

if(flashCount <= flashcards.length){
flashCount++;
document.getElementById("flashProgress")
.textContent = `${flashCount}/${flashcards.length}`;
}

});

flashContainer.appendChild(div);

});

// ---------------- QUIZ ----------------
const quiz = [
{
q:"O que é sustentabilidade?",
a:["Usar sem limites","Equilíbrio entre uso e preservação","Desperdício","Exploração total"],
c:1
},
{
q:"Qual ajuda o meio ambiente?",
a:["Desperdiçar água","Separar lixo","Queimar lixo","Poluir rios"],
c:1
},
{
q:"Energia renovável?",
a:["Petróleo","Carvão","Solar","Gás"],
c:2
},
{
q:"Reciclável comum?",
a:["Vidro","Comida","Papel sujo","Restos orgânicos"],
c:0
},
{
q:"Coleta seletiva serve para?",
a:["Misturar lixo","Reciclar materiais","Aumentar lixo","Eliminar reciclagem"],
c:1
},
{
q:"Transporte coletivo ajuda como?",
a:["Mais poluição","Menos carros","Mais fumaça","Sem impacto"],
c:1
}
];

let i = 0;
let score = 0;

const qEl = document.getElementById("question");
const aEl = document.getElementById("answers");
const fb = document.getElementById("feedback");

function load(){

const q = quiz[i];

qEl.textContent = q.q;
aEl.innerHTML = "";
fb.textContent = "";

document.getElementById("nextBtn").disabled = true;

q.a.forEach((alt,index)=>{

const b = document.createElement("button");
b.textContent = alt;

b.onclick=()=>check(index,b);

aEl.appendChild(b);

});

}

function check(iBtn,btn){

const correct = quiz[i].c;

document.querySelectorAll("#answers button")
.forEach(b=>b.disabled=true);

if(iBtn === correct){
btn.classList.add("correct");
score++;
document.getElementById("score").textContent = score;
fb.textContent = "✔ Correto!";
}else{
btn.classList.add("wrong");
aEl.children[correct].classList.add("correct");
fb.textContent = "✘ Errado!";
}

document.getElementById("nextBtn").disabled = false;

}

document.getElementById("nextBtn").onclick=()=>{

i++;
if(i < quiz.length){
load();
}else{
alert(`Fim do quiz! Acertos: ${score}/${quiz.length}`);
location.reload();
}

};

document.getElementById("restartBtn").onclick=()=>{
location.reload();
};

load();
