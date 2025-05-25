import { Chapter } from "@/data/chapters-data";
import JSZip from 'jszip';

export const generateEpub = async (chapter: Chapter): Promise<void> => {
  try {
    const zip = new JSZip();
    
    // Generate filename from chapter title
    const filename = generateFilename(chapter.title);
    
    // Create META-INF folder with container.xml
    zip.folder("META-INF")?.file("container.xml", `<?xml version="1.0"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`);

    // Create OEBPS folder
    const oebps = zip.folder("OEBPS");
    
    // Generate and add cover image as PNG
    const coverImageBlob = await generateCoverImagePng(chapter);
    oebps?.file("cover.png", coverImageBlob);
    
    // Create content.opf (package document)
    oebps?.file("content.opf", generateContentOpf(chapter));
    
    // Create toc.ncx (navigation)
    oebps?.file("toc.ncx", generateTocNcx(chapter));
    
    // Create cover page
    oebps?.file("cover.html", generateCoverHtml(chapter));
    
    // Create main content
    oebps?.file("content.html", generateContentHtml(chapter));
    
    // Create further reading page
    oebps?.file("further-reading.html", generateFurtherReadingHtml(chapter));
    
    // Create license page
    oebps?.file("license.html", generateLicenseHtml());
    
    // Create basic CSS
    oebps?.file("styles.css", generateCss());
    
    // Create mimetype file (must be first and uncompressed)
    zip.file("mimetype", "application/epub+zip", { compression: "STORE" });
    
    // Generate the EPUB file
    const epubBlob = await zip.generateAsync({ 
      type: "blob",
      mimeType: "application/epub+zip",
      compression: "DEFLATE"
    });
    
    // Create download link
    const url = URL.createObjectURL(epubBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
    
    console.log(`EPUB generated: ${filename}`);
    
  } catch (error) {
    console.error('Error generating EPUB:', error);
    throw new Error('Failed to generate EPUB file');
  }
};

// Generate PNG cover image using canvas
const generateCoverImagePng = async (chapter: Chapter): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    
    // Set canvas dimensions (600x800 for standard book cover)
    canvas.width = 600;
    canvas.height = 800;
    
    // Dark mode background (using website's dark background color)
    ctx.fillStyle = '#0f172a'; // Dark slate background from the website
    ctx.fillRect(0, 0, 600, 800);
    
    // Load the Mission Built logo
    const logoImg = new Image();
    logoImg.crossOrigin = 'anonymous';
    logoImg.onload = () => {
      try {
        // Set up text styling
        ctx.textAlign = 'center';
        
        // Logo section - draw the actual Mission Built logo (with M barbell and stylized text)
        const logoWidth = 200; // Adjust size to be prominent but not overwhelming
        const logoHeight = (logoImg.height / logoImg.width) * logoWidth; // Maintain aspect ratio
        const logoX = (600 - logoWidth) / 2;
        const logoY = 40;
        
        // Apply inversion filter for dark mode (makes the logo white on dark background)
        ctx.filter = 'brightness(0) invert(1)';
        ctx.drawImage(logoImg, logoX, logoY, logoWidth, logoHeight);
        ctx.filter = 'none'; // Reset filter
        
        // Main title - using website's heading styles
        ctx.font = 'bold 48px Montserrat, sans-serif';
        ctx.fillStyle = '#f8fafc'; // light text for dark mode
        ctx.fillText('Mission Built', 300, logoY + logoHeight + 60);
        
        // Subtitle
        ctx.font = '600 28px Montserrat, sans-serif';
        ctx.fillStyle = '#e2e8f0'; // slightly muted light text
        ctx.fillText('Lessons from the Barbell', 300, logoY + logoHeight + 100);
        ctx.fillText('and the Boardroom', 300, logoY + logoHeight + 140);
        
        // Chapter info box with dark mode styling
        ctx.fillStyle = '#1e293b'; // dark card background
        ctx.strokeStyle = '#334155'; // dark border
        ctx.lineWidth = 1;
        const boxX = 50, boxY = logoY + logoHeight + 200, boxW = 500, boxH = 100;
        ctx.fillRect(boxX, boxY, boxW, boxH);
        ctx.strokeRect(boxX, boxY, boxW, boxH);
        
        // Training log number
        ctx.font = '600 16px Inter, sans-serif';
        ctx.fillStyle = '#FFC300'; // sunburst for accent
        ctx.fillText(`TRAINING LOG ${chapter.id}`, 300, boxY + 40);
        
        // Chapter title
        ctx.font = '600 24px Montserrat, sans-serif';
        ctx.fillStyle = '#4B5320'; // army green for chapter title
        ctx.fillText(chapter.title, 300, boxY + 70);
        
        // Author line with dark mode styling
        ctx.strokeStyle = '#475569'; // darker border for dark mode
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(50, 700);
        ctx.lineTo(550, 700);
        ctx.stroke();
        
        // Author name
        ctx.font = '600 20px Montserrat, sans-serif';
        ctx.fillStyle = '#e2e8f0'; // light text for author
        ctx.fillText('Mike Nichols', 300, 740);
        
        // Convert canvas to blob
        canvas.toBlob((blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Failed to generate cover image'));
          }
        }, 'image/png');
      } catch (error) {
        reject(error);
      }
    };
    
    logoImg.onerror = () => {
      // Fallback: generate cover without logo image
      console.warn('Failed to load logo image, using fallback');
      try {
        ctx.textAlign = 'center';
        
        // Fallback logo text section
        ctx.font = 'bold 24px Montserrat, sans-serif';
        ctx.fillStyle = '#64748b'; // muted text color from dark mode
        ctx.fillText('Mission', 250, 80);
        ctx.fillStyle = '#FFC300'; // sunburst yellow
        ctx.fillText('Built', 320, 80);
        ctx.fillStyle = '#4B5320'; // army green
        ctx.fillText('.io', 370, 80);
        
        // Main title - using website's heading styles
        ctx.font = 'bold 48px Montserrat, sans-serif';
        ctx.fillStyle = '#f8fafc'; // light text for dark mode
        ctx.fillText('Mission Built', 300, 160);
        
        // Subtitle
        ctx.font = '600 28px Montserrat, sans-serif';
        ctx.fillStyle = '#e2e8f0'; // slightly muted light text
        ctx.fillText('Lessons from the Barbell', 300, 200);
        ctx.fillText('and the Boardroom', 300, 240);
        
        // Chapter info box with dark mode styling
        ctx.fillStyle = '#1e293b'; // dark card background
        ctx.strokeStyle = '#334155'; // dark border
        ctx.lineWidth = 1;
        const boxX = 50, boxY = 320, boxW = 500, boxH = 100;
        ctx.fillRect(boxX, boxY, boxW, boxH);
        ctx.strokeRect(boxX, boxY, boxW, boxH);
        
        // Training log number
        ctx.font = '600 16px Inter, sans-serif';
        ctx.fillStyle = '#FFC300'; // sunburst for accent
        ctx.fillText(`TRAINING LOG ${chapter.id}`, 300, 360);
        
        // Chapter title
        ctx.font = '600 24px Montserrat, sans-serif';
        ctx.fillStyle = '#4B5320'; // army green for chapter title
        ctx.fillText(chapter.title, 300, 390);
        
        // Author line with dark mode styling
        ctx.strokeStyle = '#475569'; // darker border for dark mode
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(50, 680);
        ctx.lineTo(550, 680);
        ctx.stroke();
        
        // Author name
        ctx.font = '600 20px Montserrat, sans-serif';
        ctx.fillStyle = '#e2e8f0'; // light text for author
        ctx.fillText('Mike Nichols', 300, 720);
        
        canvas.toBlob((blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Failed to generate cover image'));
          }
        }, 'image/png');
      } catch (error) {
        reject(error);
      }
    };
    
    // Load the logo from the public folder
    logoImg.src = '/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png';
  });
};

