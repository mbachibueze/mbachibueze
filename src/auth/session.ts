import { SESSION_DURATION } from "./adminConfig";

const SESSION_KEY = "admin_session";

export function createSession(email: string) {
  const session = {
    email,
    expiresAt: Date.now() + SESSION_DURATION,
  };

  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function getSession() {
  const raw = sessionStorage.getItem(SESSION_KEY);
  if (!raw) return null;

  try {
    const session = JSON.parse(raw);

    if (Date.now() > session.expiresAt) {
      clearSession();
      return null;
    }

    return session;
  } catch {
    clearSession();
    return null;
  }
}

export function clearSession() {
  sessionStorage.removeItem(SESSION_KEY);
}
