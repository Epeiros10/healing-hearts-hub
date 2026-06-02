import imgSelfCare from "@/assets/blog/self-care-after-a-breakup.jpg";
import imgHealingNotLinear from "@/assets/blog/healing-after-a-breakup-is-not-linear.jpg";
import imgNoContact from "@/assets/blog/no-contact-rule-after-breakup.jpg";
import imgRebuilding from "@/assets/blog/rebuilding-yourself-after-a-long-relationship.jpg";
import imgRacingThoughts from "@/assets/blog/racing-thoughts-after-a-breakup.jpg";
import imgGuilt from "@/assets/blog/guilt-after-a-breakup-moving-on.jpg";
import imgSleep from "@/assets/blog/how-to-sleep-after-a-breakup.jpg";
import imgAnger from "@/assets/blog/anger-after-a-breakup.jpg";
import imgJournaling from "@/assets/blog/journaling-prompts-after-a-breakup.jpg";
import imgAttachment from "@/assets/blog/attachment-styles-and-breakups.jpg";
import imgStillSeeEx from "@/assets/blog/how-to-cope-when-you-still-see-your-ex.jpg";
import imgPhysical from "@/assets/blog/physical-symptoms-of-heartbreak.jpg";
import imgFriends from "@/assets/blog/staying-friends-with-an-ex.jpg";
import imgMovedOnFaster from "@/assets/blog/when-your-ex-moves-on-faster.jpg";
import imgRebound from "@/assets/blog/rebound-relationships-after-a-breakup.jpg";
import imgTriggers from "@/assets/blog/unexpected-breakup-triggers.jpg";
import imgTalkAbout from "@/assets/blog/how-to-talk-about-your-breakup.jpg";
import imgSocialMedia from "@/assets/blog/social-media-after-a-breakup.jpg";
import imgEndedIt from "@/assets/blog/grief-when-you-ended-the-relationship.jpg";
import imgFirstDate from "@/assets/blog/first-date-after-a-breakup.jpg";

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
  author: "Bruna" | "Pascal";
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
      "Start with the basics that grief tends to erase. Drink a glass of water before your morning coffee. Eat something warm at least once a day, even if it's only toast and broth. Step outside for five minutes of daylight, ideally in the morning, to help your circadian rhythm find its footing again. These aren't small things when your nervous system is in shock, they're anchors. They tell your body, again and again, that it is still being looked after.",
      "Create a tiny evening ritual you can rely on. A hot shower, a clean t-shirt, one chapter of a book that has nothing to do with love. Light a candle, put on the same calm playlist, drink the same herbal tea. Predictability is medicine when your inner world feels chaotic. The repetition isn't boring, it's what gives your nervous system a shape to settle into when everything else feels formless.",
      "Be careful with your phone. The urge to check their profile, reread old messages, or scroll endlessly through breakup content can feel like coping, but it usually leaves you more depleted. Try moving your phone out of the bedroom for the first week. Replace one scroll session a day with something analog, a walk, a bath, a short journal entry, a call with someone who knows how to listen without trying to fix.",
      "Tell one or two trusted people what's happening, even if you keep it brief. You don't need a long explanation. A simple 'I'm going through a hard time and I might need to lean on you a little this week' is enough. Isolation can intensify heartbreak quickly, and a few small check-ins from people who love you can change the texture of an entire day.",
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
    author: "Pascal",
    image: img.Healing,
    imageAlt:
      "Hands holding a kintsugi bowl with gold cracks, symbol of non-linear healing after a breakup",
    related: ["physical-symptoms-of-heartbreak", "self-care-after-a-breakup", "racing-thoughts-after-a-breakup"],
    content: [
      "One of the most disorienting parts of heartbreak is the way it loops. You wake up feeling clear and strong, certain that you've turned a corner. By the afternoon, a song on the radio, the smell of their cologne on a stranger, or an old photo surfacing in your camera roll pulls you under again. Many people read this as failure. They think, 'I was doing so well, what's wrong with me?' Nothing is wrong with you. This is exactly how healing actually works.",
      "Healing moves in spirals, not straight lines. Picture a spiral staircase: each time you come around, you pass the same view from the window, but you're standing at a different height. You're meeting the same pain from a slightly different place, with a little more capacity, a little more perspective, a little more of yourself intact. The wave looks the same, but you are not the same person meeting it.",
      "Expecting linear progress is one of the biggest sources of secondary suffering. We grieve the loss, and then we grieve our grief for not being on schedule. We compare ourselves to friends who 'bounced back' in a month, to influencers who turned their breakup into a glow-up, to our own past selves who seemed to recover more quickly from something smaller. Letting go of the timeline is often what allows real movement to happen.",
      "It also helps to know what the dips actually mean. Hard days after good ones are often a sign that something deeper is surfacing, a memory you hadn't fully processed, a fear about the future, a layer of grief that wasn't ready last week but is ready now. The pain isn't returning because you're broken. It's returning because you're finally safe enough, rested enough, or strong enough to feel it.",
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
    author: "Pascal",
    image: img.Boundaries,
    imageAlt:
      "An open door letting in soft light, symbolizing the boundary of going no contact after a breakup",
    related: ["how-to-cope-when-you-still-see-your-ex", "social-media-after-a-breakup", "staying-friends-with-an-ex"],
    content: [
      "No contact often gets framed as a cold, strategic move, a way to 'win' the breakup or make the other person miss you. That framing keeps you tethered. At its best, no contact is something much quieter and much kinder. It's an act of self-respect, a way of saying, 'I love myself enough to stop reopening the wound every time it tries to close.'",
      "The reason no contact works isn't manipulation. It's biology. Your brain formed an attachment to this person over months or years, and that attachment lives in the same neural pathways as physical addiction. Every text, every story view, every 'just checking in' message floods your system with a small dose of the very thing it's trying to detox from. The brain can't begin to rewire while it's still being fed.",
      "Every time you check their profile, reread old messages, or send a 'just one more' text, you're asking a fresh wound to stay raw. You're also robbing yourself of the version of you that exists on the other side of this, the one who isn't constantly recalibrating based on whether they posted, who they were with, or how quickly they replied.",
      "Try replacing the urge with a small, repeatable action. When the craving hits, do one of three things: a walk around the block, a voice note to a friend, or three slow breaths with your hand on your chest. You're not suppressing the feeling, you're giving it somewhere else to go. Over time, the gap between the urge and the action gets longer, and one day you'll notice the urge passed without you doing anything at all.",
      "It also helps to remove the easy access points. Mute, don't follow. Archive the chat instead of rereading it. Move their photos to a folder you don't open. You don't have to delete everything in a dramatic gesture, you just have to make it slightly harder to fall back in. Friction is your friend in the first ninety days.",
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
      "The first step in rebuilding isn't reinvention. It's curiosity. What did you stop doing because they didn't enjoy it? What dreams did you quietly shelve because the timing was wrong, or because they weren't interested, or because you were prioritizing the relationship? What parts of you have been waiting patiently in the background for permission to come forward again?",
      "Start small. Order the meal you always wanted to try. Rearrange one corner of your home so it reflects only you. Buy the bedding you actually like. Say yes to one thing this week that's entirely your own, a class, a film, a walk in a part of the city you never went to together. These tiny acts are how you begin to remember the shape of your own preferences.",
      "Pay attention to your body, not just your mind. Notice what music makes you want to move. Notice which foods you actually crave when you're alone. Notice the time you naturally want to wake up when no one else's schedule is shaping yours. Your body has been keeping a list of your real preferences this whole time. Now there's space to listen to it.",
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
      "Rumination isn't weakness, and it isn't a character flaw. It's the brain trying to solve an emotional problem with logic. Your mind is treating the breakup like a puzzle it can crack if it just thinks hard enough. But heartbreak doesn't resolve in the mind. It resolves in the body, in time, in being witnessed by people who care about you. No amount of replaying the last conversation is going to change what happened.",
      "Try this: set a 10-minute timer and write down every looping thought as fast as you can. Don't edit, don't organize, don't try to make it make sense. When the timer ends, close the notebook and step outside, even just to the doorstep. You're not suppressing the thoughts, you're containing them so they stop leaking into every hour of your day. Many people find that giving the loop a designated time slot is enough to loosen its grip the rest of the day.",
      "Grounding techniques also help when the spiral hits in the middle of something you can't escape, a meeting, a commute, a family dinner. Name five things you can see, four you can touch, three you can hear, two you can smell, one you can taste. These small sensory acts pull the nervous system out of the past and into the present, where relief is actually possible.",
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
    author: "Pascal",
    image: img.Emotions,
    imageAlt:
      "Open journal beside dried flowers in soft light, guilt and moving on after a breakup",
    related: ["when-your-ex-moves-on-faster", "grief-when-you-ended-the-relationship", "first-date-after-a-breakup"],
    content: [
      "It happens quietly. You laugh at a joke, enjoy a meal, forget to check your phone for an afternoon, and then it hits you. A pang of guilt. How can you feel good when something so important ended? How can you be okay when, just weeks ago, you weren't sure you'd ever be okay again? Some people even describe a strange panic when joy returns, as if feeling better means the love wasn't real.",
      "That guilt is a sign of love, not disloyalty. It means the relationship mattered, that the person mattered, that you took it seriously. But it doesn't mean you're not allowed to feel alive again. Moving on isn't forgetting. It's choosing to live alongside the memory, not underneath it.",
      "Part of what makes this so confusing is that grief and joy can share the same afternoon. You can miss someone and still enjoy your coffee. You can wish things had gone differently and still feel proud of how you're handling it. The mind wants to pick one, but the heart isn't binary. Letting both exist at once is one of the most adult, most healing things you can practice.",
      "Notice the guilt, thank it for showing you what you valued, and let it pass. You don't have to argue with it. You don't have to prove to yourself that you've suffered enough. Your heart didn't break because you were careless with it. It broke because you were brave enough to love fully, and that same heart deserves to keep being used.",
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
      "Start by accepting that your sleep might be messy for a while. Fighting it creates a second layer of anxiety, the original pain plus the panic of 'I have to sleep or tomorrow will be even worse.' Instead, lower the bar. Aim for rest, not perfect sleep. Make your bedroom a soft place to be awake, not a battleground you have to win.",
      "Build a wind-down sequence and repeat it nightly, even when it feels pointless. Dim the lights an hour before bed. Put the phone in another room or across the room. Take a warm shower. Change into clothes that are only for sleep. Predictable cues help a frayed nervous system learn that it's safe to power down.",
      "Try a body scan once you're in bed. Lie on your back, place your hands on your belly, and slowly move your attention from your toes to the top of your head, breathing into each area for a few seconds. You're not trying to relax perfectly, you're reminding your body that it still belongs to you, and that it's safe enough to rest.",
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
    author: "Pascal",
    image: img.Emotions,
    imageAlt:
      "Journal and dried flowers in warm light, sitting with anger after a breakup",
    related: ["guilt-after-a-breakup-moving-on", "journaling-prompts-after-a-breakup", "grief-when-you-ended-the-relationship"],
    content: [
      "We tend to romanticize heartbreak as sadness. Tears, longing, quiet grief, staring out of windows to melancholy music. But often, what shows up first, or out of nowhere weeks later, is anger. Hot, sharp, sometimes shocking anger. And most of us weren't taught what to do with it, especially toward someone we loved.",
      "Anger isn't the opposite of love. It's a response to having your boundaries crossed, your time wasted, your trust broken, or your needs minimized. It's a signal that something mattered to you, and that you deserved better. Many people feel guilty for being angry, as if the anger erases the good parts of the relationship. It doesn't. You can love someone deeply and still be furious at how things ended.",
      "The trick isn't to suppress the anger or to vent it destructively. Suppressed anger turns into depression, anxiety, or chronic resentment. Destructively expressed anger, drunk texts, public callouts, revenge fantasies acted on, gives you a few seconds of relief and weeks of regret. The middle path is to feel it fully and channel it intentionally.",
      "Write an angry letter you never send. Spell out exactly what you're furious about, in language you'd never say out loud. Don't edit. When you're done, close the notebook, or shred the pages. The point isn't communication, it's release. Many people are surprised by how much lighter they feel after letting the anger have a page of its own.",
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
      "Below are nine prompts grouped into three stages of healing. You don't have to do them in order, and you don't have to answer them all. Pick the one that makes you slightly uncomfortable in a curious way, that's usually where the work is.",
      "Stage one: making sense of what happened.\n\n1. What did I actually lose in this relationship, and what did I only think I'd lost?\n2. If I'm honest, what were the signs I ignored, and why did I ignore them?\n3. What story am I currently telling myself about why this ended? Is it the only true version?",
      "Stage two: meeting yourself in the grief.\n\n4. What does the most tender part of me need to hear today, and who normally says it to me? Can I say it to myself?\n5. Write a letter to yourself from the perspective of someone who loves you unconditionally. What do they see in you that you can't see right now?\n6. List three things you're proud of yourself for this week, even if one of them is just getting out of bed. Be specific.",
      "Stage three: looking forward.\n\n7. What kind of person do I want to become through this experience, not in spite of it, but because of it?\n8. What did I learn about my own needs in this relationship that I want to honor in the next one?\n9. If I imagine myself one year from now, fully healed, what does an ordinary Tuesday look like? Where am I living, who am I with, what am I doing for myself?",
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
      "If you have an anxious attachment style, a breakup can feel like freefall. The relationship was probably a primary source of reassurance, and without it, the mind spins into worst-case scenarios: they're already with someone else, they're happier without you, you weren't enough. The urge to reach out, check their social media, or seek closure repeatedly isn't weakness, it's a nervous system in search of the safety it lost.",
      "For the anxiously attached, healing starts with containment. The impulse is to chase connection in any form, old texts, rebounds, constant updates. Instead, try building a safety net with people you trust, scheduled check-ins so your nervous system has something predictable to hold onto. Journaling can help, but keep it structured so it doesn't turn into rumination. And remind yourself, often, that their silence isn't a verdict on your worth. It's just space, and space can be survived.",
      "If you have an avoidant attachment style, the breakup might look very different from the outside. You may seem fine, even distant. But beneath the surface, the loss is there, delayed and disorienting. Avoidant healing tends to start later, once the adrenaline of independence fades. The sadness may hit in quiet moments, weeks or months after, and the instinct is often to manage it alone.",
      "For the avoidantly attached, the risk isn't falling apart, it's never fully feeling it at all. Healing requires a counterintuitive move: letting someone in, just a little. A trusted friend, a therapist, even a journal that you actually read back. Avoidant healing isn't about becoming someone who needs people all the time. It's about learning that need isn't danger, and that connection doesn't always end in suffocation or loss.",
      "If you have a fearful-avoidant or disorganized style, heartbreak can feel completely contradictory. One day you're desperate for them back; the next you're relieved it's over. You oscillate between reaching out and pulling away, trusting and suspecting, needing and resenting. This isn't confusion about the relationship, it's confusion about safety itself, because the people who were supposed to be safe weren't always.",
      "For the fearful-avoidant, healing requires extra gentleness. Your system is already on high alert, and a breakup can trigger the sense that love is inherently dangerous. The work here is small and repeated: choosing one safe person and learning to trust them a little more over time. Noticing the cycle without judging it. Giving yourself permission to need someone without punishing yourself for it afterward. You're not broken, you're rebuilding a nervous system that learned early that love and harm came from the same place.",
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
    author: "Pascal",
    image: img.Boundaries,
    imageAlt:
      "An open door framed in warm light, coping when you still have to see your ex",
    related: ["no-contact-rule-after-breakup", "staying-friends-with-an-ex", "how-to-talk-about-your-breakup"],
    content: [
      "One of the cruelest parts of certain breakups is that the person you most need space from is still woven into your daily life. Maybe you share children, an office, a friend group, a band, a building. The advice to 'go no contact and focus on yourself' doesn't quite fit when you'll see them at school pickup on Tuesday. If that's your situation, you're not failing at healing, you're doing something genuinely harder than most breakup guides acknowledge.",
      "The first thing to know is that healing is still possible, even with contact. What changes is the strategy. Instead of full distance, you're aiming for emotional distance inside necessary proximity. That means narrowing the relationship down to its essential function, co-parent, colleague, fellow human in a shared room, and gently letting go of all the other roles you used to play for each other. You are no longer their confidant, their emotional support, or their soft place to land. You are something more limited now, and that's okay.",
      "Create a small set of rules for yourself before each interaction. Decide in advance what you'll talk about and what's off-limits. Logistics, the kids, the shared project, yes. Your weekend, their dating life, the relationship post-mortem, no. Having a script in your head, even a simple one, helps you stay grounded when emotions try to pull you sideways. You don't have to be cold; you just have to be clear. 'I'd rather not get into that' is a complete sentence.",
      "Pay attention to the moments around the contact, not just the contact itself. The anticipation before seeing them and the comedown after are often harder than the encounter. Build in a buffer on both sides: a walk before, a calming ritual after, a friend to text when it's done. Treat each interaction like a small physical event your nervous system is going to feel, because it is. You're not being dramatic, you're being honest about what it costs.",
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
      "When attachment is suddenly severed, the brain treats it a lot like a wound. The same regions that light up during physical pain get involved. Cortisol and adrenaline rise; oxytocin and dopamine drop. Your nervous system shifts into a vigilant, low-grade state of alarm. That's why you can feel exhausted and wired at the same time, why food can taste like nothing, why you can cry without warning when you sit down on the couch. Your body is grieving in its own language.",
      "Knowing this changes how you take care of yourself. Instead of pushing through with willpower, you can offer your body the same things you'd offer it if you had the flu: warmth, rest, gentle food, water, daylight. Eat small amounts often, even when you're not hungry. Aim for one slow meal a day that you actually sit down for. Drink more water than feels necessary. Get into bed earlier than usual, even if sleep is patchy. None of this is indulgent, it's basic maintenance for a system under load.",
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
    author: "Pascal",
    image: img.Boundaries,
    imageAlt:
      "An open door letting in light, deciding whether to stay friends with an ex",
    related: ["no-contact-rule-after-breakup", "how-to-cope-when-you-still-see-your-ex", "when-your-ex-moves-on-faster"],
    content: [
      "Few breakup questions are as loaded as this one. Some people swear that staying friends is mature, evolved, the right thing to do. Others insist it's denial dressed up as kindness. The truth, as usual, is more personal than either camp suggests. Whether friendship with an ex is healing or harmful depends less on the rule and more on the specific people, the specific relationship, and the specific moment in time.",
      "The first honest question to ask yourself is: what do I actually want from this friendship? If the answer is 'to keep them in my life because losing them entirely feels unbearable,' that's not a friendship yet, that's grief in a friendlier costume. Real friendship can come later, but it usually can't be the bridge over the grief. Trying to skip the loss by staying close often just stretches the loss out over a much longer period.",
      "There are situations where staying friends works well. You had a long, gentle relationship that ran its course. You genuinely enjoy each other as people, with romantic feelings fully metabolized on both sides. You have a shared community or history that you both want to honor. You can be in each other's lives without secretly waiting for the other to change their mind. In those cases, friendship can be a real and lovely thing, usually after a meaningful period of distance first.",
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
      "The first thing worth knowing is that what you're seeing is almost never the full picture. Posts, stories, and updates are highlight reels, often curated specifically to broadcast 'I'm okay.' People in pain post the most carefully composed photos. New relationships that follow long ones are frequently softer than they look from the outside, sometimes a rebound, sometimes a distraction, sometimes the real thing, but almost always more complicated than a smiling beach photo suggests. You are comparing your inside to their outside.",
      "It's also true that different attachment styles grieve on different timelines. People with more avoidant patterns often look like they've moved on quickly because their feelings tend to surface later, sometimes months down the line. People with more anxious patterns feel everything sooner and louder. Neither timeline is more honest. Speed of recovery is not a measure of how much someone cared. It's a measure of how their particular nervous system processes loss.",
      "The hardest reframe, and the most useful one, is this: their healing isn't a referendum on your worth. Whether they spend the next year alone or get engaged next month says almost nothing about what you meant to them, what the relationship was, or what kind of love you're capable of. The story of you doesn't get rewritten by what they do next. The relationship was real because you both lived it. That doesn't go away when they post a new photo.",
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
    author: "Pascal",
    image: img.Healing,
    imageAlt:
      "Hands holding a small ceramic bowl, rebound relationships and filling the void after a breakup",
    related: ["first-date-after-a-breakup", "when-your-ex-moves-on-faster", "attachment-styles-and-breakups"],
    content: [
      "The instinct to fill the empty space after a breakup is one of the most human things there is. The bed feels too big. The phone is too quiet. The future you'd half-imagined together has gone blank. So you open the dating apps, you accept the drink, you text the person who has always been a little in love with you. There's no shame in any of this. The urge isn't a character flaw, it's the nervous system trying to soothe an unbearable absence as fast as possible.",
      "The trouble with rebounds isn't that they're morally wrong. It's that they often don't do what we hope they'll do. A new person can briefly turn down the volume on grief, but they can't actually metabolize it. The feelings get postponed, not resolved. Many people describe rebounds as a kind of emotional credit card: you get to feel okay now, but the bill comes due later, often when the rebound itself ends and both losses arrive at once.",
      "There's also a fairness question. The new person rarely gets to meet you, they meet a version of you that's still half-tangled in someone else. They may sense it without being able to name it. Even if you're honest about where you are, it's hard to be fully present with one person while another is still echoing through you. Sometimes that's fine and everyone goes in eyes open. Sometimes it leaves a second person hurt for no reason that had anything to do with them.",
      "None of this means you have to stay celibate for a year, or that any contact with a new person before some imaginary finish line is a mistake. It just means it's worth asking yourself an honest question before each step: am I reaching for this person because I'm drawn to them, or because I can't bear to sit with myself right now? Both can be true at once. The second one isn't shameful, but it's useful to know when it's driving.",
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
      "Part of why these moments hurt so much is that they bypass thought entirely. They land in the body before the mind catches up. The brain stored the relationship not just as memories, but as sensory associations, sounds, smells, textures, routines. When one of those associations is triggered, the whole emotional package opens at once. That's why a thirty-second song clip can floor you more than a long, deliberate conversation about the breakup.",
      "It also helps to know that the most painful triggers are usually about ordinariness, not drama. It's rarely the big anniversaries or the famous date spots. It's the cereal aisle. The walk to the train. The little ritual you didn't realize was a ritual until it was gone. Love builds its home in the mundane, which means grief lives there too. The texture of a normal Tuesday is often where the real ache lives.",
      "When one of these moments catches you, try not to argue with it. The temptation is to think, 'I shouldn't be this upset about a song.' But the song isn't the point, it's the door. Let yourself feel what's behind the door for a minute. Stand still, breathe, name what's happening: 'I'm having a wave. This will pass.' These waves tend to peak quickly when you let them and stretch out for hours when you fight them.",
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
    author: "Pascal",
    image: img.Boundaries,
    imageAlt:
      "A door opening to a garden, gentle boundaries when talking about your breakup",
    related: ["no-contact-rule-after-breakup", "how-to-cope-when-you-still-see-your-ex", "social-media-after-a-breakup"],
    content: [
      "One of the more underrated forms of breakup fatigue is the social one: the slow drain of telling the story over and over. A coworker who didn't know. A relative at a family lunch. An old friend who only just found out. Each time, you're asked to summarize one of the most painful experiences of your life in a few sentences, often while standing near a snack table. By the third or fourth retelling, you can feel something crack a little.",
      "The first thing worth knowing is that you don't owe anyone a complete account. Politeness doesn't require self-exposure. People often ask out of genuine care, but the question 'what happened?' is also a reflex, something to say when they don't know what else to say. You're allowed to answer the spirit of it (you care) without answering the literal of it (give me the whole story right now).",
      "Have a short, neutral line ready before you need it. Something like, 'We grew apart in the end. It was the right call but it's been hard.' Or, 'It just didn't work out, and I'm taking some time to be okay with that.' Or even, 'Honestly, I'd rather not get into it right now, but thank you for asking.' Saying the same gentle sentence each time gives you a kind of armor, so you're not improvising under emotional load.",
      "Notice the difference between people who can hold the real story and people who can't. Some friends are a safe place to bring the full mess. Others mean well but will turn it into gossip, advice, or a chance to talk about their own breakup. You don't have to grade anyone, just notice, and adjust what you share accordingly. The same vulnerability that heals you with one person can leave you feeling exposed with another.",
      "If someone pushes for more than you want to share, it's okay to redirect. 'I appreciate you asking, I'm trying not to talk about it too much these days. How are you?' Most people will take the hint without hurt feelings. The few who don't are telling you something important about how much of your inner life is safe with them.",
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
      "Be honest about what checking actually does for you. There's a brief hit of feeling connected to them, followed almost always by a longer comedown of feeling worse. Maybe they posted something cryptic and now you're spiraling. Maybe they posted nothing and now you're spiraling about that. Maybe there's a new face in the background of a story. Whatever you find, it's almost never the relief you went looking for. The check is a slot machine that mostly pays out in pain.",
      "It also helps to think about what you're posting, not just what you're consuming. The temptation to post 'I'm fine, actually thriving' content right after a breakup is real and very human. But performing okayness online often makes it harder to actually feel okay offline. You end up managing the audience instead of tending to yourself. If you want to post, post. Just notice when you're posting for them, and gently consider whether the energy might be better spent elsewhere.",
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
    author: "Pascal",
    image: img.Healing,
    imageAlt:
      "Hands cradling a kintsugi bowl, leaver's grief after ending the relationship",
    related: ["guilt-after-a-breakup-moving-on", "anger-after-a-breakup", "rebuilding-yourself-after-a-long-relationship"],
    content: [
      "There's an unspoken assumption that the person who ends the relationship doesn't get to grieve it. You made the choice, so you must be okay, right? In reality, breakup grief on the leaving side is often just as deep, sometimes deeper, than on the receiving side. It's just shaped differently. There's a particular kind of pain that comes with being the one who let go, and it deserves to be named.",
      "Leaver's grief usually shows up later. In the first days or weeks, there's often relief, even a strange sense of lightness. You've finally done the thing you'd been turning over for months. Then, slowly, the second wave arrives: the missing them, the doubt, the guilt, the questioning. By the time it hits, your support system has often moved on, assuming you're doing fine because you were the one with the agency.",
      "Guilt is one of the heaviest parts. You may replay the conversation, the timing, the way you said it. You may worry about how they're doing, check on them in ways that aren't good for either of you, or try to take care of them in ways that blur the breakup back into a relationship. It's worth remembering that ending something with care is still ending it with care, but you can't end a relationship and stay responsible for the other person's healing. They have to do their own. So do you.",
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
      "Start with an honest question: am I going on this date because I'm genuinely curious about someone new, or because I'm trying to prove something, to myself, to my ex, to my friends? Both reasons are very human, but they lead to different experiences. Dating to prove tends to leave you depleted no matter how the night goes. Dating from curiosity, even cautious curiosity, leaves room for the evening to actually surprise you.",
      "You don't need to be 'fully over it' to date again. Almost no one is. A more useful question is whether you can be present with another person for a couple of hours without your ex sitting invisibly at the table. If they'd dominate every thought, it may be early. If you can think about them sometimes and still actually see the person in front of you, you're probably more ready than you feel.",
      "Keep the first date small. Coffee, a walk, a drink, something with a built-in exit. Long dinners, weekend trips, and 'let's spend the whole day together' plans put more weight on a first meeting than is fair to either of you. A short, low-stakes date lets you notice how you feel without committing to feeling it for six hours.",
      "Be gentle with yourself afterward, regardless of how it went. A good first date can stir up unexpected grief, a reminder of how much you miss the easy intimacy you used to have with someone who already knew you. A bad first date can make you wonder if you'll ever feel anything again. Neither reaction is a verdict. They're just data points in a much longer process. Whatever you feel on the way home, treat yourself the way you'd treat a friend who'd just done something brave.",
      "And if dating turns out to be more than you can hold right now, you're allowed to step back. You can delete the apps for a month, cancel the second date, return to the slow work of being with yourself. There's no medal for being the first one back out there. The goal isn't to date as soon as possible, it's to date in a way that feels honest to who you are now. When you do, the right people will be able to meet you there.",
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

export const SITE_URL = "https://breakup-recovery.org";