// Helper function to escape XML characters
const escapeXml = (text: string): string => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

// Helper function to get section content - extracted from LogSections.tsx
const getSectionContent = (chapterId: number, sectionId: string): string => {
  if (chapterId === 1) {
    switch (sectionId) {
      case "mission-is-the-magnet":
        return `
          <p>Before I ever built products, I served in the U.S. Army as an Airborne intelligence sergeant. That experience — of working in service of something larger than myself, of making decisions under pressure with lives on the line — shaped everything that came after. I learned early that mission comes first. Not ego. Not recognition. Mission.</p>
          
          <p>That mindset followed me from the military to cybersecurity, and into leadership roles where the stakes changed but the values stayed the same. Whether it was securing critical systems, helping build Elastic Security, or coaching in the gym, the goal has always been the same: real strength is lifting others.</p>
          
          <p>One of the proudest chapters of my product career was building Endgame. We entered a brutally competitive market — going head-to-head with massive players like McAfee and CrowdStrike — and carved out real ground. Not because we had more money or brand recognition, but because we had something harder to copy: a clear mission. Protect high-value targets from nation-state level attacks. That focus, and the small, fierce team who rallied behind it, made all the difference.</p>
          
          <p>At the heart of it was Nate Fick, a Marine officer turned tech CEO, and later the U.S. Ambassador for Cyberspace and Digital Policy. He led with conviction, clarity, and a deep respect for the mission. In all-hands meetings, Nate would remind us that we were an "elevator asset company" — that if the building burned down, the most important assets could still fit in the elevator. It wasn't the code or the tools. It was the people — the ones who understood the user's mission and had the passion to serve it.</p>
          
          <p>That idea stuck with me. Nate's example reinforced what I learned in uniform: The success is the user's success. Your mission is their mission.</p>
          
          <p>Metrics are the outcome of making your user successful. Yes, we need to measure them. But they are the result of serving the mission — not the reason for it.</p>
          
          <p>There's a moment in every product meeting when the question slides in like it always does:</p>
          <p>"How will we measure success?"</p>
          <p>It's a good question — just not always a good first question.</p>
          
          <p>In lifting, it's the same story. People chase PRs every week like the number on the barbell is the whole point. Add five pounds. Hit record. Post the clip. Repeat.</p>
          
          <p>But metrics without mission? That's just noise. Pressure with no direction. Goals with no guts.</p>
          
          <blockquote class="border-l-4 border-army pl-4 italic text-muted-foreground">
            "The weight on the bar isn't the goal — it's the evidence of progress, not the destination."
          </blockquote>
          
          <p>We've all seen what happens when this mindset takes over. It's not a failure of talent — it's a failure of alignment. Cyberpunk 2077 didn't initially flop because the devs didn't care — far from it. The development team poured years into building something ambitious. But the pressure to hit a holiday launch window — a decision made at the executive level — overrode the mission of delivering a complete, polished experience. The result was a rocky release, millions in refunds, a reputational hit, and a stock crash.</p>
          
          <p>To their credit, the team stuck with it. Years later, after patches and a reimagined DLC, the game has earned back much of the trust it lost — a testament to what happens when talented people are finally given the space to do the work right.</p>
          
          <p>And we've seen what it looks like to protect the mission — even when it means stepping back. Simone Biles did exactly that in front of the entire world at the 2021 Olympics. Under unimaginable pressure, she chose long-term purpose over short-term performance. She knew something was off, and she honored that instinct.</p>
          
          <blockquote class="border-l-4 border-army pl-4 italic text-muted-foreground">
            "I have to focus on my mental health… if you don't, then you're not going to enjoy your score and you're not gonna succeed as much as you want to."<br />
            <span class="text-sm">- Simone Biles</span>
          </blockquote>
          
          <p>Her move wasn't retreat — it was leadership. And in time, she returned to competition stronger, on her terms, and more respected than ever. A different kind of comeback — one powered by mission, not metrics.</p>
          
          <p>Success isn't about hitting every metric. It's about refusing to lose yourself trying.</p>
          
          <h3>More Than Just Good Intentions</h3>
          
          <p>Mission-driven isn't a poster in the break room or a bullet in a pitch deck. It's how you move — how you decide, how you show up when it's hard.</p>
          
          <p>In a world that celebrates velocity, mission is quiet. But that doesn't make it weak. Mission gives you clarity when things get blurry and stamina when things get hard.</p>
          
          <p>Take Patagonia. They once ran a campaign telling customers not to buy their jacket unless they truly needed it. Why? Because their values mattered more than their quarterly revenue.</p>
          
          <p>Or SpaceX — aiming at goals that span decades, not quarters. It's not about idolizing companies. It's about recognizing what real mission-alignment looks like when the stakes are high and the timelines are long.</p>
          
          <p>And it pays off. Research shows that people who believe in the purpose behind their work stay longer, burn out less, and deliver more.</p>
          
          <h3>When Metrics Eclipse Meaning</h3>
          
          <p>Let's be clear: metrics matter. But only when they serve the mission — not when they become it.</p>
          
          <p>Here's where teams lose the plot:</p>
          <ul>
            <li>They ship fast instead of shipping right.</li>
            <li>They chase signups instead of learning why users leave.</li>
            <li>They brag about launches and ignore long-term usage.</li>
          </ul>
          
          <p>When dates drive development, teams start cutting corners. Feedback loops close. Energy fades. You build momentum toward a number — not toward value.</p>
          
          <p>In the gym, this is ego lifting. In product, it's just as risky. It looks like burned-out engineers, brittle systems, and growth that collapses the second you stop pushing it uphill.</p>
          
          <h3>The Fulfillment Flywheel (Powered by Purpose)</h3>
          
          <p>There's a better model. One that's as relevant in combat as it is in code — or in the squat rack.</p>
          
          <p>It's called the OODA Loop: Observe, Orient, Decide, Act. Developed for fighter pilots. Adopted by startups. Powered by clarity.</p>
          
          <p>But here's the catch — without a clear mission, the whole loop spins out.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
              <tr style="background-color: #f8f9fa;">
                <th style="border: 1px solid #dee2e6; padding: 12px; text-align: left;">OODA Stage</th>
                <th style="border: 1px solid #dee2e6; padding: 12px; text-align: left;">With Mission-Driven Focus</th>
                <th style="border: 1px solid #dee2e6; padding: 12px; text-align: left;">Without It</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="border: 1px solid #dee2e6; padding: 12px;"><strong>Observe</strong></td>
                <td style="border: 1px solid #dee2e6; padding: 12px;">You know what matters to watch</td>
                <td style="border: 1px solid #dee2e6; padding: 12px;">You collect everything, drowning in noise</td>
              </tr>
              <tr style="background-color: #f8f9fa;">
                <td style="border: 1px solid #dee2e6; padding: 12px;"><strong>Orient</strong></td>
                <td style="border: 1px solid #dee2e6; padding: 12px;">Purpose helps filter &amp; frame inputs</td>
                <td style="border: 1px solid #dee2e6; padding: 12px;">Metrics get over-prioritized, lose big picture</td>
              </tr>
              <tr>
                <td style="border: 1px solid #dee2e6; padding: 12px;"><strong>Decide</strong></td>
                <td style="border: 1px solid #dee2e6; padding: 12px;">Mission becomes a north star for action</td>
                <td style="border: 1px solid #dee2e6; padding: 12px;">Risk of chasing vanity wins or short-term gains</td>
              </tr>
              <tr style="background-color: #f8f9fa;">
                <td style="border: 1px solid #dee2e6; padding: 12px;"><strong>Act</strong></td>
                <td style="border: 1px solid #dee2e6; padding: 12px;">Execution has energy and resolve</td>
                <td style="border: 1px solid #dee2e6; padding: 12px;">Actions may be misaligned or half-hearted</td>
              </tr>
            </tbody>
          </table>
          
          <p>In lifting, it's trusting the plan instead of maxing out because you feel good that day. In product, it's waiting to ship because your users aren't ready — even if your OKRs are.</p>
          
          <p>Mission turns chaos into clarity. It makes every rep count. Every release matter. Every decision directional.</p>
          
          <p>This is the real flywheel of fulfillment:</p>
          <ul>
            <li>Mission fuels clarity.</li>
            <li>Clarity powers resilience.</li>
            <li>Resilience drives real progress.</li>
            <li>And real progress reinforces the mission.</li>
          </ul>
          
          <p>That's the throughline. That's what keeps us going.</p>
          <p>Metrics follow. But the mission leads.</p>
        `;
      case "the-drift":
        return `
          <p>At first, the metric is a mirror — it reflects the mission. Clean, focused, and true.</p>
          <p>But over time, something shifts. Quietly. Gradually. The mirror warps. And without noticing, we begin steering toward the reflection instead of the road.</p>
          <p>This is the Drift.</p>
          
          <p>It doesn't announce itself. It rarely arrives with bad intent. It begins with a goal:</p>
          
          <p>Launch the feature by Q4.</p>
          <p>Hit 405 on deadlift.</p>
          <p>Increase MAUs by 20%.</p>
          
          <p>Reasonable. Measurable. Actionable. These are the numbers we hold up as evidence that we're making progress — and for a while, they are.</p>
          
          <p>But then: the goal becomes the game.</p>
          
          <p>In product, we've seen it time and time again. Shipping becomes more important than solving. Teams crunch to meet a date set quarters ago, long after the user problem has evolved. Metrics chase headlines. Investors want news. Executives want motion. The dashboard glows green while user trust fades red.</p>
          
          <p>Think of Boeing. In the race to beat Airbus, they needed the 737 Max on runways — fast. Shareholder pressure mounted. Deadlines became immovable. On paper, the metrics looked great: deliveries met, costs controlled. But beneath the numbers, safety systems were skipped, warnings dismissed.</p>
          <p>Two crashes. Hundreds of lives lost. The drift wasn't just technical — it was cultural. Speed overtook scrutiny. The metric overtook the mission.</p>
          
          <p>In strength, the signs are physical — and brutal. Hafthor Björnsson, one of the strongest men in history, returned to powerlifting after two years of boxing. He set his sights on breaking the raw total world record. Big lifts were stacking fast. But recovery lagged behind. He felt the warning signs — tightness, fatigue — but kept pushing.</p>
          
          <blockquote class="border-l-4 border-army pl-4 italic text-muted-foreground">
            "I wasn't recovering fully between sessions… not listening to my body, which is silly."
          </blockquote>
          
          <p>Then came the snap. Attempting a 556-pound bench press, his pec tore clean off the bone.</p>
          <p>The drift had found him too: progress misaligned with process, recovery sacrificed to reach a number that no longer serves the mission. The result was pain, delay, and a lesson carved in scar tissue.</p>
          
          <p>The damage isn't just physical. It's psychological. Because when we treat metrics as the mission, missing them feels like failure. And so we hide the truth, inflate success, or worst of all — stop trying.</p>
          
          <p>The Drift corrodes not through force, but through inversion. It flips process into performance. It turns care into compliance.</p>
          
          <p>And it burns people out.</p>
          
          <p>I've worked with brilliant people who could have built anything — but they left, not because they failed, but because the system stopped valuing why they showed up in the first place. When we reduce contribution to a dashboard, we forget the soul behind the keyboard.</p>
          
          <p>This isn't just anecdotal. Research shows that mission-driven employees are significantly more loyal.</p>
          <p>A LinkedIn survey found that employees motivated by mission were 54% more likely to stay with their company for five or more years.</p>
          <p>Another study revealed that companies engaging employees in purpose-driven programs saw a 52% lower turnover among newer employees.</p>
          
          <p>So what's the antidote?</p>
          
          <p>It's not to ignore metrics. It's to anchor them. To use them as signal, not steering.</p>
          <p>To build systems that reinforce why we do the work, not just how fast we do it.</p>
          
          <p>Because the real goal is not a launch date or a deadlift.</p>
          <p>The real goal is built through the reps, not measured by them.</p>
        `;
      case "repetition-with-intention":
        return `
          <p>You don't get strong by lifting heavy once.</p>
          <p>You get strong by showing up again. And again. And again.</p>
          <p>But if you do the same thing forever, you don't get stronger — you get stuck.</p>
          <p>That's the tension of progress: it demands ritual, but it punishes repetition without variation.</p>
          <p>Whether in the gym or in product, growth comes through iteration — small, deliberate cycles of effort. You log your training. You tweak your form. You try a new tempo. In software, you ship. You measure. You talk to the user. You try again. The process isn't glamorous — but it's generative.</p>
          <p>Rituals compound. Rules confine.</p>
          <p>A rule says "do this."</p>
          <p>A ritual says "do this because it matters."</p>
          <p>One is brittle. The other bends with you.</p>
          <p>Agile, for example, isn't magic. It's just a set of rituals. Daily standups, retros, demos, sprints — all meant to create rhythm and reflection. But rituals only work when they're anchored in meaning and adapted to context. If your team treats retros like checkbox theater, then you're not iterating — you're just looping. And if your standup sounds like "I did stuff, I'll do stuff, no blockers," you've got a ritual without reason.</p>
          <p>The same failure shows up in the gym. People find a powerlifting program online and follow it to the letter, even when it doesn't fit their recovery, their age, their job, their life. They wonder why they plateau — or get hurt. It's because they forgot the principle beneath the plan.</p>
          <p>That's where most systems fail: not because the framework is flawed, but because the user is forgotten. They're treated like an input to a method, instead of the reason for its existence.</p>
          <p>Let's be honest: there's no shortage of books telling you how to do things.</p>
          <p>And yes — here we are, writing another one.</p>
          <p>But this isn't a blueprint. It's a philosophy.</p>
          <p>The implementation is on you.</p>
          <p>What works for one team, one lifter, one body, won't work for another. That's not failure — that's reality.</p>
          <p>Stefi Cohen didn't become a record-breaking lifter by blindly following a single powerlifting template. Her training evolved through experimentation: strength phases, hypertrophy cycles, hybrid athletic blocks. She didn't just lift heavy — she studied her feedback, varied her stimuli, and rewrote her rituals to fit her mission.</p>
          <p>Progress didn't come from rigidity. It came from rhythm and reinvention.</p>
          <p>In product, that same spirit of experimentation lives in hack weeks — short, sacred breaks from routine where teams can stretch in new directions.</p>
          <p>Atlassian, Spotify, and Elastic have all embraced this. At Elastic, hack weeks became a celebrated ritual — not just for innovation, but for joy. Engineers got to break free from roadmap gravity and chase ideas that didn't need to justify themselves in Jira. Some of Elastic Security's most creative features — including internal workflow improvements, experimental visualizations, and early prototypes of user-requested tooling — were born not in sprint planning, but in that carved-out chaos.</p>
          <p>Sometimes, the best way to realign with the mission is to deliberately step outside it.</p>
          <p>Rituals work when they're shaped by the user, not imposed on them.</p>
          <p>They're tools — not commandments.</p>
          <p>And when they're working, you feel it: not just in output, but in outlook. A team that trusts its rituals doesn't need micromanagement. A lifter that trusts their program doesn't need motivation hacks. The rhythm carries you. The meaning sustains you.</p>
          <p>But rituals aren't static.</p>
          <p>They must flex to your fatigue. They must bend to your bandwidth. They must evolve — not just to avoid boredom, but to stay honest with the mission.</p>
          <p>Same input, same outcome. If the goal has changed, so must the reps.</p>
          <p>That's what separates the lifter who grows from the one who stalls.</p>
          <p>That's what separates the product team that adapts from the one that burns out.</p>
          <p>Because if the mission is the magnet —</p>
          <p>rituals are the rails.</p>
          <p>They don't tell you where to go.</p>
          <p>They keep you from sliding off the path while you find it.</p>
          <p>Rituals give you direction.</p>
          <p>But progress? That comes from the work itself — the grind, the reps, the effort no one applauds.</p>
          <p>In the next chapter, we talk about how strength is built — and why it doesn't always look like progress.</p>
        `;
      default:
        return "";
    }
  }
  
  if (chapterId === 2) {
    switch (sectionId) {
      case "the-myth-of-overnight-success":
        return `
          <p>We've all heard the stories.</p>
          <p>The product that "took off overnight."</p>
          <p>The lifter who casually pulls four plates like they've always been able to.</p>
          <p>The founder in a garage who changes the world with a single keynote.</p>
          <p>It's tempting to believe that mastery happens like that — in a flash.</p>
          <p>But that's not really how it works.</p>
          <p>Take the iPhone. The 2007 reveal made it feel like it dropped from the sky fully formed. But behind that moment were years of trial and error. Touchscreens that didn't quite work. Software that crashed mid-demo. A mountain of prototypes that never saw the light of day. The final product wasn't a stroke of brilliance — it was the result of relentless iteration.</p>
          <p>Same with Instagram. What looked like an overnight success was actually the second version of a too-close-to-Foursquare check-in app called Burbn. The team just kept listening, trimming, trying again. One update at a time.</p>
          <p>And that big deadlift on your feed? Probably not magic. More likely: a hundred quiet sessions, some of them rough. A lot of small choices to show up, tweak form, trust the program.</p>
          <p>We love the idea of sparks — fast wins, big leaps, sudden breakthroughs. But progress usually doesn't feel like that.</p>
          <p>Most of the time, it feels a lot more like repetition.</p>
          <p>The engineer fixing the same piece of code — again.</p>
          <p>The founder rewriting their pitch for the fifth time.</p>
          <p>The lifter doing the same warm-up cues every session, no matter the weight.</p>
          <p>It's not flashy. But it adds up.</p>
          <p>That's part of what makes the first few months — or the first year — so exhilarating. In the gym, you make gains almost every week. In a startup, your product evolves daily. Everything feels fast, and the feedback is loud.</p>
          <p>But then you hit the plateau.</p>
          <p>The easy wins dry up. Strength doesn't come as quickly. Users get harder to surprise. Suddenly, it's not about chasing sparks anymore — it's about showing up and pushing through.</p>
          <p>This is where the real work begins.</p>
          <p>In lifting, that means grinding through the middle — not maxing out, but mastering the basics under load. In product, it's navigating the shift from scrappy innovation to enterprise-grade reliability. Less fanfare, more focus.</p>
          <p>That's the part people don't always talk about — and the part that actually defines mastery.</p>
          <p>It's not just about adding more weight or shipping more features.</p>
          <p>It's about learning to hone your form.</p>
          <p>In lifting, that might mean dialing in your brace, fixing a subtle shift in your squat, or finally feeling your lats engage in a deadlift.</p>
          <p>In product, it's refining an initiative until it truly solves the right problem — not just adds to the roadmap.</p>
          <p>You start to realize: Reps aren't just about volume.</p>
          <p>They're about attention.</p>
          <p>That's what makes progress sustainable.</p>
          <p>And that's what Mission Built is really about — building better products, one rep at a time.</p>
        `;
      case "repetition-is-not-redundancy":
        return `
          <p>In Section 1, we looked at the myth of overnight success — how real strength, in the gym or in product, is built through showing up again and again. But not all reps are created equal. The real magic isn't just in the repetition — it's in how you use it.</p>
          <p>Not all reps count the same.</p>
          <p>Anyone who's coasted through a gym session, just moving weight, knows the difference. One set burns time. Another builds awareness, precision, and strength — even if the numbers don't change.</p>
          <p>The same is true in product.</p>
          <p>Repetition isn't redundant when it's intentional. When it's used to test assumptions, refine interfaces, tune performance, or build something just a little closer to what users actually need. That's the kind of rep that moves things forward.</p>
          <p>But repetition alone isn't enough — variation is what makes repetition transformative.</p>
          <p>As Dr. Mike Israetel, co-founder of Renaissance Periodization, teaches:</p>
          <p>"Training works best when structured into intentional blocks that emphasize different goals. In hypertrophy-focused blocks, lifters increase volume over time — guided by principles like Minimum Effective Volume (MEV), Maximum Adaptive Volume (MAV), and Maximum Recoverable Volume (MRV). This structured overload builds muscle while preserving recovery, setting the stage for later strength expression. The concept isn't just about working hard — it's about working smart, within clear, adaptive boundaries."</p>
          <p>Source: https://drmikeisraetel.com/dr-mike-israetel-mv-mev-mav-mrv-explained/</p>
          <p>In training, we use blocks for different goals: hypertrophy to build muscle, strength to build expression, and deloads to recover and grow. We manipulate movement, load, and tempo to avoid stagnation. A paused bench press, a deficit deadlift, or chains added to a bar — each variation targets a different adaptation, even if the base movement stays the same.</p>
          <p>Product is no different.</p>
          <p>You might run a block of sprints to achieve a specific outcome — refining onboarding, improving performance, or tackling tech debt. Then shift into a new block with a new goal. Like training, it takes enough intentionality to complete a cycle, maybe one, two, or three sprints, before varying the focus. Progress comes not from flailing in every direction, but from focused variation over time.</p>
          <p>And just like strength doesn't grow without tension, product insight doesn't grow without diverse input.</p>
          <p>You can't just loop with your own team forever. Sometimes you have to stretch — to talk to sales, to customers, to analysts, to skeptics. Even when it's uncomfortable. Especially when it is.</p>
          <p>This is where The Medici Group gets it right: innovation happens when diverse perspectives collide.</p>
          <p>As Frans Johansson puts it in The Medici Effect:</p>
          <p>"When you step into an intersection of fields, disciplines, or cultures, you can combine existing concepts into a large number of extraordinary new ideas."</p>
          <p>In the gym, that might mean lifting with people stronger or different than you. In product, it means bringing in voices from outside your echo chamber — support calls, sales objections, the person who almost churned.</p>
          <p>Reps alone build endurance.</p>
          <p>Smart variation builds power.</p>
          <p>This is how you break through the plateau — not by abandoning the reps, but by evolving them.</p>
        `;
      case "when-the-spark-fades":
        return `
          <p>The first reps are easy — not physically, but emotionally. You're fired up. Everything's new. Progress is loud and obvious.</p>
          <p>But what happens after the rush?</p>
          <p>In lifting, it's the long middle. The early PRs stop coming. Your form stalls. You show up, grind through the same sets, and wonder if you're actually moving forward. You're not always chasing your one-rep max. And you shouldn't be. Strength isn't built by living at your limit — it's built in the space between peaks, when you train with intention and recover with discipline.</p>
          <p>In product, it's the same. You can't always be doing the flashy, innovative thing. Sometimes the most important work is foundational — fixing backend debt, improving accessibility, tightening up performance. The kind of work that creates capacity for brilliance later.</p>
          <p>And for many, this is where the wheels come off.</p>
          <p>Because motivation — that spark — is unreliable. It's not designed for the long haul. And it doesn't care about your goals.</p>
          <p>That's why systems matter more than sparks.</p>
          <p>Systems are how you keep showing up when the dopamine dies down. Morning routines. Logbooks. Standups. Progress reviews. They don't need to be rigid. But they do need to be real. Reps don't get done by accident.</p>
          <p>You don't need hype — you need structure.</p>
          <p>In training, that structure might be a coach, a program, a calendar alert that says "get under the bar." In product, it might be a rhythm of sprint planning, async demos, or check-ins with customers. Externalized accountability is often the only thing that keeps momentum moving.</p>
          <p>James Clear — author of the bestselling book Atomic Habits, known for his work on behavior change and habit formation — wrote:</p>
          <p>"You do not rise to the level of your goals. You fall to the level of your systems."</p>
          <p>The work still has to be done. But when your environment supports your actions, it gets done more often.</p>
          <p>And here's the quiet truth:</p>
          <p>The people who make the biggest progress aren't usually the most intense — they're the most consistent.</p>
          <p>They build when no one's watching.</p>
          <p>They train when it's not fun.</p>
          <p>They keep caring — even when the spark is gone.</p>
          <p>But what if you need to find the spark again?</p>
          <p>One of the fastest ways to reignite your drive is to reconnect with the people you're building for. Talk to your users — especially the ones who aren't shouting. You might think the work you're doing isn't flashy, but somewhere out there, someone is craving exactly what you're building.</p>
          <p>Stability. Accessibility. Visibility. These aren't buzzwords — they're lifelines for users with real problems. Find them. Listen to them. Let them lift you up.</p>
          <p>Because nothing recharges momentum like hearing someone say: "This made my day better."</p>
          <p>And that brings us to the next section: the power of the quiet reps — the multiplier of boring work.</p>
        `;
      case "the-multiplier-of-boring-work":
        return `
          <p>There's a kind of work that doesn't make headlines. No one posts their warm-up sets. No one celebrates shaving 100ms off load time.</p>
          <p>But that's the work that wins.</p>
          <p>For every PR pulled in competition, there are hundreds of days of grinding behind it — submaximal sets, long pauses, light reps, mental resets. The same is true in product. Every effortless-looking release rests on a foundation of something much deeper: months of planning, iteration, bug-fixing, and late-night Slack threads.</p>
          <p>In lifting, it's the mobility work you do alone at 6 a.m. The back-off sets you don't skip. The deload week you take seriously. It doesn't look impressive — but it makes everything else possible.</p>
          <p>In product, it's building out role-based access controls — not because it's exciting, but because your biggest customers expect it. It's mapping audit logs across services so your platform isn't a compliance risk anymore. It's the 10th conversation with a user about the same rough edge in the UX. These aren't "big bets," but they're the reason your big bets land.</p>
          <p>That's what boring work does: it compounds.</p>
          <p>Each rep you don't skip, each ticket you don't shortcut, each problem you refine instead of avoid — it stacks. Quietly. Relentlessly. And over time, it becomes your edge.</p>
          <p>You don't need to go viral. You need to be trusted.</p>
          <p>And trust is built in the boring work.</p>
          <p>The warm-up that prevents injury.</p>
          <p>The small fix that prevents churn.</p>
          <p>The five-second improvement that gives a user five minutes back.</p>
          <p>This is what separates the strong from the strong enough.</p>
          <p>It's not what you do once.</p>
          <p>It's what you do without applause.</p>
          <p>You do it for the growth. For the discipline. For the user whose day you quietly made better. Not for the accolades.</p>
          <p>That's what separates long-term success from short-term effort — not glory, but the passion to do the work for its own sake. The features and the gains? They're just symptoms. What matters is the mission that fuels them.</p>
          <p>That's why I'm so passionate about product management — and about lifting. Because the best PMs and the best lifters don't just show up for themselves. They show up for the team, for the user, for their own growth — not in a selfish way, but in a way that elevates everything and everyone around them.</p>
          <p>And if you've made it this far — through the reps, the plateaus, the quiet work — you already know:</p>
          <p>This isn't just about shipping or lifting.</p>
          <p>It's about becoming the kind of person, or the kind of team, that keeps showing up.</p>
          <p>That's the real win. And that's where we end this chapter — not at the peak, but at the foundation.</p>
        `;
      case "the-work-becomes-the-win":
        return `
          <p>At some point, the reps stop being something you have to do. They just become something you do.</p>
          <p>You stop chasing motivation and start trusting momentum.</p>
          <p>You stop asking when it gets easy and start asking how to keep showing up.</p>
          <p>And that's the shift — not just in the gym or in your sprint board, but in your mindset. You lift because you care. You build because it matters. Because you love it.</p>
          <p>It's not about PRs or product launches. It's about what they represent: The hours you logged. The patterns you learned. The people you helped.</p>
          <p>That's what it means to be mission built.</p>
          <p>You're not doing it for the spotlight.</p>
          <p>You're doing it because you've seen the power of the process — and you're not walking away from it.</p>
          <p>Progress doesn't shout — it stacks.</p>
          <p>One quiet rep at a time.</p>
          
          <p>And if repetition is the foundation, what you build on top of it matters.</p>
          <p>The next chapter explores exactly that: how rituals — not rules — help you grow, adapt, and lead with purpose.</p>
          <p>Up next: Rituals Over Rules.</p>
        `;
      default:
        return "";
    }
  }
  
  return "";
};

