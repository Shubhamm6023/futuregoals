/* ============================================================
   FUTURE — hacker-style learning roadmap PWA
   Built for SHUBHAM RAO · every topic in one learning page
   ============================================================ */

const topics = [
  ['C Programming Basics', 'Start here', 'Learn variables, decisions, loops, and the way code thinks.', 'C Programming Tutorial for Beginners', 'freeCodeCamp.org', 'https://www.youtube.com/watch?v=KJgsSFOSQv0', 'C teaches the building blocks of programming. A program is a clear set of instructions.', '#include <stdio.h>\nint main() {\n  printf("Hello, Future!");\n  return 0;\n}'],
  ['Python', 'Core skill', 'Use a friendly language to automate tasks and build useful apps.', 'Python Tutorial for Beginners', 'Programming with Mosh', 'https://www.youtube.com/watch?v=_uQrJ0TkZlc', 'Python reads almost like English. Store information, then use functions to reuse your ideas.', 'name = "Shubham"\ndef greet(person):\n  return f"Hello, {person}!"\nprint(greet(name))'],
  ['SQL', 'Core skill', 'Ask useful questions of data with simple database queries.', 'SQL Tutorial - Full Database Course', 'freeCodeCamp.org', 'https://www.youtube.com/watch?v=HXV3zeQKqGY', 'SQL is how you ask a database for information. You say what you need; the database finds it.', 'SELECT name, email\nFROM students\nWHERE active = true;'],
  ['HTML & CSS', 'Web foundations', 'Build clear web pages, then style interfaces people enjoy.', 'HTML & CSS Full Course for Beginners', 'freeCodeCamp.org', 'https://www.youtube.com/watch?v=G3e-cpL7ofc', 'HTML gives a page structure. CSS gives it its visual style. Together they create web pages.', '<button class="primary">Start learning</button>\n.primary { background: #c4f36b; }'],
  ['JavaScript', 'Web foundations', 'Make web pages react to people with interaction and logic.', 'JavaScript Full Course for Beginners', 'freeCodeCamp.org', 'https://www.youtube.com/watch?v=PkZNo7MFNFg', 'JavaScript listens for an action, does some work, and updates the page.', 'button.addEventListener("click", () => {\n  alert("You did it!");\n});'],
  ['Flask', 'Backend', 'Build lightweight web apps with Python and turn ideas into real websites.', 'Learn Flask for Python - Full Tutorial', 'freeCodeCamp.org', 'https://www.youtube.com/watch?v=Z1RJmh_OqeA', 'Flask is a tiny Python tool that turns your code into a website. You write a function for each page, and Flask sends it to the browser.', 'from flask import Flask\napp = Flask(__name__)\n\n@app.route("/")\ndef home():\n    return "Hello, Future!"\n\nif __name__ == "__main__":\n    app.run(debug=True)'],
  ['Django', 'Backend', 'A full-featured Python framework for building complete, secure web apps.', 'Python Django Web Framework - Full Course for Beginners', 'freeCodeCamp.org', 'https://www.youtube.com/watch?v=F5mRW0jo-U4', 'Django gives you everything a website needs — pages, login, and a database — already wired together, so you focus on your app.', 'pip install django\ndjango-admin startproject mysite .\npython manage.py startapp tasks\npython manage.py runserver'],
  ['Git & GitHub', 'Workflow', 'Save your work safely and share it like a professional.', 'Git and GitHub for Beginners', 'Khan Academy', 'https://www.youtube.com/watch?v=RGOj5yH7evk', 'Git remembers versions of your project. GitHub is the online home where you back it up.', 'git add .\ngit commit -m "Add homepage"\ngit push origin main'],
  ['DSA', 'Interview skill', 'Train your problem-solving muscles for coding interviews.', 'Data Structures and Algorithms', 'freeCodeCamp.org', 'https://www.youtube.com/watch?v=8hly31xKli0', 'Data structures organize information. Algorithms are repeatable steps that solve a problem.', 'const largest = Math.max(...numbers);'],
  ['Projects', 'Portfolio', 'Turn knowledge into proof with a portfolio you can share.', 'How to Build Projects as a Beginner', 'Ali Abdaal', 'https://www.youtube.com/watch?v=0NgG5XQz5GQ', 'A strong beginner project solves one small problem and clearly shows what you learned.', 'Project: Study timer\nGoal: help learners focus'],
  ['AI Integration', 'Future skill', 'Add useful AI features to things you build.', 'Build AI Apps with Python', 'freeCodeCamp.org', 'https://www.youtube.com/watch?v=0lOSvOoF2to', 'AI can help an app understand text or give an answer. Give it clear context and check the output.', 'Prompt: "Explain SQL joins in 3 simple lines."'],
  ['Job Preparation', 'Career', 'Practice the skills and stories that help you get interviews.', 'How to Prepare for Coding Interviews', 'NeetCode', 'https://www.youtube.com/watch?v=KLlKcW1lW5A', 'Job preparation is a weekly rhythm of building, practicing, applying, and improving.', 'Built a task tracker using Flask + SQL.']
];

