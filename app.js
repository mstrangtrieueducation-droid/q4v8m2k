const A = "assets/extracted/";
const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image });

const sections = [
  {
    "letter": "A",
    "title": "Match the words to the pictures.",
    "note": "Quan sát bốn hình a-d rồi chọn chữ cái đúng cho mỗi từ.",
    "points": 4,
    "imageGallery": [
      {
        "label": "a",
        "src": "assets/extracted/page1-img5-276x190.png"
      },
      {
        "label": "b",
        "src": "assets/extracted/page1-img6-317x190.png"
      },
      {
        "label": "c",
        "src": "assets/extracted/page1-img7-269x191.png"
      },
      {
        "label": "d",
        "src": "assets/extracted/page1-img8-304x190.png"
      }
    ],
    "questions": [
      {
        "id": "A1",
        "type": "choice",
        "prompt": "1. cloudy",
        "options": [
          "a",
          "b",
          "c",
          "d"
        ],
        "answers": [
          "c"
        ],
        "explanation": "Hình c có nhiều mây trên trời. Cloudy nghĩa là trời nhiều mây.",
        "image": ""
      },
      {
        "id": "A2",
        "type": "choice",
        "prompt": "2. rainy",
        "options": [
          "a",
          "b",
          "c",
          "d"
        ],
        "answers": [
          "d"
        ],
        "explanation": "Hình d có mưa rơi và bạn nhỏ cầm ô. Rainy nghĩa là trời mưa.",
        "image": ""
      },
      {
        "id": "A3",
        "type": "choice",
        "prompt": "3. windy",
        "options": [
          "a",
          "b",
          "c",
          "d"
        ],
        "answers": [
          "a"
        ],
        "explanation": "Hình a có gió thổi mạnh làm lá bay. Windy nghĩa là trời có gió.",
        "image": ""
      },
      {
        "id": "A4",
        "type": "choice",
        "prompt": "4. snowy",
        "options": [
          "a",
          "b",
          "c",
          "d"
        ],
        "answers": [
          "b"
        ],
        "explanation": "Hình b có tuyết rơi. Snowy nghĩa là trời có tuyết.",
        "image": ""
      }
    ]
  },
  {
    "letter": "B",
    "title": "Look and complete the words.",
    "note": "Quan sát hình rồi điền các chữ cái còn thiếu để hoàn thành từ.",
    "points": 3,
    "questions": [
      {
        "id": "B1",
        "type": "input",
        "prompt": "1. d _ _ _ _ _ _ l",
        "answers": [
          "doorbell"
        ],
        "explanation": "Hình vẽ một chiếc chuông cửa. Từ đầy đủ là doorbell.",
        "image": "assets/extracted/page1-img2-327x211.png"
      },
      {
        "id": "B2",
        "type": "input",
        "prompt": "2. w _ _ t _ _ _",
        "answers": [
          "weather"
        ],
        "explanation": "Hình thể hiện nhiều kiểu thời tiết. Từ đầy đủ là weather - thời tiết.",
        "image": "assets/extracted/page1-img3-291x239.png"
      },
      {
        "id": "B3",
        "type": "input",
        "prompt": "3. s _ _ _ _",
        "answers": [
          "sunny"
        ],
        "explanation": "Hình có mặt trời chiếu sáng. Từ đầy đủ là sunny - trời nắng.",
        "image": "assets/extracted/page1-img9-241x238.png"
      }
    ]
  },
  {
    "letter": "C",
    "title": "Listen and write the opposite of the words.",
    "note": "Nghe audio rồi viết từ trái nghĩa với từ em nghe được.",
    "points": 5,
    "audio": "assets/audio/Listening-C.mp3",
    "questions": [
      {
        "id": "C1",
        "type": "input",
        "prompt": "1. Write the opposite word.",
        "answers": [
          "warm"
        ],
        "explanation": "Từ trái nghĩa cần viết là warm - ấm.",
        "image": ""
      },
      {
        "id": "C2",
        "type": "input",
        "prompt": "2. Write the opposite word.",
        "answers": [
          "short"
        ],
        "explanation": "Từ trái nghĩa cần viết là short - ngắn/thấp.",
        "image": ""
      },
      {
        "id": "C3",
        "type": "input",
        "prompt": "3. Write the opposite word.",
        "answers": [
          "cloudy",
          "rainy"
        ],
        "explanation": "Đáp án gốc chấp nhận cloudy hoặc rainy vì cả hai đều đối lập với thời tiết nắng trong ngữ cảnh bài nghe.",
        "image": ""
      },
      {
        "id": "C4",
        "type": "input",
        "prompt": "4. Write the opposite word.",
        "answers": [
          "cold"
        ],
        "explanation": "Từ trái nghĩa cần viết là cold - lạnh.",
        "image": ""
      },
      {
        "id": "C5",
        "type": "input",
        "prompt": "5. Write the opposite word.",
        "answers": [
          "small"
        ],
        "explanation": "Từ trái nghĩa cần viết là small - nhỏ.",
        "image": ""
      }
    ]
  },
  {
    "letter": "D",
    "title": "Circle the correct words.",
    "note": "Chọn từ đúng để câu đúng ngữ pháp.",
    "points": 5,
    "questions": [
      {
        "id": "D1",
        "type": "choice",
        "prompt": "1. It ___ warm outside in the spring.",
        "options": [
          "get",
          "gets"
        ],
        "answers": [
          "gets"
        ],
        "explanation": "It là ngôi thứ ba số ít, nên ở câu khẳng định hiện tại đơn động từ thêm -s: gets.",
        "image": ""
      },
      {
        "id": "D2",
        "type": "choice",
        "prompt": "2. Does it ___ in the spring?",
        "options": [
          "rains",
          "rain"
        ],
        "answers": [
          "rain"
        ],
        "explanation": "Sau Does, động từ trở về dạng nguyên mẫu: Does it rain ...?",
        "image": ""
      },
      {
        "id": "D3",
        "type": "choice",
        "prompt": "3. It ___ snow on hot days.",
        "options": [
          "doesn't",
          "don't"
        ],
        "answers": [
          "doesn't"
        ],
        "explanation": "It là ngôi thứ ba số ít nên dùng doesn't: It doesn't snow ...",
        "image": ""
      },
      {
        "id": "D4",
        "type": "choice",
        "prompt": "4. Does she ___ outside in warm weather?",
        "options": [
          "play",
          "plays"
        ],
        "answers": [
          "play"
        ],
        "explanation": "Sau Does, động từ phải ở dạng nguyên mẫu: Does she play ...?",
        "image": ""
      },
      {
        "id": "D5",
        "type": "choice",
        "prompt": "5. My father doesn't ___ English.",
        "options": [
          "teach",
          "teaches"
        ],
        "answers": [
          "teach"
        ],
        "explanation": "Sau doesn't, động từ phải ở dạng nguyên mẫu: doesn't teach.",
        "image": ""
      }
    ]
  },
  {
    "letter": "E",
    "title": "Write the questions. Look and answer.",
    "note": "Sắp xếp thành câu hỏi, sau đó quan sát hình để viết câu trả lời.",
    "points": 8,
    "questions": [
      {
        "id": "E1",
        "type": "input",
        "prompt": "1a. Does / in winter / he / take a nap",
        "answers": [
          "does he take a nap in winter"
        ],
        "explanation": "Câu hỏi với he dùng Does ở đầu và động từ nguyên mẫu take: Does he take a nap in winter?",
        "image": "assets/extracted/page2-img1-368x264.png"
      },
      {
        "id": "E2",
        "type": "input",
        "prompt": "1b. Answer the question.",
        "answers": [
          "no he doesn't",
          "no he does not"
        ],
        "explanation": "Trong hình, bạn ấy đang đứng ngoài trời tuyết chứ không ngủ trưa: No, he doesn't.",
        "image": ""
      },
      {
        "id": "E3",
        "type": "input",
        "prompt": "2a. rain / it / Does / in / the spring",
        "answers": [
          "does it rain in the spring"
        ],
        "explanation": "Sắp xếp đúng là Does + it + rain + in the spring?",
        "image": "assets/extracted/page2-img2-303x258.png"
      },
      {
        "id": "E4",
        "type": "input",
        "prompt": "2b. Answer the question.",
        "answers": [
          "yes it does"
        ],
        "explanation": "Trong hình có mưa vào mùa xuân: Yes, it does.",
        "image": ""
      },
      {
        "id": "E5",
        "type": "input",
        "prompt": "3a. cool days / swim / on / she / Does",
        "answers": [
          "does she swim on cool days"
        ],
        "explanation": "Sau Does dùng động từ nguyên mẫu swim: Does she swim on cool days?",
        "image": "assets/extracted/page2-img3-369x264.png"
      },
      {
        "id": "E6",
        "type": "input",
        "prompt": "3b. Answer the question.",
        "answers": [
          "no she doesn't",
          "no she does not"
        ],
        "explanation": "Trong hình trời nắng nóng, không phải ngày mát: No, she doesn't.",
        "image": ""
      },
      {
        "id": "E7",
        "type": "input",
        "prompt": "4a. Does / in / outside / he / the fall / play",
        "answers": [
          "does he play outside in the fall"
        ],
        "explanation": "Trật tự đúng là Does + he + play + outside + in the fall?",
        "image": "assets/extracted/page2-img4-356x243.png"
      },
      {
        "id": "E8",
        "type": "input",
        "prompt": "4b. Answer the question.",
        "answers": [
          "yes he does"
        ],
        "explanation": "Trong hình bạn ấy đang chơi ngoài trời giữa lá rụng mùa thu: Yes, he does.",
        "image": ""
      }
    ]
  },
  {
    "letter": "F",
    "title": "Complete the sentences.",
    "note": "Dùng các từ trong khung: fall, grow, watch, make, bring. Có một từ không dùng.",
    "points": 4,
    "questions": [
      {
        "id": "F1",
        "type": "input",
        "prompt": "1. The red and orange leaves ___ to the ground.",
        "answers": [
          "fall"
        ],
        "explanation": "Lá đỏ và cam rơi xuống đất, nên dùng fall.",
        "image": ""
      },
      {
        "id": "F2",
        "type": "input",
        "prompt": "2. The rain helps the plants ___ in the spring.",
        "answers": [
          "grow"
        ],
        "explanation": "Mưa giúp cây phát triển, nên dùng grow.",
        "image": ""
      },
      {
        "id": "F3",
        "type": "input",
        "prompt": "3. In the spring, I ___ the birds make their nests in trees.",
        "answers": [
          "watch"
        ],
        "explanation": "I watch the birds nghĩa là tôi quan sát những chú chim.",
        "image": ""
      },
      {
        "id": "F4",
        "type": "input",
        "prompt": "4. The boys ___ their bicycles to the beach in summer.",
        "answers": [
          "bring"
        ],
        "explanation": "Bring their bicycles nghĩa là mang xe đạp của họ tới bãi biển.",
        "image": ""
      }
    ]
  },
  {
    "letter": "G",
    "title": "Look and complete the words.",
    "note": "Quan sát hình rồi hoàn thành cụm từ còn thiếu.",
    "points": 3,
    "questions": [
      {
        "id": "G1",
        "type": "input",
        "prompt": "1. ma _ _ / _ / _ _ _",
        "answers": [
          "make a pie"
        ],
        "explanation": "Bạn nhỏ đang làm bánh: make a pie.",
        "image": "assets/extracted/page3-img1-525x375.png"
      },
      {
        "id": "G2",
        "type": "input",
        "prompt": "2. f _ _ / _ / _ _ _ _",
        "answers": [
          "fly a kite"
        ],
        "explanation": "Bạn nhỏ đang thả diều: fly a kite.",
        "image": "assets/extracted/page3-img2-525x375.png"
      },
      {
        "id": "G3",
        "type": "input",
        "prompt": "3. w _ _ _ h",
        "answers": [
          "watch"
        ],
        "explanation": "Các bạn đang xem một hoạt động: watch.",
        "image": "assets/extracted/page3-img3-525x375.png"
      }
    ]
  },
  {
    "letter": "H",
    "title": "Look and write the words.",
    "note": "Quan sát các số 1-5 trong tranh rồi viết đúng hoạt động hoặc từ tương ứng.",
    "points": 5,
    "sectionImage": "assets/extracted/page3-img4-1922x739.png",
    "questions": [
      {
        "id": "H1",
        "type": "input",
        "prompt": "1. What is activity 1?",
        "answers": [
          "ride a bicycle",
          "ride a bike"
        ],
        "explanation": "Số 1 chỉ bạn nhỏ đang đi xe đạp: ride a bicycle.",
        "image": ""
      },
      {
        "id": "H2",
        "type": "input",
        "prompt": "2. What is activity 2?",
        "answers": [
          "eat ice cream"
        ],
        "explanation": "Số 2 chỉ bạn nhỏ đang ăn kem: eat ice cream.",
        "image": ""
      },
      {
        "id": "H3",
        "type": "input",
        "prompt": "3. What is activity 3?",
        "answers": [
          "plant flowers"
        ],
        "explanation": "Số 3 chỉ các bạn đang trồng hoa: plant flowers.",
        "image": ""
      },
      {
        "id": "H4",
        "type": "input",
        "prompt": "4. What is activity 4?",
        "answers": [
          "fly a kite"
        ],
        "explanation": "Số 4 chỉ bạn nhỏ đang thả diều: fly a kite.",
        "image": ""
      },
      {
        "id": "H5",
        "type": "input",
        "prompt": "5. What is word 5?",
        "answers": [
          "fall"
        ],
        "explanation": "Số 5 chỉ mùa thu với lá rụng: fall.",
        "image": ""
      }
    ]
  },
  {
    "letter": "I",
    "title": "Circle the correct words.",
    "note": "Chọn hành động đúng hoặc phủ định đúng theo nghĩa của câu.",
    "points": 4,
    "questions": [
      {
        "id": "I1",
        "type": "choice",
        "prompt": "1. I ___ in my house.",
        "options": [
          "fly a kite",
          "don't fly a kite"
        ],
        "answers": [
          "don't fly a kite"
        ],
        "explanation": "Không thả diều trong nhà, nên câu đúng là I don't fly a kite in my house.",
        "image": ""
      },
      {
        "id": "I2",
        "type": "choice",
        "prompt": "2. Elephants ___ hot chocolate.",
        "options": [
          "drink",
          "don't drink"
        ],
        "answers": [
          "don't drink"
        ],
        "explanation": "Voi không uống sô-cô-la nóng, nên dùng don't drink.",
        "image": ""
      },
      {
        "id": "I3",
        "type": "choice",
        "prompt": "3. We ___ in the snow.",
        "options": [
          "go to the beach",
          "don't go to the beach"
        ],
        "answers": [
          "don't go to the beach"
        ],
        "explanation": "Khi có tuyết, chúng ta không đi bãi biển, nên dùng don't go to the beach.",
        "image": ""
      },
      {
        "id": "I4",
        "type": "choice",
        "prompt": "4. They ___ books to school.",
        "options": [
          "bring",
          "don't bring"
        ],
        "answers": [
          "bring"
        ],
        "explanation": "Học sinh mang sách tới trường, nên dùng bring.",
        "image": ""
      }
    ]
  },
  {
    "letter": "J",
    "title": "Look and complete the answers.",
    "note": "Quan sát hình rồi hoàn thành câu trả lời Yes/No.",
    "points": 3,
    "questions": [
      {
        "id": "J1",
        "type": "input",
        "prompt": "1. Do you fly a kite in the spring? ___, I ___.",
        "answers": [
          "yes i do"
        ],
        "explanation": "Hình cho thấy bạn nhỏ thả diều vào mùa xuân: Yes, I do.",
        "image": "assets/extracted/page4-img1-601x301.png"
      },
      {
        "id": "J2",
        "type": "input",
        "prompt": "2. Do they ride bicycles after school? ___, they ___.",
        "answers": [
          "no they don't",
          "no they do not"
        ],
        "explanation": "Các bạn đang chơi nhạc, không đi xe đạp: No, they don't.",
        "image": "assets/extracted/page4-img2-567x284.png"
      },
      {
        "id": "J3",
        "type": "input",
        "prompt": "3. Do you build a snowman in the winter? ___, I ___.",
        "answers": [
          "no i don't",
          "no i do not"
        ],
        "explanation": "Trong hình bạn nhỏ ở trong nhà, không xây người tuyết: No, I don't.",
        "image": "assets/extracted/page4-img3-589x296.png"
      }
    ]
  },
  {
    "letter": "K",
    "title": "Make questions. Then listen and write the answers.",
    "note": "Sắp xếp từ thành câu hỏi, sau đó nghe audio để viết câu trả lời.",
    "points": 6,
    "audio": "assets/audio/Listening-K.mp3",
    "questions": [
      {
        "id": "K1",
        "type": "input",
        "prompt": "1a. we / Do / in / the spring / teach",
        "answers": [
          "do we teach in the spring"
        ],
        "explanation": "Câu hỏi với we bắt đầu bằng Do: Do we teach in the spring?",
        "image": ""
      },
      {
        "id": "K2",
        "type": "input",
        "prompt": "1b. Write the answer from the audio.",
        "answers": [
          "no we don't",
          "no we do not"
        ],
        "explanation": "Audio trả lời: No, we don't.",
        "image": ""
      },
      {
        "id": "K3",
        "type": "input",
        "prompt": "2a. ice cream / you / at / Do / school / eat",
        "answers": [
          "do you eat ice cream at school"
        ],
        "explanation": "Trật tự đúng là Do + you + eat ice cream + at school?",
        "image": ""
      },
      {
        "id": "K4",
        "type": "input",
        "prompt": "2b. Write the answer from the audio.",
        "answers": [
          "yes i do"
        ],
        "explanation": "Audio trả lời: Yes, I do.",
        "image": ""
      },
      {
        "id": "K5",
        "type": "input",
        "prompt": "3a. they / the park / Do / in / fly kites",
        "answers": [
          "do they fly kites in the park"
        ],
        "explanation": "Trật tự đúng là Do + they + fly kites + in the park?",
        "image": ""
      },
      {
        "id": "K6",
        "type": "input",
        "prompt": "3b. Write the answer from the audio.",
        "answers": [
          "yes they do"
        ],
        "explanation": "Audio trả lời: Yes, they do.",
        "image": ""
      }
    ]
  }
];

