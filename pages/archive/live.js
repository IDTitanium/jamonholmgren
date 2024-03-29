import React from "react";
import Page from "../../components/page";

export default () => {
  return (
    <Page title="Live Reloading in RubyMotion">
      <h1>Live Reloading in RubyMotion</h1>
      <p>
        <em>Published April 14, 2015</em>
      </p>

      <p>"Todd. How's it going?" I could hardly contain my excitement.</p>

      <p>
        "Hi Jamon. Not bad, just finishing up some stuff." Todd Werth said,
        coming in clear over the ScreenHero voice session.
      </p>

      <p>"I have something to show you."</p>

      <p>
        I shared my screen and pulled up a basic RedPotion RubyMotion app in the
        iOS simulator.
      </p>

      <p>Todd was unimpressed.</p>

      <p>
        "Check this out," I said. I pulled up the main stylesheet in Sublime
        Text and changed a line of code, switching a color from "white" to
        "red". When I saved the file, the simulator instantly updated to a red
        background.
      </p>

      <p>Now I had his attention.</p>

      <p>"How'd you do that?!" he demanded.</p>

      <p>
        "I was screen sharing with Gant Laborde when I discovered it. He thinks
        it's a big deal." I was grinning.
      </p>

      <p>"Uh-huh. How'd you do it?"</p>

      <p>
        I went through the steps. Pretty straightforward, really. Just poll the
        stylesheet for changes, load the code into the REPL, and then kick off
        <code>reapply_styles</code> on the relevant stylesheet.
      </p>

      <p>
        We played around with it for a while, fascinated by how effortless it
        was to manipulate the UI. I had to go to a meeting in Portland, so Todd
        said he'd integrate it into RedPotion. When I got back a couple hours
        later, he had a functioning setup. We worked it through its paces and
        had a RedPotion release ready within another hour.
      </p>

      <h3 id="inaction">In Action</h3>

      <p>
        It's hard to describe just how much this changes our workflows at
        <a href="http://clearsightstudio.com">ClearSight</a> and
        <a href="http://infinitered.com/">InfiniteRed</a>. Before, the process
        to tweak and test a UI change was laborious:
      </p>

      <p>
        <strong>Old way</strong>
      </p>

      <ol>
        <li>Make the change.</li>

        <li>Save the file.</li>

        <li>Kill the app running in the simulator.</li>

        <li>Compile the app again (30 seconds or more).</li>

        <li>Tap through to find the right screen.</li>

        <li>Check the change to make sure it's right.</li>

        <li>Repeat.</li>
      </ol>

      <p>
        With this feature, you can see the changes immediately as you make them
        in code. It shortens the feedback loop to nearly instantaneous.
      </p>

      <ol>
        <li>Make the change.</li>

        <li>Save the file.</li>

        <li>Check the change to make sure it's right.</li>

        <li>Repeat.</li>
      </ol>

      <p>
        Waiting for the app to build and launch in the simulator is tedious and
        distraction-prone. With this tight of a feedback loop, I can stay
        focused and productive.
      </p>

      <h3 id="howto">How To</h3>

      <p>You'll need the latest versions of RedPotion and RMQ for this.</p>

      <pre>
        <code>
          $ gem update redpotion $ potion create foo $ cd foo ; bundle ; rake
          pod:install ; rake &gt; live =&gt; "Live reloading of RMQ stylesheets
          is now on."
        </code>
      </pre>

      <p>
        <em>
          NOTE: An earlier version of this post had
          <code>live_stylesheets</code> as the REPL command to initiate the live
          reloading. This has now been shortened to just <code>live</code> in
          RedPotion.
        </em>
      </p>

      <h3 id="next">Next</h3>

      <p>
        This is just the beginning. We are working on techniques for building
        out layouts and appending new objects safely (the ideas in my recent
        article about
        <a href="/rubymotion-react-pattern/">a RubyMotion React pattern</a> are
        particularly interesting here). We also have plans to explore live
        reloading for screens and potentially other objects, such as CDQ models.
        It's not a simple task, but the more we can bring this live updating
        model to RubyMotion, the more productive and enjoyable it'll be. And
        RedPotion, as an opinionated full stack, is positioned well as a subject
        for this.
      </p>

      <p>I can still barely contain my excitement.</p>

      <p>
        <em>
          Many thanks to Todd Werth for making this happen in RedPotion and RMQ,
          and to Gant Laborde for helping to spark the idea.
        </em>
      </p>
    </Page>
  );
};
