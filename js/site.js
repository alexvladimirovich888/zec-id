// Site interactions: simple ZEC ID generator + copy
document.getElementById('year').textContent = new Date().getFullYear();

const prefixes = ["Zen","Shielded","Hidden","Crypto","Ghost","Stealth","Masked","Cyber","Anon","Silent"];
const suffixes = ["Master","Shibe","420","Ninja","Hodl","Keeper","Wizard","Ranger","Seeker","Pilot"];
const styles = ["Stealth","Shielded","Incognito","Zen"];

function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function generateName(){
  const p = pick(prefixes);
  const s = pick(suffixes);
  // sometimes add number
  const maybeNum = Math.random()<0.25 ? String(Math.floor(Math.random()*900)+100) : "";
  return p + s + maybeNum;
}

function generate(){
  const name = generateName();
  const style = document.getElementById('style').value || pick(styles);
  document.getElementById('generatedName').textContent = name;
  document.getElementById('generatedStyle').textContent = style + " privacy style";
  document.getElementById('resultCard').hidden = false;
}

document.getElementById('generateBtn').addEventListener('click', generate);
document.getElementById('regenBtn').addEventListener('click', generate);

document.getElementById('copyBtn').addEventListener('click', async function(){
  const txt = document.getElementById('generatedName').textContent;
  try {
    await navigator.clipboard.writeText(txt);
    this.textContent = 'Copied!';
    setTimeout(()=> this.textContent = 'Copy', 1500);
  } catch(e){ alert('Copy failed — select text and press Ctrl+C'); }
});