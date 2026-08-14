function openPrice(id,el){document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));document.querySelectorAll(".pricegroup").forEach(x=>x.style.display="none");el.classList.add("active");document.getElementById(id).style.display="block"}function sendRepair(){let t=document.getElementById("deviceType").value,m=document.getElementById("model").value.trim(),p=document.getElementById("phone").value.trim(),c=document.getElementById("cause").value,pr=document.getElementById("problem").value.trim(),e=document.getElementById("extra").value.trim();if(!t||!m||!p||!pr){alert("Заполните обязательные поля: тип устройства, модель, телефон и описание проблемы.");return false}let text=`🦊 Новая заявка — Техно Лис

📱 Тип устройства: ${t}
🔧 Марка и модель: ${m}
📞 Телефон: ${p}
⚠️ Причина: ${c||"Не указана"}

📝 Проблема:
${pr}

💬 Дополнительно:
${e||"Нет"}`;window.open("https://t.me/tehnafox?text="+encodeURIComponent(text),"_blank");document.getElementById("notice").style.display="block";return false}document.addEventListener("DOMContentLoaded",()=>{let f=location.pathname.split("/").pop()||"index.html";document.querySelectorAll(".nav a").forEach(a=>{if(a.getAttribute("href")===f)a.classList.add("active")})})