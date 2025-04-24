"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ThumbsUp } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import WhatsAppButton from "@/components/whatsapp-button"
import BlogCard from "@/components/blog-card"
import { useParams } from "next/navigation";
import CodeBlock from "@/components/code-block"
// Sample blog posts data
const blogPosts = [
  {
    id: "post1",
    title: "كيفية بناء واجهة مستخدم جذابة باستخدام React",
    excerpt:
      "في هذا المقال، سنتعرف على كيفية بناء واجهة مستخدم جذابة وسهلة الاستخدام باستخدام مكتبة React وبعض المكتبات المساعدة مثل Tailwind CSS.",
    content: [
      "في عالم تطوير الويب الحديث، أصبحت مكتبة React واحدة من أكثر الأدوات شيوعًا لبناء واجهات المستخدم التفاعلية والجذابة. في هذا المقال، سنتعرف على كيفية بناء واجهة مستخدم جذابة وسهلة الاستخدام باستخدام React وبعض المكتبات المساعدة مثل Tailwind CSS.",
      "## لماذا React؟",
      "React هي مكتبة JavaScript مفتوحة المصدر طورتها شركة Facebook، وتستخدم لبناء واجهات المستخدم التفاعلية. تتميز React بالعديد من المزايا التي تجعلها خيارًا مثاليًا لتطوير واجهات المستخدم الحديثة:",
      "- نموذج البرمجة التصريحي: يتيح لك React وصف كيف يجب أن تبدو واجهة المستخدم في كل حالة، وستتولى React تحديث وعرض المكونات المناسبة عند تغير البيانات.",
      "- المكونات القابلة لإعادة الاستخدام: يمكنك بناء مكونات مستقلة يمكن إعادة استخدامها في أجزاء مختلفة من التطبيق.",
      "- الأداء العالي: بفضل آلية DOM الافتراضي (Virtual DOM)، تقوم React بتحسين عمليات تحديث DOM الحقيقي، مما يؤدي إلى أداء أفضل.",
      "## إعداد المشروع",
      "لنبدأ بإعداد مشروع React جديد باستخدام Create React App:",
      "```bash\nnpx create-react-app my-ui-project\ncd my-ui-project\nnpm start\n```",
      "بعد ذلك، سنقوم بإضافة Tailwind CSS لتسهيل تنسيق واجهة المستخدم:",
      "```bash\nnpm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p\n```",
      "## تصميم المكونات",
      "عند تصميم واجهة المستخدم، من المهم التفكير في تقسيم الواجهة إلى مكونات قابلة لإعادة الاستخدام. على سبيل المثال، يمكننا إنشاء المكونات التالية:",
      "- Header: لعرض شعار الموقع وقائمة التنقل",
      "- Button: زر قابل للتخصيص يمكن استخدامه في أماكن مختلفة",
      "- Card: لعرض المعلومات بطريقة أنيقة",
      "- Footer: لعرض معلومات التذييل وروابط مهمة",
      "## استخدام Hooks",
      "تعتبر Hooks من أهم ميزات React الحديثة التي تتيح لك استخدام حالة المكون (state) وميزات React الأخرى دون الحاجة إلى كتابة classes. من أهم Hooks التي ستستخدمها:",
      "- useState: لإدارة حالة المكون",
      "- useEffect: لتنفيذ التأثيرات الجانبية مثل جلب البيانات",
      "- useContext: للوصول إلى السياق (context) من أي مكان في شجرة المكونات",
      "## تنسيق الواجهة باستخدام Tailwind CSS",
      "Tailwind CSS هو إطار عمل CSS يتيح لك بناء تصاميم مخصصة بسرعة من خلال استخدام فئات مساعدة. على سبيل المثال، يمكننا إنشاء زر جذاب باستخدام Tailwind كما يلي:",
      "```jsx\nfunction Button({ children, primary }) {\n  return (\n    <button\n      className={`px-4 py-2 rounded-md font-medium transition-colors ${primary\n        ? 'bg-blue-500 text-white hover:bg-blue-600'\n        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'\n      }`}\n    >\n      {children}\n    </button>\n  );\n}\n```",
      "## إضافة الحركة والتفاعل",
      "لإضافة حركة وتفاعل إلى واجهة المستخدم، يمكننا استخدام مكتبات مثل Framer Motion التي توفر واجهة برمجة بسيطة لإضافة الرسوم المتحركة إلى مكونات React:",
      "```bash\nnpm install framer-motion\n```",
      "ثم يمكننا استخدامها في مكوناتنا:",
      "```jsx\nimport { motion } from 'framer-motion';\n\nfunction AnimatedCard({ children }) {\n  return (\n    <motion.div\n      initial={{ opacity: 0, y: 20 }}\n      animate={{ opacity: 1, y: 0 }}\n      transition={{ duration: 0.5 }}\n      className=\"p-6 bg-white rounded-lg shadow-md\"\n    >\n      {children}\n    </motion.div>\n  );\n}\n```",
      "## الخلاصة",
      "بناء واجهة مستخدم جذابة باستخدام React ليس بالأمر الصعب إذا اتبعت الممارسات الجيدة واستخدمت الأدوات المناسبة. من خلال الجمع بين قوة React ومرونة Tailwind CSS وإضافة بعض الحركة باستخدام Framer Motion، يمكنك إنشاء واجهات مستخدم جميلة وتفاعلية تجذب المستخدمين وتحسن تجربتهم.",
      "تذكر دائمًا أن التصميم الجيد يبدأ بفهم احتياجات المستخدمين وتوفير تجربة سهلة وممتعة لهم. استمر في التجربة والتعلم، وستتمكن من إنشاء واجهات مستخدم مذهلة باستخدام React.",
    ],
    image: "/imags/blog/1.webp",
    date: "10 يناير 2023",
    readTime: "5 دقائق",
    category: "React",
    author: {
      name: "يعقوب الحيدري",
      avatar: "/imags/1.png",
      title: "مطور واجهة أمامية",
    },
    tags: ["React", "Tailwind CSS", "UI/UX", "JavaScript"],
  },
  {
    id: "post2",
    title: "مقدمة في Next.js: إطار العمل المثالي لتطبيقات React",
    excerpt:
      "Next.js هو إطار عمل مبني على React يوفر ميزات مثل توجيه الصفحات والتحميل المسبق والتوليد الثابت. في هذا المقال، سنتعرف على أساسيات Next.js وكيفية البدء في استخدامه.",
    content: [
      "Next.js هو إطار عمل مبني على React يوفر ميزات مثل توجيه الصفحات والتحميل المسبق والتوليد الثابت. في هذا المقال، سنتعرف على أساسيات Next.js وكيفية البدء في استخدامه.",
      "## ما هو Next.js؟",
      "Next.js هو إطار عمل React مفتوح المصدر يتيح لك بناء تطبيقات ويب سريعة وقابلة للتوسع. تم تطويره بواسطة شركة Vercel، ويوفر العديد من الميزات التي تجعل تطوير تطبيقات React أسهل وأكثر كفاءة.",
      "## مميزات Next.js",
      "- توجيه الصفحات المستند إلى الملفات: يستخدم Next.js نظام توجيه بسيط يعتمد على هيكل الملفات في مجلد `pages`.",
      "- عرض جانب الخادم (SSR): يمكن لـ Next.js عرض صفحات React على الخادم، مما يحسن الأداء وتحسين محركات البحث (SEO).",
      "- التوليد الثابت (Static Generation): يمكن توليد صفحات HTML ثابتة في وقت البناء لتحسين الأداء.",
      "- جلب البيانات: يوفر Next.js طرقًا مختلفة لجلب البيانات مثل `getStaticProps` و `getServerSideProps`.",
      "- تحسين الصور: يأتي مع مكون `Image` مدمج لتحسين أداء الصور.",
      "- دعم API Routes: يمكنك إنشاء نقاط نهاية API داخل مشروع Next.js نفسه.",
      "## إعداد مشروع Next.js",
      "لإنشاء مشروع Next.js جديد، يمكنك استخدام الأمر التالي:",
      "```bash\nnpx create-next-app my-next-app\ncd my-next-app\nnpm run dev\n```",
      "هذا سينشئ مشروع Next.js جديد ويبدأ خادم التطوير المحلي على المنفذ 3000.",
      "## هيكل المشروع",
      "بعد إنشاء المشروع، ستلاحظ الهيكل التالي:",
      "- pages/: يحتوي على صفحات التطبيق. كل ملف في هذا المجلد يمثل مسارًا في التطبيق.",
      "- public/: لتخزين الملفات الثابتة مثل الصور والأيقونات.",
      "- styles/: لتخزين ملفات CSS.",
      "- next.config.js: ملف تكوين Next.js.",
      "- package.json: يحتوي على التبعيات وسكريبتات النظام.",
      "## إنشاء الصفحات",
      "في Next.js، يتم إنشاء الصفحات كمكونات React في مجلد `pages`. على سبيل المثال، لإنشاء صفحة رئيسية، يمكنك إنشاء ملف `pages/index.js`:",
      "```jsx\nexport default function Home() {\n  return (\n    <div>\n      <h1>مرحبًا بك في Next.js!</h1>\n      <p>هذه هي الصفحة الرئيسية للتطبيق.</p>\n    </div>\n  );\n}\n```",
      "## التنقل بين الصفحات",
      "للتنقل بين الصفحات، يوفر Next.js مكون `Link` الذي يتيح التنقل بين الصفحات دون إعادة تحميل الصفحة بالكامل:",
      '```jsx\nimport Link from \'next/link\';\n\nexport default function Navbar() {\n  return (\n    <nav>\n      <Link href="/">الرئيسية</Link>\n      <Link href="/about">من نحن</Link>\n      <Link href="/contact">اتصل بنا</Link>\n    </nav>\n  );\n}\n```',
      "## جلب البيانات",
      "Next.js يوفر عدة طرق لجلب البيانات:",
      "### getStaticProps",
      "تستخدم لجلب البيانات في وقت البناء:",
      "```{jsx\nexport async function getStaticProps() {\n  const res = await fetch('https://api.example.com/data');\n  const data = await res.json();\n\n  return {\n    props: { data },\n  };\n}\n\nexport default function Page({ data }) {\n  return (\n    <div>\n      <h1>البيانات</h1>\n      <pre>{JSON.stringify(data, null, 2)}</pre>\n    </div>\n  );\n}\n}```",
      "### getServerSideProps",
      "تستخدم لجلب البيانات في كل طلب:",
      "```jsx\nexport async function getServerSideProps() {\n  const res = await fetch('https://api.example.com/data');\n  const data = await res.json();\n\n  return {\n    props: { data },\n  };\n}\n```",
      "## API Routes",
      "يمكنك إنشاء نقاط نهاية API داخل مشروع Next.js عن طريق إنشاء ملفات في مجلد `pages/api`:",
      "```jsx\n// pages/api/hello.js\nexport default function handler(req, res) {\n  res.status(200).json({ message: 'مرحبًا بالعالم!' });\n}\n```",
      "## الخلاصة",
      "Next.js هو إطار عمل قوي لبناء تطبيقات React حديثة وسريعة. يوفر العديد من الميزات التي تجعل تطوير التطبيقات أسهل وأكثر كفاءة، مثل توجيه الصفحات المستند إلى الملفات، وعرض جانب الخادم، والتوليد الثابت، وجلب البيانات، وتحسين الصور، ودعم API Routes.",
      "إذا كنت تبحث عن إطار عمل لبناء تطبيقات React قابلة للتوسع وسريعة، فإن Next.js هو خيار ممتاز يستحق التجربة.",
    ],
    image: "/imags/blog/2.jpg",
    date: "15 فبراير 2023",
    readTime: "7 دقائق",
    category: "Next.js",
    author: {
      name: "يعقوب الحيدري",
      avatar: "/imags/1.png",
      title: "مطور واجهة أمامية",
    },
    tags: ["Next.js", "React", "JavaScript", "Web Development"],
  },
  {
    id: "post3",
    title: "استخدام TypeScript مع React: دليل شامل",
    excerpt:
      "TypeScript يضيف أنواع ثابتة إلى JavaScript، مما يساعد في اكتشاف الأخطاء أثناء التطوير. في هذا المقال، سنتعلم كيفية استخدام TypeScript مع React لبناء تطبيقات أكثر أمانًا.",
    content: [
      "TypeScript يضيف أنواع ثابتة إلى JavaScript، مما يساعد في اكتشاف الأخطاء أثناء التطوير. في هذا المقال، سنتعلم كيفية استخدام TypeScript مع React لبناء تطبيقات أكثر أمانًا.",
      "## مقدمة",
      "TypeScript هو لغة برمجة مفتوحة المصدر طورتها Microsoft، وهي عبارة عن امتداد لـ JavaScript يضيف أنواع ثابتة وميزات أخرى لتحسين تجربة التطوير وجودة الكود. عند استخدام TypeScript مع React، يمكنك الاستفادة من التحقق من الأنواع لتجنب الأخطاء الشائعة وتحسين قابلية الصيانة.",
      "## لماذا نستخدم TypeScript مع React؟",
      "- اكتشاف الأخطاء مبكرًا: يساعد TypeScript في اكتشاف الأخطاء أثناء التطوير بدلاً من وقت التشغيل.",
      "- تحسين تجربة التطوير: توفير اقتراحات واكتمال تلقائي أفضل في محررات الكود.",
      "- توثيق أفضل: تعمل الأنواع كشكل من أشكال التوثيق، مما يسهل فهم الكود.",
      "- تحسين قابلية الصيانة: يجعل الكود أكثر قابلية للصيانة، خاصة في المشاريع الكبيرة.",
      "## إعداد مشروع React مع TypeScript",
      "لإنشاء مشروع React جديد مع TypeScript، يمكنك استخدام Create React App مع قالب TypeScript:",
      "```bash\nnpx create-react-app my-app --template typescript\ncd my-app\nnpm start\n```",
      "إذا كنت تستخدم Next.js، يمكنك إنشاء مشروع Next.js مع TypeScript كما يلي:",
      "```bash\nnpx create-next-app@latest --ts my-next-app\ncd my-next-app\nnpm run dev\n```",
      "## تعريف الأنواع في React",
      "### تعريف أنواع Props",
      "يمكنك تعريف أنواع Props لمكونات React باستخدام واجهات (interfaces) أو أنواع (types):",
      "```tsx\ninterface ButtonProps {\n  text: string;\n  onClick: () => void;\n  disabled?: boolean;\n  variant?: 'primary' | 'secondary' | 'danger';\n}\n\nfunction Button({ text, onClick, disabled = false, variant = 'primary' }: ButtonProps) {\n  return (\n    <button\n      onClick={onClick}\n      disabled={disabled}\n      className={`btn btn-${variant}`}\n    >\n      {text}\n    </button>\n  );\n}\n```",
      "### تعريف أنواع State",
      "يمكنك تعريف أنواع State عند استخدام useState:",
      "```tsx\nimport { useState } from 'react';\n\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\nfunction UserProfile() {\n  const [user, setUser] = useState<User | null>(null);\n  const [loading, setLoading] = useState<boolean>(true);\n\n  // ...\n\n  return (\n    <div>\n      {loading ? (\n        <p>جاري التحميل...</p>\n      ) : user ? (\n        <div>\n          <h2>{user.name}</h2>\n          <p>{user.email}</p>\n        </div>\n      ) : (\n        <p>لم يتم العثور على المستخدم</p>\n      )}\n    </div>\n  );\n}\n```",
      "### استخدام أنواع React المدمجة",
      "توفر React العديد من الأنواع المدمجة التي يمكنك استخدامها:",
      "```tsx\nimport { ReactNode, ChangeEvent, FormEvent } from 'react';\n\ninterface FormProps {\n  children: ReactNode;\n  onSubmit: (data: FormData) => void;\n}\n\nfunction Form({ children, onSubmit }: FormProps) {\n  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {\n    e.preventDefault();\n    // ...\n  };\n\n  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {\n    // ...\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      {children}\n    </form>\n  );\n}\n```",
      "## استخدام TypeScript مع Hooks",
      "### useState",
      "```tsx\nconst [count, setCount] = useState<number>(0);\nconst [user, setUser] = useState<User | null>(null);\n```",
      "### useRef",
      "```tsx\nconst inputRef = useRef<HTMLInputElement>(null);\n```",
      "### useReducer",
      "```tsx\ntype State = {\n  count: number;\n  loading: boolean;\n  error: string | null;\n};\n\ntype Action =\n  | { type: 'INCREMENT' }\n  | { type: 'DECREMENT' }\n  | { type: 'SET_LOADING'; payload: boolean }\n  | { type: 'SET_ERROR'; payload: string };\n\nfunction reducer(state: State, action: Action): State {\n  switch (action.type) {\n    case 'INCREMENT':\n      return { ...state, count: state.count + 1 };\n    case 'DECREMENT':\n      return { ...state, count: state.count - 1 };\n    case 'SET_LOADING':\n      return { ...state, loading: action.payload };\n    case 'SET_ERROR':\n      return { ...state, error: action.payload };\n    default:\n      return state;\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, {\n    count: 0,\n    loading: false,\n    error: null,\n  });\n\n  // ...\n}\n```",
      "## الخلاصة",
      "استخدام TypeScript مع React يوفر العديد من الفوائد، بما في ذلك اكتشاف الأخطاء مبكرًا، وتحسين تجربة التطوير، وتوثيق أفضل، وتحسين قابلية الصيانة. من خلال تعريف أنواع Props و State واستخدام أنواع React المدمجة، يمكنك بناء تطبيقات React أكثر أمانًا وقابلية للصيانة.",
      "مع قليل من الممارسة، ستصبح كتابة TypeScript مع React أمرًا طبيعيًا وستلاحظ تحسنًا كبيرًا في جودة الكود وتجربة التطوير.",
    ],
    image: "/imags/blog/3.jpg",
    date: "5 مارس 2023",
    readTime: "10 دقائق",
    category: "TypeScript",
    author: {
      name: "يعقوب الحيدري",
      avatar: "/imags/1.png",
      title: "مطور واجهة أمامية",
    },
    tags: ["TypeScript", "React", "JavaScript", "Web Development"],
  },
  {
    "id": "post4",
    "title": "بناء واجهة خلفية باستخدام Node.js و Express",
    "excerpt": "في هذا المقال، سنتعلم كيفية بناء واجهة خلفية قوية باستخدام Node.js و Express، وكيفية إنشاء API RESTful للتواصل مع تطبيق الواجهة الأمامية.",
    "content": [
      "## مقدمة",
      "Express.js هو إطار عمل ويب خفيف وقوي لـ Node.js يسمح بإنشاء تطبيقات ويب وخوادم API بسهولة. في هذا الدليل، سنتعلم كيفية بناء واجهة خلفية باستخدام Express.js وربطها بقاعدة بيانات MongoDB.",
      "## تثبيت المتطلبات",
      "قبل البدء، تأكد من تثبيت Node.js على جهازك، ثم قم بإنشاء مشروع جديد باستخدام الأوامر التالية:",
      "```bash\nmkdir backend-api\ncd backend-api\nnpm init -y\nnpm install express mongoose cors dotenv\n```",
      "## إنشاء خادم Express",
      "بعد التثبيت، أنشئ ملف `server.js` وأضف الكود التالي:",
      "```javascript\nconst express = require('express');\nconst mongoose = require('mongoose');\nconst cors = require('cors');\nrequire('dotenv').config();\n\nconst app = express();\napp.use(express.json());\napp.use(cors());\n\napp.get('/', (req, res) => {\n  res.send('API تعمل بنجاح!');\n});\n\nconst PORT = process.env.PORT || 5000;\napp.listen(PORT, () => console.log(`الخادم يعمل على المنفذ ${PORT}`));\n```",
      "## إنشاء نموذج بيانات باستخدام Mongoose",
      "لإنشاء قاعدة بيانات MongoDB، نستخدم مكتبة Mongoose. أنشئ مجلد `models` وأضف الملف `User.js`:",
      "```javascript\nconst mongoose = require('mongoose');\n\nconst UserSchema = new mongoose.Schema({\n  name: String,\n  email: String,\n  password: String\n});\n\nmodule.exports = mongoose.model('User', UserSchema);\n```",
      "## إنشاء المسارات",
      "لإضافة مستخدم جديد واسترجاع البيانات، أنشئ ملف `routes/userRoutes.js` وأضف الكود التالي:",
      "```javascript\nconst express = require('express');\nconst User = require('../models/User');\nconst router = express.Router();\n\nrouter.post('/register', async (req, res) => {\n  const { name, email, password } = req.body;\n  const user = new User({ name, email, password });\n  await user.save();\n  res.status(201).json(user);\n});\n\nrouter.get('/users', async (req, res) => {\n  const users = await User.find();\n  res.json(users);\n});\n\nmodule.exports = router;\n```",
      "## ربط قاعدة البيانات",
      "أضف الاتصال بقاعدة البيانات داخل `server.js`:",
      "```javascript\nmongoose.connect(process.env.MONGO_URI, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n}).then(() => console.log('متصل بقاعدة البيانات')).catch(err => console.log(err));\n```",
      "## تشغيل الخادم",
      "قم بتشغيل الخادم باستخدام الأمر:",
      "```bash\nnode server.js\n```",
      "## الخاتمة",
      "بهذا نكون قد أنشأنا واجهة خلفية بسيطة باستخدام Node.js و Express و MongoDB. يمكنك توسيع هذا المشروع بإضافة مصادقة JWT وتحديثات أخرى."
    ],
    "image": "/imags/blog/4.jpg",
    "date": "20 أبريل 2023",
    "readTime": "12 دقائق",
    "category": "Node.js",
    "author": {
      "name": "يعقوب الحيدري",
      "avatar": "/imags/1.png",
      "title": "مطور واجهة أمامية"
    },
    "tags": ["Node.js", "Express", "MongoDB", "API"]
  },
  {
    "id": "post5",
    "title": "استخدام MongoDB مع Node.js: دليل شامل",
    "excerpt": "MongoDB هي قاعدة بيانات NoSQL شائعة تستخدم مع تطبيقات Node.js. في هذا المقال، سنتعلم كيفية استخدام MongoDB مع Node.js لتخزين واسترجاع البيانات.",
    "content": [
      "## مقدمة",
      "MongoDB هي قاعدة بيانات NoSQL مرنة تتيح تخزين البيانات بطريقة JSON. في هذا الدليل، سنتعلم كيفية الاتصال بـ MongoDB باستخدام Node.js و Mongoose.",
      "## تثبيت Mongoose",
      "```bash\nnpm install mongoose\n```",
      "## إنشاء اتصال بقاعدة البيانات",
      "```javascript\nconst mongoose = require('mongoose');\n\nmongoose.connect('mongodb://localhost:27017/mydatabase', {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n}).then(() => console.log('متصل بقاعدة البيانات'));\n```",
      "## إنشاء مخطط بيانات",
      "```javascript\nconst userSchema = new mongoose.Schema({\n  name: String,\n  email: String\n});\n\nconst User = mongoose.model('User', userSchema);\n```",
      "## إدراج واسترجاع البيانات",
      "```javascript\nconst addUser = async () => {\n  const user = new User({ name: 'أحمد', email: 'ahmed@example.com' });\n  await user.save();\n  console.log('تمت إضافة المستخدم');\n};\n\nconst getUsers = async () => {\n  const users = await User.find();\n  console.log(users);\n};\n\naddUser();\ngetUsers();\n```",
      "## الخاتمة",
      "MongoDB مع Node.js يوفر طريقة مرنة وقوية لتخزين البيانات. يمكنك تطوير هذا المثال بإضافة مصادقة JWT أو علاقات بين الجداول."
    ],
    "image": "/imags/blog/5.webp",
    "date": "10 مايو 2023",
    "readTime": "10 دقائق",
    "category": "MongoDB",
    "author": {
      "name": "يعقوب الحيدري",
      "avatar": "/imags/1.png",
      "title": "مطور واجهة أمامية"
    },
    "tags": ["MongoDB", "Node.js", "Database"]
  },
  {
    "id": "post6",
    "title": "تحسين أداء تطبيقات React: نصائح وحيل",
    "excerpt": "في هذا المقال، سنتعرف على بعض النصائح والحيل لتحسين أداء تطبيقات React، مثل استخدام React.memo و useMemo و useCallback.",
    "content": [
      "تحسين أداء تطبيقات React أمر بالغ الأهمية لضمان تجربة مستخدم سلسة وسريعة. في هذا المقال، سنتناول بعض الاستراتيجيات العملية لتسريع تطبيقات React وتقليل إعادة التصيير غير الضرورية.",
      "## 1. استخدام `React.memo` لتجنب إعادة التصيير غير الضرورية",
      "`React.memo` هي أداة مفيدة تمنع إعادة التصيير غير الضرورية للمكونات عندما لا تتغير الـ props الخاصة بها.",
      "### قبل التحسين:",
      "```tsx\nfunction UserProfile({ name, age }) {\n  console.log('إعادة التصيير!');\n  return <p>{name} - {age} سنة</p>;\n}\n```",
      "### بعد التحسين باستخدام `React.memo`:",
      "```tsx\nconst UserProfile = React.memo(function UserProfile({ name, age }) {\n  console.log('إعادة التصيير!');\n  return <p>{name} - {age} سنة</p>;\n});\n```",
      "## 2. تحسين أداء الوظائف باستخدام `useCallback`",
      "`useCallback` يمنع إنشاء دوال جديدة عند كل إعادة تصيير، مما يساعد في تحسين الأداء عند تمرير الوظائف إلى المكونات الفرعية.",
      "```tsx\nconst handleClick = useCallback(() => {\n  console.log('تم النقر!');\n}, []);\n```",
      "## 3. استخدام `useMemo` لتجنب الحسابات غير الضرورية",
      "عند تنفيذ عمليات حسابية مكلفة، يمكنك استخدام `useMemo` لتخزين القيم وإعادة استخدامها بدلاً من إعادة حسابها عند كل إعادة تصيير.",
      "```tsx\nconst sortedUsers = useMemo(() => users.sort((a, b) => a.name.localeCompare(b.name)), [users]);\n```",
      "## 4. تقسيم الكود باستخدام `React.lazy`",
      "يمكنك تحميل المكونات عند الحاجة فقط باستخدام `React.lazy` و `Suspense`، مما يقلل حجم حزمة التطبيق ويحسن وقت التحميل الأولي.",
      "```tsx\nconst LazyComponent = React.lazy(() => import('./LazyComponent'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<div>جاري التحميل...</div>}>\n      <LazyComponent />\n    </Suspense>\n  );\n}\n```",
      "## 5. تحسين الأداء باستخدام `virtualization`",
      "في حالة عرض قوائم ضخمة، يمكن استخدام مكتبات مثل `react-window` لتجنب تحميل جميع العناصر دفعة واحدة.",
      "```tsx\nimport { FixedSizeList as List } from 'react-window';\n\nfunction Item({ index, style }) {\n  return <div style={style}>Item {index}</div>;\n}\n\nfunction VirtualizedList() {\n  return (\n    <List height={400} itemCount={1000} itemSize={35} width={300}>\n      {Item}\n    </List>\n  );\n}\n```",
      "## 6. تجنب تحديث الحالة غير الضرورية",
      "لا تقم بتحديث الحالة إلا عند الحاجة لتجنب إعادة التصيير غير الضرورية.",
      "```tsx\nconst [count, setCount] = useState(0);\n\nconst increment = () => {\n  setCount(prev => prev + 1);\n};\n```",
      "## 7. تقليل استخدام `useEffect`",
      "استخدم `useEffect` فقط عند الحاجة لتجنب تنفيذ الكود غير الضروري.",
      "```tsx\nuseEffect(() => {\n  console.log('تم تحديث العنوان!');\n  document.title = `Count: ${count}`;\n}, [count]);\n```",
      "## الخاتمة",
      "تحسين أداء تطبيقات React يعتمد على استخدام الأدوات والتقنيات المناسبة مثل `React.memo` و `useCallback` و `useMemo`، بالإضافة إلى تقنيات مثل `lazy loading` و `virtualization` لتقليل الحمل على المتصفح. من خلال تطبيق هذه النصائح، يمكنك تحسين أداء تطبيقاتك بشكل كبير وضمان تجربة مستخدم أفضل."
    ],
    "image": "/imags/blog/6.jpg",
    "date": "15 يونيو 2023",
    "readTime": "9 دقائق",
    "category": "React",
    "author": {
      "name": "يعقوب الحيدري",
      "avatar": "/imags/1.png",
      "title": "مطور واجهة أمامية"
    },
    "tags": ["React", "JavaScript", "Performance", "Web Development"]
  }
  
]