// Helper function to get sections for a chapter
const getSections = (chapterId: number) => {
  if (chapterId === 1) {
    return [
      { id: "mission-is-the-magnet", title: "The Mission Is the Magnet" },
      { id: "the-drift", title: "The Drift" },
      { id: "repetition-with-intention", title: "Repetition with Intention" }
    ];
  }
  
  if (chapterId === 2) {
    return [
      { id: "the-myth-of-overnight-success", title: "The Myth of Overnight Success" },
      { id: "repetition-is-not-redundancy", title: "Repetition Is Not Redundancy" },
      { id: "when-the-spark-fades", title: "When the Spark Fades" },
      { id: "the-multiplier-of-boring-work", title: "The Multiplier of Boring Work" },
      { id: "the-work-becomes-the-win", title: "The Work Becomes the Win" }
    ];
  }
  
  return [];
};

const generateContentOpf = (chapter: Chapter): string => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="BookId" version="2.0">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:opf="http://www.idpf.org/2007/opf">
    <dc:title>${escapeXml(chapter.title)}</dc:title>
    <dc:creator>Mike Nichols</dc:creator>
    <dc:publisher>MissionBuilt.io</dc:publisher>
    <dc:description>${escapeXml(chapter.description)}</dc:description>
    <dc:language>en</dc:language>
    <dc:identifier id="BookId">${chapter.id}</dc:identifier>
    <meta name="cover" content="cover-image"/>
  </metadata>
  <manifest>
    <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
    <item id="cover-image" href="cover.png" media-type="image/png"/>
    <item id="cover" href="cover.html" media-type="application/xhtml+xml"/>
    <item id="content" href="content.html" media-type="application/xhtml+xml"/>
    <item id="further-reading" href="further-reading.html" media-type="application/xhtml+xml"/>
    <item id="license" href="license.html" media-type="application/xhtml+xml"/>
    <item id="css" href="styles.css" media-type="text/css"/>
  </manifest>
  <spine toc="ncx">
    <itemref idref="cover"/>
    <itemref idref="content"/>
    <itemref idref="further-reading"/>
    <itemref idref="license"/>
  </spine>
  <guide>
    <reference type="cover" title="Cover" href="cover.html"/>
  </guide>
