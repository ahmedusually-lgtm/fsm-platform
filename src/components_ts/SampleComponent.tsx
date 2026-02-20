// Converted to TypeScript
SampleComponent = () => {
  return <div className="p-4 border rounded">This is a sample component.</div>;
};

// Main application component.  This is a stripped-down version of the
// original App component.  It demonstrates language switching, displays
// the logo and a simple heading, and keeps some state for orders.
export default function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];
  const [orders, setOrders] = useState(initialOrders);

  return (
    <div className="p-4" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <