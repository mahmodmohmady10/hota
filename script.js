document.addEventListener("DOMContentLoaded", () => {
  // تحميل شريط التنقل من ملف nav.html
  fetch('nav.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

      // بعد تحميل التنقل، فعّل الرابط النشط
      const links = document.querySelectorAll("nav a");
      const currentPage = location.pathname.split("/").pop();

      links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active");
        }
      });

      // تغيير عنوان الصفحة تلقائياً
      const pageTitles = {
        "index.html": "الرئيسية",
        "about.html": "من نحن",
        "contact.html": "تواصل معنا"
      };

      if (pageTitles[currentPage]) {
        document.title = pageTitles[currentPage];
      }
    });
});