</package>`;
};

const generateTocNcx = (chapter: Chapter): string => {
  const sections = getSections(chapter.id);
  
  let navPoints = `
    <navPoint id="cover" playOrder="1">
      <navLabel><text>Cover</text></navLabel>
      <content src="cover.html"/>
    </navPoint>
  `;
  
  let playOrder = 2;
  sections.forEach((section) => {
    navPoints += `
    <navPoint id="${section.id}" playOrder="${playOrder}">
      <navLabel><text>${escapeXml(section.title)}</text></navLabel>
      <content src="content.html#${section.id}"/>
    </navPoint>`;
    playOrder++;
  });
  
  navPoints += `
    <navPoint id="further-reading" playOrder="${playOrder}">
      <navLabel><text>Further Reading</text></navLabel>
      <content src="further-reading.html"/>
    </navPoint>
    <navPoint id="license" playOrder="${playOrder + 1}">
      <navLabel><text>License</text></navLabel>
      <content src="license.html"/>
    </navPoint>
  `;
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head>
    <meta name="dtb:uid" content="${chapter.id}"/>
    <meta name="dtb:depth" content="1"/>
    <meta name="dtb:totalPageCount" content="0"/>
    <meta name="dtb:maxPageNumber" content="0"/>
  </head>
  <docTitle>
    <text>${escapeXml(chapter.title)}</text>
  </docTitle>
  <navMap>
    ${navPoints}
  </navMap>
</ncx>`;
};

