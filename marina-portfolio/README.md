# Marina Atif — Portfolio (React + Vite + Tailwind)

## تشغيل المشروع

```bash
npm install
npm run dev
```

هيفتحلك السيرفر المحلي على `http://localhost:5173`.

## بناء نسخة الإنتاج (production build)

```bash
npm run build
```

الناتج هيتحط في فولدر `dist/` جاهز للرفع.

## هيكل المشروع

```
src/
  components/
    Navbar.jsx   ← الناف بار (شغالة دلوقتي)
    Hero.jsx     ← قسم الهيرو (شغال دلوقتي)
  data/
    site.js      ← لينكات السوشيال ميديا وروابط الناف
  hooks/
    useTypewriter.js
  App.jsx
  main.jsx
```

## الحالة

المشروع مكتمل: Navbar + Hero + Skills + Projects + Contact + Footer.

## تفعيل فورم التواصل (EmailJS)

الفورم بيستخدم [EmailJS](https://www.emailjs.com/) عشان يبعت الرسايل على إيميلك مباشرة من غير باك إند:

1. اعملي حساب مجاني على emailjs.com
2. Add New Service (Gmail مثلاً) → هتاخدي `SERVICE_ID`
3. Create Email Template فيه المتغيرات: `{{first_name}}` `{{last_name}}` `{{email}}` `{{phone}}` `{{message}}` → هتاخدي `TEMPLATE_ID`
4. من Account → General → هتلاقي `Public Key`
5. اعملي نسخة من `.env.example` باسم `.env` وحطي القيم التلاتة فيه
6. `npm install` تاني عشان يجيب مكتبة emailjs، بعدين `npm run dev`

من غير الخطوات دي الفورم هيبين رسالة "حصل خطأ" لأنه مش لاقي بيانات EmailJS.

