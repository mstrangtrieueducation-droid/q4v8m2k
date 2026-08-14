const A = "assets/extracted/";
const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image });

const sections = [
  { letter: "A", title: "Match the words to the pictures.", note: "Quan sát bốn hình a-d rồi chọn chữ cái đúng cho mỗi từ.", points: 4, imageGallery: [
    { label: "a", src: A + "page1-img5-276x190.png" }, { label: "b", src: A + "page1-img6-317x190.png" }, { label: "c", src: A + "page1-img7-269x191.png" }, { label: "d", src: A + "page1-img8-304x190.png" }
  ], questions: [
    choice("A1", "1. cloudy", ["a", "b", "c", "d"], "c", "Hình c có nhiều mây trên trời. Cloudy nghĩa là trời nhiều mây."),
    choice("A2", "2. rainy", ["a", "b", "c", "d"], "d", "Hình d có mưa rơi và bạn nhỏ cầm ô. Rainy nghĩa là trời mưa."),
    choice("A3", "3. windy", ["a", "b", "c", "d"], "a", "Hình a có gió thổi mạnh làm lá bay. Windy nghĩa là trời có gió."),
    choice("A4", "4. snowy", ["a", "b", "c", "d"], "b", "Hình b có tuyết rơi. Snowy nghĩa là trời có tuyết.") ] },
  { letter: "B", title: "Look and complete the words.", note: "Quan sát hình rồi điền các chữ cái còn thiếu để hoàn thành từ.", points: 3, questions: [
    input("B1", "1. d _ _ _ _ _ _ l", ["doorbell"], "Hình vẽ một chiếc chuông cửa. Từ đầy đủ là doorbell.", A + "page1-img2-327x211.png"),
    input("B2", "2. w _ _ t _ _ _", ["weather"], "Hình thể hiện nhiều kiểu thời tiết. Từ đầy đủ là weather - thời tiết.", A + "page1-img3-291x239.png"),
    input("B3", "3. s _ _ _ _", ["sunny"], "Hình có mặt trời chiếu sáng. Từ đầy đủ là sunny - trời nắng.", A + "page1-img9-241x238.png") ] },
  { letter: "C", title: "Listen and write the opposite of the words.", note: "Nghe audio rồi viết từ trái nghĩa với từ em nghe được.", points: 5, audio: "assets/audio/Listening-C.mp3", questions: [
    input("C1", "1. Write the opposite word.", ["warm"], "Từ trái nghĩa cần viết là warm - ấm."),
    input("C2", "2. Write the opposite word.", ["short"], "Từ trái nghĩa cần viết là short - ngắn/thấp."),
    input("C3", "3. Write the opposite word.", ["cloudy", "rainy"], "Đáp án gốc chấp nhận cloudy hoặc rainy vì cả hai đều đối lập với thời tiết nắng trong ngữ cảnh bài nghe."),
    input("C4", "4. Write the opposite word.", ["cold"], "Từ trái nghĩa cần viết là cold - lạnh."),
    input("C5", "5. Write the opposite word.", ["small"], "Từ trái nghĩa cần viết là small - nhỏ.") ] },
  { letter: "D", title: "Circle the correct words.", note: "Chọn từ đúng để câu đúng ngữ pháp.", points: 5, questions: [
    choice("D1", "1. It ___ warm outside in the spring.", ["get", "gets"], "gets", "It là ngôi thứ ba số ít, nên ở câu khẳng định hiện tại đơn động từ thêm -s: gets."),
    choice("D2", "2. Does it ___ in the spring?", ["rains", "rain"], "rain", "Sau Does, động từ trở về dạng nguyên mẫu: Does it rain ...?"),
    choice("D3", "3. It ___ snow on hot days.", ["doesn't", "don't"], "doesn't", "It là ngôi thứ ba số ít nên dùng doesn't: It doesn't snow ..."),
    choice("D4", "4. Does she ___ outside in warm weather?", ["play", "plays"], "play", "Sau Does, động từ phải ở dạng nguyên mẫu: Does she play ...?"),
    choice("D5", "5. My father doesn't ___ English.", ["teach", "teaches"], "teach", "Sau doesn't, động từ phải ở dạng nguyên mẫu: doesn't teach.") ] },
  { letter: "E", title: "Write the questions. Look and answer.", note: "Sắp xếp thành câu hỏi, sau đó quan sát hình để viết câu trả lời.", points: 8, questions: [
    input("E1", "1a. Does / in winter / he / take a nap", ["does he take a nap in winter"], "Câu hỏi với he dùng Does ở đầu và động từ nguyên mẫu take: Does he take a nap in winter?", A + "page2-img1-368x264.png"),
    input("E2", "1b. Answer the question.", ["no he doesn't", "no he does not"], "Trong hình, bạn ấy đang đứng ngoài trời tuyết chứ không ngủ trưa: No, he doesn't."),
    input("E3", "2a. rain / it / Does / in / the spring", ["does it rain in the spring"], "Sắp xếp đúng là Does + it + rain + in the spring?" , A + "page2-img2-303x258.png"),
    input("E4", "2b. Answer the question.", ["yes it does"], "Trong hình có mưa vào mùa xuân: Yes, it does."),
    input("E5", "3a. cool days / swim / on / she / Does", ["does she swim on cool days"], "Sau Does dùng động từ nguyên mẫu swim: Does she swim on cool days?", A + "page2-img3-369x264.png"),
    input("E6", "3b. Answer the question.", ["no she doesn't", "no she does not"], "Trong hình trời nắng nóng, không phải ngày mát: No, she doesn't."),
    input("E7", "4a. Does / in / outside / he / the fall / play", ["does he play outside in the fall"], "Trật tự đúng là Does + he + play + outside + in the fall?", A + "page2-img4-356x243.png"),
    input("E8", "4b. Answer the question.", ["yes he does"], "Trong hình bạn ấy đang chơi ngoài trời giữa lá rụng mùa thu: Yes, he does.") ] },
  { letter: "F", title: "Complete the sentences.", note: "Dùng các từ trong khung: fall, grow, watch, make, bring. Có một từ không dùng.", points: 4, questions: [
    input("F1", "1. The red and orange leaves ___ to the ground.", ["fall"], "Lá đỏ và cam rơi xuống đất, nên dùng fall."),
    input("F2", "2. The rain helps the plants ___ in the spring.", ["grow"], "Mưa giúp cây phát triển, nên dùng grow."),
    input("F3", "3. In the spring, I ___ the birds make their nests in trees.", ["watch"], "I watch the birds nghĩa là tôi quan sát những chú chim."),
    input("F4", "4. The boys ___ their bicycles to the beach in summer.", ["bring"], "Bring their bicycles nghĩa là mang xe đạp của họ tới bãi biển.") ] },
  { letter: "G", title: "Look and complete the words.", note: "Quan sát hình rồi hoàn thành cụm từ còn thiếu.", points: 3, questions: [
    input("G1", "1. ma _ _ / _ / _ _ _", ["make a pie"], "Bạn nhỏ đang làm bánh: make a pie.", A + "page3-img1-525x375.png"),
    input("G2", "2. f _ _ / _ / _ _ _ _", ["fly a kite"], "Bạn nhỏ đang thả diều: fly a kite.", A + "page3-img2-525x375.png"),
    input("G3", "3. w _ _ _ h", ["watch"], "Các bạn đang xem một hoạt động: watch.", A + "page3-img3-525x375.png") ] },
  { letter: "H", title: "Look and write the words.", note: "Quan sát các số 1-5 trong tranh rồi viết đúng hoạt động hoặc từ tương ứng.", points: 5, sectionImage: A + "page3-img4-1922x739.png", questions: [
    input("H1", "1. What is activity 1?", ["ride a bicycle", "ride a bike"], "Số 1 chỉ bạn nhỏ đang đi xe đạp: ride a bicycle."),
    input("H2", "2. What is activity 2?", ["eat ice cream"], "Số 2 chỉ bạn nhỏ đang ăn kem: eat ice cream."),
    input("H3", "3. What is activity 3?", ["plant flowers"], "Số 3 chỉ các bạn đang trồng hoa: plant flowers."),
    input("H4", "4. What is activity 4?", ["fly a kite"], "Số 4 chỉ bạn nhỏ đang thả diều: fly a kite."),
    input("H5", "5. What is word 5?", ["fall"], "Số 5 chỉ mùa thu với lá rụng: fall.") ] },
  { letter: "I", title: "Circle the correct words.", note: "Chọn hành động đúng hoặc phủ định đúng theo nghĩa của câu.", points: 4, questions: [
    choice("I1", "1. I ___ in my house.", ["fly a kite", "don't fly a kite"], "don't fly a kite", "Không thả diều trong nhà, nên câu đúng là I don't fly a kite in my house."),
    choice("I2", "2. Elephants ___ hot chocolate.", ["drink", "don't drink"], "don't drink", "Voi không uống sô-cô-la nóng, nên dùng don't drink."),
    choice("I3", "3. We ___ in the snow.", ["go to the beach", "don't go to the beach"], "don't go to the beach", "Khi có tuyết, chúng ta không đi bãi biển, nên dùng don't go to the beach."),
    choice("I4", "4. They ___ books to school.", ["bring", "don't bring"], "bring", "Học sinh mang sách tới trường, nên dùng bring.") ] },
  { letter: "J", title: "Look and complete the answers.", note: "Quan sát hình rồi hoàn thành câu trả lời Yes/No.", points: 3, questions: [
    input("J1", "1. Do you fly a kite in the spring? ___, I ___.", ["yes i do"], "Hình cho thấy bạn nhỏ thả diều vào mùa xuân: Yes, I do.", A + "page4-img1-601x301.png"),
    input("J2", "2. Do they ride bicycles after school? ___, they ___.", ["no they don't", "no they do not"], "Các bạn đang chơi nhạc, không đi xe đạp: No, they don't.", A + "page4-img2-567x284.png"),
    input("J3", "3. Do you build a snowman in the winter? ___, I ___.", ["no i don't", "no i do not"], "Trong hình bạn nhỏ ở trong nhà, không xây người tuyết: No, I don't.", A + "page4-img3-589x296.png") ] },
  { letter: "K", title: "Make questions. Then listen and write the answers.", note: "Sắp xếp từ thành câu hỏi, sau đó nghe audio để viết câu trả lời.", points: 6, audio: "assets/audio/Listening-K.mp3", questions: [
    input("K1", "1a. we / Do / in / the spring / teach", ["do we teach in the spring"], "Câu hỏi với we bắt đầu bằng Do: Do we teach in the spring?"),
    input("K2", "1b. Write the answer from the audio.", ["no we don't", "no we do not"], "Audio trả lời: No, we don't."),
    input("K3", "2a. ice cream / you / at / Do / school / eat", ["do you eat ice cream at school"], "Trật tự đúng là Do + you + eat ice cream + at school?"),
    input("K4", "2b. Write the answer from the audio.", ["yes i do"], "Audio trả lời: Yes, I do."),
    input("K5", "3a. they / the park / Do / in / fly kites", ["do they fly kites in the park"], "Trật tự đúng là Do + they + fly kites + in the park?"),
    input("K6", "3b. Write the answer from the audio.", ["yes they do"], "Audio trả lời: Yes, they do.") ] }
];