const generateCoverHtml = (chapter: Chapter): string => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Cover</title>
  <link rel="stylesheet" type="text/css" href="styles.css"/>
</head>
<body>
  <div class="cover">
    <div class="cover-content">
      <div class="logo-section">
        <div class="logo-text">
          <span class="mission">Mission</span><span class="built">Built</span><span class="domain">.io</span>
        </div>
      </div>
      
      <div class="title-section">
        <h1 class="main-title">Mission Built</h1>
        <h2 class="subtitle">Lessons from the Barbell and the Boardroom</h2>
        <p class="tagline">The Shared Discipline Behind Great Products and Great Lifts</p>
      </div>
      
      <div class="chapter-info">
        <h3 class="chapter-title">${escapeXml(chapter.title)}</h3>
        <p class="training-log-label">Training Log</p>
      </div>
      
      <div class="author-section">
        <p class="author">Mike Nichols</p>
      </div>
    </div>
  </div>
</body>
</html>`;
};

const generateContentHtml = (chapter: Chapter): string => {
  const sections = getSections(chapter.id);
  
  let sectionsHtml = '';
  sections.forEach((section) => {
    const content = getSectionContent(chapter.id, section.id);
    if (content) {
      sectionsHtml += `
        <div id="${section.id}" class="section">
          <h2>${escapeXml(section.title)}</h2>
          ${content}
        </div>
      `;
    }
  });
  
  if (!sectionsHtml) {
    sectionsHtml = `
      <p>This chapter is currently being developed. The content will be available soon.</p>
      <p>In the meantime, check out the Further Reading section for related resources and insights.</p>
    `;
  }
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>${escapeXml(chapter.title)}</title>
  <link rel="stylesheet" type="text/css" href="styles.css"/>
</head>
<body>
  <h1>${escapeXml(chapter.title)}</h1>
  ${chapter.description ? `<p class="description">${escapeXml(chapter.description)}</p>` : ''}
  ${sectionsHtml}
</body>
</html>`;
};