/* Hindi / Hinglish videos (Code with Harry, Apna College, WsCube Tech) */
const hindiVideos = [
  ['C Language Full Course in Hindi', 'Code with Harry', 'https://www.youtube.com/watch?v=ZSPZob_1TOk'],
  ['Complete Python Course in Hindi', 'Code with Harry', 'https://www.youtube.com/watch?v=ihk_Xglr164'],
  ['MySQL Full Course in Hindi', 'WsCube Tech', 'https://www.youtube.com/watch?v=KKgN_w71x3E'],
  ['HTML Tutorial in Hindi (With Notes)', 'Code with Harry', 'https://www.youtube.com/watch?v=BsDoLVMnmZs'],
  ['JavaScript Tutorial In Hindi', 'Code with Harry', 'https://www.youtube.com/watch?v=hKB-YGF14SY'],
  ['Python Flask Tutorial in Hindi', 'Code with Harry', 'https://www.youtube.com/watch?v=oA8brF3w5XQ'],
  ['Django Tutorial In Hindi', 'Code with Harry', 'https://www.youtube.com/watch?v=JxzZxdht-XY'],
  ['Git & GitHub Tutorial In Hindi', 'Code with Harry', 'https://www.youtube.com/watch?v=gwWKnnCMQ5c'],
  ['Data Structures & Algorithms in Hindi', 'Code with Harry', 'https://www.youtube.com/watch?v=5_5oE5lgrhw'],
  ['How Websites Work + VS Code Setup', 'Code with Harry', 'https://www.youtube.com/watch?v=tVzUXW6siu0'],
  ['Build an AI Voice Assistant with ChatGPT API', 'Code with Harry', 'https://www.youtube.com/watch?v=pXvfcoag-VE'],
  ['Placement & Internship Prep Strategy', 'Apna College', 'https://www.youtube.com/watch?v=i3y8Xl_BFPA']
];

/* 2 real MCQs per topic: {q, opts[4], a (correct index), why} */
const quizzes = [
  [
    { q: 'What does printf("Hello") do?', opts: ['It prints text to the screen', 'It reads input from the user', 'It creates a new file', 'It starts an infinite loop'], a: 0, why: 'printf means "print formatted" — it shows text on the screen.' },
    { q: 'Which line usually ends a main() function in C?', opts: ['return 0;', 'print "done";', 'exit main;', 'stop;'], a: 0, why: 'return 0; tells the system the program finished successfully.' }
  ],
  [
    { q: 'In Python, name = "Shubham" creates a...', opts: ['variable that stores text', 'loop', 'function', 'database'], a: 0, why: 'A variable is a labelled box that stores a value — here, the text "Shubham".' },
    { q: 'What does def greet(person): do?', opts: ['defines a reusable function named greet', 'prints "person"', 'deletes a variable', 'starts a loop'], a: 0, why: 'def creates a function you can call many times with different names.' }
  ],
  [
    { q: 'In SELECT name FROM students WHERE active = true — what filters the data?', opts: ['WHERE active = true', 'SELECT name', 'FROM students', 'the semicolon'], a: 0, why: 'WHERE sets the condition — only rows where active is true come back.' },
    { q: 'SELECT * FROM students returns...', opts: ['every column of every student row', 'only the first student', 'only names', 'nothing at all'], a: 0, why: '* means "all columns", so you get every student with all their details.' }
  ],
  [
    { q: '<button>Start</button> is an example of...', opts: ['an HTML element', 'a CSS rule', 'a JavaScript function', 'a database query'], a: 0, why: 'Tags like <button> build the structure of a page — that is HTML.' },
    { q: 'What does background: #c4f36b; do in CSS?', opts: ['sets the background color of an element', 'changes the font size', 'adds a border', 'moves the element'], a: 0, why: 'background sets the color behind an element. #c4f36b is a hex color — the lime used in Future.' }
  ],
  [
    { q: 'What does addEventListener("click", fn) do?', opts: ['waits for a click and then runs fn', 'clicks the button automatically', 'stops all clicks', 'changes the page color'], a: 0, why: 'It listens for the click event and runs your function when it happens.' },
    { q: 'What does alert("Hi") show?', opts: ['a popup message on screen', 'a new web page', 'the console', 'a file download'], a: 0, why: 'alert opens a small popup box with the message inside.' }
  ],
  [
    { q: 'What does @app.route("/") connect?', opts: ['the URL "/" to a Python function', 'Python to the database', 'two functions together', 'a file to a folder'], a: 0, why: 'The decorator tells Flask which function to run when someone visits that URL.' },
    { q: 'app.run(debug=True) does what?', opts: ['starts the dev server so you can open the site', 'installs Flask', 'creates a database', 'compiles C code'], a: 0, why: 'It launches the local server; debug=True shows helpful errors while you build.' }
  ],
  [
    { q: 'python manage.py runserver...', opts: ['starts Django\'s development server', 'deletes the project', 'installs Python', 'uploads to GitHub'], a: 0, why: 'runserver starts a local web server so you can see your site in the browser.' },
    { q: 'django-admin startproject mysite . does what?', opts: ['creates a new Django project in the current folder', 'runs the website', 'creates a database table', 'logs you in'], a: 0, why: 'It generates the project files (settings, urls and more) in the current directory.' }
  ],
  [
    { q: 'git commit -m "Add homepage" saves...', opts: ['a version of your work with a message', 'your password', 'only deleted files', 'the internet connection'], a: 0, why: 'A commit is a saved checkpoint; the -m message explains what changed.' },
    { q: 'git push origin main does what?', opts: ['uploads your commits to GitHub', 'deletes the repo', 'switches the theme', 'starts a server'], a: 0, why: 'push sends your local commits to the online repository so they are backed up.' }
  ],
  [
    { q: 'What is a data structure?', opts: ['a way to organize data so it is easy to use', 'a programming language', 'a web browser', 'a type of error'], a: 0, why: 'Structures like arrays, lists and stacks decide how data is stored and accessed.' },
    { q: 'Math.max(...numbers) returns...', opts: ['the largest number in the array', 'the smallest number', 'the total sum', 'the first number'], a: 0, why: 'Math.max finds the biggest value; the ... spread passes all array items.' }
  ],
  [
    { q: 'What makes a strong beginner project?', opts: ['it solves one small real problem', 'it has the most lines of code', 'it copies a big app exactly', 'it never has bugs'], a: 0, why: 'A focused, finished small project teaches more and is easy to explain.' },
    { q: 'What should you do first when starting a project?', opts: ['plan the smallest version you can finish', 'buy a domain name', 'write 1000 lines first', 'skip the plan and code everything'], a: 0, why: 'Start with the smallest useful version, finish it, then add features one at a time.' }
  ],
  [
    { q: 'A good AI prompt is...', opts: ['clear, specific and gives context', 'one vague word', 'a random question', 'a list of complaints'], a: 0, why: 'Clear prompts — with the goal and format — give much better AI answers.' },
    { q: 'Why should you check AI output before using it?', opts: ['AI can make mistakes or give wrong facts', 'AI always breaks the internet', 'it is too slow otherwise', 'nobody checks it'], a: 0, why: 'AI is helpful but not perfect — always verify important facts and test the code.' }
  ],
  [
    { q: 'What helps most before an interview?', opts: ['practising explaining your project aloud', 'memorizing answers word-for-word', 'ignoring your resume', 'sending blank applications'], a: 0, why: 'Clear, practised stories about your projects make you memorable and confident.' },
    { q: 'What is a good weekly job-prep rhythm?', opts: ['build one thing, solve 3 problems, improve one application', 'study 12 hours once a month', 'wait for recruiters to find you', 'only watch videos, never apply'], a: 0, why: 'Small consistent actions — building, practising, applying — beat rare bursts of effort.' }
  ]
];

