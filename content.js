const targetKeywords = [
  "reject all",
  "decline",
  "decline all",
  "only essential",
  "necessary only",
  "necessary cookies only",
  "strictly necessary",
  "reject cookies",
  "do not sell",
  "continue without accepting",
  "no, thank you",
  "no thanks",
  "reject"
];

const targetIDs = [
    ".js-reject-cookies",
    "#onetrust-reject-all-handler",
    ".ot-pc-refuse-all-handler"
];

function showPrivacyToast(actionText) {
  if(document.getElementById('cache22-toast')) return;

  const toast = document.createElement('div');
  toast.id = 'cache22-toast';
  toast.innerHTML = `
    <div style="font-size: 16px; margin-bottom: 5px;"><strong>🛡️ Cache 22 Protected You</strong></div>
    <div style="color: #94a3b8; font-size: 13px; margin-bottom: 3px;"><strong>Reason:</strong> Non-essential tracking blocked.</div>
    <div style="color: #10b981; font-size: 13px;"><strong>Action:</strong> ${actionText}</div>
  `;
  
  toast.style.cssText = `
    position: fixed; bottom: 20px; right: 20px; background: #0f172a; color: #ef4444; 
    padding: 15px 20px; border-left: 5px solid #ef4444; z-index: 2147483647; 
    font-family: sans-serif; box-shadow: 0 10px 25px rgba(0,0,0,0.8); border-radius: 6px;
  `;
  document.body.appendChild(toast);
  setTimeout(() => { toast.remove(); }, 3500);
}

function executeRejection(el, reason) {
  el.style.setProperty('border', '4px solid #ef4444', 'important');
  el.style.setProperty('background-color', '#450a0a', 'important');
  el.style.setProperty('color', '#ef4444', 'important');
  el.style.setProperty('transition', 'all 0.3s', 'important');
  
  showPrivacyToast(reason);

  setTimeout(() => {
      el.click();
  }, 1000); 
}

function huntForCookieBanners() {
  for (let selector of targetIDs) {
      const el = document.querySelector(selector);
      if (el && el.offsetHeight > 0) {
          executeRejection(el, `Intercepted Tracker Consent Platform`);
          return true;
      }
  }

  const clickableElements = document.querySelectorAll('button, a, [role="button"]');
  
  for (let el of clickableElements) {
    if (!el.textContent) continue; 
    
    const text = el.textContent.toLowerCase().replace(/\s+/g, ' ').trim();
    const isTarget = targetKeywords.some(keyword => text.includes(keyword));
    
    if (isTarget && el.offsetHeight > 0 && el.offsetWidth > 0) { 
      executeRejection(el, `Auto-clicked "${text}"`);
      return true;
    }
  }
  return false;
}

setInterval(() => {
    huntForCookieBanners();
}, 1000);