const generateFurtherReadingHtml = (chapter: Chapter): string => {
  let resourcesHtml = '';
  
  if (chapter.furtherReading && chapter.furtherReading.length > 0) {
    resourcesHtml = chapter.furtherReading.map(resource => `
      <div class="resource">
        <h3><a href="${escapeXml(resource.url)}">${escapeXml(resource.title)}</a></h3>
        ${resource.description ? `<p>${escapeXml(resource.description)}</p>` : ''}
        ${resource.note ? `<p class="note">${escapeXml(resource.note)}</p>` : ''}
      </div>
    `).join('');
  } else {
    resourcesHtml = '<p>No additional resources available.</p>';
  }
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Further Reading</title>
  <link rel="stylesheet" type="text/css" href="styles.css"/>
</head>
<body>
  <h2>Further Reading</h2>
  ${resourcesHtml}
</body>
</html>`;
};

const generateLicenseHtml = (): string => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>License</title>
  <link rel="stylesheet" type="text/css" href="styles.css"/>
</head>
<body>
  <div class="license">
    <h2>License</h2>
    
    <p><strong>Mission Built: Lessons from the Barbell and the Boardroom</strong><br/>
    by Mike Nichols</p>
    
    <p>This work is licensed under a<br/>
    Creative Commons Attribution-NonCommercial 4.0 International License.<br/>
    To view a copy of this license, visit<br/>
    creativecommons.org/licenses/by-nc/4.0</p>
    
    <p>You are free to share and adapt this work for non-commercial use, with appropriate credit and a link to missionbuilt.io.</p>
  </div>
</body>
</html>`;
};

