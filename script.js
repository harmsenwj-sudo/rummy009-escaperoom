
const puzzles=[
 {id:'p1',type:'code',title:'🧗 Klimroute',prompt:'Rummy009 klimt 1,7m - 0,4m + 2,3m - 0,6m. Hoeveel decimeters?',answer:'30'},
 {id:'p2',type:'choice',title:'🥩 T-bone',prompt:'Waar bevindt zich de T-bone?',options:['In de borst','In de schouder','In de lende (short loin)','In de nek'],correct:2},
 {id:'p3',type:'order',title:'🎣 De Vangst',prompt:'Zet in volgorde:',items:['Binnenhalen','Wachten','Aanslaan','Uitgooien','Dobber verdwijnt'],correct:['Uitgooien','Wachten','Dobber verdwijnt','Aanslaan','Binnenhalen']},
 {id:'p4',type:'text',title:'🐘 Raadsel',prompt:'Ik heb een slurf... Wat ben ik?',answer:'olifant'},
 {id:'p5',type:'choice',title:'💖 Eva-vraag',prompt:'Wat viel Rummy009 als eerste op aan Eva?',options:['Haar intelligentie','Haar 🍑','Haar spirituele energie','Haar oog voor detail'],correct:1}
];
let current=0;
function render(){const p=puzzles[current];document.getElementById('progress-bar').style.width=((current)/puzzles.length*100)+'%';
let h=`<div class='card'><h2>${p.title}</h2><p>${p.prompt}</p>`;
if(p.type==='code'||p.type==='text')h+=`<input id='ans'>`;
if(p.type==='choice')p.options.forEach((o,i)=>h+=`<div class='option' onclick='check(${i})'>${o}</div>`);
if(p.type==='order')p.items.forEach(o=>h+=`<div class='option'>${o}</div>`);
h+=`<button class='btn btn-primary' onclick='check()'>Controleer</button></div>`
document.getElementById('card-container').innerHTML=h;}
function check(v){const p=puzzles[current];let ok=false;
if(p.type==='code'||p.type==='text')ok=document.getElementById('ans').value.trim().toLowerCase()===p.answer;
if(p.type==='choice')ok=v===p.correct;
if(ok){current++;if(current<puzzles.length)render();else finale();}
else alert('Niet goed!');}
function finale(){document.getElementById('card-container').innerHTML=`<div class='card'><h2>🎉 Finale</h2><p>Je hebt gewonnen!</p><a class='btn btn-primary' href='https://maps.app.goo.gl/nzQGDh6HcCBheRLR6'>Volgende locatie</a></div>`;}
render();