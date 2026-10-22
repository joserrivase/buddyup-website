export function publicUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

export const APP_STORE_URL =
  "https://apps.apple.com/us/app/buddyup-accountability-app/id6756550977";

export const SUPPORT_EMAIL = "jose@buddyupapp.co";

export const INSTAGRAM_URL = "https://www.instagram.com/buddyupapp88/";

export const TIKTOK_URL = "https://www.tiktok.com/@buddyupapp";

export const TERMS_URL =
  "https://app.notion.com/p/Terms-Of-Use-3c5da1e1481c8003886de69ba1792bf3?source=copy_link";

export const PRIVACY_URL =
  "https://app.notion.com/p/Privacy-Policy-2c7da1e1481c80899370c290694f4751?source=copy_link";

export const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
] as const;

export const proofBars = [
  { label: "Private goals", value: 43, hint: "~43% completed", emphasize: false },
  { label: "Written goals", value: 64, hint: "~64% completed", emphasize: false },
  { label: "Goals with a buddy", value: 80, hint: "~80% completed", emphasize: true },
] as const;

export const screenshots = [
  {
    src: publicUrl("/screenshots/home_screen.png"),
    alt: "BuddyUp home screen showing active goals with a buddy",
    label: "Your goals",
  },
  {
    src: publicUrl("/screenshots/edit_goal.png"),
    alt: "Edit a goal, including visibility, streak, and buddy",
    label: "Edit a goal",
  },
  {
    src: publicUrl("/screenshots/daily_goal.png"),
    alt: "Daily goal details with streaks, days completed, and a shared calendar",
    label: "Daily goal",
  },
] as const;

export const features = [
  {
    title: "Goals are better together",
    body: "Solo streaks exist. The product is built around doing the thing with other people who can see whether you showed up.",
  },
  {
    title: "Daily, list, or checklist",
    body: "Check off days, grow a running list of wins, or write the list up front and knock it down. Pick the shape that fits the goal.",
  },
  {
    title: "Friendly or Challenge",
    body: "Keep it kind, or put something on the line. First to 10, longest streak, winner buys dinner.",
  },
  {
    title: "Streaks that actually sting",
    body: "Daily streaks reset if you miss. Weekly streaks ask for a set number of days. The flame grows when you keep it.",
  },
  {
    title: "Send a link, not a lecture",
    body: "Share buddyupapp.co/join/… and they get a prompt to add you. No feed to scroll. Friends exist to keep goals honest.",
  },
  {
    title: "Your visibility, your call",
    body: "Public, friends only, or private. Visit a friend’s profile and see the goals they actually share.",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Pick a goal",
    body: "Daily habit, running list, or checklist. Solo, with one buddy, or a group of up to eight.",
  },
  {
    n: "02",
    title: "Invite a buddy",
    body: "Send your invite link. They download BuddyUp, you both land on the same goal.",
  },
  {
    n: "03",
    title: "Show up",
    body: "They can see if you didn’t. That’s the whole trick — and why you stop quitting.",
  },
] as const;

export const goalTypes = [
  {
    title: "Daily Goal",
    body: "Check off the days you show up. Streaks, a shared calendar, and a running count of days completed.",
    src: publicUrl("/screenshots/daily_goal.png"),
    alt: "Daily meditation goal shared with a buddy",
  },
  {
    title: "Checklist",
    body: "Write the list up front and check items off. One-time, or reset every day for a routine.",
    src: publicUrl("/screenshots/checklist_goal.png"),
    alt: "Morning routine checklist with daily progress",
  },
  {
    title: "Item Tracker",
    body: "Add wins as you go — books read, applications sent, places visited — and see who is ahead.",
    src: publicUrl("/screenshots/item_goal.png"),
    alt: "Book reading list compared side by side with a buddy",
  },
] as const;

export const modes = [
  {
    title: "Solo",
    body: "Track on your own. You still get streaks, calendars, reminders, and deadlines.",
  },
  {
    title: "Buddy",
    body: "One friend on the same goal. You both see whether the other person showed up.",
  },
  {
    title: "Group",
    body: "Up to 8 people. A leaderboard and a week grid of who checked in.",
  },
] as const;

export const faqs = [
  {
    q: "What is BuddyUp?",
    a: "BuddyUp is an iOS app for people who follow through when they are not doing it alone. Create a daily habit, a checklist, or a running list of wins. Do it solo, with one buddy, or with a group of up to eight.",
  },
  {
    q: "Is it on Android?",
    a: "Not yet. BuddyUp is iPhone-only right now.",
  },
  {
    q: "What’s the difference between Solo, Buddy, and Group?",
    a: "Solo is just you. Buddy is you plus one friend on the same goal. Group is up to eight people, with a leaderboard of who checked in.",
  },
  {
    q: "Is BuddyUp free?",
    a: "Yes. Download BuddyUp from the App Store and start a goal. No credit card needed.",
  },
  {
    q: "How does BuddyUp handle privacy?",
    a: "You choose whether each goal is public, friends only, or private. We don’t sell your data to advertisers. See the Privacy Policy for the full picture.",
  },
] as const;

export const footerBlurb =
  "BuddyUp is an iOS app for people who follow through when they are not doing it alone. Create a daily habit, a checklist, or a running list of wins. Do it solo, with one buddy, or with a group of up to eight. Keep a streak, set a deadline, or turn it into a challenge with real stakes. When someone else can see whether you showed up, you show up.";
