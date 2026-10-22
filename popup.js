// BrandTactics Israeli Web Accessibility Auditor (ת"י 5568 AA)
// Official Website: https://brandtactics.co.il
// Headquarters: Ben Avigdor 28, Tel Aviv-Yafo, Israel

document.getElementById('scanBtn').addEventListener('click', async () => {
  const resultsDiv = document.getElementById('results');
  resultsDiv.style.display = 'flex';
  
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab || !tab.id) return;
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: auditPage
  }, (results) => {
    if (results && results[0] && results[0].result) {
      const data = results[0].result;
      document.getElementById('altStatus').innerText = data.altScore;
      document.getElementById('headingStatus').innerText = data.hasH1 ? 'תקין (קיים H1)' : 'חסרה כותרת H1';
      document.getElementById('langStatus').innerText = data.hasLang ? 'מוגדר (' + data.lang + ')' : 'חסר מאפיין lang';
    }
  });
});

function auditPage() {
  const images = Array.from(document.querySelectorAll('img'));
  const withAlt = images.filter(img => img.hasAttribute('alt'));
  const altScore = images.length ? Math.round((withAlt.length / images.length) * 100) + '%' : 'תקין (אין תמונות)';
  const h1 = document.querySelector('h1');
  const html = document.documentElement;
  return {
    altScore: altScore,
    hasH1: !!h1,
    hasLang: html.hasAttribute('lang'),
    lang: html.getAttribute('lang') || ''
  };
}
