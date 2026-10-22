# BuddyUp Website Brief

A product and brand brief for building **buddyupapp.co** (or a marketing site that lives there) to get more people to download BuddyUp.

This is not an engineering spec. It is what a designer, copywriter, or website builder needs: who the app is for, what it does, how it looks, and how to talk about it.

---

## 1. Product snapshot

| | |
|---|---|
| **Name** | BuddyUp |
| **Tagline (in the app today)** | Achieve your goals together |
| **One-liner** | BuddyUp is the accountability app for people who actually follow through when someone else is in it with them. |
| **Platform** | iOS (iPhone). Not on Android yet. |
| **App Store** | [BuddyUp – Accountability App](https://apps.apple.com/us/app/buddyup-accountability-app/id6756550977) |
| **Invite / join links** | `https://buddyupapp.co/join/{code}` |
| **Support** | jose.r.rivas.e@gmail.com |
| **Terms of Use** | [Notion Terms of Use](https://app.notion.com/p/Terms-Of-Use-3c5da1e1481c8003886de69ba1792bf3?source=copy_link) |
| **Privacy Policy** | [Notion Privacy Policy](https://app.notion.com/p/Privacy-Policy-2c7da1e1481c80899370c290694f4751?source=copy_link) |
| **Xcode display name** | The project is still named Accountability Buddy; the user-facing name is **BuddyUp**. Always use BuddyUp on the site. |

**Primary CTA on every page:** Download on the App Store.

---

## 2. Positioning

BuddyUp is not a generic habit tracker. Solo streaks exist, but the product is built around **doing goals with other people**.

The onboarding screen makes the argument with a bar chart:

- Private goals: ~43% completed
- Written goals: ~64% completed
- Goals with a buddy: ~80% completed

Caption in the app: *“% of goals successfully completed.”*

Supporting line: *“Research shows that having an accountability buddy almost doubles your chances of success.”*

Use that idea on the website. The emotional promise is: you stop quitting because someone else can see whether you showed up.

**Who it is for**

- Friends who want to get in shape, read more, study, save money, or build a habit together
- People who start goals in Notes / a journal and then drop them
- Small groups (roommates, a team, a family) who want a shared scoreboard
- Anyone who is more competitive when there is a prize on the line

**Who it is not**

- A corporate OKR tool
- A calorie / workout-only fitness app
- A social network. Friends exist to keep goals honest, not to scroll a feed.

---

## 3. Brand

### Logo

White outline of two hands making a **pinky promise**, on a transparent / dark background.

- Asset in the app: `buddyup_logo` (`Buddyup_logo_outline.png`)
- On the splash / landing screen it sits on the brand gradient, ~160pt, with a soft drop shadow
- On the website: use the white outline on the gradient, or a dark-blue outline on white. Do not add extra icons, flames, or checkmarks next to it. The pinky promise *is* the mark.

### Color palette

These are the real values from `BrandStyle` and the onboarding screens.

| Token | Hex | RGB | Where it is used |
|---|---|---|---|
| **Deep blue** | `#292966` | 41, 41, 102 | Start of the brand gradient, logo backgrounds, goal cards |
| **Teal** | `#45CAB7` | 69, 202, 183 | End of the brand gradient, premium checkmarks, accents |
| **Premium gold** | `#F6BE4F` | 246, 190, 79 | Premium surfaces |
| **Premium mid purple** | `#5C4EA8` | 92, 78, 168 | Middle stop of the premium gradient |
| **Get Started button text** | `#1A3380` (approx) | 0.1, 0.2, 0.5 | Dark blue text on the white CTA |
| **System blue** | iOS blue | — | Selected tab, primary buttons, links inside the app |
| **Profile action blue** | `#4582FA` | 0.27, 0.51, 0.98 | Invite Friends button on Profile |
| **Logout orange** | `#ED8C3D` | 0.93, 0.55, 0.24 | Log out |
| **Delete red** | `#E84545` | 0.91, 0.27, 0.27 | Delete account |
| **Premium purple** | `#7D5CF2` | 0.49, 0.36, 0.95 | Upgrade to Premium row |

**Brand gradient (the signature look)**

```
linear-gradient(135deg, #292966 0%, #45CAB7 100%)
```

Top-left deep blue → bottom-right teal. This is the landing screen, goal cards, the + create button, Active/Finished toggle, friend profile headers, and the Invite Friends icon circle.

**Premium gradient** (warmer, for paid surfaces)

```
linear-gradient(135deg, #292966 0%, #5C4EA8 50%, #45CAB7 100%)
```

**Neutrals**

- Light mode cards: iOS `systemGray6` (`#F2F2F7` range)
- Dark mode lifted cards: about `#2B2B2E` (0.17, 0.17, 0.18)
- Dark mode premium card: `#332952`
- Light mode premium card: `#F1EBFD`
- Text: primary / secondary system labels. On the gradient, text is **white**.

**Do / don’t**

- Do put hero sections on the blue→teal gradient with white type.
- Do use a large white rounded pill for the primary CTA on dark/gradient (matches “Get Started”).
- Don’t use neon, rainbow, or Instagram-gradient palettes.
- Don’t make the site look like a generic SaaS dashboard (lots of gray, tiny type, leftover purple).
- In dark UI, buttons need a visible fill or outline so they don’t disappear into the background.

### Typography (app)

San Francisco / system UI.

- Hero name: ~42pt bold, white
- Tagline: ~18pt regular, white at 90%
- Section titles: ~28pt bold
- Goal names: title / title2 bold
- Body: 16pt regular
- Captions: 12–13pt secondary

On the web, a geometric sans close to SF (Inter, SF Pro if licensed, or similar) is fine. Keep headlines bold and short.

### Voice

Friendly, direct, a little competitive. Talk like a friend who will actually check if you did the thing.

Examples already in the product:

- “Achieve your goals together”
- “Bring a friend along”
- “Goals are better together”
- “Put something on the line to keep you motivated”
- “Hey! Want to keep each other accountable on BuddyUp? Join me here: …”

Avoid: “synergy,” “unlock your potential,” “the #1 habit OS.” Prefer: show up, keep each other honest, don’t quit, pinky promise.

---

## 4. How the app is structured (so screenshots and the site match)

### Landing / first-run

Full-screen brand gradient. Centered pinky-promise logo, **BuddyUp**, tagline, white **Get Started** pill, “Already have an account. Sign in” in white.

Get Started goes to:

1. **How did you hear about us?** — Friend, Instagram, TikTok, YouTube, Reddit, App Store, Other
2. **The Power of Accountability** — animated bar chart (private / written / with a buddy)
3. Create account — Apple, Google, or email (username, first name, last name)

Sign in: Apple, Google, or email. Forgot password exists.

OAuth users who are missing a name/username land on a short profile-completion screen before the main app.

### Main app (after login)

Custom tab bar, 5 items:

| Tab | Icon | What it is |
|---|---|---|
| Goals | target-style / list | Home. Active and Finished goals. |
| Search | magnifying glass | Find people by username or name, send friend requests. |
| **+** | plus in a **gradient circle**, raised above the bar | Create a goal. |
| Notifications | bell, blue dot if unread | Friend requests, accepts, goal updates, completed goals. |
| Profile | person | Photo, name, username, invite, premium, settings. |

Selected tab tint is system blue; unselected is secondary gray.

### Goals list

- Large “Goals” title
- Segmented **Active | Finished** control with the brand gradient sliding behind the selected side, plus a count badge
- Empty Active: target icon, “No goals yet”, “Tap the + button below to create your first goal”
- Empty Finished: checkmark, “Goals you've completed will appear here”
- Goal cards sit on the brand gradient with white text (name, who is on it, progress)

Pull to refresh. Tapping a card opens Goal Details.

### Create a goal (+)

Bottom sheet titled **New Goal**: “How do you want to track this goal?”

1. **Solo** — Complete this goal on your own
2. **With a Buddy** — Add one friend for accountability
3. **Group Goal** — Up to 8 people. Locked with a **Premium** pill if the user is not subscribed.

If they pick Buddy or Group with no friends yet, a prompt asks them to invite friends to the app first.

Then a step-by-step questionnaire (one question per screen, back/next). Typical questions:

- Goal name (and optional description)
- Visibility: Public, Friends Only, or Private
- Type of goal (see below)
- Streak / quantity options for daily goals
- Friendly vs Challenge
- Challenge objective, target number, end date, stakes
- Daily reminder (time of day; reminder is only for that user)

### Goal Details (the “hero” product screen)

This is the screenshot that should be on the website.

Header card: goal name, description, Challenge Mode trophy if competitive, weekly-goal caption if it is a weekly streak, group members.

Then the live tracker, depending on type:

- Month calendar with checkmarks for days completed
- Streak box with a 🔥 and the current number (“Streak” or “Weekly Streak”). When the streak goes up, the flame grows and the number ticks up.
- Total days completed
- Bar chart of daily quantities (week / month / year)
- Progress toward a target
- Checklists with checkboxes
- Running list of items
- Days remaining until the deadline
- Challenge objective + stakes
- Group leaderboard and a week grid of who checked in

Buddy goals show you and your buddy side by side (names link to profiles). Group goals show a multi-person leaderboard instead of the two-person streak row.

Toolbar: a bell (per-person reminder) and a ⋯ menu (edit, leave, etc.). They are two separate buttons.

You update the goal from this screen: mark today complete, type a quantity, add an item, or tap checklist rows.

### Search / friends

Search bar: “Search by username or name.” Results with avatar, name, @username, Add / Pending / Friends.

Friends list with profile photos. Open a friend’s profile to see their public / friends-only goals and send a request.

Invite: share `https://buddyupapp.co/join/{personal-code}` with the line *“Hey! Want to keep each other accountable on BuddyUp? Join me here: …”*

When someone joins from that link they get a prompt to add the inviter as a friend (not auto-added). Accepting notifies the inviter: “Your friend joined.”

### Profile

Circular photo, display name, @username, goal count.

Rows:

- Invite Friends (solid blue card)
- Upgrade to Premium (if not subscribed) or BuddyUp Premium / manage subscription
- Account & support (email, restore purchases, terms, privacy)
- Log out
- Delete account

---

## 5. Features to put on the website

Lead with 4–6, not all of them.

### Core: accountability modes

- **Solo** — Track on your own. Still get streaks, calendars, reminders, deadlines.
- **Buddy** — One friend. You see each other’s progress on the same goal.
- **Group** (Premium) — 3–8 people on one daily goal. Leaderboard + week grid. Only the creator needs Premium at creation. If nobody in the group has Premium later, updates pause until someone subscribes.

### Three goal types

**1. Daily Goal**  
Check off days (workouts, reading, no-spend, language practice). Optional:

- Daily streak, or weekly streak (“hit 3 days this week”)
- Track a quantity (miles, pages, minutes, etc.) with a bar chart
- Calendar of completed days

**2. Item Tracker**  
Grow a list as you go (books read, applications sent, places visited). Running count. Buddy/challenge can be first-to-X or most-by-date.

**3. Checklist**  
You write the list up front and check items off. Can be one-time, or reset daily / weekly (habits like a morning routine).

### Friendly vs Challenge

- **Friendly** — No winner. Optional deadline so the goal is not endless. When the date passes: recap of how you did (days, streak, quantity, items, checklist weeks) and “Would you like to keep going?”
- **Challenge** — Competitive. Pick how someone wins, a number and/or end date, and **stakes** (“Winner buys dinner”). When it ends, a winner modal. Group leaderboards follow the same objective.

Example challenge objectives:

- First to reach X (days, items, quantity, streak)
- Most by an end date
- Longest streak by end date
- First to finish the checklist
- Complete the list / X items by a date

### Streaks

- Daily: consecutive days. Miss a day and it resets.
- Weekly: choose 1–6 days per week. The streak goes up when you hit that many distinct days in a Sunday–Saturday week. Miss the week and it goes to 0 at the start of the next week.
- Animating 🔥 when the number goes up.

### Reminders

Per goal, per user. Daily notification at a time you pick: update this goal. Independent of buddies/groups. Can be set at creation or later from the bell on Goal Details. Needs iOS notification permission.

### Social

- Usernames and profile photos
- Friend requests and accepts
- Personal invite link
- Goal visibility: Public, Friends Only, Private
- Visit a friend’s profile and see the goals they share
- Push + in-app notifications for requests, accepts, and goal activity

### Premium (BuddyUp Premium)

Suggested App Store prices (may vary by region):

- **$4.99 / month**
- **$39.99 / year**

What Premium is for, in user language: **group goals with up to 8 people**, plus supporting the product. Solo and one-buddy goals stay free.

Paywall is a native subscription sheet (Apple). Restore purchases lives on Profile. Manage subscription uses Apple’s subscription center.

---

## 6. Suggested website information architecture

Keep it short. This is a download site, not a docs site.

1. **Hero** — Gradient, logo, “Achieve your goals together”, App Store button, phone mockup of Goal Details (calendar + streak + buddy names).
2. **Proof** — The 43 / 64 / 80 chart and the “almost doubles your chances” line.
3. **How it works** — 3 steps: Pick a goal. Invite a buddy (or a group). Show up. They can see if you didn’t.
4. **Goal types** — Daily, Item Tracker, Checklist. One screenshot each if you have them (`daily_goal_preview`, `item_tracker_preview`, `checklist_preview` exist in the asset catalog).
5. **Solo, Buddy, Group** — Three cards. Group marked Premium.
6. **Challenge** — Stakes, winner, leaderboard. Fun, not corporate.
7. **Invite** — “Send a link, not a lecture.” Show `buddyupapp.co/join/…`
8. **Premium** — Group of up to 8, monthly/annual, still free for buddy + solo.
9. **Footer** — App Store, Terms, Privacy, support email.

Optional later: FAQ, founder note, Instagram/TikTok embeds (onboarding already asks about those channels).

### Hero copy options

- Achieve your goals together
- Don’t do it alone
- A pinky promise you can actually keep
- Habits stick when someone else is watching — in a good way

Primary button: **Download on the App Store**  
Secondary: none, or “How it works” jump link.

---

## 7. Screenshots to capture for the site

Shoot on a recent iPhone, both light and dark if you can, but **prefer light for marketing** unless the gradient screens look better full-bleed.

Must-haves:

1. Onboarding landing (gradient + logo + Get Started)
2. Accountability chart
3. Goals list with a couple of gradient cards
4. Goal Details: daily goal with calendar, streak 🔥, buddy names
5. Goal Details: checklist or item list
6. Group leaderboard
7. New Goal sheet (Solo / Buddy / Group)
8. Challenge stakes + days remaining
9. Profile with Invite Friends
10. Friend search

In-app preview images already exist:

- `daily_goal_preview`
- `item_tracker_preview`
- `checklist_preview`
- `calendar_days_left`

Use real people names in screenshots (or clearly fake but friendly ones). Avoid empty states as the hero.

---

## 8. Technical notes for the website builder (not for the homepage)

- Canonical download URL: the App Store link above. Universal / App Store smart banner is fine.
- Invite URLs are `https://buddyupapp.co/join/{code}`. The marketing homepage can live at `https://buddyupapp.co/` if DNS is set that way. Do not break `/join/*`.
- iOS only. Do not advertise Android.
- Age: general / social accountability. Not a kids’ app. Don’t imply it is for dating.
- Light and dark both exist in the product; the brand moment is the gradient.

### App icon / social

App icon lives in `AppIcon.appiconset`. For Open Graph / favicon, prefer the pinky-promise logo on `#292966` or on the gradient.

---

## 9. What not to put on the site

- Internal project name “Accountability Buddy”
- RevenueCat, Supabase, or any keys
- SQL, RLS, or “how we store friendships”
- Test prices that might be wrong in a given country — say “from $4.99/month” or “In-app subscription” if you want to stay loose
- Claims of medical or financial outcomes. Accountability is the claim, not guaranteed results.

---

## 10. One-paragraph boilerplate (press / App Store / footer)

BuddyUp is an iOS app for people who follow through when they are not doing it alone. Create a daily habit, a checklist, or a running list of wins. Do it solo, with one buddy, or with a group of up to eight. Keep a streak, set a deadline, or turn it into a challenge with real stakes. When someone else can see whether you showed up, you show up.