/* One hands-on practice task per topic */
const practices = [
  'Write a small C program that prints your name 5 times using a loop.',
  'Make a Python function that greets any name you give it, then call it twice.',
  'Write a SQL query that shows only students older than 18.',
  'Build a mini profile card: one heading, one paragraph, one styled button.',
  'Add a button to a page that shows a message when clicked.',
  'Create a Flask app and add a second page at /about.',
  'Create a new Django app inside your project named "tasks".',
  'Commit a change with a clear message and push it to GitHub.',
  'Find the largest number in an array with Math.max and explain how it works.',
  'Write down the smallest version of your project you could finish this week.',
  'Write one clear prompt that asks AI to explain a concept in 3 lines.',
  'Write a 2-line answer to: "Tell me about your latest project."'
];

const jobVideos = [
  ['Build a developer resume', 'Jeff Su', 'https://www.youtube.com/watch?v=Tt08KmFfIYQ'],
  ['GitHub profile that gets noticed', 'ForrestKnight', 'https://www.youtube.com/watch?v=BWyQbnG5z0E'],
  ['Prepare for coding interviews', 'NeetCode', 'https://www.youtube.com/watch?v=KLlKcW1lW5A'],
  ['LinkedIn profile for students', 'Jeff Su', 'https://www.youtube.com/watch?v=HkqB-w8eVqg'],
  ['10X your placement & internship prep', 'Apna College', 'https://www.youtube.com/watch?v=i3y8Xl_BFPA'],
  ['How this student got a ₹1 Lakh/month internship', 'Apna College', 'https://www.youtube.com/watch?v=FLSpXx4hRWU'],
  ['Off-campus referrals from top companies', 'Apna College', 'https://www.youtube.com/watch?v=rDTt8DcUtOY']
];

let state = { name: 'Student', completed: [], theme: 'dark', wall: 'orbs', sound: true, onboarded: false, streak: 4, quizPass: [], practice: [], ...JSON.parse(localStorage.getItem('futureState') || '{}') };
state.completed = [...new Set(state.completed.filter(i => Number.isInteger(i) && i >= 0 && i < topics.length))];
state.quizPass = Array.isArray(state.quizPass) ? state.quizPass : [];
state.practice = Array.isArray(state.practice) ? state.practice : [];

