
function toggleMenu(){const n=document.querySelector('.nav'); if(!n)return; n.classList.toggle('mobile-open');}
function showPrice(id,btn){document.querySelectorAll('.price-tab-content').forEach(x=>x.hidden=true);document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));const el=document.getElementById(id);if(el)el.hidden=false;if(btn)btn.classList.add('active');}
function sendRepair(){
 const type=document.getElementById('deviceType').value, model=document.getElementById('model').value.trim(), phone=document.getElementById('phone').value.trim(), cause=document.getElementById('cause').value, problem=document.getElementById('problem').value.trim(), extra=document.getElementById('extra').value.trim();
 if(!type||!model||!phone||!problem){alert('Заполните обязательные поля.');return false}
 const text=`🦊 Заявка на ремонт — Техно Лис\n\n📱 Тип: ${type}\n🔧 Модель: ${model}\n📞 Телефон: ${phone}\n⚠️ Причина: ${cause||'Не указана'}\n\n📝 Проблема:\n${problem}\n\n💬 Дополнительно:\n${extra||'Нет'}`;
 const url='https://t.me/share/url?url=&text='+encodeURIComponent(text);
 window.open(url,'_blank');document.getElementById('notice').style.display='block';return false;
}
document.addEventListener('DOMContentLoaded',()=>{let p=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('.nav a').forEach(a=>{if(a.getAttribute('href')===p)a.classList.add('active')});});
