import imgSelfCare from "@/assets/blog/self-care-after-a-breakup.webp";
import imgHealingNotLinear from "@/assets/blog/healing-after-a-breakup-is-not-linear.webp";
import imgNoContact from "@/assets/blog/no-contact-rule-after-breakup.webp";
import imgRebuilding from "@/assets/blog/rebuilding-yourself-after-a-long-relationship.webp";
import imgRacingThoughts from "@/assets/blog/racing-thoughts-after-a-breakup.webp";
import imgGuilt from "@/assets/blog/guilt-after-a-breakup-moving-on.webp";
import imgSleep from "@/assets/blog/how-to-sleep-after-a-breakup.webp";
import imgAnger from "@/assets/blog/anger-after-a-breakup.webp";
import imgJournaling from "@/assets/blog/journaling-prompts-after-a-breakup.webp";
import imgAttachment from "@/assets/blog/attachment-styles-and-breakups.webp";
import imgStillSeeEx from "@/assets/blog/how-to-cope-when-you-still-see-your-ex.webp";
import imgPhysical from "@/assets/blog/physical-symptoms-of-heartbreak.webp";
import imgFriends from "@/assets/blog/staying-friends-with-an-ex.webp";
import imgMovedOnFaster from "@/assets/blog/when-your-ex-moves-on-faster.webp";
import imgRebound from "@/assets/blog/rebound-relationships-after-a-breakup.webp";
import imgTriggers from "@/assets/blog/unexpected-breakup-triggers.webp";
import imgTalkAbout from "@/assets/blog/how-to-talk-about-your-breakup.webp";
import imgSocialMedia from "@/assets/blog/social-media-after-a-breakup.webp";
import imgEndedIt from "@/assets/blog/grief-when-you-ended-the-relationship.webp";
import imgFirstDate from "@/assets/blog/first-date-after-a-breakup.webp";
import imgHowLong from "@/assets/blog/how-long-does-it-take-to-get-over-a-breakup.webp";
import imgCrying from "@/assets/blog/crying-after-a-breakup.webp";
import imgStopLoving from "@/assets/blog/how-to-stop-loving-someone.webp";
import imgDreaming from "@/assets/blog/dreaming-about-your-ex.webp";
import imgClosure from "@/assets/blog/closure-after-a-breakup.webp";
import imgLoneliness from "@/assets/blog/loneliness-after-a-breakup.webp";
import imgNoReason from "@/assets/blog/breakup-without-a-reason.webp";
import imgCheated from "@/assets/blog/getting-over-being-cheated-on.webp";
import imgMovingOut from "@/assets/blog/moving-out-after-a-breakup.webp";
import imgReconnecting from "@/assets/blog/reconnecting-with-yourself-after-a-breakup.webp";
import imgCommunicateBetter from "@/assets/blog/how-to-communicate-better-in-a-relationship.webp";
import imgRebuildTrust from "@/assets/blog/rebuilding-trust-after-betrayal.webp";
import imgAnxiousAttachment from "@/assets/blog/anxious-attachment-in-relationships.webp";
import imgAvoidantPartner from "@/assets/blog/avoidant-partner-how-to-connect.webp";
import imgHealthyConflict from "@/assets/blog/healthy-conflict-in-couples.webp";
import imgDatingIntention from "@/assets/blog/dating-with-intention.webp";
import imgGreenFlags from "@/assets/blog/green-flags-in-a-new-relationship.webp";
import imgSameFight from "@/assets/blog/stop-fighting-about-the-same-thing.webp";

export type BlogPost = {
  slug: string;
  /** Keyword-rich <title> tag (≤60 chars ideally) */
  seoTitle: string;
  /** Unique meta description (≤160 chars) */
  metaDescription: string;
  /** Emotional, on-brand H1 shown on the page */
  h1: string;
  /** Card / list title (short, browse-friendly) */
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: "Bruna";
  image: string;
  imageAlt: string;
  /** Other post slugs to surface as "Related" */
  related: string[];
  content: string[];
};

const slugImages: Record<string, string> = {
  "self-care-after-a-breakup": imgSelfCare,
  "healing-after-a-breakup-is-not-linear": imgHealingNotLinear,
  "no-contact-rule-after-breakup": imgNoContact,
  "rebuilding-yourself-after-a-long-relationship": imgRebuilding,
  "racing-thoughts-after-a-breakup": imgRacingThoughts,
  "guilt-after-a-breakup-moving-on": imgGuilt,
  "how-to-sleep-after-a-breakup": imgSleep,
  "anger-after-a-breakup": imgAnger,
  "journaling-prompts-after-a-breakup": imgJournaling,
  "attachment-styles-and-breakups": imgAttachment,
  "how-to-cope-when-you-still-see-your-ex": imgStillSeeEx,
  "physical-symptoms-of-heartbreak": imgPhysical,
  "staying-friends-with-an-ex": imgFriends,
  "when-your-ex-moves-on-faster": imgMovedOnFaster,
  "rebound-relationships-after-a-breakup": imgRebound,
  "unexpected-breakup-triggers": imgTriggers,
  "how-to-talk-about-your-breakup": imgTalkAbout,
  "social-media-after-a-breakup": imgSocialMedia,
  "grief-when-you-ended-the-relationship": imgEndedIt,
  "first-date-after-a-breakup": imgFirstDate,
  "how-long-does-it-take-to-get-over-a-breakup": imgHowLong,
  "crying-after-a-breakup": imgCrying,
  "how-to-stop-loving-someone": imgStopLoving,
  "dreaming-about-your-ex": imgDreaming,
  "closure-after-a-breakup": imgClosure,
  "loneliness-after-a-breakup": imgLoneliness,
  "breakup-without-a-reason": imgNoReason,
  "getting-over-being-cheated-on": imgCheated,
  "moving-out-after-a-breakup": imgMovingOut,
  "reconnecting-with-yourself-after-a-breakup": imgReconnecting,
};

// Placeholder used during array construction; overridden below per slug.
const img = {
  "Self-Care": imgSelfCare,
  Healing: imgHealingNotLinear,
  Boundaries: imgNoContact,
  Growth: imgRebuilding,
  Anxiety: imgRacingThoughts,
  Emotions: imgGuilt,
} as const;