let view = 'home', topic = 0;
const app = document.getElementById('app');
const save = () => localStorage.setItem('futureState', JSON.stringify(state));
const pct = () => Math.round(state.completed.length / topics.length * 100);
const h = s => String(s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

/* ---------------- sound ---------------- */
function tone(up, freq, gain) {
  if (!state.sound || !window.AudioContext) return;
  try {
    let c = new AudioContext(), o = c.createOscillator(), g = c.createGain();
    o.type = 'square';
    o.frequency.value = freq || (up ? 720 : 440);
    g.gain.setValueAtTime(gain || 0.04, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.12);
    o.connect(g); g.connect(c.destination); o.start(); o.stop(c.currentTime + 0.12);
  } catch (e) { /* audio not available */ }
}
function toast(x, up) {
  let t = document.getElementById('toast');
  t.textContent = x; t.classList.add('show'); tone(up);
  setTimeout(() => t.classList.remove('show'), 2400);
}

/* ---------------- matrix live wallpaper ---------------- */
function matrix() {
  const cv = document.getElementById('matrix');
  if (!cv || !cv.getContext) return;
  const ctx = cv.getContext('2d');
  const glyphs = 'アイウエオカキクケコサシスセソ0123456789<>/\\|+-*=#';
  let cols = [], drops = [];
  function size() {
    cv.width = innerWidth; cv.height = innerHeight;
    cols = Math.floor(cv.width / 16); drops = [];
    for (let i = 0; i < cols; i++) drops.push(Math.floor(Math.random() * -40));
  }
  size();
  addEventListener('resize', size);
  setInterval(() => {
    ctx.fillStyle = 'rgba(7,17,31,.16)';
    ctx.fillRect(0, 0, cv.width, cv.height);
    ctx.font = '15px monospace';
    for (let i = 0; i < cols; i++) {
      const g = glyphs[Math.floor(Math.random() * glyphs.length)];
      ctx.fillStyle = Math.random() < 0.09 ? '#c4f36b' : '#2fdc7a';
      ctx.fillText(g, i * 16, drops[i] * 16);
      if (drops[i] * 16 > cv.height && Math.random() > 0.976) drops[i] = 0;
      drops[i]++;
    }
  }, 50);
}

/* ---------------- hacker boot sequence ---------------- */
function boot(done) {
  const ov = document.getElementById('boot'), log = document.getElementById('bootLog'), bar = document.getElementById('bootBar');
  if (!ov) { done && done(); return; }
  const lines = [
    'FUTURE OS v3.0 — SECURE TERMINAL',
    '> loading roadmap ...................... OK',
    '> loading best videos + hindi videos ... OK',
    '> loading easy notes + examples ....... OK',
    '> loading MCQs + practice ............. OK',
    '> loading AI companion ................ OK',
    '> connecting to SHUBHAM RAO network ... OK',
    '> ACCESS GRANTED. WELCOME, SHUBHAM RAO.'
  ];
  let li = 0, skipped = false;
  const finish = () => {
    if (skipped) return;
    skipped = true;
    let p = 0;
    const iv = setInterval(() => {
      p += Math.random() * 14 + 8;
      bar.style.width = Math.min(100, p) + '%';
      if (p >= 100) {
        clearInterval(iv);
        tone(true, 880, 0.05); setTimeout(() => tone(true, 1320, 0.05), 90);
        ov.classList.add('done');
        setTimeout(() => { ov.style.display = 'none'; done && done(); }, 550);
      }
    }, 60);
  };
  const skipAll = () => {
    if (!skipped) {
      skipped = true;
      ov.classList.add('done');
      setTimeout(() => { ov.style.display = 'none'; done && done(); }, 300);
    }
  };
  ov.onclick = skipAll;
  document.addEventListener('keydown', skipAll, { once: true });
  const typeLine = () => {
    const line = lines[li];
    if (!line) { finish(); return; }
    const p = document.createElement('div');
    log.appendChild(p);
    let c = 0;
    const iv = setInterval(() => {
      p.textContent = line.slice(0, ++c);
      if (c % 4 === 0) tone(true, 300, 0.012);
      if (c >= line.length) { clearInterval(iv); p.classList.add('ok'); li++; setTimeout(typeLine, 110); }
    }, 9);
  };
  typeLine();
}

/* ---------------- navigation / actions ---------------- */
function nav() {
  document.querySelectorAll('[data-view]').forEach(x => x.onclick = () => { view = x.dataset.view; document.querySelector('.sidebar').classList.remove('open'); render(); });
  document.querySelectorAll('[data-topic]').forEach(x => x.onclick = () => { topic = +x.dataset.topic; view = 'learn'; render(); });
  document.querySelectorAll('[data-action]').forEach(x => x.onclick = () => act(x.dataset.action, x));
}
function wrap(title, html) {
  document.getElementById('breadcrumb').textContent = 'Future / ' + title;
  app.innerHTML = '<section class="view">' + html + '</section>';
  nav();
}
function coach() {
  return '<div class="coach-card"><div class="coach-icon">✺</div><div><span>FUTURE AI • YOUR STUDY COMPANION</span><strong>Need a simple explanation?</strong><p>Ask me about any topic, an MCQ, practice, or your job preparation plan.</p><button class="text-button" data-view="ai">Ask Future AI →</button></div></div>';
}
function onePlace() {
  return '<div class="one-place"><span>🎬 Best videos</span><span>🇮🇳 Hindi videos</span><span>📝 Easy notes</span><span>🧩 MCQs</span><span>✏️ Practice</span></div>';
}

function home() {
  let t = topics[topic];
  return '<div class="hero"><div><div class="eyebrow">LEARN CLEARLY. BUILD CONFIDENTLY.</div><h1>Hi, ' + h(state.name) + '. Your future starts with one small step.</h1><p>Every topic now has one focused page: best video, Hindi video, easy notes, example, MCQs, and practice.</p><div class="button-row hero-buttons"><button class="primary-button" data-action="continue">Open Learning Hub →</button><button class="secondary-button" data-view="ai">Ask Future AI</button></div></div><div class="hero-orbit"><i></i><b>SHUBHAM<br>RAO</b></div></div>' + onePlace() +
    '<div class="grid stats-grid"><div class="card"><div class="stat-label">Learning progress</div><div class="stat-value">' + pct() + '<span>%</span></div><div class="progress-track"><div class="progress-fill" style="width:' + pct() + '%"></div></div></div><div class="card"><div class="stat-label">Learning streak</div><div class="stat-value">' + state.streak + '<span> days</span></div><p class="stat-label">Keep your rhythm alive.</p></div><div class="card"><div class="stat-label">Topics completed</div><div class="stat-value">' + state.completed.length + '<span> / ' + topics.length + '</span></div><p class="stat-label">Small wins add up.</p></div></div>' +
    '<div class="next-lesson card"><div><span class="tag">YOUR NEXT LESSON</span><h2>' + t[0] + '</h2><p>' + t[2] + '</p></div><button class="primary-button" data-action="continue">Continue →</button></div>' + coach();
}
function roadmap() {
  return '<div class="page-intro"><div class="eyebrow">YOUR FULL PATH</div><h1>Choose a topic. Learn it all in one place.</h1><p>Every topic opens a dedicated page with video, Hindi video, notes, example, MCQs, and practice.</p></div><div class="topic-grid">' +
    topics.map((t, i) => '<button class="topic-card ' + (state.completed.includes(i) ? 'complete' : '') + '" data-topic="' + i + '"><span class="topic-number">' + (state.completed.includes(i) ? '✓' : String(i + 1).padStart(2, '0')) + '</span><span class="tag">' + t[1] + '</span><h3>' + t[0] + '</h3><p>' + t[2] + '</p><span class="open-topic">Open lesson →</span></button>').join('') +
    '</div>';
}
function quizHTML(i) {
  return quizzes[i].map((q, k) => {
    const passed = state.quizPass.includes(i + '-' + k);
    return '<div class="quiz-item' + (passed ? ' passed' : '') + '"><div class="quiz-head"><span>Q' + (k + 1) + '</span><b>' + h(q.q) + '</b>' + (passed ? '<i>✓ done</i>' : '') + '</div><div class="quiz-options">' +
      q.opts.map((o, j) => '<button class="quiz-opt" data-quiz="' + i + '-' + k + '-' + j + '">' + h(o) + '</button>').join('') +
      '</div><p class="quiz-feedback" data-fb="' + i + '-' + k + '"></p></div>';
  }).join('');
}
function learn() {
  let t = topics[topic], done = state.completed.includes(topic), pracDone = state.practice.includes(topic), hv = hindiVideos[topic];
  return '<div class="lesson-top"><button class="back-link" data-view="roadmap">← All topics</button><div class="eyebrow">LESSON ' + String(topic + 1).padStart(2, '0') + ' · ' + t[1].toUpperCase() + '</div><h1>' + t[0] + '</h1><p>' + t[2] + '</p></div>' + onePlace() +
    '<div class="lesson-layout"><aside class="lesson-steps"><span class="mini-label">IN THIS LESSON</span><a href="#watch">01 Watch</a><a href="#understand">02 Easy notes</a><a href="#example">03 Example</a><a href="#quiz">04 MCQs</a><a href="#practice">05 Practice</a><button class="primary-button" data-action="complete">' + (done ? 'Completed ✓' : 'Mark complete') + '</button></aside>' +
    '<div class="lesson-content">' +
    '<section class="lesson-block" id="watch"><span class="tag">🎬 BEST VIDEO</span><h2>' + t[3] + '</h2><p>' + t[4] + ' · clear explanation for beginners</p><div class="video-preview"><span>▶</span><div><strong>Watch this focused lesson</strong><small>Return here for the simple breakdown.</small></div><button class="primary-button" data-action="video">Play video</button></div>' +
    (hv ? '<div class="video-preview hindi"><span>🇮🇳</span><div><strong>' + hv[0] + '</strong><small>' + hv[1] + ' · Hindi / Hinglish, easy to understand</small></div><button class="primary-button" data-action="hindi-video">Play Hindi</button></div>' : '') +
    '</section>' +
    '<section class="lesson-block" id="understand"><span class="tag">📝 EASY NOTES</span><h2>Understand it in plain words.</h2><p class="big-idea">' + t[6] + '</p><div class="steps"><div><b>01</b><span>Watch the video once without trying to memorize it.</span></div><div><b>02</b><span>Copy the example and change one small thing.</span></div><div><b>03</b><span>Explain the idea in your own words.</span></div></div></section>' +
    '<section class="lesson-block notes-block" id="example"><span class="tag">💻 EXAMPLE</span><h2>Keep this tiny example nearby.</h2><pre>' + h(t[7]) + '</pre><p><strong>Remember:</strong> Understand what each part does, then change it and see what happens.</p></section>' +
    '<section class="lesson-block" id="quiz"><span class="tag">🧩 QUICK CHECK · MCQ</span><h2>Test yourself on ' + t[0] + '.</h2><p>Pick an answer — I will tell you right away if it is correct and why.</p>' + quizHTML(topic) + '</section>' +
    '<section class="lesson-block practice-card" id="practice"><span class="tag">✏️ PRACTICE</span><h2>Now make it yours.</h2><div class="practice-task' + (pracDone ? ' practice-done' : '') + '"><span class="task-num">' + (pracDone ? '✓' : '▶') + '</span><div><p><strong>Task:</strong> ' + h(practices[topic]) + '</p>' + (pracDone ? '<p>Done — great work!</p>' : '<p>Try it in 10 minutes. Finished? Mark it below.</p>') + '</div></div><button class="secondary-button" data-action="practice" style="margin-top:14px">' + (pracDone ? 'Practiced ✓' : 'Mark as practiced') + '</button></section>' +
    '</div></div>';
}
function ai() {
  return '<div class="ai-page"><div class="page-intro"><div class="eyebrow">FUTURE AI</div><h1>Ask anything. Get a simple answer.</h1><p>I know every topic, every MCQ, every practice task, and every page of this app — ask me in English or Hinglish.</p></div><div class="ai-shell"><div class="ai-head"><div class="ai-spark">✺</div><div><strong>Future AI</strong><span>Knows this app + all 12 topics</span></div></div><div class="ai-chat" id="aiChat"><div class="ai-message">Namaste ' + h(state.name) + '! ✺ Ask me things like "Explain Python simply", "Ask me an MCQ", or "How do I use this app?"</div></div><div class="quick-prompts"><button data-prompt="How do I use this app?">How to use the app</button><button data-prompt="Explain the current topic simply">Explain current topic</button><button data-prompt="Ask me an MCQ">Ask me an MCQ</button><button data-prompt="Give me a practice task">Practice task</button><button data-prompt="Make a 7 day study plan">7 day plan</button><button data-prompt="Help me get job ready">Job ready</button></div><form class="ai-form" id="aiForm"><input id="aiInput" placeholder="Ask Future AI anything..." autocomplete="off"><button class="primary-button">Send →</button></form></div></div>';
}
function jobs() {
  return '<div class="page-intro"><div class="eyebrow">FROM LEARNING TO OPPORTUNITY</div><h1>Get job ready, one practical step at a time.</h1><p>Build proof of your skills, tell your story clearly, and practice before interviews.</p></div><div class="job-banner"><div><span class="tag">START HERE</span><h2>Your weekly job-prep routine</h2><p>Build one update · solve 3 problems · improve one application · ask for feedback.</p></div><button class="primary-button" data-view="ai">Ask Future AI for a plan</button></div><h2 class="section-heading">Best job-prep videos — English</h2><div class="job-video-grid">' +
    jobVideos.slice(0, 4).map((v, i) => '<article class="job-video"><div class="job-play">▶</div><div><span class="tag">YOUTUBE</span><h3>' + v[0] + '</h3><p>' + v[1] + ' · beginner-friendly</p><button class="text-button" data-action="job-video" data-index="' + i + '">Watch now ↗</button></div></article>').join('') +
    '</div><h2 class="section-heading">Job-prep videos — Hindi (Apna College)</h2><div class="job-video-grid">' +
    jobVideos.slice(4).map((v, i) => '<article class="job-video"><div class="job-play">▶</div><div><span class="tag">YOUTUBE · HINDI</span><h3>' + v[0] + '</h3><p>' + v[1] + ' · placement guidance in Hindi</p><button class="text-button" data-action="job-video" data-index="' + (i + 4) + '">Watch now ↗</button></div></article>').join('') +
    '</div><h2 class="section-heading">Your application checklist</h2><div class="check-grid"><div class="check-item"><span>✓</span>Resume: clear project outcomes</div><div class="check-item"><span>✓</span>GitHub: 2–3 pinned projects</div><div class="check-item"><span>✓</span>LinkedIn: clear student headline</div><div class="check-item"><span>✓</span>Interview: explain your project story</div></div>';
}
function projects() {
  return '<div class="page-intro"><div class="eyebrow">BUILD YOUR PROOF</div><h1>Projects that tell your story.</h1><p>Start small. Finish it. Explain what you learned.</p></div><div class="project-grid"><article class="project-card card"><span class="tag">PROJECT 01</span><h3>Personal portfolio</h3><p>Show who you are and the work you are proud of.</p><div class="project-tech">HTML · CSS · GitHub</div><button class="secondary-button" data-action="project">View first step →</button></article><article class="project-card card"><span class="tag">PROJECT 02</span><h3>Task tracker</h3><p>Build a small tool that helps a person get organized.</p><div class="project-tech">Python · Flask · SQL</div><button class="secondary-button" data-action="project">View first step →</button></article><article class="project-card card"><span class="tag">PROJECT 03</span><h3>AI study buddy</h3><p>Make a helpful study helper with a focused purpose.</p><div class="project-tech">Python · API · AI</div><button class="secondary-button" data-action="project">View first step →</button></article></div>' + coach();
}
function profile() {
  return '<div class="page-intro"><div class="eyebrow">YOUR SPACE</div><h1>' + h(state.name) + '’s learning journey.</h1><p>Keep showing up. Every finished topic is progress.</p></div><div class="grid profile-grid"><div class="card"><h3>Roadmap progress</h3><div class="stat-value">' + pct() + '<span>% complete</span></div><div class="progress-track"><div class="progress-fill" style="width:' + pct() + '%"></div></div><p class="stat-label" style="margin-top:14px">MCQs passed: ' + state.quizPass.length + ' · Practices done: ' + state.practice.length + ' / ' + topics.length + '</p></div><div class="card"><h3>Experience settings</h3><p class="setting-row">App sounds <button class="secondary-button" data-action="sound">' + (state.sound ? 'On' : 'Off') + '</button></p><p class="setting-row">Theme <button class="secondary-button" data-action="theme">' + (state.theme === 'dark' ? 'Dark' : 'Light') + '</button></p><p class="setting-row">Live wallpaper <button class="secondary-button" data-action="wall">' + (state.wall === 'matrix' ? 'Matrix rain' : state.wall === 'off' ? 'Off' : 'Neon orbs') + '</button></p><button class="text-button" data-action="reset">Reset demo data</button></div></div>';
}

/* ---------------- Future AI brain ---------------- */
let lastQuiz = null;
function findTopic(x) {
  const map = [
    [/\bc\b|\bc programming/, 0],
    [/(^|[^a-z])python/, 1],
    [/\bsql\b|database|mysql/, 2],
    [/\bhtml\b/, 3],
    [/\bcss\b|styling|javascript|\bjs\b/, 4],
    [/flask/, 5],
    [/django/, 6],
    [/\bgit\b|github/, 7],
    [/\bdsa\b|data structure|algorithm/, 8],
    [/(^|[^a-z])projects?/, 9],
    [/\bai\b|artificial|chatgpt|machine learning/, 10]
  ];
  /* specific topics first; job/career keywords only when no topic matches */
  for (const [re, i] of map) if (re.test(x)) return i;
  return /(^|[^a-z])job|interview|resume|internship|placement|career/.test(x) ? 11 : null;
}
function reply(raw) {
  const x = raw.toLowerCase().trim();
  const t = topics[topic];
  const ti = findTopic(x);

  /* single-letter MCQ answer */
  if (lastQuiz && /^[abcd]$/.test(x)) {
    const q = lastQuiz;
    const correct = q.opts[q.a];
    lastQuiz = null;
    if (x === 'abcd'[q.a]) return '✅ Correct! ' + correct + ' — ' + q.why;
    return 'Almost! The correct answer is "' + correct + '". ' + q.why;
  }

  if (/^(hi+|hii+|hello|hey|yo|namaste|salam|hola)(\s|!|\.|\?|$)/.test(x)) {
    return 'Namaste ' + state.name + '! ✺ I am Future AI, your study companion. Ask me about any topic, MCQs, practice, or how this app works.';
  }
  if (/how (do i |to )?use|how this app|what can you do|^help$/.test(x)) {
    return 'Here is how FUTURE works, step by step:\n\n1. ROADMAP — your full 12-topic path.\n2. LEARNING HUB — one page per topic with BEST VIDEO + HINDI VIDEO + EASY NOTES + EXAMPLE + MCQs + PRACTICE.\n3. Ask Future AI — me! I answer about every topic and this app.\n4. PROJECTS — 3 guided projects to build proof.\n5. JOB PREP — best YouTube videos (English + Hindi) and a weekly routine.\n\nTip: use the ☾ button for theme, ♫ for sound, and Profile to change the live wallpaper. Try: "Explain Python simply" or "Ask me an MCQ".';
  }
  if (ti != null) {
    if (ti === 11) {
      return 'Your job-prep plan:\n\n1. Finish 2 small projects and pin them on GitHub.\n2. Put technology + results on your resume.\n3. Practise explaining each project aloud (2 minutes).\n4. Apply consistently — 5 quality applications a week.\n5. Watch the JOB PREP videos (English + Hindi from Apna College).\n\nTry me: "Ask me an MCQ" to test your interview readiness.';
    }
    const z = topics[ti], hv = hindiVideos[ti];
    return z[0] + ', simply: ' + z[6] +
      '\n\n📺 Best video: "' + z[3] + '" — ' + z[4] +
      (hv ? '\n🇮🇳 Hindi video: "' + hv[0] + '" — ' + hv[1] : '') +
      '\n✏️ Practice: ' + practices[ti] +
      '\n\nOpen the LEARNING HUB to watch, take the MCQs, and practise.';
  }
  if (/mcq|quiz|question|test me/.test(x)) {
    const q = quizzes[topic][0];
    lastQuiz = q;
    return 'Sure! Here is an MCQ on ' + t[0] + ':\n\nQ. ' + q.q +
      '\nA) ' + q.opts[0] + '\nB) ' + q.opts[1] + '\nC) ' + q.opts[2] + '\nD) ' + q.opts[3] +
      '\n\nReply A, B, C or D — I will check your answer and explain it.';
  }
  if (/practice|task|exercise|practise/.test(x)) {
    return 'Here is your practice task for ' + t[0] + ':\n\n✏️ ' + practices[topic] +
      '\n\nFinish it, then mark it done in the lesson page (05 Practice). Small tasks build real skill.';
  }
  if (/hindi|hinglish|urdu/.test(x)) {
    const hv = hindiVideos[topic];
    return hv ? 'Yes! Every topic has a Hindi / Hinglish video.\n\n🇮🇳 ' + hv[0] + ' by ' + hv[1] + '.\n\nOpen the LEARNING HUB and press "Play Hindi" to watch it inside the app.' : 'Open any lesson — each one has a Hindi video from Code with Harry or Apna College.';
  }
  if (/project/.test(x)) {
    return 'Best project advice: solve one small problem. Start with the smallest version, finish it, then add features one at a time. Future has 3 guided projects: a portfolio, a task tracker (Python + Flask + SQL), and an AI study buddy. Open PROJECTS to begin.';
  }
  if (/7 day|7-day|plan|schedule|routine/.test(x)) {
    return 'Here is a 7-day plan for ' + t[0] + ':\n\nDay 1–2: Watch the best video + Hindi video once.\nDay 3–4: Copy the example and change one small thing.\nDay 5: Write what you learned in your own words.\nDay 6: Do the MCQs and practice task.\nDay 7: Build a mini project with it.\n\nConsistent small steps beat long cramming sessions.';
  }
  if (/sound|music|beep/.test(x)) {
    return 'App sounds are ' + (state.sound ? 'ON' : 'OFF') + '. Toggle them with the ♫ button in the top bar or in Profile → App sounds. Sounds play on clicks, quiz answers, and the boot screen.';
  }
  if (/theme|wallpaper|background|matrix|light|dark/.test(x)) {
    return 'You can change the look anytime:\n\n☾ Top-bar button: Dark / Light theme.\n👤 Profile → Live wallpaper: Neon orbs, Matrix rain (hacker style), or Off.\n\nThe Matrix rain wallpaper runs behind the whole app — perfect hacker vibes.';
  }
  if (/name|shubham|rao/.test(x)) {
    return 'This app is built for SHUBHAM RAO — check the hero on the Home page and the boot screen. Your name in the app is "' + state.name + '". You can change it in the welcome screen (reset data in Profile).';
  }
  if (/streak|progress|complete|percent|score/.test(x)) {
    return 'Your progress right now:\n\n🎯 ' + pct() + '% of topics completed (' + state.completed.length + '/' + topics.length + ')\n🔥 Streak: ' + state.streak + ' days\n🧩 MCQs passed: ' + state.quizPass.length + '\n✏️ Practices done: ' + state.practice.length + '\n\nKeep showing up — small wins add up fast.';
  }
  return t[0] + ', simply: ' + t[6] + '\n\nStart by watching the video, then try the example. Want me to ask you an MCQ or give you a practice task?';
}
function submit(q) {
  if (!q.trim()) return;
  const c = document.getElementById('aiChat');
  c.insertAdjacentHTML('beforeend', '<div class="user-message">' + h(q) + '</div>');
  const wait = document.createElement('div');
  wait.className = 'ai-message'; wait.textContent = '▋';
  c.appendChild(wait); c.scrollTop = c.scrollHeight;
  document.getElementById('aiInput').value = '';
  setTimeout(() => {
    wait.innerHTML = h(reply(q)).replace(/\n/g, '<br>');
    c.scrollTop = c.scrollHeight;
    tone(true);
  }, 450);
}

/* ---------------- video modal ---------------- */
function video(i, kind) {
  let title, meta, url;
  if (kind === 'job') {
    const v = jobVideos[i];
    title = v[0]; meta = v[1] + ' · Best for job prep'; url = v[2];
  } else if (kind === 'hi') {
    const v = hindiVideos[topic];
    title = v[0]; meta = v[1] + ' · Hindi / Hinglish'; url = v[2];
  } else {
    const t = topics[topic];
    title = t[3]; meta = t[4] + ' · Best for beginners'; url = t[5];
  }
  const id = new URL(url).searchParams.get('v');
  document.getElementById('videoModalTitle').textContent = title;
  document.getElementById('videoModalMeta').textContent = meta;
  document.getElementById('videoFrame').src = 'https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0';
  document.getElementById('videoDirectLink').href = url;
  document.getElementById('videoModal').classList.remove('hidden');
  tone();
}

/* ---------------- actions ---------------- */
function quizPick(btn) {
  const parts = btn.dataset.quiz.split('-').map(Number);
  const ti = parts[0], qi = parts[1], oi = parts[2];
  const q = quizzes[ti][qi];
  const item = btn.closest('.quiz-item');
  const fb = item.querySelector('.quiz-feedback');
  item.querySelectorAll('.quiz-opt').forEach(b => {
    b.disabled = true;
    if (+b.dataset.quiz.split('-')[2] === q.a) b.classList.add('right');
    else if (b !== btn) b.classList.add('dim');
  });
  if (oi === q.a) {
    if (!state.quizPass.includes(ti + '-' + qi)) { state.quizPass.push(ti + '-' + qi); save(); }
    fb.textContent = '✅ Correct! ' + q.why;
    toast('Correct! ' + q.why.split('.')[0] + '.', true);
  } else {
    btn.classList.add('wrong');
    fb.textContent = '❌ Not quite. Correct answer: ' + q.opts[q.a] + '. ' + q.why;
    toast('Not quite — re-read the notes above.', false);
  }
}
function act(a, b) {
  if (a === 'continue') { view = 'learn'; render(); }
  else if (a === 'video') video();
  else if (a === 'hindi-video') video(0, 'hi');
  else if (a === 'job-video') video(+b.dataset.index, 'job');
  else if (a === 'complete') { if (!state.completed.includes(topic)) { state.completed.push(topic); save(); } toast('Lesson completed. Great work!', true); render(); }
  else if (a === 'practice') { if (!state.practice.includes(topic)) { state.practice.push(topic); save(); toast('Practice done. You are building skill!', true); } render(); }
  else if (a === 'sound') { state.sound = !state.sound; save(); render(); }
  else if (a === 'theme') { state.theme = state.theme === 'dark' ? 'light' : 'dark'; save(); render(); }
  else if (a === 'wall') { state.wall = state.wall === 'orbs' ? 'matrix' : state.wall === 'matrix' ? 'off' : 'orbs'; save(); toast(state.wall === 'matrix' ? 'Live wallpaper: Matrix rain' : state.wall === 'off' ? 'Live wallpaper: off' : 'Live wallpaper: Neon orbs', true); render(); }
  else if (a === 'project') toast('Start with one simple screen, then add one useful action.');
  else if (a === 'reset') { localStorage.removeItem('futureState'); location.reload(); }
}

/* ---------------- render ---------------- */
function render() {
  document.body.classList.toggle('light', state.theme === 'light');
  document.body.classList.toggle('wall-matrix', state.wall === 'matrix');
  document.body.classList.toggle('wall-off', state.wall === 'off');
  const mcv = document.getElementById('matrix');
  if (mcv) mcv.style.display = state.wall === 'matrix' ? 'block' : 'none';
  document.getElementById('topUser').textContent = state.name;
  document.getElementById('soundToggle').textContent = state.sound ? '♫' : '♩';
  document.querySelectorAll('.nav-list .nav-item').forEach(n => n.classList.toggle('active', n.dataset.view === view));
  const all = { home: ['Dashboard', home], roadmap: ['Roadmap', roadmap], learn: ['Learning Hub', learn], ai: ['Ask Future AI', ai], projects: ['Projects', projects], jobs: ['Job Preparation', jobs], profile: ['Profile', profile] };
  wrap(all[view][0], all[view][1]());
  if (view === 'ai') {
    document.querySelectorAll('[data-prompt]').forEach(x => x.onclick = () => submit(x.dataset.prompt));
    document.getElementById('aiForm').onsubmit = e => { e.preventDefault(); submit(document.getElementById('aiInput').value); };
  }
  if (view === 'learn') {
    document.querySelectorAll('[data-quiz]').forEach(x => x.onclick = () => quizPick(x));
  }
}

/* ---------------- global bindings ---------------- */
document.getElementById('themeToggle').onclick = () => { state.theme = state.theme === 'dark' ? 'light' : 'dark'; save(); render(); };
document.getElementById('soundToggle').onclick = () => { state.sound = !state.sound; save(); render(); };
document.getElementById('mobileMenu').onclick = () => document.querySelector('.sidebar').classList.toggle('open');
const closeVideo = () => { document.getElementById('videoFrame').src = ''; document.getElementById('videoModal').classList.add('hidden'); };
document.getElementById('closeVideo').onclick = closeVideo;
document.getElementById('videoModal').onclick = e => { if (e.target.id === 'videoModal') closeVideo(); };
document.getElementById('closeOnboarding').onclick = () => document.getElementById('onboardingModal').classList.add('hidden');
document.getElementById('onboardingForm').onsubmit = e => {
  e.preventDefault();
  state.name = new FormData(e.target).get('name');
  state.onboarded = true; save();
  document.getElementById('onboardingModal').classList.add('hidden');
  render();
};
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeVideo(); });

/* ---------------- start ---------------- */
matrix();
boot(() => { if (!state.onboarded) setTimeout(() => document.getElementById('onboardingModal').classList.remove('hidden'), 400); });
render();