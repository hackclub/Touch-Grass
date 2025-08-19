<script lang='js'>
    import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
</script>
<h1>Go Touch Grass</h1>
<button on:click={() => window.location.href = 'https://submit.hackclub.com/touch-grass'}>
  Submit
</button>




<h2>FAQs</h2>
<div>
    <div>
        <h3>What is Touch Grass?</h3>
        <p>Touch Grass is a Hack Club YSWS where for every hour you spend on a shipped project, we'll run 200m.</p>
    </div>
    <div>
        <h3>How can I participate?</h3>
        <p>You can participate by shipping a project, and submitting it <a href="https://submit.hackclub.com/touch-grass">here</a>.</p>
    </div>
    <div>
        <h3>Are there any ways for us to make you run more?</h3>
        <p>Yes! You can make us run more by shipping more projects and encouraging your friends to do that as well.</p>
        <p>You can also try to get on our VIP list.</p>
    </div>
    <div>
        <h3>What's so special about the VIP list?</h3>
        <p>Well, if you're on it, we'll run 400m for every hour you spend on a shipped project.</p>
    </div>
    <div>
        <h3>How can I get on the VIP list?</h3>
        <p>You can get on the VIP list by shipping a project that we think is cool, and that also encourages others to go outside.</p>
    </div>
    <div>
        <h3>My question is unanswered, help???</h3>
        <p>Feel free to ask it in the slack channel <a href="">#touch-grass.</p>
    </div>
</div>