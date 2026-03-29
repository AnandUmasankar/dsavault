/**
 * Site-wide configuration. Update these values once and everything adapts.
 * 
 * AdSense Setup (Plug & Play):
 * 1. Get approved at https://www.google.com/adsense/
 * 2. Set your publisher ID below (e.g., 'ca-pub-1234567890123456')
 * 3. Update public/ads.txt with your publisher ID
 * 4. Build & deploy — ads go live automatically
 */

export const siteConfig = {
  siteName: 'DSA Vault',
  siteUrl: 'https://dsavault.in',

  // Google AdSense — set your publisher ID here when approved
  // Leave empty string to disable ads
  adsenseId: '',

  // Google Analytics (optional)
  analyticsId: '',
} as const;

export const hasAdsense = siteConfig.adsenseId.length > 0;
