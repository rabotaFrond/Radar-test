import{u as j,j as e}from"./index-CValbs4P.js";import{u as v,B as w}from"./Box-D1DBkD2W.js";import{T as b,a as t,s as y}from"./Api-CvTXPmJ9.js";import{l as T}from"./7153808-Didc4U8Z.js";import{B}from"./Button-BJT__Nke.js";const F=()=>{var m,o,l,n;const g=j(),{register:a,handleSubmit:d,watch:p,reset:c,setError:h,formState:{errors:r}}=v({mode:"onBlur"}),x=async s=>{var i;try{await y(s.username,s.full_name,s.password),alert("Вы успешно зарегистрировались!"),c(),g("/login")}catch(u){const f=((i=u.message)==null?void 0:i.message)||u.message;h("username",{type:"manual",message:f})}};return e.jsxs("div",{className:"container",children:[e.jsx("img",{className:"logo",src:T,alt:"Наше священное лого"}),e.jsxs(w,{children:[e.jsx(b,{variant:"h4",align:"center",gutterBottom:!0,sx:{color:"black"},children:"Регистрация"}),e.jsxs("form",{onSubmit:d(x),children:[e.jsx(t,{fullWidth:!0,label:"Введите username",...a("username",{required:"Username обязателен",minLength:{value:3,message:"Минимум 3 символов"},maxLength:{value:30,message:"Максимум 30 символов"},pattern:{value:/^[a-z][a-z0-9]*$/,message:"Только латинский алфавит и цифры"}}),error:!!r.username,helperText:(m=r.username)==null?void 0:m.message,margin:"normal"}),e.jsx(t,{fullWidth:!0,label:"Введите Имя и Фамилию",...a("full_name",{required:"Фамилия и Имя обязательно",pattern:{value:/^[а-яА-ЯёЁ]{2,}\s[а-яА-ЯёЁ]{2,}$/,message:"Только русские буквы, минимум 2 буквы в каждом слове и слова разделены пробелом"}}),error:!!r.full_name,helperText:(o=r.full_name)==null?void 0:o.message,margin:"normal"}),e.jsx(t,{fullWidth:!0,label:"Введите пароль",type:"password",...a("password",{required:"Пароль обязателен",minLength:{value:8,message:"Минимум 8 символов"},maxLength:{value:50,message:"Максимум 50 символов"}}),error:!!r.password,helperText:(l=r.password)==null?void 0:l.message,margin:"normal"}),e.jsx(t,{fullWidth:!0,label:"Подтверждение пароля",type:"password",...a("confirmPassword",{required:"Подтвердите пароль",validate:s=>s===p("password")||"Пароли должны совпадать"}),error:!!r.confirmPassword,helperText:(n=r.confirmPassword)==null?void 0:n.message,margin:"normal"}),e.jsx(B,{type:"submit",variant:"contained",children:"Зарегистрироваться"})]})]})]})};export{F as default};
