document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const currentPage = location.pathname.split("/").pop();

  // تحديد الرابط النشط
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
