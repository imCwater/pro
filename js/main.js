const topText = document.querySelector(".top_left");
const bottomText = document.querySelector(".bottom_right");
const header = document.querySelector(".header");

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
// 메뉴 active 처리
const links = document.querySelectorAll(".menu a");

const cards = document.querySelectorAll(".card");
const project = document.querySelector(".project");

// 햄버거 열기/닫기
hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// 메뉴 클릭 시 자동 닫기
links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
  });
});

// 스크롤 이벤트
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  // 텍스트 애니메이션
  if (scroll > 80) {
    topText.classList.add("move-top");
    bottomText.classList.add("move-bottom");
  } else {
    topText.classList.remove("move-top");
    bottomText.classList.remove("move-bottom");
  }

  // 헤더 등장(첫 섹션 지나면) 메뉴 등장 조건
  if (scroll > window.innerHeight) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }
});

// 파티클 효과

const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

let particles = [];
let mouse = { x: 0, y: 0 };

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  for (let i = 0; i < 4; i++) {
    particles.push({
      x: mouse.x,
      y: mouse.y,
      size: Math.random() * 4 + 1,
      alpha: 1,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    });
  }
});

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 0.02;

    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = "#16d3d3";

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    if (p.alpha <= 0) particles.splice(i, 1);
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();