const form = document.querySelector("#testForm"), root = document.querySelector("#sections"), jumpRoot = document.querySelector("#sectionJump"), progressText = document.querySelector("#progressText"), progressBar = document.querySelector("#progressBar"), results = document.querySelector("#results"), answerReview = document.querySelector("#answerReview"), scoreValue = document.querySelector("#scoreValue"), scoreMessage = document.querySelector("#scoreMessage");
const STORAGE_KEY = "discover1-written-test4-v1-source-audit-v2";
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
function matches(value, accepted) { return DiscoverAnswerMatcher.matches(value, accepted); }

function missing() { const out=[]; sections.forEach(s => s.questions.forEach(q => { const el=document.querySelector(`[data-id="${q.id}"]`); if(q.type==="choice"){if(!el.dataset.value) out.push(el.querySelector(".choice"));} else {const f=el.querySelector("input"); if(!f.value.trim()) out.push(f);} })); return out; }
function grade() { let score=0, reviews=[]; sections.forEach(s => s.questions.forEach((q,i) => { const el=document.querySelector(`[data-id="${q.id}"]`), value=q.type==="choice" ? el.dataset.value||"" : el.querySelector("input").value, correct=matches(value,q.answers); if(correct) score++; reviews.push({q,label:s.letter+(i+1),value,correct}); })); scoreValue.textContent=score; scoreMessage.textContent=score===50 ? "Em đã làm đúng toàn bộ bài." : `Em cần chữa ${50-score} ý. Hãy đọc kỹ giải thích và đối chiếu lại câu gốc.`; answerReview.innerHTML=reviews.map(r => `<article class="review-card ${r.correct?"":"is-wrong"}"><div class="review-head"><h3>Câu ${r.label}</h3><span class="review-status">${r.correct?"1/1":"0/1"} điểm</span></div><p class="review-question">${r.q.prompt}</p><div class="review-answer"><span>Em trả lời: <b>${html(r.value||"(trống)")}</b></span><span>Đáp án: <b>${html(r.q.answers[0])}</b></span></div><p class="explanation"><b>Giải thích:</b> ${r.q.explanation}</p></article>`).join(""); results.hidden=false; form.hidden=true; document.querySelector("#stickyProgress").hidden=true; results.scrollIntoView({behavior:"smooth"}); }
function update() { let total=0; sections.forEach(s => { let c=0; s.questions.forEach(q => { const el=document.querySelector(`[data-id="${q.id}"]`), done=q.type==="choice" ? !!el.dataset.value : !!el.querySelector("input").value.trim(); if(done){total++;c++;} }); const j=document.querySelector(`[data-jump="${s.letter}"]`); j.classList.toggle("has-progress",c>0); j.classList.toggle("is-complete",c===s.points); }); progressText.textContent=`${total} / 50`; progressBar.style.width=`${total*2}%`; }
function save(){const d={};sections.forEach(s=>s.questions.forEach(q=>{const el=document.querySelector(`[data-id="${q.id}"]`);d[q.id]=q.type==="choice"?el.dataset.value||"":el.querySelector("input").value;}));localStorage.setItem(STORAGE_KEY,JSON.stringify(d));}
function restore(){let d={};try{d=JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}");}catch{}sections.forEach(s=>s.questions.forEach(q=>{const v=d[q.id];if(!v)return;const el=document.querySelector(`[data-id="${q.id}"]`);if(q.type==="choice"){el.dataset.value=v;el.querySelectorAll("[data-choice]").forEach(b=>{const on=b.dataset.value===v;b.classList.toggle("is-selected",on);b.setAttribute("aria-pressed",on?"true":"false");});}else el.querySelector("input").value=v;}));}
function html(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));} function esc(v){return html(v);}
