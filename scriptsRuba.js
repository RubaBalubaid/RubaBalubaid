
function toggleMenu() {
  const nav = document.getElementById('nav-links');
  nav.classList.toggle('show');
}


// for skills line
window.onload = function () {
  const track = document.getElementById('skills-track');
  const text = track.innerHTML.trim();

  // نكرر النص حتى يتجاوز العرض المطلوب للحركة
  while (track.offsetWidth < window.innerWidth * 1) {
    track.innerHTML += " - " + text;
  }
};

// project

const projects = [
  {
    title: "DAPP Farm",
    description: "تقرير تحليلي يستخدم الذكاء الاصطناعي ومعالجة اللغات الطبيعية لمعالجة البيانات وPower Bi",
    image: "DAPP Farm.png",
    // link: "https://github.com/RubaBalubaid/DAPP_Farm?tab=readme-ov-file"
    link: "https://drive.google.com/file/d/1mQsqA_CPmNQU4tlwGkjQwxc9MhiytxxN/view?usp=sharing"    
  },
  {
    title: "Zumra",
    description: "نظام يستعمل الذكاء الاصطناعي للكشف المبكر عن خلايا الدم السرطانية",
    image: "zumra logo.png",
    link: "https://drive.google.com/file/d/1o65X2owLok1VxlzoZVQgPEuNW_IGVMTq/view?usp=sharing"
  },
  {
    title: "جمعية سلامات الصحية",
    description: "موقع تعريفي لجميعة سلامات الصحية مع لوحة تحكم تم تصميمها بLaravel",
    image: "slamat logo.png",
    link: "https://slamat.org.sa/"
  },
  {
    title: "نبراس",
    description: "تطبيق تعليمي وترفيهي للأطفال في العديد من المجالات. صمم باستخدام Java, JavaFx.",
    image: "nebras logo.png",
    // link: "https://github.com/RubaBalubaid/nebras?tab=readme-ov-file"
    link: "    https://drive.google.com/file/d/11cF_cu8H47IrGWiDeJIOxIiUKwadVNTs/view?usp=sharing"    
  },
  {
    title: "SoilStore",
    description: "متجر للنباتات صمم باستخدام HTML, CSS, JS and PHP. ومربوط مع قاعدة بيانات MySQL.",
    image: "soil.png",
    link: "https://github.com/RubaBalubaid/soilStore"
  },
];

const container = document.getElementById("projects-container");

projects.forEach(project => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  slide.innerHTML = `
    <div class="project-card">
      <img src="${project.image}" alt="${project.title}" />
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      ${project.link ? `<a href="${project.link}" target="_blank">رابط المشروع</a>` : ""}
    </div>
  `;
  container.appendChild(slide);
});

const swiper = new Swiper('.project-swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }
});

// contact.js
(function () {
  // استبدل المفتاح العام الخاص بك هنا
  emailjs.init("oYiC3fL8hYxz6SzVn");

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // توليد الوقت الحالي بصيغة مناسبة
    const now = new Date();
    const timeString = now.toLocaleString("ar-EG", {
      dateStyle: "full",
      timeStyle: "short"
    });

    // وضع الوقت في الحقل المخفي
    document.getElementById("time").value = timeString;

    const status = document.getElementById("form-status");
    status.textContent = "جاري الإرسال...";

    emailjs.sendForm("service_i41wdxj", "template_2vv46lf", this)
      .then(() => {
        status.textContent = "✅ تم إرسال رسالتك بنجاح!";
        this.reset();
      })
      .catch((error) => {
        console.error("فشل الإرسال:", error);
        status.textContent = "❌ حدث خطأ أثناء الإرسال. حاول لاحقًا.";
      });
  });
})();

//  حركات السيكشنز

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section"); // اختر الأقسام باستخدام class

  const observerOptions = {
      threshold: 0.1, // نسبة ظهور العنصر المطلوبة
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
              // إضافة التأخير التدريجي بناءً على ترتيب الأقسام
              entry.target.style.animationDelay = `${index * 0.3}s`;
              entry.target.classList.add("fade-in");
              observer.unobserve(entry.target); // أوقف المراقبة بعد الظهور
          }
      });
  }, observerOptions);

  sections.forEach((section) => {
      observer.observe(section);
  });
});