const generateCss = (): string => {
  return `
/* Base styles */
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  color: #1e293b;
  background: #f8fafc;
}

/* Cover page styles */
.cover {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 40px 20px;
}

.cover-content {
  text-align: center;
  max-width: 600px;
  width: 100%;
}

/* Logo section */
.logo-section {
  margin-bottom: 60px;
}

.logo-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.025em;
}

.mission {
  color: #475569; /* slate */
}

.built {
  color: #f59e0b; /* sunburst */
}

.domain {
  color: #059669; /* army */
}

/* Title section */
.title-section {
  margin-bottom: 50px;
  padding: 0 20px;
}

.main-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
  color: #0f172a;
  margin: 0 0 20px 0;
  letter-spacing: -0.025em;
}

.subtitle {
  font-family: 'Montserrat', sans-serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.2;
  color: #334155;
  margin: 0 0 20px 0;
  letter-spacing: -0.015em;
}

.tagline {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  color: #64748b;
  margin: 0;
  font-style: italic;
}

/* Chapter info section */
.chapter-info {
  margin-bottom: 50px;
  padding: 30px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid #e2e8f0;
}

.chapter-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #059669;
  margin: 0 0 10px 0;
  letter-spacing: -0.015em;
}

.training-log-label {
  font-size: 16px;
  font-weight: 500;
  color: #64748b;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Author section */
.author-section {
  border-top: 2px solid #e2e8f0;
  padding-top: 30px;
}

.author {
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #374151;
  margin: 0;
  letter-spacing: -0.015em;
}

/* Content page styles */
h1 {
  font-family: 'Montserrat', sans-serif;
  color: #0f172a;
  border-bottom: 2px solid #059669;
  padding-bottom: 10px;
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 30px 0;
  letter-spacing: -0.025em;
}

h2 {
  font-family: 'Montserrat', sans-serif;
  color: #1e293b;
  margin: 40px 0 20px 0;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.015em;
}

h3 {
  font-family: 'Montserrat', sans-serif;
  color: #334155;
  margin: 30px 0 15px 0;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.015em;
}

.description {
  font-style: italic;
  color: #64748b;
  margin-bottom: 30px;
  font-size: 18px;
  line-height: 1.6;
}

.section {
  margin-bottom: 50px;
  page-break-after: auto;
}

/* Text content styles */
p {
  margin: 0 0 20px 0;
  line-height: 1.7;
  font-size: 16px;
  color: #374151;
}

blockquote {
  border-left: 4px solid #059669;
  padding-left: 20px;
  margin: 30px 0;
  font-style: italic;
  color: #4b5563;
  background: #f8fafc;
  padding: 20px;
  border-radius: 8px;
}

.border-army {
  border-color: #059669;
}

ul {
  margin: 20px 0;
  padding-left: 30px;
}

li {
  margin-bottom: 10px;
  line-height: 1.6;
  color: #374151;
}

/* Table styles */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 30px 0;
  font-size: 14px;
}

th, td {
  border: 1px solid #d1d5db;
  padding: 12px;
  text-align: left;
  line-height: 1.5;
}

th {
  background-color: #f3f4f6;
  font-weight: 600;
  color: #1f2937;
}

tr:nth-child(even) {
  background-color: #f9fafb;
}

/* Resource and license styles */
.resource {
  margin-bottom: 30px;
  padding: 20px;
  border-left: 3px solid #059669;
  background-color: #f8fafc;
  border-radius: 8px;
}

.resource h3 {
  margin-top: 0;
  color: #059669;
}

.resource .note {
  font-style: italic;
  font-size: 14px;
  color: #64748b;
}

.license {
  padding: 30px;
  font-family: 'Inter', serif;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

/* Links */
a {
  color: #059669;
  text-decoration: none;
  font-weight: 500;
}

a:hover {
  text-decoration: underline;
}

/* Responsive adjustments for smaller e-readers */
@media screen and (max-width: 600px) {
  .main-title {
    font-size: 36px;
  }
  
  .subtitle {
    font-size: 22px;
  }
  
  .cover-content {
    padding: 0 10px;
  }
  
  .chapter-info {
    padding: 20px;
  }
}
`;

};

const generateFilename = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .concat('-training-log.epub');
};
