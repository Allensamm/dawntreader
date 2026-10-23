'use client';

import { useState } from 'react';
import { SITE } from '../lib/data';

export default function EmailForm({ kind = 'General enquiry', bookRequest = false, compact = false }) {
  const [notice, setNotice] = useState('');

  function submit(e) {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.currentTarget));
    const lines = [
      `Name: ${values.name || ''}`,
      `Email: ${values.email || ''}`,
      bookRequest ? `Book requested: ${values.book || ''}` : '',
      values.message ? `\nMessage:\n${values.message}` : '',
    ].filter(Boolean);
    const subject = `${kind} — ${values.name || 'Dawn Treader website'}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
    setNotice(`Your email app should open with a message addressed to ${SITE.email}. If it does not, please email us directly.`);
  }

  return (
    <form className={`email-form${compact ? ' compact' : ''}`} onSubmit={submit}>
      <div className="form-pair">
        <label><span className="sr-only">Your name</span><input name="name" placeholder="Your name" autoComplete="name" required /></label>
        <label><span className="sr-only">Your email</span><input type="email" name="email" placeholder="Your email" autoComplete="email" required /></label>
      </div>
      {bookRequest && <label><span className="sr-only">Title and author</span><input name="book" placeholder="Title and author you’re looking for" required /></label>}
      {!compact && <label><span className="sr-only">How can we help?</span><textarea name="message" rows={5} placeholder="How can we help?" /></label>}
      <button className="btn" type="submit">{bookRequest ? 'Email this request' : 'Compose your message'}</button>
      <p className="form-help">This opens your email app—no message is stored on this website.</p>
      {notice && <p className="form-notice" role="status">{notice}</p>}
    </form>
  );
}