const form = document.querySelector("#testForm"), root = document.querySelector("#sections"), jumpRoot = document.querySelector("#sectionJump"), progressText = document.querySelector("#progressText"), progressBar = document.querySelector("#progressBar"), results = document.querySelector("#results"), answerReview = document.querySelector("#answerReview"), scoreValue = document.querySelector("#scoreValue"), scoreMessage = document.querySelector("#scoreMessage");
const STORAGE_KEY = "discover1-written-test4-v1";
render(); restore(); update();

form.addEventListener("click", e => { const b = e.target.closest("[data-choice]"); if (!b) return; const q = b.closest(".question"); q.querySelectorAll("[data-choice]").forEach(x => { x.classList.toggle("is-selected", x === b); x.setAttribute("aria-pressed", x === b ? "true" : "false"); }); q.dataset.value = b.dataset.value; q.classList.remove("is-missing"); save(); update(); });
form.addEventListener("input", e => { if (!e.target.matches("input")) return; e.target.closest(".question")?.classList.remove("is-missing"); save(); update(); });
form.addEventListener("submit", e => { e.preventDefault(); document.querySelectorAll(".is-missing").forEach(x => x.classList.remove("is-missing")); const m = missing(); if (m.length) { m.forEach(x => x.closest(".question").classList.add("is-missing")); document.querySelector("#submitHelp").textContent = `Bài còn thiếu ${m.length} ý. Em hoàn thành phần được đánh dấu trước khi xem đáp án.`; m[0].closest(".question").scrollIntoView({ behavior: "smooth", block: "center" }); return; } grade(); });
document.querySelector("#restartTest").onclick = () => { if (confirm("Em muốn xoá toàn bộ câu trả lời và làm lại từ đầu?")) { localStorage.removeItem(STORAGE_KEY); location.reload(); } };
document.querySelector("#reviewMistakes").onclick = () => (document.querySelector(".review-card.is-wrong") || answerReview).scrollIntoView({ behavior: "smooth" });

