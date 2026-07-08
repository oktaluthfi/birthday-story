import "./../styles/login.css";
import {useMemo,useState} from "react";

export default function LoginScene({onSuccess,onFail}){

const[name,setName]=useState("");
const[birth,setBirth]=useState("");

const validNames=[
"wilma",
"wilwil",
"wilmuy",
"wilmaya fimandatiyas",
"Wilmaya"
];

const stars=useMemo(()=>{

return Array.from({length:45}).map((_,i)=>({

id:i,

top:Math.random()*100,

left:Math.random()*100,

size:Math.random()*3+1,

delay:Math.random()*3

}));

},[]);

function submit(){

const nama=name.toLowerCase().trim();

if(validNames.includes(nama)&&birth==="2006-07-08"){

onSuccess();

}else{

onFail();

}

}

return(

<div className="login-page">

{stars.map(star=>(

<div

key={star.id}

className="star"

style={{

top:`${star.top}%`,

left:`${star.left}%`,

width:star.size,

height:star.size,

animationDelay:`${star.delay}s`

}}

/>

))}

<div className="login-card">

<h1 className="login-title">

Siapa yang mendapatkan

<br/>

surat ini?

</h1>

<p className="login-sub">

Sebuah surat kecil menantimu...

</p>

<label className="label">

NAMA

</label>

<input

className="input"

placeholder="Nama kamu..."

value={name}

onChange={(e)=>setName(e.target.value)}

/>

<label className="label">

TANGGAL LAHIR

</label>

<input

type="date"

className="input"

value={birth}

onChange={(e)=>setBirth(e.target.value)}

/>

<button

className="button"

onClick={submit}

>

Buka Surat 💌

</button>

</div>

</div>

)

}