export const blogPosts: BlogPost[] = [
  {
    slug: "self-care-after-a-breakup",
    seoTitle: "Self-Care After a Breakup: 6 Things That Actually Help (Week 1)",
    metaDescription:
      "Self-care after a breakup: 6 simple, gentle things to do in the first week of heartbreak, even when you can barely get out of bed.",
    h1: "Gentle Self-Care Rituals for the First Week After a Breakup",
    title: "Self-Care After a Breakup: 6 Things That Actually Help",
    excerpt:
      "Small, kind acts that can carry you through the rawest days, no productivity required.",
    category: "Self-Care",
    readTime: "5 min read",
    date: "May 12, 2026",
    author: "Bruna",
    image: img["Self-Care"],
    imageAlt:
      "A warm cup of herbal tea and a soft blanket on a linen couch, gentle self-care after a breakup",
    related: ["how-to-sleep-after-a-breakup", "physical-symptoms-of-heartbreak", "social-media-after-a-breakup"],
    content: [
      "The first week after a breakup is rarely about big breakthroughs. It's about getting through the day with a little more softness toward yourself. The goal isn't to feel better immediately, it's to feel held. Most advice you'll find online will push you toward action: delete their number, start a new hobby, hit the gym. But the truth is that the body and the mind need a slower kind of care in the first seven days. They need permission to be tender.",
      "## What your body actually needs in week one",
      "Start with the basics that grief tends to erase. Drink a glass of water before your morning coffee. Eat something warm at least once a day, even if it's only toast and broth. Step outside for five minutes of daylight, ideally in the morning, to help your circadian rhythm find its footing again. These aren't small things when your nervous system is in shock, they're anchors. They tell your body, again and again, that it is still being looked after.",
      "A simple daily anchor list when nothing else feels manageable:\n- One glass of water before coffee\n- One warm meal, even if it\u2019s toast and broth\n- Five minutes of morning daylight\n- One shower, one clean t-shirt\n- One person you check in with, even briefly",
      "Create a tiny evening ritual you can rely on. A hot shower, a clean t-shirt, one chapter of a book that has nothing to do with love. Light a candle, put on the same calm playlist, drink the same herbal tea. Predictability is medicine when your inner world feels chaotic. The repetition isn't boring, it's what gives your nervous system a shape to settle into when everything else feels formless.",
      "## Protecting your nervous system from extra noise",
      "Be careful with your phone. The urge to check their profile, reread old messages, or scroll endlessly through breakup content can feel like coping, but it usually leaves you more depleted. Try moving your phone out of the bedroom for the first week. Replace one scroll session a day with something analog, a walk, a bath, a short journal entry, a call with someone who knows how to listen without trying to fix.",
      "Tell one or two trusted people what's happening, even if you keep it brief. You don't need a long explanation. A simple 'I'm going through a hard time and I might need to lean on you a little this week' is enough. Isolation can intensify heartbreak quickly, and a few small check-ins from people who love you can change the texture of an entire day.",
      "## Permission to do less",
      "And give yourself full permission to cry, to scroll less, to cancel plans, to wear the same hoodie three days in a row. Self-care isn't always a face mask or a perfectly planned morning routine. Sometimes it's choosing rest over performance, soup over salad, silence over advice. Trust that healing is already quietly happening underneath, even when all you did today was breathe, eat, and make it to bedtime.",
    ],
  },
  {
    slug: "healing-after-a-breakup-is-not-linear",
    seoTitle: "Breakup Recovery Timeline: Why You Still Miss Your Ex Months Later",
    metaDescription:
      "Why do I still miss my ex months later? The honest breakup recovery timeline, why healing isn’t linear, and what setbacks actually mean.",
    h1: "Why Healing Isn't Linear (And Why That's Okay)",
    title: "Breakup Recovery Timeline: Why Healing Isn’t Linear",
    excerpt:
      "You can have a good week and then suddenly miss them again. That's not regression, it's how grief actually moves.",
    category: "Healing",
    readTime: "6 min read",
    date: "April 28, 2026",
    author: "Bruna",
    image: img.Healing,
    imageAlt:
      "Hands holding a kintsugi bowl with gold cracks, symbol of non-linear healing after a breakup",
    related: ["physical-symptoms-of-heartbreak", "self-care-after-a-breakup", "racing-thoughts-after-a-breakup"],
    content: [
      "One of the most disorienting parts of heartbreak is the way it loops. You wake up feeling clear and strong, certain that you've turned a corner. By the afternoon, a song on the radio, the smell of their cologne on a stranger, or an old photo surfacing in your camera roll pulls you under again. Many people read this as failure. They think, 'I was doing so well, what's wrong with me?' Nothing is wrong with you. This is exactly how healing actually works.",
      "## Why healing moves in spirals, not a straight line",
      "Healing moves in spirals, not straight lines. Picture a spiral staircase: each time you come around, you pass the same view from the window, but you're standing at a different height. You're meeting the same pain from a slightly different place, with a little more capacity, a little more perspective, a little more of yourself intact. The wave looks the same, but you are not the same person meeting it.",
      "Expecting linear progress is one of the biggest sources of secondary suffering. We grieve the loss, and then we grieve our grief for not being on schedule. We compare ourselves to friends who 'bounced back' in a month, to influencers who turned their breakup into a glow-up, to our own past selves who seemed to recover more quickly from something smaller. Letting go of the timeline is often what allows real movement to happen.",
      "## What setbacks actually mean",
      "It also helps to know what the dips actually mean. Hard days after good ones are often a sign that something deeper is surfacing, a memory you hadn't fully processed, a fear about the future, a layer of grief that wasn't ready last week but is ready now. The pain isn't returning because you're broken. It's returning because you're finally safe enough, rested enough, or strong enough to feel it.",
      "## How to measure real progress",
      "Try to track your healing in months, not days. Notice the patterns instead of the moments. Are you sleeping a little better than you were four weeks ago? Are there more hours in the day when you're not thinking about them? Are you laughing more often, even briefly? That's progress. The bad afternoons are part of it, not a contradiction of it.",
      "If you're having a hard day after a string of good ones, you're not back at square one. You're somewhere new, doing the slow, brave work of becoming someone who has lived through this. Speak to yourself the way you'd speak to a friend in the same place: gently, without urgency, with the quiet faith that this too is part of getting better.",
    ],
  },
  {
    slug: "no-contact-rule-after-breakup",
    seoTitle: "No Contact Rule After a Breakup: Does It Work? (Full Guide)",
    metaDescription:
      "Does the no contact rule work after a breakup? How long it takes, why it helps, and how to actually stick to it without feeling cruel.",
    h1: "No Contact, With Compassion: A Kinder Way to Hold the Boundary",
    title: "No Contact Rule After a Breakup: Does It Actually Work?",
    excerpt:
      "No contact isn't punishment, for them or for you. It's the space your nervous system needs to come home to itself.",
    category: "Boundaries",
    readTime: "7 min read",
    date: "April 9, 2026",
    author: "Bruna",
    image: img.Boundaries,
    imageAlt:
      "An open door letting in soft light, symbolizing the boundary of going no contact after a breakup",
    related: ["how-to-cope-when-you-still-see-your-ex", "social-media-after-a-breakup", "staying-friends-with-an-ex"],
    content: [
      "No contact often gets framed as a cold, strategic move, a way to 'win' the breakup or make the other person miss you. That framing keeps you tethered. At its best, no contact is something much quieter and much kinder. It's an act of self-respect, a way of saying, 'I love myself enough to stop reopening the wound every time it tries to close.'",
      "## Why the no contact rule actually works",
      "The reason no contact works isn't manipulation. It's biology. Your brain formed an attachment to this person over months or years, and that attachment lives in the same neural pathways as physical addiction. Every text, every story view, every 'just checking in' message floods your system with a small dose of the very thing it's trying to detox from. The brain can't begin to rewire while it's still being fed.",
      "Every time you check their profile, reread old messages, or send a 'just one more' text, you're asking a fresh wound to stay raw. You're also robbing yourself of the version of you that exists on the other side of this, the one who isn't constantly recalibrating based on whether they posted, who they were with, or how quickly they replied.",
      "## How to handle the urge to reach out",
      "Try replacing the urge with a small, repeatable action. When the craving hits, do one of three things: a walk around the block, a voice note to a friend, or three slow breaths with your hand on your chest. You're not suppressing the feeling, you're giving it somewhere else to go. Over time, the gap between the urge and the action gets longer, and one day you'll notice the urge passed without you doing anything at all.",
      "Three things to do instead of texting them:\n- A short walk around the block\n- A voice note to a friend\n- Three slow breaths with a hand on your chest",
      "It also helps to remove the easy access points. Mute, don't follow. Archive the chat instead of rereading it. Move their photos to a folder you don't open. You don't have to delete everything in a dramatic gesture, you just have to make it slightly harder to fall back in. Friction is your friend in the first ninety days.",
      "## What to do if you break no contact",
      "And if you slip, don't spiral. Notice it, be kind about it, and begin again. No contact isn't a streak to protect or a rule to perform, it's a practice of choosing yourself, one moment at a time. The people who heal the most fully aren't the ones who never slip. They're the ones who keep coming back to themselves, gently, after they do.",
      "Eventually, no contact stops feeling like a discipline and starts feeling like a relief. You'll realize you went a whole day without checking. Then a week. Then you'll notice you're building a life that no longer has a hole shaped exactly like them, and that life will feel, against all odds, like yours again.",
    ],
  },
  {
    slug: "rebuilding-yourself-after-a-long-relationship",
    seoTitle: "How to Rebuild Your Life After a Long-Term Relationship Ends",
    metaDescription:
      "Lost yourself after a long-term relationship? A step-by-step guide to rebuilding your identity, routines and confidence after the breakup.",
    h1: "Rebuilding Your Identity After a Long Relationship",
    title: "How to Rebuild Yourself After a Long-Term Relationship Ends",
    excerpt:
      "When 'we' becomes 'I' again, it can feel like losing yourself, and quietly, like finding yourself too.",
    category: "Growth",
    readTime: "8 min read",
    date: "March 22, 2026",
    author: "Bruna",
    image: img.Growth,
    imageAlt:
      "A small green sprout growing in a terracotta pot, rebuilding yourself after a long relationship",
    related: ["journaling-prompts-after-a-breakup", "attachment-styles-and-breakups", "first-date-after-a-breakup"],
    content: [
      "Long relationships shape us in ways we don't always notice. Your routines, your taste in music, the restaurants you frequent, the way you spend Sundays, so much of it can carry the imprint of the other person. When they leave, those imprints suddenly stand out in sharp relief. You open the fridge and see foods you only bought because they liked them. You hear a song and don't know if you still love it or only loved it through their ears.",
      "This is one of the strangest griefs of a breakup: not just losing them, but losing the version of yourself that existed alongside them. The 'we' had its own gravity, and now that it's gone, you're left figuring out what orbits around just you.",
      "## Where to start rebuilding your identity",
      "The first step in rebuilding isn't reinvention. It's curiosity. What did you stop doing because they didn't enjoy it? What dreams did you quietly shelve because the timing was wrong, or because they weren't interested, or because you were prioritizing the relationship? What parts of you have been waiting patiently in the background for permission to come forward again?",
      "Start small. Order the meal you always wanted to try. Rearrange one corner of your home so it reflects only you. Buy the bedding you actually like. Say yes to one thing this week that's entirely your own, a class, a film, a walk in a part of the city you never went to together. These tiny acts are how you begin to remember the shape of your own preferences.",
      "## Listening to what you actually want again",
      "Pay attention to your body, not just your mind. Notice what music makes you want to move. Notice which foods you actually crave when you're alone. Notice the time you naturally want to wake up when no one else's schedule is shaping yours. Your body has been keeping a list of your real preferences this whole time. Now there's space to listen to it.",
      "## Moving toward, not just away from",
      "Be careful of the temptation to define yourself purely in opposition to the relationship. 'I'm the kind of person who would never tolerate that again' is useful, but it's still letting the past relationship hold the pen. The deeper work is asking what you're moving toward, not just what you're moving away from. Who do you want to be in your next relationship, with a partner, with friends, with yourself?",
      "Give it time, and let the rebuilding be uneven. Some weeks you'll feel like a stranger in your own life. Other weeks you'll feel a flicker of something that almost feels like excitement, a sense that there's actually room now for things you'd forgotten you wanted.",
      "Rebuilding identity isn't about erasing the relationship. The years you spent together happened, and they shaped you in ways both painful and beautiful. It's about expanding back into the full shape of who you are, bigger than the relationship, separate from it, and finally, unmistakably your own.",
    ],
  },
  {
    slug: "racing-thoughts-after-a-breakup",
    seoTitle: "How to Stop Overthinking About Your Ex After a Breakup",
    metaDescription:
      "Can’t stop thinking about your ex? Why your mind keeps spiraling after a breakup and 5 proven ways to quiet the rumination tonight.",
    h1: "When Your Mind Won't Stop Racing After a Breakup",
    title: "How to Stop Overthinking About Your Ex (and Sleep Again)",
    excerpt:
      "Rumination is exhausting. Here's how to gently interrupt the loop and give your nervous system a rest.",
    category: "Anxiety",
    readTime: "6 min read",
    date: "May 20, 2026",
    author: "Bruna",
    image: img.Anxiety,
    imageAlt:
      "A silhouette by a sunlit window, quieting racing thoughts after a breakup",
    related: ["how-to-sleep-after-a-breakup", "healing-after-a-breakup-is-not-linear", "journaling-prompts-after-a-breakup"],
    content: [
      "After a breakup, the mind becomes an echo chamber. Why did they leave? What if I had said something different? What did that last text really mean? Will I ever stop thinking about this? The questions are endless, and the answers, even when you find them, are never quite satisfying. You answer one and three more appear.",
      "## Why your mind keeps spiraling after a breakup",
      "Rumination isn't weakness, and it isn't a character flaw. It's the brain trying to solve an emotional problem with logic. Your mind is treating the breakup like a puzzle it can crack if it just thinks hard enough. But heartbreak doesn't resolve in the mind. It resolves in the body, in time, in being witnessed by people who care about you. No amount of replaying the last conversation is going to change what happened.",
      "## How to interrupt the loop",
      "Try this: set a 10-minute timer and write down every looping thought as fast as you can. Don't edit, don't organize, don't try to make it make sense. When the timer ends, close the notebook and step outside, even just to the doorstep. You're not suppressing the thoughts, you're containing them so they stop leaking into every hour of your day. Many people find that giving the loop a designated time slot is enough to loosen its grip the rest of the day.",
      "Grounding techniques also help when the spiral hits in the middle of something you can't escape, a meeting, a commute, a family dinner. Name five things you can see, four you can touch, three you can hear, two you can smell, one you can taste. These small sensory acts pull the nervous system out of the past and into the present, where relief is actually possible.",
      "## The 3 a.m. spiral and how to soften it",
      "Pay attention to the times of day when rumination is worst. For most people it's late at night or first thing in the morning, when there's nothing else to occupy the mind. Build a small buffer for those windows: a podcast queued up for the morning, a low-stakes show or audiobook for bedtime. You're not avoiding your feelings, you're choosing not to feed the loop at its hungriest moments.",
      "And remember, the mind quiets when the body feels safe. Walks, slow breathing, warm showers, a hand on your own chest, these are not small things. They tell your nervous system that the emergency is over, even when your thoughts insist it isn't. The racing usually slows not because you finally found the right answer, but because, eventually, your body stops asking the question.",
    ],
  },
  {
    slug: "guilt-after-a-breakup-moving-on",
    seoTitle: "Why Do I Feel Guilty for Moving On After a Breakup?",
    metaDescription:
      "Why do I feel guilty when I start to feel happy again after my breakup? Understanding moving-on guilt and how to release it.",
    h1: "The Guilt of Moving On: Why Feeling Better Can Feel Like Betrayal",
    title: "Why You Feel Guilty for Moving On After a Breakup",
    excerpt:
      "When happiness sneaks back in, it can trigger an unexpected wave of guilt. Here's how to make peace with it.",
    category: "Emotions",
    readTime: "5 min read",
    date: "May 24, 2026",
    author: "Bruna",
    image: img.Emotions,
    imageAlt:
      "Open journal beside dried flowers in soft light, guilt and moving on after a breakup",
    related: ["when-your-ex-moves-on-faster", "grief-when-you-ended-the-relationship", "first-date-after-a-breakup"],
    content: [
      "It happens quietly. You laugh at a joke, enjoy a meal, forget to check your phone for an afternoon, and then it hits you. A pang of guilt. How can you feel good when something so important ended? How can you be okay when, just weeks ago, you weren't sure you'd ever be okay again? Some people even describe a strange panic when joy returns, as if feeling better means the love wasn't real.",
      "## Why moving-on guilt is actually a sign of love",
      "That guilt is a sign of love, not disloyalty. It means the relationship mattered, that the person mattered, that you took it seriously. But it doesn't mean you're not allowed to feel alive again. Moving on isn't forgetting. It's choosing to live alongside the memory, not underneath it.",
      "## When grief and joy share the same afternoon",
      "Part of what makes this so confusing is that grief and joy can share the same afternoon. You can miss someone and still enjoy your coffee. You can wish things had gone differently and still feel proud of how you're handling it. The mind wants to pick one, but the heart isn't binary. Letting both exist at once is one of the most adult, most healing things you can practice.",
      "Notice the guilt, thank it for showing you what you valued, and let it pass. You don't have to argue with it. You don't have to prove to yourself that you've suffered enough. Your heart didn't break because you were careless with it. It broke because you were brave enough to love fully, and that same heart deserves to keep being used.",
      "## Letting yourself feel good again",
      "You don't owe your sadness a permanent home. Joy can coexist with loss, and over time it will start to outweigh it. In fact, it's one of the most honest things grief eventually teaches: that life keeps offering itself to us, even when we're not sure we deserve it yet. Saying yes to that offer isn't a betrayal. It's the whole point.",
    ],
  },
  {
    slug: "how-to-sleep-after-a-breakup",
    seoTitle: "How to Sleep After a Breakup: 7 Things That Help You Tonight",
    metaDescription:
      "Can’t sleep after a breakup? 7 gentle, science-backed strategies for falling (and staying) asleep when your heart is broken.",
    h1: "How to Sleep When Your Heart Is Broken",
    title: "How to Sleep After a Breakup: 7 Things That Help Tonight",
    excerpt:
      "The nights are often the hardest. Gentle strategies for finding rest when everything feels raw.",
    category: "Self-Care",
    readTime: "5 min read",
    date: "May 27, 2026",
    author: "Bruna",
    image: img["Self-Care"],
    imageAlt:
      "Soft linen blanket and warm tea by a sunlit window, sleeping better after a breakup",
    related: ["racing-thoughts-after-a-breakup", "physical-symptoms-of-heartbreak", "self-care-after-a-breakup"],
    content: [
      "There's something about the stillness of night that makes heartbreak louder. During the day, there are tasks, conversations, errands, small distractions that keep the pain at a manageable volume. At night, it's just you and everything you haven't processed yet. The bed that used to be shared. The silence that used to be a voice. The 3 a.m. mind that won't stop replaying the last conversation.",
      "## Lower the bar before bed",
      "Start by accepting that your sleep might be messy for a while. Fighting it creates a second layer of anxiety, the original pain plus the panic of 'I have to sleep or tomorrow will be even worse.' Instead, lower the bar. Aim for rest, not perfect sleep. Make your bedroom a soft place to be awake, not a battleground you have to win.",
      "Build a wind-down sequence and repeat it nightly, even when it feels pointless. Dim the lights an hour before bed. Put the phone in another room or across the room. Take a warm shower. Change into clothes that are only for sleep. Predictable cues help a frayed nervous system learn that it's safe to power down.",
      "A wind-down sequence that signals \u201Cit\u2019s safe to rest\u201D:\n- Dim the lights an hour before bed\n- Put the phone in another room\n- Take a warm shower\n- Change into clothes only used for sleep\n- Same calm playlist or audiobook every night",
      "## A simple way to settle back into your body",
      "Try a body scan once you're in bed. Lie on your back, place your hands on your belly, and slowly move your attention from your toes to the top of your head, breathing into each area for a few seconds. You're not trying to relax perfectly, you're reminding your body that it still belongs to you, and that it's safe enough to rest.",
      "## What to do when you wake up at 3 a.m.",
      "If you wake up at 3 a.m. with your mind spinning, don't reach for your phone. The blue light and the doomscrolling will only deepen the spiral. Turn on a low lamp, read something neutral, or listen to a calm voice, a sleep story, a meditation, a familiar podcast you've heard a hundred times. The middle of the night is not the time to solve your heartbreak. It's the time to wait gently for morning.",
      "And in the day, do what you can to support the night. Get some sunlight early, move your body a little, cut off caffeine by early afternoon, and try not to nap past 3 p.m. Sleep won't come back all at once, but it will come back. The body, even a heartbroken one, knows how to rest. It just needs you to stop standing in its way.",
    ],
  },
  {
    slug: "anger-after-a-breakup",
    seoTitle: "Why Am I So Angry After My Breakup? Causes & How to Heal",
    metaDescription:
      "Why am I so angry after my breakup? Why post-breakup anger hits so hard, what it actually means, and how to channel it without regret.",
    h1: "The Anger You Didn't Expect to Feel",
    title: "Why Am I So Angry After My Breakup? (And How to Heal It)",
    excerpt:
      "Anger after heartbreak is often the emotion we hide, but it's also one of the most healing ones to feel.",
    category: "Emotions",
    readTime: "6 min read",
    date: "May 30, 2026",
    author: "Bruna",
    image: img.Emotions,
    imageAlt:
      "Journal and dried flowers in warm light, sitting with anger after a breakup",
    related: ["guilt-after-a-breakup-moving-on", "journaling-prompts-after-a-breakup", "grief-when-you-ended-the-relationship"],
    content: [
      "We tend to romanticize heartbreak as sadness. Tears, longing, quiet grief, staring out of windows to melancholy music. But often, what shows up first, or out of nowhere weeks later, is anger. Hot, sharp, sometimes shocking anger. And most of us weren't taught what to do with it, especially toward someone we loved.",
      "## Why post-breakup anger is so intense",
      "Anger isn't the opposite of love. It's a response to having your boundaries crossed, your time wasted, your trust broken, or your needs minimized. It's a signal that something mattered to you, and that you deserved better. Many people feel guilty for being angry, as if the anger erases the good parts of the relationship. It doesn't. You can love someone deeply and still be furious at how things ended.",
      "## How to feel anger without making it worse",
      "The trick isn't to suppress the anger or to vent it destructively. Suppressed anger turns into depression, anxiety, or chronic resentment. Destructively expressed anger, drunk texts, public callouts, revenge fantasies acted on, gives you a few seconds of relief and weeks of regret. The middle path is to feel it fully and channel it intentionally.",
      "Write an angry letter you never send. Spell out exactly what you're furious about, in language you'd never say out loud. Don't edit. When you're done, close the notebook, or shred the pages. The point isn't communication, it's release. Many people are surprised by how much lighter they feel after letting the anger have a page of its own.",
      "## Move the anger through your body",
      "Move it through your body. Go for a run, take a boxing class, clean your apartment like you're reclaiming territory, because you are. Anger is energy, and energy needs somewhere to go. If it doesn't move through the body, it tends to settle in the jaw, the shoulders, the stomach, the sleep. Movement is one of the kindest things you can offer a furious heart.",
      "Over time, anger softens into something more useful: self-respect. You begin to see the red flags you missed, the needs you minimized, the patterns you're done repeating. You stop romanticizing what was and start getting honest about what actually happened. Anger, felt honestly, becomes a map toward the kind of love you actually want next, and the kind of love you're no longer willing to settle for.",
    ],
  },
  {
    slug: "journaling-prompts-after-a-breakup",
    seoTitle: "9 Journaling Prompts for a Breakup That Actually Help You Heal",
    metaDescription:
      "The best journaling prompts for a breakup, 9 structured prompts that move you through grief instead of keeping you stuck in the same loop.",
    h1: "Journaling Prompts That Actually Help You Heal",
    title: "9 Journaling Prompts for a Breakup (That Don’t Make It Worse)",
    excerpt:
      "Not all journaling works. These prompts are designed to move you through grief, not just circle it.",
    category: "Growth",
    readTime: "7 min read",
    date: "June 1, 2026",
    author: "Bruna",
    image: img.Growth,
    imageAlt:
      "A sprout in a terracotta pot, journaling prompts for healing after a breakup",
    related: ["rebuilding-yourself-after-a-long-relationship", "racing-thoughts-after-a-breakup", "anger-after-a-breakup"],
    content: [
      "Blank pages can feel intimidating, especially when your emotions are already overwhelming. 'Just write how you feel' is well-meaning advice that often leaves people staring at the page or, worse, looping endlessly through the same painful thoughts in ink. The right prompt can turn journaling from a spiral into a bridge, something that moves you forward instead of keeping you stuck.",
      "## How to use these prompts",
      "Below are nine prompts grouped into three stages of healing. You don't have to do them in order, and you don't have to answer them all. Pick the one that makes you slightly uncomfortable in a curious way, that's usually where the work is.",
      "Stage one: making sense of what happened.\n\n1. What did I actually lose in this relationship, and what did I only think I'd lost?\n2. If I'm honest, what were the signs I ignored, and why did I ignore them?\n3. What story am I currently telling myself about why this ended? Is it the only true version?",
      "Stage two: meeting yourself in the grief.\n\n4. What does the most tender part of me need to hear today, and who normally says it to me? Can I say it to myself?\n5. Write a letter to yourself from the perspective of someone who loves you unconditionally. What do they see in you that you can't see right now?\n6. List three things you're proud of yourself for this week, even if one of them is just getting out of bed. Be specific.",
      "Stage three: looking forward.\n\n7. What kind of person do I want to become through this experience, not in spite of it, but because of it?\n8. What did I learn about my own needs in this relationship that I want to honor in the next one?\n9. If I imagine myself one year from now, fully healed, what does an ordinary Tuesday look like? Where am I living, who am I with, what am I doing for myself?",
      "## A few practical notes on journaling through grief",
      "A few practical notes. Set a timer for ten to fifteen minutes per prompt, long enough to go past the surface, short enough that it doesn't become a marathon. Write by hand if you can; the slower pace tends to surface things typing skips over. And don't reread immediately. Close the notebook, do something gentle, and come back in a few days with fresh eyes.",
      "If a prompt brings up too much, stop. Healing through writing doesn't mean reliving every detail or forcing catharsis on a schedule. It means gently visiting the hard parts so they lose their grip, and making room for new stories, new hopes, and a slowly returning sense of yourself.",
    ],
  },
  {
    slug: "attachment-styles-and-breakups",
    seoTitle: "Attachment Styles After a Breakup: How Anxious, Avoidant & Secure Heal",
    metaDescription:
      "Why do anxious and avoidant exes react so differently to a breakup? How each attachment style grieves, and what each one needs to heal.",
    h1: "How Each Attachment Style Heals From a Breakup",
    title: "Attachment Styles and Breakups: How Each Style Heals",
    excerpt:
      "Understanding your attachment pattern can change how you move through heartbreak, and how you rebuild afterward.",
    category: "Growth",
    readTime: "9 min read",
    date: "May 22, 2026",
    author: "Bruna",
    image: img.Growth,
    imageAlt:
      "A small sprout in a sunlit pot, attachment styles and how each one heals from a breakup",
    related: ["rebuilding-yourself-after-a-long-relationship", "no-contact-rule-after-breakup", "first-date-after-a-breakup"],
    content: [
      "Most breakup advice is written as if we all react the same way to loss. We don't. The way you grieve, panic, shut down, or rebound is shaped by something deeper than willpower, it's shaped by your attachment style, the emotional blueprint you developed early in life for how love, safety, and separation feel. Learning your pattern doesn't mean labeling yourself. It means understanding why you do what you do, so you can meet yourself with the right kind of care.",
      "## How anxious attachment grieves a breakup",
      "If you have an anxious attachment style, a breakup can feel like freefall. The relationship was probably a primary source of reassurance, and without it, the mind spins into worst-case scenarios: they're already with someone else, they're happier without you, you weren't enough. The urge to reach out, check their social media, or seek closure repeatedly isn't weakness, it's a nervous system in search of the safety it lost.",
      "For the anxiously attached, healing starts with containment. The impulse is to chase connection in any form, old texts, rebounds, constant updates. Instead, try building a safety net with people you trust, scheduled check-ins so your nervous system has something predictable to hold onto. Journaling can help, but keep it structured so it doesn't turn into rumination. And remind yourself, often, that their silence isn't a verdict on your worth. It's just space, and space can be survived.",
      "## How avoidant attachment grieves a breakup",
      "If you have an avoidant attachment style, the breakup might look very different from the outside. You may seem fine, even distant. But beneath the surface, the loss is there, delayed and disorienting. Avoidant healing tends to start later, once the adrenaline of independence fades. The sadness may hit in quiet moments, weeks or months after, and the instinct is often to manage it alone.",
      "For the avoidantly attached, the risk isn't falling apart, it's never fully feeling it at all. Healing requires a counterintuitive move: letting someone in, just a little. A trusted friend, a therapist, even a journal that you actually read back. Avoidant healing isn't about becoming someone who needs people all the time. It's about learning that need isn't danger, and that connection doesn't always end in suffocation or loss.",
      "## How fearful-avoidant attachment grieves",
      "If you have a fearful-avoidant or disorganized style, heartbreak can feel completely contradictory. One day you're desperate for them back; the next you're relieved it's over. You oscillate between reaching out and pulling away, trusting and suspecting, needing and resenting. This isn't confusion about the relationship, it's confusion about safety itself, because the people who were supposed to be safe weren't always.",
      "For the fearful-avoidant, healing requires extra gentleness. Your system is already on high alert, and a breakup can trigger the sense that love is inherently dangerous. The work here is small and repeated: choosing one safe person and learning to trust them a little more over time. Noticing the cycle without judging it. Giving yourself permission to need someone without punishing yourself for it afterward. You're not broken, you're rebuilding a nervous system that learned early that love and harm came from the same place.",
      "## How secure attachment grieves",
      "And if you have a secure attachment style, you may still be devastated. Secure attachment doesn't make you immune to grief, it just means you have tools others are still building. You may feel the loss deeply, reach out to your support network naturally, and over time find your way back to equilibrium. But even secure people can get blindsided by an especially meaningful loss, or find themselves in a pattern they didn't expect. Your job isn't to be perfect at healing. It's to let it happen.",
      "The real power of knowing your attachment style isn't prediction, it's compassion. You stop asking yourself why you can't just move on, or why you're so needy, or why you're so shut down. You start meeting yourself where you actually are, with the right tools for your particular shape of grief. And eventually, you learn to hold your own heart the way you needed someone else to hold it all along.",
    ],
  },
  {
    slug: "how-to-cope-when-you-still-see-your-ex",
    seoTitle: "How to Cope When You Still See Your Ex (Work, Co-Parenting, Friends)",
    metaDescription:
      "Have to see your ex at work, school pickup, or in your friend group? How to protect your healing when going no contact isn’t an option.",
    h1: "What to Do When You Still Have to See Them",
    title: "How to Cope When You Have to See Your Ex Every Day",
    excerpt:
      "Co-parenting, shared workplaces, mutual friends, how to protect your healing when distance isn't an option.",
    category: "Boundaries",
    readTime: "7 min read",
    date: "May 14, 2026",
    author: "Bruna",
    image: img.Boundaries,
    imageAlt:
      "An open door framed in warm light, coping when you still have to see your ex",
    related: ["no-contact-rule-after-breakup", "staying-friends-with-an-ex", "how-to-talk-about-your-breakup"],
    content: [
      "One of the cruelest parts of certain breakups is that the person you most need space from is still woven into your daily life. Maybe you share children, an office, a friend group, a band, a building. The advice to 'go no contact and focus on yourself' doesn't quite fit when you'll see them at school pickup on Tuesday. If that's your situation, you're not failing at healing, you're doing something genuinely harder than most breakup guides acknowledge.",
      "## Healing is still possible, even with contact",
      "The first thing to know is that healing is still possible, even with contact. What changes is the strategy. Instead of full distance, you're aiming for emotional distance inside necessary proximity. That means narrowing the relationship down to its essential function, co-parent, colleague, fellow human in a shared room, and gently letting go of all the other roles you used to play for each other. You are no longer their confidant, their emotional support, or their soft place to land. You are something more limited now, and that's okay.",
      "## Set ground rules before every interaction",
      "Create a small set of rules for yourself before each interaction. Decide in advance what you'll talk about and what's off-limits. Logistics, the kids, the shared project, yes. Your weekend, their dating life, the relationship post-mortem, no. Having a script in your head, even a simple one, helps you stay grounded when emotions try to pull you sideways. You don't have to be cold; you just have to be clear. 'I'd rather not get into that' is a complete sentence.",
      "Pay attention to the moments around the contact, not just the contact itself. The anticipation before seeing them and the comedown after are often harder than the encounter. Build in a buffer on both sides: a walk before, a calming ritual after, a friend to text when it's done. Treat each interaction like a small physical event your nervous system is going to feel, because it is. You're not being dramatic, you're being honest about what it costs.",
      "## When you co-parent with your ex",
      "If you share children, remember that your healing and your co-parenting can live in two different rooms. You're allowed to grieve the partnership in private while showing up as a steady parent in public. You don't have to perform friendliness you don't feel, but you also don't have to weaponize the kids with your pain. Keep your communication short, factual, and child-focused. Save the harder feelings for a therapist, a journal, or a friend who isn't five years old.",
      "Be patient with how long this kind of healing takes. When you can't fully close the door, the wound stays a little open longer, and that's not your fault. Measure your progress by something other than distance: by how much shorter the recovery time gets after seeing them, by how rarely they show up in your thoughts when they're not in the room, by how much more of your life is yours again. Slowly, the room they take up in your inner world gets smaller, even when their place in your outer life can't change.",
    ],
  },
  {
    slug: "physical-symptoms-of-heartbreak",
    seoTitle: "Physical Symptoms of Heartbreak: Why a Breakup Hurts Your Body",
    metaDescription:
      "Chest pain, no appetite, exhaustion after a breakup? Why heartbreak causes real physical symptoms, and gentle ways to care for your body.",
    h1: "The Breakup Body: Why Heartbreak Actually Hurts",
    title: "Why Heartbreak Hurts Physically: Symptoms & What Helps",
    excerpt:
      "Tight chest, no appetite, exhaustion, restlessness, the physical side of grief is real, and it deserves real care.",
    category: "Healing",
    readTime: "7 min read",
    date: "May 16, 2026",
    author: "Bruna",
    image: img.Healing,
    imageAlt:
      "Hands cradling a kintsugi bowl, physical symptoms of heartbreak and how to care for the body",
    related: ["how-to-sleep-after-a-breakup", "self-care-after-a-breakup", "healing-after-a-breakup-is-not-linear"],
    content: [
      "Heartbreak isn't just an emotional event, it's a full-body one. In the days and weeks after a breakup, you may notice your chest feels tight, your stomach is in knots, your appetite has vanished or doubled, your sleep is wrecked, your shoulders are pulled up around your ears. None of this is in your head. Grief activates the same stress systems that respond to physical danger, and your body is doing exactly what it's built to do under threat.",
      "## Why heartbreak actually hurts your body",
      "When attachment is suddenly severed, the brain treats it a lot like a wound. The same regions that light up during physical pain get involved. Cortisol and adrenaline rise; oxytocin and dopamine drop. Your nervous system shifts into a vigilant, low-grade state of alarm. That's why you can feel exhausted and wired at the same time, why food can taste like nothing, why you can cry without warning when you sit down on the couch. Your body is grieving in its own language.",
      "## How to care for your body after a breakup",
      "Knowing this changes how you take care of yourself. Instead of pushing through with willpower, you can offer your body the same things you'd offer it if you had the flu: warmth, rest, gentle food, water, daylight. Eat small amounts often, even when you're not hungry. Aim for one slow meal a day that you actually sit down for. Drink more water than feels necessary. Get into bed earlier than usual, even if sleep is patchy. None of this is indulgent, it's basic maintenance for a system under load.",
      "## The right kind of movement when grieving",
      "Movement helps, but the right kind. High-intensity workouts can sometimes spike an already overactive stress response. In the early weeks, gentler movement often serves you better: long walks, slow yoga, stretching on the floor while music plays. The goal isn't to burn off the feelings, it's to remind your body that it's safe, and to give the stress hormones somewhere to go. If a hard workout feels good and grounding, do it. If it leaves you more frayed, scale down.",
      "Pay attention to touch, too. When you lose a partner, you often lose your main source of safe physical contact, and the body notices. Hugs from friends, a weighted blanket, a warm bath, your own hand on your chest while you breathe, these small inputs help regulate a nervous system that's missing its usual co-regulator. If you have a pet, lean into them shamelessly. They are very good medicine.",
      "And if your symptoms feel intense, panic attacks, chest pain, sustained insomnia, an inability to eat at all, please tell a doctor. Heartbreak is a medical-grade event, not a character weakness. Asking for support, whether that's a therapist, a GP, or a friend who'll bring you soup, isn't dramatic. It's the right response to what your body is actually going through. You're not too sensitive. You're a human, grieving, in a body that is doing its best to keep you here.",
    ],
  },
  {
    slug: "staying-friends-with-an-ex",
    seoTitle: "Should You Stay Friends With Your Ex? When It Helps & When It Hurts",
    metaDescription:
      "Should I stay friends with my ex? A non-judgmental guide to knowing when friendship heals, and when it quietly keeps you stuck.",
    h1: "Should You Stay Friends With Your Ex?",
    title: "Should You Stay Friends With Your Ex? How to Know",
    excerpt:
      "A non-judgmental look at when friendship works, when it quietly keeps you stuck, and how to tell the difference.",
    category: "Boundaries",
    readTime: "7 min read",
    date: "May 18, 2026",
    author: "Bruna",
    image: img.Boundaries,
    imageAlt:
      "An open door letting in light, deciding whether to stay friends with an ex",
    related: ["no-contact-rule-after-breakup", "how-to-cope-when-you-still-see-your-ex", "when-your-ex-moves-on-faster"],
    content: [
      "Few breakup questions are as loaded as this one. Some people swear that staying friends is mature, evolved, the right thing to do. Others insist it's denial dressed up as kindness. The truth, as usual, is more personal than either camp suggests. Whether friendship with an ex is healing or harmful depends less on the rule and more on the specific people, the specific relationship, and the specific moment in time.",
      "## The honest question to ask yourself first",
      "The first honest question to ask yourself is: what do I actually want from this friendship? If the answer is 'to keep them in my life because losing them entirely feels unbearable,' that's not a friendship yet, that's grief in a friendlier costume. Real friendship can come later, but it usually can't be the bridge over the grief. Trying to skip the loss by staying close often just stretches the loss out over a much longer period.",
      "## When staying friends actually works",
      "There are situations where staying friends works well. You had a long, gentle relationship that ran its course. You genuinely enjoy each other as people, with romantic feelings fully metabolized on both sides. You have a shared community or history that you both want to honor. You can be in each other's lives without secretly waiting for the other to change their mind. In those cases, friendship can be a real and lovely thing, usually after a meaningful period of distance first.",
      "## When friendship is keeping you stuck",
      "And there are situations where friendship quietly keeps you stuck. If you find yourself dressing up before you see them, monitoring their dating life, feeling jealous of their new friends, or replaying their texts for hidden meaning, the 'friendship' is doing something else for you. If staying close means you can't fully open to someone new, or you keep your life smaller than it wants to be, the cost is higher than it looks. None of this makes you weak, it just means the timing isn't right yet.",
      "A useful test is the 'good news test.' Imagine they call you to share that they've met someone wonderful, or just got the job they always wanted, or are moving to the city you always dreamed of together. If your honest reaction is happiness for them, with maybe a small bittersweet edge, you may be ready for friendship. If your honest reaction is a wave of grief, jealousy, or quiet devastation, you're not, and that's information, not failure.",
      "If you decide to take a break from each other, you can frame it kindly. 'I care about you and I think I need some space to really land on the other side of this. I'd love to be in touch again down the line, but right now I need to not be.' That's not cruelty; it's care, for both of you. Friendship, if it's meant to happen, can come later, when it's something you choose freely, not something you cling to because letting go feels too final.",
    ],
  },
  {
    slug: "when-your-ex-moves-on-faster",
    seoTitle: "My Ex Moved On Fast: Why It Hurts So Much (and How to Cope)",
    metaDescription:
      "“My ex moved on so fast.” Why it hurts so much, what it really means, and how to protect your healing when they seem happier without you.",
    h1: "When They Move On Faster Than You",
    title: "My Ex Moved On So Fast, Why It Hurts and How to Cope",
    excerpt:
      "Seeing them happy with someone new while you're still grieving is one of the worst feelings. Here's how to carry it.",
    category: "Healing",
    readTime: "7 min read",
    date: "May 20, 2026",
    author: "Bruna",
    image: img.Healing,
    imageAlt:
      "Hands holding a kintsugi bowl, coping when your ex moves on faster than you",
    related: ["social-media-after-a-breakup", "rebound-relationships-after-a-breakup", "guilt-after-a-breakup-moving-on"],
    content: [
      "Few things sting like discovering your ex seems to be doing fine, better than fine, while you're still piecing yourself back together. New partner. New photos. New trips. New version of the life you thought you'd share. Meanwhile you're trying to remember to eat lunch. The unfairness of it can make grief sharpen into something close to rage. None of that means you're petty. It means you loved them, and now you're watching someone else hold the space you used to.",
      "## Why what you see online is rarely the full picture",
      "The first thing worth knowing is that what you're seeing is almost never the full picture. Posts, stories, and updates are highlight reels, often curated specifically to broadcast 'I'm okay.' People in pain post the most carefully composed photos. New relationships that follow long ones are frequently softer than they look from the outside, sometimes a rebound, sometimes a distraction, sometimes the real thing, but almost always more complicated than a smiling beach photo suggests. You are comparing your inside to their outside.",
      "## Different attachment styles, different timelines",
      "It's also true that different attachment styles grieve on different timelines. People with more avoidant patterns often look like they've moved on quickly because their feelings tend to surface later, sometimes months down the line. People with more anxious patterns feel everything sooner and louder. Neither timeline is more honest. Speed of recovery is not a measure of how much someone cared. It's a measure of how their particular nervous system processes loss.",
      "The hardest reframe, and the most useful one, is this: their healing isn't a referendum on your worth. Whether they spend the next year alone or get engaged next month says almost nothing about what you meant to them, what the relationship was, or what kind of love you're capable of. The story of you doesn't get rewritten by what they do next. The relationship was real because you both lived it. That doesn't go away when they post a new photo.",
      "## How to protect your healing",
      "Protect yourself from the drip-feed. Mute, unfollow, or block, not as an act of bitterness, but as basic care. You wouldn't sit outside their house watching their windows; you don't have to do the digital version either. Every time you check, you re-open the wound a little. Every time you don't, the skin gets a chance to close. Give yourself the gift of not knowing for a while.",
      "And let yourself feel the unfairness without trying to fix it. It is unfair. You don't have to be enlightened about it. Cry, vent to a friend, write the angry letter you'll never send. Then, slowly, return to your own life, the one that's quietly being built underneath the grief. One day, often without noticing the exact moment, you'll realize you haven't checked in weeks. Their next chapter will stop feeling like a verdict, and start feeling like simply theirs.",
    ],
  },
  {
    slug: "rebound-relationships-after-a-breakup",
    seoTitle: "Rebound Relationships: Do They Ever Work? Signs, Risks & Timing",
    metaDescription:
      "Are rebound relationships a bad idea after a breakup? Signs you’re in one, when they actually work, and what you miss by skipping the empty room.",
    h1: "Rebounds: The Quiet Risk of Filling the Void Too Soon",
    title: "Rebound Relationships: Do They Work? (And When to Wait)",
    excerpt:
      "A non-judgmental look at why we reach for someone new, and what we miss when we skip the empty room.",
    category: "Healing",
    readTime: "7 min read",
    date: "May 22, 2026",
    author: "Bruna",
    image: img.Healing,
    imageAlt:
      "Hands holding a small ceramic bowl, rebound relationships and filling the void after a breakup",
    related: ["first-date-after-a-breakup", "when-your-ex-moves-on-faster", "attachment-styles-and-breakups"],
    content: [
      "The instinct to fill the empty space after a breakup is one of the most human things there is. The bed feels too big. The phone is too quiet. The future you'd half-imagined together has gone blank. So you open the dating apps, you accept the drink, you text the person who has always been a little in love with you. There's no shame in any of this. The urge isn't a character flaw, it's the nervous system trying to soothe an unbearable absence as fast as possible.",
      "## Why rebound relationships often backfire",
      "The trouble with rebounds isn't that they're morally wrong. It's that they often don't do what we hope they'll do. A new person can briefly turn down the volume on grief, but they can't actually metabolize it. The feelings get postponed, not resolved. Many people describe rebounds as a kind of emotional credit card: you get to feel okay now, but the bill comes due later, often when the rebound itself ends and both losses arrive at once.",
      "## What rebounds cost the other person",
      "There's also a fairness question. The new person rarely gets to meet you, they meet a version of you that's still half-tangled in someone else. They may sense it without being able to name it. Even if you're honest about where you are, it's hard to be fully present with one person while another is still echoing through you. Sometimes that's fine and everyone goes in eyes open. Sometimes it leaves a second person hurt for no reason that had anything to do with them.",
      "None of this means you have to stay celibate for a year, or that any contact with a new person before some imaginary finish line is a mistake. It just means it's worth asking yourself an honest question before each step: am I reaching for this person because I'm drawn to them, or because I can't bear to sit with myself right now? Both can be true at once. The second one isn't shameful, but it's useful to know when it's driving.",
      "## The case for sitting in the empty room first",
      "Try, when you can, to spend a little time in the empty room. Not forever. Just enough to learn what it actually feels like to be alone without immediately distracting yourself out of it. The first nights are usually the worst. After a while, the silence stops feeling like punishment and starts feeling like space. Hobbies you forgot you had come back. Friendships you'd let drift get watered again. The version of you that existed before the relationship, and that has been quietly waiting, gets a chance to stretch.",
      "And if you do find yourself in a rebound, you don't have to torch it in panic. Just be honest, with yourself first, then with them. Slow down. Notice when you're using them as a painkiller versus actually choosing them. Sometimes rebounds become real relationships. Sometimes they're a small chapter that taught you something. Either way, the goal is the same: not to avoid the empty room forever, but to make sure that the next person you let in is someone you actually want there, not just someone better than no one.",
    ],
  },
  {
    slug: "unexpected-breakup-triggers",
    seoTitle: "Why Random Things Trigger You After a Breakup (Songs, Smells, Places)",
    metaDescription:
      "Why does a song, a smell, or an empty side of the bed wreck you weeks later? How unexpected breakup triggers work and how to soften them.",
    h1: "The Things Nobody Warned You About After a Breakup",
    title: "Why Random Things Make Me Cry After My Breakup",
    excerpt:
      "The small, strange triggers, a song, a smell, an empty side of the bed, that hit harder than you'd expect.",
    category: "Healing",
    readTime: "6 min read",
    date: "May 24, 2026",
    author: "Bruna",
    image: img.Healing,
    imageAlt:
      "Kintsugi bowl in soft light, unexpected breakup triggers and gentle ways to soften them",
    related: ["healing-after-a-breakup-is-not-linear", "social-media-after-a-breakup", "racing-thoughts-after-a-breakup"],
    content: [
      "Most people are ready for the obvious kinds of pain after a breakup: the crying, the missing them, the lonely nights. What catches us off guard are the quieter ambushes. The way a particular song you used to skip together now stops you in the supermarket. The smell of their shampoo on a stranger in the elevator. The half-empty side of the bed that somehow takes up the whole room. Nobody really warns you about these, and they can feel disproportionately painful when they hit.",
      "## Why small triggers hit so hard",
      "Part of why these moments hurt so much is that they bypass thought entirely. They land in the body before the mind catches up. The brain stored the relationship not just as memories, but as sensory associations, sounds, smells, textures, routines. When one of those associations is triggered, the whole emotional package opens at once. That's why a thirty-second song clip can floor you more than a long, deliberate conversation about the breakup.",
      "It also helps to know that the most painful triggers are usually about ordinariness, not drama. It's rarely the big anniversaries or the famous date spots. It's the cereal aisle. The walk to the train. The little ritual you didn't realize was a ritual until it was gone. Love builds its home in the mundane, which means grief lives there too. The texture of a normal Tuesday is often where the real ache lives.",
      "## What to do when a trigger ambushes you",
      "When one of these moments catches you, try not to argue with it. The temptation is to think, 'I shouldn't be this upset about a song.' But the song isn't the point, it's the door. Let yourself feel what's behind the door for a minute. Stand still, breathe, name what's happening: 'I'm having a wave. This will pass.' These waves tend to peak quickly when you let them and stretch out for hours when you fight them.",
      "## How triggers change over time",
      "Over time, the triggers change. Some get quieter. Some get reclaimed, the song becomes yours again, the cafe becomes a place you go alone with a book and actually love. Some never fully lose their charge, but they stop knocking you over. You'll be walking past their old building one day and realize you noticed it, felt a small soft pang, and kept walking. That's healing, too. Not the absence of memory, but the gentler relationship to it.",
      "And you can be proactive without being avoidant. It's okay to skip the playlist for now. It's okay to take a different route home for a few weeks. It's okay to put their hoodie in a box at the back of the closet. You're not erasing them, you're protecting a system that's still raw. The reminders that you can't avoid will find you anyway. Spare yourself the ones you can.",
    ],
  },
  {
    slug: "how-to-talk-about-your-breakup",
    seoTitle: "How to Tell People About Your Breakup Without Reliving It",
    metaDescription:
      "Tired of explaining your breakup to everyone? Simple, kind scripts for telling people you’ve broken up without losing your composure.",
    h1: "How to Answer 'So What Happened?' Without Reliving It",
    title: "How to Tell People About Your Breakup (Without Reliving It)",
    excerpt:
      "You don't owe anyone the full story. Here's how to set kind, simple boundaries in social situations.",
    category: "Boundaries",
    readTime: "6 min read",
    date: "May 26, 2026",
    author: "Bruna",
    image: img.Boundaries,
    imageAlt:
      "A door opening to a garden, gentle boundaries when talking about your breakup",
    related: ["no-contact-rule-after-breakup", "how-to-cope-when-you-still-see-your-ex", "social-media-after-a-breakup"],
    content: [
      "One of the more underrated forms of breakup fatigue is the social one: the slow drain of telling the story over and over. A coworker who didn't know. A relative at a family lunch. An old friend who only just found out. Each time, you're asked to summarize one of the most painful experiences of your life in a few sentences, often while standing near a snack table. By the third or fourth retelling, you can feel something crack a little.",
      "The first thing worth knowing is that you don't owe anyone a complete account. Politeness doesn't require self-exposure. People often ask out of genuine care, but the question 'what happened?' is also a reflex, something to say when they don't know what else to say. You're allowed to answer the spirit of it (you care) without answering the literal of it (give me the whole story right now).",
      "## A simple script for talking about your breakup",
      "Have a short, neutral line ready before you need it. Something like, 'We grew apart in the end. It was the right call but it's been hard.' Or, 'It just didn't work out, and I'm taking some time to be okay with that.' Or even, 'Honestly, I'd rather not get into it right now, but thank you for asking.' Saying the same gentle sentence each time gives you a kind of armor, so you're not improvising under emotional load.",
      "## Who to share the real story with",
      "Notice the difference between people who can hold the real story and people who can't. Some friends are a safe place to bring the full mess. Others mean well but will turn it into gossip, advice, or a chance to talk about their own breakup. You don't have to grade anyone, just notice, and adjust what you share accordingly. The same vulnerability that heals you with one person can leave you feeling exposed with another.",
      "If someone pushes for more than you want to share, it's okay to redirect. 'I appreciate you asking, I'm trying not to talk about it too much these days. How are you?' Most people will take the hint without hurt feelings. The few who don't are telling you something important about how much of your inner life is safe with them.",
      "## Permission to leave the conversation",
      "And give yourself permission to leave the conversation if you need to. Step outside, go to the bathroom, refill your drink. You don't have to white-knuckle through a small talk question that's accidentally reopened your chest. Your healing is more important than the comfort of someone you barely know. The grace you extend to others doesn't have to come at the cost of the grace you extend to yourself.",
    ],
  },
  {
    slug: "social-media-after-a-breakup",
    seoTitle: "How to Stop Checking Your Ex’s Social Media After a Breakup",
    metaDescription:
      "Can’t stop checking your ex’s Instagram? Why the urge isn’t weakness, and a kinder, biology-aware way to finally break the habit.",
    h1: "Social Media After a Breakup: A Gentler Approach Than 'Just Don't Look'",
    title: "How to Stop Checking Your Ex’s Instagram (A Kinder Way)",
    excerpt:
      "The urge to check isn't weakness, it's biology. Here's how to work with it instead of against it.",
    category: "Self-Care",
    readTime: "7 min read",
    date: "May 28, 2026",
    author: "Bruna",
    image: img["Self-Care"],
    imageAlt:
      "Soft morning light over a calm space, managing social media after a breakup",
    related: ["no-contact-rule-after-breakup", "when-your-ex-moves-on-faster", "unexpected-breakup-triggers"],
    content: [
      "Almost every breakup guide says the same thing about social media: don't look. It's good advice, and it's also nearly impossible to follow on willpower alone. Checking their profile in the middle of the night doesn't mean you're weak or obsessed. It means your brain has lost access to a person it had wired itself around, and it's reaching for the only window it has left. The urge is biological. The strategy needs to account for that.",
      "Start by making the urge harder to act on rather than relying on resisting it. Unfollow or mute them, not as a dramatic statement, but as basic hygiene. Unfollow their best friend, their sister, their dog account if you have to. Move the apps off your home screen. Log out so each check requires a password. Each small piece of friction gives the rational part of your brain a few extra seconds to catch up with the impulsive part. Those seconds matter.",
      "Small friction tricks that make checking harder:\n- Unfollow or mute, not just their account but their close circle too\n- Move social apps off your home screen\n- Log out so each open requires a password\n- Set a screen-time limit on the apps you slip into most\n- Delete the app for a week and see how you feel",
      "## What checking their profile actually does to you",
      "Be honest about what checking actually does for you. There's a brief hit of feeling connected to them, followed almost always by a longer comedown of feeling worse. Maybe they posted something cryptic and now you're spiraling. Maybe they posted nothing and now you're spiraling about that. Maybe there's a new face in the background of a story. Whatever you find, it's almost never the relief you went looking for. The check is a slot machine that mostly pays out in pain.",
      "## What you post matters too",
      "It also helps to think about what you're posting, not just what you're consuming. The temptation to post 'I'm fine, actually thriving' content right after a breakup is real and very human. But performing okayness online often makes it harder to actually feel okay offline. You end up managing the audience instead of tending to yourself. If you want to post, post. Just notice when you're posting for them, and gently consider whether the energy might be better spent elsewhere.",
      "## Curating a softer feed",
      "Curate your feed actively. Mute accounts that suddenly feel painful, the couple content, the wedding photos, the relationship influencers. Follow accounts that genuinely soothe or distract you: nature, books, animals, a hobby you've always wanted to try. The algorithm will follow your lead. Within a week or two, your feed can become a noticeably softer place to land than it was the day of the breakup.",
      "And if you slip and check, don't spiral about the slip. Close the app, take a breath, drink some water, do one small kind thing for yourself, and start again. You're not trying to be perfect; you're trying to make checking a little harder and a little rarer until, one day, the urge mostly goes quiet on its own. That day comes, even if it doesn't feel possible from where you're standing now.",
    ],
  },
  {
    slug: "grief-when-you-ended-the-relationship",
    seoTitle: "I Broke Up With Them and I’m Devastated: Why It Still Hurts",
    metaDescription:
      "\"I broke up with him and I’m devastated.\" Why the person who ended the relationship grieves too, and how to handle the guilt and doubt.",
    h1: "When You Were the One Who Ended It",
    title: "I Broke Up With Him and I’m Devastated, Why It Still Hurts",
    excerpt:
      "Being the one who left doesn't mean it doesn't hurt. A kind look at the specific shape of leaver's grief.",
    category: "Healing",
    readTime: "7 min read",
    date: "May 30, 2026",
    author: "Bruna",
    image: img.Healing,
    imageAlt:
      "Hands cradling a kintsugi bowl, leaver's grief after ending the relationship",
    related: ["guilt-after-a-breakup-moving-on", "anger-after-a-breakup", "rebuilding-yourself-after-a-long-relationship"],
    content: [
      "There's an unspoken assumption that the person who ends the relationship doesn't get to grieve it. You made the choice, so you must be okay, right? In reality, breakup grief on the leaving side is often just as deep, sometimes deeper, than on the receiving side. It's just shaped differently. There's a particular kind of pain that comes with being the one who let go, and it deserves to be named.",
      "## Why leaver’s grief shows up later",
      "Leaver's grief usually shows up later. In the first days or weeks, there's often relief, even a strange sense of lightness. You've finally done the thing you'd been turning over for months. Then, slowly, the second wave arrives: the missing them, the doubt, the guilt, the questioning. By the time it hits, your support system has often moved on, assuming you're doing fine because you were the one with the agency.",
      "## How to handle the guilt of leaving",
      "Guilt is one of the heaviest parts. You may replay the conversation, the timing, the way you said it. You may worry about how they're doing, check on them in ways that aren't good for either of you, or try to take care of them in ways that blur the breakup back into a relationship. It's worth remembering that ending something with care is still ending it with care, but you can't end a relationship and stay responsible for the other person's healing. They have to do their own. So do you.",
      "## When you doubt your decision at 1 a.m.",
      "Doubt is the other big one. You'll likely have a night, maybe several, when you wonder if you've made a terrible mistake. The good memories will come flooding back. The hard parts will conveniently blur. This is normal. Grief is selective, and missing someone is not the same as wanting to go back. Try to remember why you left when your mind is calm, not when it's lonely at 1 a.m. Write yourself a letter early on, while the reasons are still vivid, and read it back to yourself on the hard nights.",
      "You may also have to grieve the version of yourself that loved them. Ending a relationship often means saying goodbye to a specific identity, the role you played, the life you imagined, the future you'd half-built. That loss is real even when leaving was the right call. You can be sure of the decision and still mourn what it cost you. Both can be true at the same time.",
      "Give yourself permission to be sad, even loudly. You don't have to perform certainty for everyone else. 'I know it was the right thing and it still really hurts' is a complete sentence. The people in your life who get it will hold the contradiction without needing you to resolve it. Healing for the leaver isn't about proving you made the right choice, it's about letting yourself feel the loss of what was real, while trusting the part of you that knew it couldn't continue.",
    ],
  },
  {
    slug: "first-date-after-a-breakup",
    seoTitle: "When Is It Okay to Date Again After a Breakup? Signs You’re Ready",
    metaDescription:
      "How do you know when you’re ready to date after a breakup? Signs you’re ready, signs you’re not, and how to take a gentle first step.",
    h1: "The First Date After Heartbreak",
    title: "When Is It Okay to Date Again After a Breakup?",
    excerpt:
      "How to know when you're ready, how to take it slowly, and how to be kind to yourself if it stirs everything back up.",
    category: "Healing",
    readTime: "7 min read",
    date: "June 1, 2026",
    author: "Bruna",
    image: img.Healing,
    imageAlt:
      "A kintsugi bowl in warm light, first date after a breakup and knowing you're ready",
    related: ["rebound-relationships-after-a-breakup", "attachment-styles-and-breakups", "rebuilding-yourself-after-a-long-relationship"],
    content: [
      "The first date after a breakup is rarely just a date. It's a small referendum on whether you can do this again, whether your heart still works, whether someone new can hold your attention, whether you can sit across from a stranger without comparing them to a ghost. It can be exciting, nauseating, hopeful, and grief-tinged all in the same hour. Whatever you feel, you're not doing it wrong.",
      "## How to know if you’re dating from curiosity or pressure",
      "Start with an honest question: am I going on this date because I'm genuinely curious about someone new, or because I'm trying to prove something, to myself, to my ex, to my friends? Both reasons are very human, but they lead to different experiences. Dating to prove tends to leave you depleted no matter how the night goes. Dating from curiosity, even cautious curiosity, leaves room for the evening to actually surprise you.",
      "## You don’t have to be ‘fully over it’ to date",
      "You don't need to be 'fully over it' to date again. Almost no one is. A more useful question is whether you can be present with another person for a couple of hours without your ex sitting invisibly at the table. If they'd dominate every thought, it may be early. If you can think about them sometimes and still actually see the person in front of you, you're probably more ready than you feel.",
      "## Keeping the first date small and low-stakes",
      "Keep the first date small. Coffee, a walk, a drink, something with a built-in exit. Long dinners, weekend trips, and 'let's spend the whole day together' plans put more weight on a first meeting than is fair to either of you. A short, low-stakes date lets you notice how you feel without committing to feeling it for six hours.",
      "Be gentle with yourself afterward, regardless of how it went. A good first date can stir up unexpected grief, a reminder of how much you miss the easy intimacy you used to have with someone who already knew you. A bad first date can make you wonder if you'll ever feel anything again. Neither reaction is a verdict. They're just data points in a much longer process. Whatever you feel on the way home, treat yourself the way you'd treat a friend who'd just done something brave.",
      "And if dating turns out to be more than you can hold right now, you're allowed to step back. You can delete the apps for a month, cancel the second date, return to the slow work of being with yourself. There's no medal for being the first one back out there. The goal isn't to date as soon as possible, it's to date in a way that feels honest to who you are now. When you do, the right people will be able to meet you there.",
    ],
  },
  {
    slug: "how-long-does-it-take-to-get-over-a-breakup",
    seoTitle: "How Long Does It Take to Get Over a Breakup? (Honest Answer)",
    metaDescription:
      "How long does it really take to get over a breakup? What the research says, what shapes your timeline, and why there's no fixed number of months.",
    h1: "How Long Does It Actually Take to Get Over a Breakup?",
    title: "How Long Does It Take to Get Over a Breakup?",
    excerpt:
      "The honest answer isn't a number. It's a slow softening that depends on more than time alone.",
    category: "Healing",
    readTime: "6 min read",
    date: "June 5, 2026",
    author: "Bruna",
    image: img.Healing,
    imageAlt:
      "Open journal and a warm cup of tea in morning light, marking the slow passage of time after a breakup",
    related: ["healing-after-a-breakup-is-not-linear", "closure-after-a-breakup", "reconnecting-with-yourself-after-a-breakup"],
    content: [
      "There's a number that gets thrown around a lot online: three months for a short relationship, six months to a year for a longer one, half the length of the relationship for marriages. It's a comforting formula, but it's also misleading. Heartbreak doesn't run on a calendar. Some people feel mostly themselves again in eight weeks. Others are still finding new layers a year and a half later. Neither group is doing it wrong.",
      "## What the research actually says about breakup recovery time",
      "The most-cited study on this, from researchers at the University of Arizona, found that the average person felt significantly better about eleven weeks after a breakup. But 'significantly better' isn't the same as 'over it.' Other research on divorce and long-term relationships suggests the deeper integration, where the loss stops shaping your daily decisions, usually takes closer to a year, sometimes longer. The honest answer is that the acute pain often passes in months, but the rewiring of who you are without them takes longer than most people expect.",
      "## What actually shapes your timeline",
      "A few things matter more than the length of the relationship. How the breakup happened, whether it was sudden, whether you were blindsided, whether there was betrayal. How entangled your lives were, shared home, shared finances, shared children, shared social circle. Your attachment style, your support system, your own history with loss. Whether you're keeping any contact with them. Whether you're sleeping. Whether you have somewhere to put the feelings other than your own head.",
      "Things that tend to lengthen the timeline:\n- Ongoing contact, even friendly contact\n- Checking their social media\n- Replaying conversations on a loop with no outlet\n- Suppressing the grief to look fine for other people\n- Jumping into a rebound before you've felt the loss",
      "## Why progress doesn't feel like progress",
      "One of the most disorienting parts of recovery is that it rarely feels like you're getting better while it's happening. The day-to-day texture changes so slowly that you only notice the progress in hindsight. You'll suddenly realize you went a whole afternoon without thinking about them. You'll notice an old song doesn't gut you anymore. You'll catch yourself laughing without first checking whether you're allowed to. Recovery is mostly made of small, quiet moments like that, stacked on top of each other.",
      "## When to be patient with yourself, and when to ask for help",
      "If, six months in, you're still unable to function, still crying every day, still avoiding work and friends, it doesn't mean you're broken. It usually means the grief is bigger than what one person can hold alone. That's not a failure of healing, it's a signal to bring more support in: a coach, a therapist, a group, someone who can help you carry it. Some breakups touch older wounds, and those wounds need their own kind of care.",
      "The most useful reframe is this: you're not trying to 'get over' them on a deadline. You're slowly becoming someone whose life no longer organizes itself around their absence. That happens in weeks for some people and years for others. Both are okay. The point isn't the speed, it's that you keep, gently, going.",
    ],
  },
  {
    slug: "crying-after-a-breakup",
    seoTitle: "Crying After a Breakup: Why You Can't Stop (and Why It Helps)",
    metaDescription:
      "Why you can't stop crying after a breakup, what the tears are actually doing for your body, and when crying is healthy vs a sign you need support.",
    h1: "Why You Can't Stop Crying After a Breakup",
    title: "Crying After a Breakup: Why It Happens (and Why It Helps)",
    excerpt:
      "Tears aren't weakness. They're one of the ways your body metabolizes a loss too big to think your way through.",
    category: "Emotions",
    readTime: "5 min read",
    date: "June 8, 2026",
    author: "Bruna",
    image: img.Emotions,
    imageAlt:
      "A crumpled tissue and a single dried flower on warm linen, the tenderness of crying after a breakup",
    related: ["physical-symptoms-of-heartbreak", "self-care-after-a-breakup", "loneliness-after-a-breakup"],
    content: [
      "You're standing in the kitchen, or driving, or in the middle of a meeting, and suddenly your eyes are full again. Maybe you've been crying for days. Maybe you can't cry at all and you're worried about that too. Both are normal. Tears after a breakup don't follow any schedule we'd choose, and trying to control them often makes them harder to move through.",
      "## What crying actually does for your body",
      "Emotional tears are chemically different from the tears your eyes make to flush out dust. They contain stress hormones and natural painkillers, and crying is one of the ways your body literally drains some of the cortisol that builds up under grief. That heavy, slightly hollowed-out calm you sometimes feel after a long cry isn't your imagination. Your nervous system has just done something it needed to do.",
      "Suppressing tears, especially in the first weeks, tends to keep the grief sitting in the body instead of moving through it. Many people who 'didn't cry' after a breakup find it surfacing months later in the form of insomnia, chest tightness, exhaustion, or panic. The body keeps the score either way, it's gentler when you let the tears come.",
      "## Why the tears feel disproportionate",
      "A song lyric, a familiar smell, the way the light hits the kitchen counter, the smallest thing can set you off. That's because heartbreak isn't only grieving the person. It's grieving the future you'd quietly built around them, the version of yourself that existed in the relationship, the small daily intimacies, the inside jokes, the sense of being known. All of that gets activated by ordinary cues, and the tears are your system processing layer after layer of what's been lost.",
      "## How to cry in a way that helps, not depletes",
      "Try to give yourself permission to cry without immediately trying to fix or analyze what's happening. Put a hand on your chest. Breathe slow into your belly. Let the sound out if there's sound. Curling up under a blanket, holding a warm drink, or being held by someone safe can all help the cry move through and then settle, rather than spiraling into hours of rumination.",
      "Three small things that help after a long cry:\n- A glass of water and something warm to eat\n- A short walk outside, even just to the doorstep\n- A shower or a wash of the face with cool water",
      "## When crying becomes a signal to ask for more support",
      "Crying every day for the first month or two is normal. Crying that doesn't loosen at all over time, or that comes with thoughts of hurting yourself, of not wanting to be here, of being unable to eat or get out of bed for weeks, is a signal to bring more support in, a coach, a therapist, your doctor. You don't have to white-knuckle this alone. Reaching out isn't an admission of weakness, it's the same gesture as the crying itself: letting the weight be witnessed so it can finally start to move.",
    ],
  },
  {
    slug: "how-to-stop-loving-someone",
    seoTitle: "How to Stop Loving Someone Who Doesn't Love You Back",
    metaDescription:
      "How to stop loving someone after a breakup, without forcing yourself to hate them. A gentle guide to letting love quiet on its own.",
    h1: "How to Stop Loving Someone (Without Forcing Yourself to Hate Them)",
    title: "How to Stop Loving Someone Who Doesn't Love You Back",
    excerpt:
      "You don't have to flip a switch from love to indifference. You just have to stop watering it.",
    category: "Healing",
    readTime: "6 min read",
    date: "June 10, 2026",
    author: "Bruna",
    image: img.Healing,
    imageAlt:
      "Hands gently releasing a paper boat onto calm water at golden hour, letting love quietly go",
    related: ["no-contact-rule-after-breakup", "social-media-after-a-breakup", "closure-after-a-breakup"],
    content: [
      "One of the cruelest parts of a breakup is that the love doesn't end when the relationship does. You can know with full clarity that someone isn't right for you, that they hurt you, that they don't want what you want, and still feel your chest soften when you think of them. That's not stupidity. It's how attachment actually works. Love is slow to leave, and trying to force it out only makes it cling harder.",
      "## You don't have to stop loving them in order to move on",
      "The first relief is this: you don't actually have to stop loving them to heal. You only have to stop organizing your life around that love. Many people are still tender about an ex years later and have built full, happy lives anyway. The goal isn't to scrub the feeling out, it's to take its power to run your decisions away from it.",
      "Trying to flip yourself from love to hate almost never works. Hate is just love with its hand still on the doorknob. It keeps the other person at the center of your inner world. The quieter, slower work is letting the love settle into something more like a memory, present, but no longer in charge.",
      "## Stop watering it",
      "Love is a plant. It dies down when you stop feeding it. After a breakup, the most useful thing you can do isn't try to feel less, it's stop doing the things that keep the feeling fresh. Rereading old messages, looking at photos, checking their profile, replaying memories on a loop, telling the story of the relationship over and over to friends, all of these keep the love watered. None of them are evil. They're just keeping you stuck.",
      "Things that quietly keep love alive longer than it needs to:\n- Daily social media checks\n- Keeping their playlists or photos accessible\n- Replaying conversations to find new meanings\n- Imagining who they're with now\n- Holding onto the hope that they'll change",
      "## Build a life the love can shrink inside of",
      "The other half of the work is expansion. Love doesn't disappear, but it gets smaller relative to a life that's getting bigger. New routines, new friends, new interests, new places, all of these dilute the relationship's gravity. You're not replacing them. You're growing around the absence the way a tree grows around a stake until the stake doesn't matter anymore.",
      "## What it actually looks like when love quiets",
      "It rarely happens in a single moment. One day you'll notice you went a whole week without thinking of them. You'll see a photo and feel a soft pang instead of a punch. You'll hear their name and your stomach won't drop. The love isn't gone, it's just no longer running the show. That's what 'over it' actually feels like for most people, not coldness, but a quiet, settled tenderness toward something that used to be everything.",
    ],
  },
  {
    slug: "dreaming-about-your-ex",
    seoTitle: "Why Am I Dreaming About My Ex? What Breakup Dreams Mean",
    metaDescription:
      "Why you keep dreaming about your ex after a breakup, what the dreams might mean, and how to stop them disrupting your sleep and mood.",
    h1: "Why You Keep Dreaming About Your Ex (and What It Means)",
    title: "Dreaming About Your Ex: What It Means After a Breakup",
    excerpt:
      "The dreams don't mean you should go back. They mean your brain is still doing the slow work of letting go.",
    category: "Anxiety",
    readTime: "5 min read",
    date: "June 12, 2026",
    author: "Bruna",
    image: img.Anxiety,
    imageAlt:
      "Soft morning light on rumpled linen sheets, the dreamy in-between state of waking up after dreaming of an ex",
    related: ["how-to-sleep-after-a-breakup", "racing-thoughts-after-a-breakup", "unexpected-breakup-triggers"],
    content: [
      "You go to bed feeling okay. Then you wake up at 5 a.m. with their face still vivid behind your eyes, and a whole day of sadness ahead of you that you weren't planning on. Dreams about an ex are one of the most disorienting parts of a breakup, especially when they start happening weeks or months after you thought you were past the worst.",
      "## Why your brain keeps replaying them at night",
      "Dreams are partly how the brain processes unfinished emotional material. During REM sleep, your mind sorts through the day's experiences, but it also revisits anything still unresolved, including the loss of someone who used to be central to your life. The more emotionally significant the relationship was, the longer the brain tends to keep returning to it at night, even after the conscious mind has moved on quite a bit.",
      "Dreaming about an ex isn't a sign from the universe. It isn't proof that you're meant to be with them. It's almost always your nervous system doing maintenance, integrating a loss that was big enough to need overnight processing time.",
      "## The three most common types of ex dreams",
      "Most breakup dreams fall into a few patterns:\n- Reconciliation dreams, where everything is good again. These often surface when you're missing the version of yourself you got to be with them.\n- Conflict dreams, where you're arguing or trying to be heard. These often surface when something was left unsaid.\n- Indifference dreams, where you see them and feel nothing, or they don't see you. These tend to show up later in the recovery process, as the brain integrates the new emotional reality.",
      "## How to handle the morning after",
      "Try not to read the dream as instruction. Your sleeping brain is not a wise oracle, it's a tired filing system. When you wake up rattled, give yourself a few minutes before reaching for your phone. Sit up, drink water, splash your face, do something that puts you firmly back in your real life. Write the dream down in a sentence or two if it helps, then close the notebook and let it go.",
      "Treat the rest of the day like you would after a rough night. A little more rest, a little less scrolling, a little more kindness with yourself. You haven't slipped backward. Your mind is just doing in the night what it didn't have room to do in the day.",
      "## When the dreams should ease",
      "For most people, ex dreams get less frequent and less emotionally loaded over the first six months. If they stay vivid, distressing, and disruptive long past that, it can be worth talking to a coach or therapist, especially if the dreams center on conflict, betrayal, or trauma. That's not because anything is wrong with you. It's because some losses take more than a brain on its own to fully metabolize.",
    ],
  },
  {
    slug: "closure-after-a-breakup",
    seoTitle: "How to Get Closure After a Breakup (Without Them)",
    metaDescription:
      "How to find closure after a breakup when you didn't get the conversation you needed. Closure isn't something they give you, it's something you build.",
    h1: "How to Find Closure After a Breakup, Even Without Their Answers",
    title: "How to Get Closure After a Breakup Without Them",
    excerpt:
      "Closure isn't a final conversation you're owed. It's the quiet moment you stop needing one.",
    category: "Healing",
    readTime: "7 min read",
    date: "June 15, 2026",
    author: "Bruna",
    image: img.Healing,
    imageAlt:
      "A sealed envelope tied with twine beside a candle on a warm wooden table, a private gesture of closure",
    related: ["how-to-stop-loving-someone", "no-contact-rule-after-breakup", "guilt-after-a-breakup-moving-on"],
    content: [
      "Almost everyone, at some point after a breakup, finds themselves rehearsing a conversation they'll probably never have. The one where you finally get to say what you needed to say. The one where they finally explain. The one where it all makes sense. We call this 'needing closure,' but most of the time, what we're actually craving is for the pain to stop, and we believe that one more conversation could be the thing that unlocks it.",
      "## Why the closure conversation rarely delivers what you hope",
      "Most closure conversations don't go well. Either the other person doesn't have the self-awareness to give you the answers you want, or they do, and the answers don't soothe what hurts the way you expected. People who reach out to an ex 'just for closure' often end up with more confusion, not less, a fresh wave of grief, a relapse into hope, an argument that adds new wounds on top of the old ones.",
      "Even in the rare case where you get a clear, honest explanation, it doesn't usually take the pain away. Understanding why someone left doesn't undo the fact that they did. The mind hopes that knowing will fix the feeling. It almost never does.",
      "## What closure actually is",
      "Closure isn't an event. It's a slow shift inside you, from needing the relationship to make sense, to being able to live with the fact that some parts of it never will. It's the quiet day you realize you stopped writing imaginary speeches in the shower. It's the morning you notice you didn't check their profile yesterday. It's the moment you accept the story doesn't need one more chapter to be complete.",
      "## Building your own closure",
      "Some things that help people find closure on their own:\n- Writing the letter you'd send if you could, then not sending it\n- Saying the unsaid thing out loud, to an empty chair, to the sky, to a friend\n- Burning, burying, or boxing up the things that keep pulling you back\n- Making a list of what you'll do differently next time, and a list of what you wouldn't change\n- Naming, honestly, what you've already grieved and what's still ahead",
      "These rituals work not because they're magical, but because they let your body experience an ending. They give the part of you that's still waiting for something something to actually do.",
      "## When the wait for closure becomes its own trap",
      "If you've been telling yourself 'I'll feel better once they explain' for months, it's worth being honest about whether the explanation will actually arrive, and whether you'd even believe it if it did. Sometimes the bravest closure is admitting that no answer they could give would undo what happened, and choosing to grieve the not-knowing alongside the loss itself.",
      "You're allowed to stop waiting. You're allowed to give yourself the ending. Closure isn't something they hand you, it's something you slowly, quietly build, until one day you realize the door has been closed for a while and you didn't even notice when it shut.",
    ],
  },
  {
    slug: "loneliness-after-a-breakup",
    seoTitle: "How to Deal With Loneliness After a Breakup (Without Rushing Back)",
    metaDescription:
      "How to cope with the loneliness that follows a breakup, especially at night and on weekends, without rushing into rebounds or going back to your ex.",
    h1: "How to Sit With the Loneliness After a Breakup",
    title: "How to Cope With Loneliness After a Breakup",
    excerpt:
      "Loneliness isn't proof you should reach out to them. It's just a part of being newly on your own.",
    category: "Emotions",
    readTime: "6 min read",
    date: "June 18, 2026",
    author: "Bruna",
    image: img.Emotions,
    imageAlt:
      "A single chair by a sunlit window in a warm, empty room, the soft loneliness after a breakup",
    related: ["self-care-after-a-breakup", "no-contact-rule-after-breakup", "reconnecting-with-yourself-after-a-breakup"],
    content: [
      "Loneliness after a breakup has a particular texture. It's not just being alone, it's being alone in a space that used to be shared. The empty side of the bed. The Saturday morning with no one to make coffee for. The thought you used to text them at 11 a.m., that now has nowhere to go. It can hit hardest in the moments that used to be the most ordinary, which is exactly what makes it so disorienting.",
      "## Why loneliness feels worse than just being single",
      "If you were single before the relationship, you may notice this loneliness feels different from anything you experienced then. That's because your nervous system formed an attachment to a specific person, and a specific rhythm with them. You're not just missing company in general, you're missing a particular voice, a particular smell, a particular feeling of being known. That kind of loneliness can't be filled by being around other people, at least not at first.",
      "## The trap of treating loneliness as an emergency",
      "Loneliness is uncomfortable enough that we tend to treat it like an emergency that requires immediate fixing. We text the ex. We open the dating apps. We accept plans we don't actually want. We drink more than we meant to. None of these are evil, but they often leave us lonelier underneath, because they distract from the feeling instead of helping us metabolize it.",
      "Loneliness, like grief, moves through faster when it's allowed to be felt. It doesn't kill you. It softens, if you let it surface without immediately drowning it.",
      "## Small things that genuinely help",
      "A few practices that tend to ease post-breakup loneliness:\n- Building one or two predictable points of human contact each week, a class, a walk with a friend, a regular dinner\n- Letting a low-stakes background sound, podcast, music, audiobook, fill silences that used to be filled by them\n- Spending time in 'third places,' cafes, libraries, parks, where you're not alone but not socially performing\n- Volunteering, where being needed by someone else quietly rebuilds your sense of mattering\n- Petting an animal, your own or someone else's, since physical contact with mammals actually lowers cortisol",
      "## The harder kind of company you might be avoiding",
      "Sometimes the loneliness you're feeling isn't only about missing them. It's about being newly forced to spend time with yourself. If that's part of what's hard, the answer isn't to keep distracting from it, it's to slowly get more comfortable in your own company. Cook a real meal for yourself. Take yourself to a film. Sit on a bench and notice what's around you. You're not waiting for the loneliness to end so your real life can start. This time alone is part of building the relationship with yourself that the next chapter will rest on.",
      "## When loneliness becomes something more",
      "Persistent loneliness that comes with hopelessness, sleeplessness, loss of appetite, or thoughts of not wanting to be here, deserves more than self-help. Reach out to a coach, therapist, doctor, or trusted friend. Loneliness is meant to be a signal that drives connection, not a wall you have to live behind alone.",
    ],
  },
  {
    slug: "breakup-without-a-reason",
    seoTitle: "When They Break Up With You Without a Reason: How to Cope",
    metaDescription:
      "How to cope when your partner ends the relationship without giving you a real reason. Understanding the silence and finding peace without their answers.",
    h1: "When They Break Up With You Without a Reason",
    title: "How to Cope When They Break Up Without a Reason",
    excerpt:
      "Not getting an explanation feels unbearable. The absence of an answer can become its own kind of answer.",
    category: "Healing",
    readTime: "6 min read",
    date: "June 20, 2026",
    author: "Bruna",
    image: img.Healing,
    imageAlt:
      "A softly lit hallway with a single open door, the unsettling quiet of a breakup with no explanation",
    related: ["closure-after-a-breakup", "racing-thoughts-after-a-breakup", "no-contact-rule-after-breakup"],
    content: [
      "Few things are harder than being left without a real explanation. 'I just don't feel it anymore.' 'It's not you, it's me.' 'I need space.' Or, worse, total silence, a slow fade, a sudden block. Without a reason to hold onto, the mind goes hunting. Every conversation gets re-examined. Every old text gets reread. You become a detective in your own life, trying to find the clue that will finally make it make sense.",
      "## Why the lack of a reason hurts so much",
      "Human brains are meaning-making machines. When something painful happens, we instinctively look for a why, because a why feels like the first step toward making sure it never happens again. When the person who hurt you refuses to give you that why, your brain doesn't simply accept the absence. It fills the silence with theories, and most of those theories center on the worst possible answer: that something is wrong with you.",
      "That self-blame isn't truth, it's just the most accessible explanation when no one will give you a better one. The mind would rather have a painful answer than no answer at all.",
      "## Why they may not be giving you the real reason",
      "There are usually one of a few things going on when someone won't explain themselves:\n- They genuinely don't know yet. People can leave a relationship because of a vague, unnameable sense that something isn't right, and only understand it months later.\n- They know, but they don't have the language. Emotional fluency varies enormously between people.\n- They know, and they don't want to say it because they're afraid of hurting you, or of being judged, or of being argued with.\n- They've already emotionally checked out and explaining now feels pointless to them.",
      "None of these are flattering, and none of them are about you being unlovable. They're about the other person's capacity, which was always its own limit, even when the relationship was good.",
      "## The story you're telling yourself in the silence",
      "Notice the story your mind keeps writing in the empty space. Is it 'I wasn't enough'? 'I was too much'? 'I should have known'? These narratives feel true because they're loud and consistent, but they're guesses dressed up as conclusions. Try writing the cruelest version down, then writing three alternative explanations next to it. The point isn't to find the right one, it's to remind yourself that yours is one possibility among many.",
      "## Building peace without their answer",
      "You can grieve the loss without ever solving the mystery. In fact, that's what most people end up doing. The peace eventually comes not from finally understanding why they left, but from realizing that the answer would not change what you have to do next: take care of yourself, rebuild, and let the relationship close even though the file isn't tidy.",
      "What helps is a gentle, repeated mantra in those spiraling moments: 'I don't have to know why to be able to move on.' Said often enough, the mind starts to settle for it, not because you've stopped being curious, but because you've stopped making your healing conditional on something they were never going to give you.",
    ],
  },
  {
    slug: "getting-over-being-cheated-on",
    seoTitle: "How to Heal After Being Cheated On (and Not Lose Yourself)",
    metaDescription:
      "How to recover from being cheated on without losing your trust, your confidence, or your sense of self. A compassionate guide to healing after betrayal.",
    h1: "How to Heal After Being Cheated On",
    title: "How to Heal After Being Cheated On",
    excerpt:
      "Betrayal doesn't just end a relationship. It rewrites your sense of what was real. Healing means gently sorting truth from doubt again.",
    category: "Healing",
    readTime: "8 min read",
    date: "June 22, 2026",
    author: "Bruna",
    image: img.Healing,
    imageAlt:
      "A kintsugi bowl mended with gold sitting in soft window light, healing after the breakage of betrayal",
    related: ["healing-after-a-breakup-is-not-linear", "anger-after-a-breakup", "attachment-styles-and-breakups"],
    content: [
      "Being cheated on doesn't just end the relationship. It edits the past. Suddenly you're going back through memories, holidays, conversations, late nights, trying to figure out which moments were real and which ones you were the only person fully present for. That re-reading of your own life is one of the most exhausting parts of infidelity, and it's why this kind of breakup often takes longer to recover from than others, even when you logically know the relationship had to end.",
      "## Why betrayal hits the nervous system differently",
      "Cheating activates two losses at the same time: the loss of the person, and the loss of your sense of reality. The mind has to update everything it thought it knew about the relationship, often without all the information. That kind of update is destabilizing in a way that even painful but honest breakups aren't. It's normal to feel hypervigilant, jumpy, full of intrusive thoughts, unable to sleep, and quick to spiral. Your nervous system is treating this like the threat it was.",
      "Betrayal trauma is a real thing. It's not weakness, and it's not 'making it bigger than it is.' Some research compares the symptoms to acute trauma responses, which is why it often needs more support, not less.",
      "## The hardest thing: not making it mean something about you",
      "When someone cheats, the brain almost always goes first to: I wasn't enough. Not attractive enough, not interesting enough, not present enough. This is a near-universal reaction, and it's almost always wrong. People cheat for reasons that live inside them, their patterns, their wounds, their unwillingness to be honest about what they wanted, not because the partner they had failed some test of worth.",
      "Holding onto 'they did this because of who they are, not who I am' is hard, especially in the middle of the night. Say it out loud anyway. Say it until your nervous system starts to believe it, even just a little. That sentence is the spine of recovery from betrayal.",
      "## Things that genuinely help in the first months",
      "- Limited contact, ideally none, until your nervous system has settled\n- A trusted person or coach who knows the full story and won't ask you to perform okayness\n- A boundary on detective work: a set time of day to think about it, then put it down\n- Movement, walks, swims, anything that lets the body discharge the activation\n- Sleep support, even basic things like a phone-free hour before bed\n- Avoiding big decisions, moves, jobs, new relationships, for the first three months if possible",
      "## When to bring in real support",
      "If you're stuck in obsessive replay months later, if you can't sleep, if you find yourself unable to trust anyone, or if you're checking new partners' phones in a way that scares you, you're not broken. You're carrying a trauma response that needs professional help to fully metabolize. A trauma-informed therapist, or coaching specifically for betrayal recovery, can shorten this enormously.",
      "## Trusting again, slowly and on your own terms",
      "You don't have to choose between never trusting again and naively trusting everyone. The middle path is learning to trust yourself, your instincts, your willingness to leave when something feels wrong, your right to ask hard questions, your capacity to handle the truth. When that internal trust comes back, trusting other people again stops feeling like a leap of faith and starts feeling like a series of small, observable decisions. You won't be 'over it' on a timeline, but you will, slowly, be your own person again, and that person will know more than the one who walked into the last relationship did.",
    ],
  },
  {
    slug: "moving-out-after-a-breakup",
    seoTitle: "Moving Out After a Breakup: How to Survive the First Month",
    metaDescription:
      "How to handle moving out after a breakup: dividing belongings, the emotional weight of an empty new place, and how to make somewhere new feel like home.",
    h1: "Moving Out After a Breakup: The Quiet Grief of a New Space",
    title: "Moving Out After a Breakup: How to Get Through It",
    excerpt:
      "An empty apartment after a breakup can feel louder than any argument. Here's how to slowly make a new space your own.",
    category: "Self-Care",
    readTime: "7 min read",
    date: "June 25, 2026",
    author: "Bruna",
    image: img["Self-Care"],
    imageAlt:
      "Cardboard moving boxes stacked in a sunlit empty room with hardwood floor, the start of a new home after a breakup",
    related: ["rebuilding-yourself-after-a-long-relationship", "loneliness-after-a-breakup", "self-care-after-a-breakup"],
    content: [
      "Moving out after a breakup is logistically draining and emotionally enormous, often at the same time. There's a strange grief in choosing which mugs are yours, in seeing the indentations in the carpet where the bed used to be, in standing in an empty apartment that smells like nothing yet. Even when you wanted the move, the body registers it as a loss. That's not weakness. That's just how attachment to a shared home actually works.",
      "## The week before the move",
      "Try to give yourself more time than you think you'll need. Underestimating the emotional load of packing a shared life is one of the most common mistakes people make. Things you haven't thought about in years will surface, the card from a third anniversary, a t-shirt of theirs you slept in, the bowl you bought together at a weekend market. You don't have to process every memory in real time. It's fine to put things in a box marked 'later' and deal with them after the dust settles.",
      "Ask for help. Movers if you can afford them. Friends if you can't. Do not try to do this alone if there's any way around it, both because lifting heavy things by yourself in this emotional state is genuinely risky, and because having one other body in the room can keep the grief from swallowing the day.",
      "## Dividing belongings without losing your mind",
      "A few rules of thumb that tend to keep this from getting uglier than it has to:\n- If you bought it together, decide one item at a time and let small things go\n- Photograph anything contested before you leave, so the conversation can happen later, calmly\n- Don't punish yourself by leaving things you actually need, kitchen basics, towels, lamps, decent sheets\n- Don't punish them by taking things you don't need just to make a point\n- Get the keys handover right: time, place, who's present, in writing",
      "If communication is impossible, it's almost always worth using a neutral third party, a mutual friend, a mediator, or for bigger things, a lawyer. The cost of fighting over a sofa is rarely worth the emotional toll.",
      "## The first night in the new place",
      "Plan it. Don't let it just happen. Bring or set up: clean sheets, a lamp, a kettle, a candle, a few things that smell like you, and one comfort food. The first night in a new home after a breakup is one of the most vulnerable evenings most of us ever have. Treat it the way you'd treat a friend's first night in the same situation, with low expectations and tender care.",
      "It's okay to cry. It's okay to feel a flicker of relief and feel guilty about the relief. It's okay to sleep on the floor with takeaway and a podcast, or to invite one person over who knows how to just sit with you. There's no right way to do this evening.",
      "## Slowly making it feel like yours",
      "In the first weeks, resist the urge to either over-decorate to prove you're fine, or live in suitcases because committing to the space feels too final. The middle path: one small thing at a time. A plant. A rug. A single piece of art. A bowl on the kitchen counter that's only yours. The space becomes home not in a single dramatic redecoration, but in the quiet accumulation of choices that no one else gets a vote on.",
      "A simple rhythm for the first month:\n- One small new thing for the home each week\n- One regular evening ritual you build only for yourself\n- One person you check in with each week, briefly\n- One walk in the new neighborhood, no headphones, just to learn it",
      "## The relief that creeps in",
      "Somewhere around week three or four, most people notice a strange new feeling under all the grief: a quiet pleasure in coming home to a space that's entirely theirs. The pleasure doesn't replace the loss. It sits alongside it. You can miss the old life and also feel the first hints of liking the new one, sometimes in the same hour. Both are true. Both are part of how a new home, and a new chapter, slowly settles into place.",
    ],
  },
  {
    slug: "reconnecting-with-yourself-after-a-breakup",
    seoTitle: "How to Reconnect With Yourself After a Breakup",
    metaDescription:
      "How to reconnect with yourself after a breakup: simple practices to rediscover who you are, what you love, and what you want, when 'we' becomes 'I' again.",
    h1: "How to Reconnect With Yourself After a Breakup",
    title: "How to Reconnect With Yourself After a Breakup",
    excerpt:
      "When the relationship ends, the question 'who am I now?' isn't a problem. It's an invitation.",
    category: "Growth",
    readTime: "6 min read",
    date: "June 28, 2026",
    author: "Bruna",
    image: img.Growth,
    imageAlt:
      "A silhouette walking alone through a soft meadow at sunrise, quietly reconnecting with herself after a breakup",
    related: ["rebuilding-yourself-after-a-long-relationship", "journaling-prompts-after-a-breakup", "first-date-after-a-breakup"],
    content: [
      "After a breakup, many people describe the same strange feeling: that they've lost track of who they are when no one is watching. The relationship had a shape. You knew your role in it, your routines, the version of yourself you played. Now the room is empty, and the question 'who am I, actually?' starts whispering at quiet moments. That question can feel terrifying. It's also one of the most generous invitations a breakup ever offers.",
      "## Why you feel like a stranger to yourself",
      "In any long-term relationship, your identity slowly braids with the other person's. Your taste in food, music, weekends, all of it gets shaped by being around them. That's not weakness, it's how intimacy works. When the relationship ends, the braid unravels, and the parts of you that had been shaped around the relationship suddenly stand exposed. It's normal to look at your own life and not recognize the shape of it.",
      "Many people respond to this by frantically reinventing themselves, new haircut, new gym, new wardrobe, new city. Some of that energy is healthy. A lot of it is a way to avoid sitting still with the quieter, harder question: not who do I want to become to prove I'm okay, but who actually am I when no one is watching.",
      "## Small practices to come home to yourself",
      "Reconnecting with yourself isn't really a project. It's a series of small returns to your own preferences, body, and attention. Some practices that help:\n- A weekly 'date with yourself' that's actually planned, not just 'I'll figure something out'\n- Cooking one meal a week purely to your own taste, no compromises\n- A short morning check-in: how does my body feel, what would today need to feel like a good day\n- A walk without headphones, once or twice a week, just to hear your own thoughts again\n- A journaling prompt: 'what did I stop doing because they didn't enjoy it'",
      "## Listen to your body, not just your mind",
      "Your body tends to be more honest than your mind in the months after a breakup. Notice when you feel light, energized, curious, expansive, and notice when you feel heavy, tight, dull, or contracted. Those are signals about what's actually right for you, often clearer than your overthinking can be. The people, places, and activities that consistently leave you feeling lighter are part of the version of you that's emerging. The ones that don't, even if you 'should' love them, are worth questioning.",
      "## Don't rush to know who you are yet",
      "There's a quiet cultural pressure, especially online, to come out of a breakup with a clear new identity, a brand, a glow-up, a clean before-and-after story. Real reconnection with yourself is messier and slower. You'll have weeks where you feel sharp and certain, and weeks where you feel like a stranger again. Both are part of it. You don't have to have your new self figured out by month three to be doing this well.",
      "## What it feels like when it starts to click",
      "It's not a single moment. It's a slow accumulation of small things: opinions that feel like yours, a Saturday morning that feels like a good shape, a meal that tastes exactly how you like it, a song you discovered without their input that you play on repeat, a feeling, after a few quiet hours alone, that the quiet is no longer empty. That's what coming home to yourself actually looks like. It doesn't undo the loss. It just slowly makes a life on the other side of it feel like yours.",
    ],
  },
];

