document.addEventListener("DOMContentLoaded", () => {
  fetch('nav.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

      // تحديد اسم الصفحة الحالية
      const currentPage = location.pathname.split("/").pop() || "index.html";

      // تفعيل العنصر المناسب
      const links = document.querySelectorAll("#navbar a");
      links.forEach(link => {
        const linkHref = link.getAttribute("href");
        if (linkHref === currentPage) {
          link.classList.add("active");
        }
      });

      // تغيير العنوان حسب الصفحة (اختياري)
      const pageTitles = {
        "index.html": "الرئيسية",
        "about.html": "من نحن",
        "contact.html": "تواصل معنا",
        "services.html": "خدماتنا"
      };
      if (pageTitles[currentPage]) {
        document.title = pageTitles[currentPage];
      }
    })
    .catch(err => {
      console.error("فشل تحميل ملف التنقل:", err);
    });
});
