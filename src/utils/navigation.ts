/**
 * Utility functions for smooth navigation and scrolling
 */

/**
 * Smoothly scrolls to a section by ID
 * @param sectionId - The ID of the section to scroll to (without #)
 * @param offset - Optional offset from the top (default: 80 for fixed nav)
 */
export const scrollToSection = (sectionId: string, offset: number = 80) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Opens external URL in new tab
 * @param url - The URL to open
 */
export const openExternalLink = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Opens email client with pre-filled email
 * @param email - The email address
 * @param subject - Optional subject line
 * @param body - Optional email body
 */
export const openEmailClient = (email: string, subject?: string, body?: string) => {
  let mailtoLink = `mailto:${email}`;
  const params = [];
  
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  
  if (params.length > 0) {
    mailtoLink += `?${params.join('&')}`;
  }
  
  window.location.href = mailtoLink;
};

/**
 * Opens phone dialer
 * @param phoneNumber - The phone number to call
 */
export const openPhoneDialer = (phoneNumber: string) => {
  window.location.href = `tel:${phoneNumber}`;
};