// Assign a unique, topic-matched image per post (overrides category placeholders).
for (const post of blogPosts) {
  if (slugImages[post.slug]) post.image = slugImages[post.slug];
}



/** Old slug → new slug, so previously-shared URLs don't 404. */
export const legacySlugMap: Record<string, string> = {
  "gentle-self-care-after-a-breakup": "self-care-after-a-breakup",
  "why-healing-is-not-linear": "healing-after-a-breakup-is-not-linear",
  "no-contact-with-compassion": "no-contact-rule-after-breakup",
  "rebuilding-identity-after-a-relationship": "rebuilding-yourself-after-a-long-relationship",
  "when-the-mind-wont-stop-racing": "racing-thoughts-after-a-breakup",
  "the-guilt-of-moving-on": "guilt-after-a-breakup-moving-on",
  "sleep-after-heartbreak": "how-to-sleep-after-a-breakup",
  "journaling-for-healing": "journaling-prompts-after-a-breakup",
  "when-you-still-have-to-see-them": "how-to-cope-when-you-still-see-your-ex",
  "the-breakup-body": "physical-symptoms-of-heartbreak",
  "should-you-stay-friends": "staying-friends-with-an-ex",
  "when-they-move-on-faster": "when-your-ex-moves-on-faster",
  "rebounds-and-filling-the-void": "rebound-relationships-after-a-breakup",
  "things-nobody-warned-you-about": "unexpected-breakup-triggers",
  "what-happened-question": "how-to-talk-about-your-breakup",
  "when-you-ended-it": "grief-when-you-ended-the-relationship",
  "first-date-after-heartbreak": "first-date-after-a-breakup",
};

export const SITE_URL = "https://couplescoachingwithbruna.lovable.app";