export default function BlogPostPage() {
    const params = useParams();
    const postId = params?.id; 
  
    // البحث عن المقالة بواسطة الـ ID
    const post = blogPosts.find((p) => p.id === postId);
  
    if (!post) {
      return (
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">المقال غير موجود</h1>
          <p className="text-muted-foreground mb-8">لم يتم العثور على المقال المطلوب</p>
          <Button asChild>
            <Link href="/blog">العودة إلى المدونة</Link>
          </Button>
        </div>
      );
    }

  // Related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .filter((p) => p.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3)

  
  // Function to detect code language from code block
  const detectLanguage = (codeBlock: string): string => {
    if (codeBlock.includes("import React") || codeBlock.includes("function") || codeBlock.includes("return (")) {
      return "jsx"
    }
    if (codeBlock.includes("<") && codeBlock.includes(">") && codeBlock.includes("</")) {
      return "html"
    }
    if (codeBlock.includes("interface") || codeBlock.includes("type ") || codeBlock.includes("<T>")) {
      return "typescript"
    }
    if (codeBlock.includes("npm") || codeBlock.includes("npx") || codeBlock.includes("cd ")) {
      return "bash"
    }
    return "javascript"
  }

  return (
    <div className="py-12">
      <div className="container">
        {/* Back Button */}
        <AnimatedSection className="mb-8" animation="fadeIn">
          <Button variant="ghost" asChild className="hover-lift">
            <Link href="/blog">
              <ArrowLeft className="ml-2 h-4 w-4" />
              العودة إلى المدونة
            </Link>
          </Button>
        </AnimatedSection>

        {/* Post Header */}
        <AnimatedSection className="mb-12" animation="fadeIn">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">{post.author.name}</h3>
                <p className="text-sm text-muted-foreground">{post.author.title}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Post Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Main Content */}
          <AnimatedSection className="lg:col-span-3" animation="fadeInUp" delay={0.1}>
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {post.content.map((paragraph, index) => {
                  if (paragraph.startsWith("##")) {
                    const heading = paragraph.replace("##", "").trim()
                    return (
                      <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                        {heading}
                      </h2>
                    )
                  } else if (paragraph.startsWith("```")) {
                    const parts = paragraph.split("\n")
                    const language = parts[0].replace("```", "").trim()
                    const codeContent = parts.slice(1, -1).join("\n")
                    return (
                      <CodeBlock key={index} code={codeContent} language={language || detectLanguage(codeContent)} />
                    )
                  } else if (paragraph.startsWith("-")) {
                    return (
                      <ul key={index} className="list-disc list-inside my-4">
                        {paragraph.split("\n").map((item, i) => (
                          <li key={i} className="mb-2">
                            {item.replace("-", "").trim()}
                          </li>
                        ))}
                      </ul>
                    )
                  } else {
                    return (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    )
                  }
                })}
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex justify-between items-center mt-8 pt-8 border-t">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="hover-lift">
                    <ThumbsUp className="h-4 w-4 ml-2" />
                    أعجبني
                  </Button>
                  <Button variant="outline" size="sm" className="hover-lift">
                    <Bookmark className="h-4 w-4 ml-2" />
                    حفظ
                  </Button>
                </div>
                <Button variant="outline" size="sm" className="hover-lift">
                  <Share2 className="h-4 w-4 ml-2" />
                  مشاركة
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Sidebar */}
          <AnimatedSection animation="fadeInUp" delay={0.2} className="lg:block hidden">
            <div className="sticky top-24">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">عن الكاتب</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={post.author.avatar || "/placeholder.svg"}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{post.author.name}</h4>
                      <p className="text-sm text-muted-foreground">{post.author.title}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    مطور واجهة أمامية متخصص في بناء تطبيقات الويب الحديثة باستخدام React و Next.js.
                  </p>
                  <WhatsAppButton
                    message={`مرحباً، قرأت مقالك "${post.title}" وأود التواصل معك...`}
                    className="w-full"
                  />
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <AnimatedSection className="mt-16" animation="fadeIn" delay={0.3}>
            <h2 className="text-2xl font-bold mb-8">مقالات ذات صلة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <AnimatedSection key={relatedPost.id} className="hover-scale" delay={0.4}>
                  <BlogCard
                    id={relatedPost.id}
                    title={relatedPost.title}
                    excerpt={relatedPost.excerpt}
                    image={relatedPost.image}
                    date={relatedPost.date}
                    readTime={relatedPost.readTime}
                    category={relatedPost.category}
                  />
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Newsletter */}
        <AnimatedSection className="mt-16 bg-muted/50 rounded-lg p-8 text-center" animation="scaleIn" delay={0.5}>
          <h2 className="text-2xl font-bold mb-4">اشترك في النشرة الإخبارية</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            احصل على أحدث المقالات والتحديثات مباشرة في بريدك الإلكتروني
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="flex-1 min-w-0 px-4 py-2 border border-input rounded-md"
              />
              <Button className="hover-lift">اشتراك</Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              لن نرسل لك أي رسائل غير مرغوب فيها. يمكنك إلغاء الاشتراك في أي وقت.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

