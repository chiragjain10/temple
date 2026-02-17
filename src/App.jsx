import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './App.css'
import Header from './Components/Static/Header'
import Home from './Components/Homepage/Home'
import Footer from './Components/Static/Footer';
import Blog from './Components/Pages/Blog';
import Contact from './Components/Pages/Contact';
import Donate from './Components/Pages/Donate';
import NewsPage from './Components/Homepage/News'; // Reusing existing News component
import NagarGaurav from './Components/Pages/NagarGaurav';
import NagarGauravDetails from './Components/Pages/NagarGauravDetails';
import AboutPage from './Components/Pages/AboutPage';
import PanchKalyan from './Components/Pages/PanchKalyan';
import GalleryPage from './Components/Pages/GalleryPage';

// ScrollToTop component to handle scroll behavior on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// SEO manager to update title, meta description, html lang and canonical
const SEOManager = ({ language }) => {
  const location = useLocation();

  useEffect(() => {
    const routeMeta = {
      '/': {
        en: {
          title: 'Shri Digambar Jain Atishay Kshetra Pateriyaji | Spiritual Heritage',
          description:
            'Official site of Shri Digambar Jain Atishay Kshetra Pateriyaji. Explore history, darshan timings, Nagar Gaurav, Panch Kalyan Mahotsav 2026, gallery and contact.',
        },
        hi: {
          title: 'श्री दिगम्बर जैन अतिशय क्षेत्र पटेरियाजी | आध्यात्मिक विरासत',
          description:
            'श्री दिगम्बर जैन अतिशय क्षेत्र पटेरियाजी की आधिकारिक वेबसाइट। इतिहास, दर्शन समय, नगर गौरव, पंचकल्याणक महोत्सव २०२६, गैलरी और संपर्क जानकारी।',
        },
      },
      '/about': {
        en: {
          title: 'About Pateriyaji | Shri Digambar Jain Atishay Kshetra',
          description:
            'Learn about the divine significance, history and values of Shri Digambar Jain Atishay Kshetra Pateriyaji in Garhakota, Madhya Pradesh.',
        },
        hi: {
          title: 'पटेरियाजी के बारे में | श्री दिगम्बर जैन अतिशय क्षेत्र',
          description:
            'गढ़ाकोटा, मध्य प्रदेश स्थित श्री दिगम्बर जैन अतिशय क्षेत्र पटेरियाजी का दिव्य महत्व, इतिहास और आध्यात्मिक मूल्यों के बारे में जानें।',
        },
      },
      '/news': {
        en: {
          title: 'News & Updates | Pateriyaji Kshetra',
          description:
            'Latest news and announcements from Shri Digambar Jain Atishay Kshetra Pateriyaji, including events and community updates.',
        },
        hi: {
          title: 'समाचार और अपडेट | पटेरियाजी क्षेत्र',
          description:
            'श्री दिगम्बर जैन अतिशय क्षेत्र पटेरियाजी से नवीनतम समाचार और घोषणाएँ, कार्यक्रम और समुदाय अपडेट।',
        },
      },
      '/blogs': {
        en: {
          title: 'Blogs | Pateriyaji Kshetra',
          description:
            'Read spiritual articles and insights related to Shri Digambar Jain Atishay Kshetra Pateriyaji and Jain values.',
        },
        hi: {
          title: 'ब्लॉग | पटेरियाजी क्षेत्र',
          description:
            'श्री दिगम्बर जैन अतिशय क्षेत्र पटेरियाजी और जैन मूल्यों से जुड़े आध्यात्मिक लेख पढ़ें।',
        },
      },
      '/contact': {
        en: {
          title: 'Contact | Shri Digambar Jain Atishay Kshetra Pateriyaji',
          description:
            'Get in touch with Shri Digambar Jain Atishay Kshetra Pateriyaji. Address, phone and email information.',
        },
        hi: {
          title: 'संपर्क | श्री दिगम्बर जैन अतिशय क्षेत्र पटेरियाजी',
          description:
            'श्री दिगम्बर जैन अतिशय क्षेत्र पटेरियाजी से संपर्क करें। पता, फोन और ईमेल जानकारी।',
        },
      },
      '/donate': {
        en: {
          title: 'Donate | Support Pateriyaji Kshetra',
          description:
            'Support the sacred work of Shri Digambar Jain Atishay Kshetra Pateriyaji through your kind donations.',
        },
        hi: {
          title: 'दान करें | पटेरियाजी क्षेत्र का सहयोग',
          description:
            'श्री दिगम्बर जैन अतिशय क्षेत्र पटेरियाजी के पावन कार्यों में अपना सहयोग दें।',
        },
      },
      '/nagar-gaurav': {
        en: {
          title: 'Nagar Gaurav | Pateriyaji Kshetra',
          description:
            'Honoring distinguished individuals associated with Shri Digambar Jain Atishay Kshetra Pateriyaji.',
        },
        hi: {
          title: 'नगर गौरव | पटेरियाजी क्षेत्र',
          description:
            'श्री दिगम्बर जैन अतिशय क्षेत्र पटेरियाजी से जुड़े विशिष्ट व्यक्तित्वों का सम्मान।',
        },
      },
      '/panch-kalyan': {
        en: {
          title: 'Panch Kalyan Mahotsav 2026 | Pateriyaji',
          description:
            'Details and participation information for Panch Kalyan Mahotsav 2026 at Pateriyaji Kshetra.',
        },
        hi: {
          title: 'पंचकल्याणक महोत्सव २०२६ | पटेरियाजी',
          description:
            'पटेरियाजी क्षेत्र में पंचकल्याणक महोत्सव २०२६ का विवरण और सहभागिता जानकारी।',
        },
      },
      '/gallery': {
        en: {
          title: 'Gallery | Pateriyaji Kshetra',
          description:
            'View the divine gallery and glimpses of Shri Digambar Jain Atishay Kshetra Pateriyaji.',
        },
        hi: {
          title: 'गैलरी | पटेरियाजी क्षेत्र',
          description:
            'श्री दिगम्बर जैन अतिशय क्षेत्र पटेरियाजी की दिव्य गैलरी और झलकियाँ देखें।',
        },
      },
    };

    const path = location.pathname;
    const metaForPath =
      routeMeta[path]?.[language] ||
      routeMeta['/'][(language === 'hi' ? 'hi' : 'en')];

    if (metaForPath) {
      document.title = metaForPath.title;
      let metaDesc = document.querySelector("meta[name='description']");
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', metaForPath.description);

      const ensureMeta = (selector, attrs) => {
        let el = document.querySelector(selector);
        if (!el) {
          el = document.createElement('meta');
          Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
          document.head.appendChild(el);
        }
        return el;
      };

      const ogTitle = ensureMeta("meta[property='og:title']", { property: 'og:title' });
      ogTitle.setAttribute('content', metaForPath.title);
      const ogDesc = ensureMeta("meta[property='og:description']", { property: 'og:description' });
      ogDesc.setAttribute('content', metaForPath.description);
      const ogUrl = ensureMeta("meta[property='og:url']", { property: 'og:url' });
      ogUrl.setAttribute('content', window.location.origin + path);
      const ogLocale = ensureMeta("meta[property='og:locale']", { property: 'og:locale' });
      ogLocale.setAttribute('content', language === 'hi' ? 'hi_IN' : 'en_IN');

      const twTitle = ensureMeta("meta[name='twitter:title']", { name: 'twitter:title' });
      twTitle.setAttribute('content', metaForPath.title);
      const twDesc = ensureMeta("meta[name='twitter:description']", { name: 'twitter:description' });
      twDesc.setAttribute('content', metaForPath.description);
    }

    const html = document.documentElement;
    html.setAttribute('lang', language === 'hi' ? 'hi' : 'en');

    let canonical = document.querySelector("link[rel='canonical']");
    const url = window.location.origin + path;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [location.pathname, language]);

  return null;
};

function App() {
  const [lang, setLang] = useState('hi');

  return (
    <Router>
      <ScrollToTop />
      <SEOManager language={lang} />
      <Header language={lang} onLanguageChange={setLang}/>
      <Routes>
        <Route path="/" element={<Home language={lang}/>} />
        <Route path="/news" element={<NewsPage language={lang} isStandalone={true}/>} />
        <Route path="/blogs" element={<Blog language={lang}/>} />
        <Route path="/contact" element={<Contact language={lang}/>} />
        <Route path="/donate" element={<Donate language={lang}/>} />
        <Route path="/nagar-gaurav" element={<NagarGaurav language={lang} isStandalone={true}/>} />
        <Route path="/nagar-gaurav/:id" element={<NagarGauravDetails language={lang}/>} />
        <Route path="/about" element={<AboutPage language={lang}/>} />
        <Route path="/panch-kalyan" element={<PanchKalyan language={lang}/>} />
        <Route path="/gallery" element={<GalleryPage language={lang}/>} />
      </Routes>
      <Footer language={lang} />
    </Router>
  )
}

export default App