function render() { sections.forEach(s => { const j = document.createElement("button"); j.type = "button"; j.textContent = s.letter; j.dataset.jump = s.letter; j.onclick = () => document.querySelector("#section-" + s.letter).scrollIntoView({ behavior: "smooth" }); jumpRoot.appendChild(j); const el = document.createElement("section"); el.className = "test-section"; el.id = "section-" + s.letter; el.innerHTML = `<header class="section-heading"><span class="section-letter">${s.letter}</span><div><h2>${s.title}</h2><p>${s.note}</p></div><span class="section-points">/${s.points}</span></header>${s.audio ? `<div class="audio-panel"><p>Audio phần ${s.letter}</p><audio controls preload="metadata" src="${s.audio}"></audio></div>` : ""}${gallery(s)}${sectionImage(s)}<div class="question-list">${s.questions.map((q,i) => question(s,q,i)).join("")}</div>`; root.appendChild(el); }); }
function question(s,q,i) { const label = s.letter + (i + 1); const control = q.type === "choice" ? `<div class="choice-grid">${q.options.map((o,n) => `<button type="button" class="choice" data-choice data-value="${esc(o)}" aria-pressed="false"><span class="choice-key">${String.fromCharCode(65+n)}</span><span>${o}</span></button>`).join("")}</div>` : `<input class="answer-input" autocomplete="off" spellcheck="false" placeholder="Nhập câu trả lời">`; return `<article class="question" data-id="${q.id}"><span class="question-number">${label}</span><div class="question-copy">${q.image ? `<img class="question-image" src="${q.image}" alt="Hình minh hoạ câu ${label}">` : ""}<p class="question-prompt">${q.prompt}</p>${control}</div></article>`; }
function gallery(s) { return s.imageGallery ? `<div class="source-gallery picture-grid">${s.imageGallery.map(x => `<figure><img src="${x.src}" alt="Hình ${x.label}"><figcaption>${x.label}</figcaption></figure>`).join("")}</div>` : ""; }
function sectionImage(s) { return s.sectionImage ? `<img class="source-image" src="${s.sectionImage}" alt="Hình minh hoạ phần ${s.letter}">` : ""; }
function norm(v) { return String(v||"").toLowerCase().replace(/[’‘`]/g,"'").replace(/[?.!,]/g,"").replace(/-/g," ").replace(/\s+/g," ").trim(); }
function matches(v,a) { const n = norm(v).replace(/does not/g,"doesn't").replace(/do not/g,"don't"); return a.some(x => norm(x).replace(/does not/g,"doesn't").replace(/do not/g,"don't") === n); }
function missing() { const out=[]; sections.forEach(s => s.questions.forEach(q => { const el=document.querySelector(`[data-id="${q.id}"]`); if(q.type==="choice"){if(!el.dataset.value) out.push(el.querySelector(".choice"));} else {const f=el.querySelector("input"); if(!f.value.trim()) out.push(f);} })); return out; }
function grade() { let score=0, reviews=[]; sections.forEach(s => s.questions.forEach((q,i) => { const el=document.querySelector(`[data-id="${q.id}"]`), value=q.type==="choice" ? el.dataset.value||"" : el.querySelector("input").value, correct=matches(value,q.answers); if(correct) score++; reviews.push({q,label:s.letter+(i+1),value,correct}); })); scoreValue.textContent=score; scoreMessage.textContent=score===50 ? "Em đã làm đúng toàn bộ bài." : `Em cần chữa ${50-score} ý. Hãy đọc kỹ giải thích và đối chiếu lại câu gốc.`; answerReview.innerHTML=reviews.map(r => `<article class="review-card ${r.correct?"":"is-wrong"}"><div class="review-head"><h3>Câu ${r.label}</h3><span class="review-status">${r.correct?"1/1":"0/1"} điểm</span></div><p class="review-question">${r.q.prompt}</p><div class="review-answer"><span>Em trả lời: <b>${html(r.value||"(trống)")}</b></span><span>Đáp án: <b>${html(r.q.answers[0])}</b></span></div><p class="explanation"><b>Giải thích:</b> ${r.q.explanation}</p></article>`).join(""); results.hidden=false; form.hidden=true; document.querySelector("#stickyProgress").hidden=true; results.scrollIntoView({behavior:"smooth"}); }
function update() { let total=0; sections.forEach(s => { let c=0; s.questions.forEach(q => { const el=document.querySelector(`[data-id="${q.id}"]`), done=q.type==="choice" ? !!el.dataset.value : !!el.querySelector("input").value.trim(); if(done){total++;c++;} }); const j=document.querySelector(`[data-jump="${s.letter}"]`); j.classList.toggle("has-progress",c>0); j.classList.toggle("is-complete",c===s.points); }); progressText.textContent=`${total} / 50`; progressBar.style.width=`${total*2}%`; }
function save(){const d={};sections.forEach(s=>s.questions.forEach(q=>{const el=document.querySelector(`[data-id="${q.id}"]`);d[q.id]=q.type==="choice"?el.dataset.value||"":el.querySelector("input").value;}));localStorage.setItem(STORAGE_KEY,JSON.stringify(d));}
function restore(){let d={};try{d=JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}");}catch{}sections.forEach(s=>s.questions.forEach(q=>{const v=d[q.id];if(!v)return;const el=document.querySelector(`[data-id="${q.id}"]`);if(q.type==="choice"){el.dataset.value=v;el.querySelectorAll("[data-choice]").forEach(b=>{const on=b.dataset.value===v;b.classList.toggle("is-selected",on);b.setAttribute("aria-pressed",on?"true":"false");});}else el.querySelector("input").value=v;}));}
function html(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));} function esc(v){return html(v);}
